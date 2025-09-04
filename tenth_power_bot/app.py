# app.py
import os
import logging
from threading import Thread
import asyncio
from flask import Flask, request
from telegram import Update
from telegram.ext import ApplicationBuilder, Application

from handlers import start, button_handler, message_handler, reply_command
from telegram.ext import (
    CommandHandler,
    MessageHandler,
    CallbackQueryHandler,
    filters
)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

flask_app = Flask(__name__)

ptb_application = None

def run_ptb_in_thread(app: Application, loop: asyncio.AbstractEventLoop):
    asyncio.set_event_loop(loop)
    loop.run_until_complete(app.initialize())
    loop.run_until_complete(app.start())
    loop.run_until_complete(app.updater.start_polling())
    try:
        loop.run_forever()
    finally:
        loop.run_until_complete(app.updater.stop())
        loop.run_until_complete(app.stop())


def setup_handlers(app: Application):
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CallbackQueryHandler(button_handler))
    app.add_handler(CommandHandler("reply", reply_command))

    from handlers import handle_reply_buttons

    # أولاً: رسائل زر "📲 إظهار القائمة"
    app.add_handler(MessageHandler(filters.Regex("^📲 إظهار القائمة$"), handle_reply_buttons))

    # ثانياً: باقي الرسائل النصية
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, message_handler))

@flask_app.route(f"/webhook/{os.getenv('TELEGRAM_TOKEN')}", methods=["POST"])
def webhook():
    update = Update.de_json(request.get_json(), ptb_application.bot)
    asyncio.run_coroutine_threadsafe(
        ptb_application.process_update(update),
        ptb_application.bot.loop
    )
    return "OK", 200

@flask_app.route("/")
def index():
    return "TENTH POWER BOT is Running!", 200

if __name__ == "__main__":
    TOKEN = ""
    ptb_app = ApplicationBuilder().token(TOKEN).build()
    setup_handlers(ptb_app)

    # تشغيل البوت Polling مباشرة (لا حاجة لـ Thread)
    ptb_app.run_polling()
