import { useState, useEffect } from "react";

export default function AdminHeroSettings() {
  const [bgType, setBgType] = useState("gradient");
  const [bgValue, setBgValue] = useState("");
  const [enabled, setEnabled] = useState(true);
  const [files, setFiles] = useState([]);
  const [uploadFile, setUploadFile] = useState(null);

  // جلب الإعدادات والملفات عند التحميل
  useEffect(() => {
    fetch("/api/hero-settings").then(r => r.json()).then(data => {
      setBgType(data.bg_type);
      setBgValue(data.bg_value);
      setEnabled(data.enabled);
    });

    fetchFiles();
  }, []);

  const fetchFiles = () => {
    fetch("/api/hero-files").then(r => r.json()).then(setFiles);
  };

  // حفظ الإعدادات
  const saveSettings = async () => {
    await fetch("/api/hero-settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bg_type: bgType, bg_value: bgValue, enabled }),
    });
    alert("تم الحفظ ✅");
  };

  // رفع ملف
  const upload = async () => {
    if (!uploadFile) return;
    const formData = new FormData();
    formData.append("file", uploadFile);
    await fetch("/api/hero-upload", {
      method: "POST",
      body: formData,
    });
    setUploadFile(null);
    fetchFiles();
  };

  // حذف ملف
  const deleteFile = async (filename) => {
    await fetch(`/api/hero-files/${filename}`, { method: "DELETE" });
    fetchFiles();
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow rounded space-y-4">
      <h2 className="text-xl font-bold">إعدادات الـ Hero</h2>

      <div className="flex items-center gap-2">
        <label>تمكين الخلفية:</label>
        <input type="checkbox" checked={enabled} onChange={e => setEnabled(e.target.checked)} />
      </div>

      <div>
        <label className="block font-semibold">نوع الخلفية:</label>
        <select value={bgType} onChange={e => setBgType(e.target.value)} className="border p-2 rounded w-full">
          <option value="gradient">Gradient</option>
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold">
          {bgType === "gradient" && "CSS Gradient Code:"}
          {bgType === "image" && "Image URL:"}
          {bgType === "video" && "Video URL:"}
        </label>
        <input value={bgValue} onChange={e => setBgValue(e.target.value)} className="border p-2 rounded w-full" />
      </div>

      <button onClick={saveSettings} className="bg-blue-600 text-white px-4 py-2 rounded">حفظ</button>

      <hr className="my-4" />
      <h3 className="font-bold">رفع ملفات صورة / فيديو</h3>
      <input type="file" onChange={e => setUploadFile(e.target.files[0])} />
      <button onClick={upload} className="bg-green-600 text-white px-4 py-2 rounded mt-2">رفع</button>

      <hr className="my-4" />
      <h3 className="font-bold">الملفات المرفوعة</h3>
      <div className="space-y-2">
        {files.map(f => (
          <div key={f.filename} className="flex items-center justify-between border p-2 rounded">
            <span>{f.filename}</span>
            <div className="flex gap-2">
              <button onClick={() => setBgValue(f.url)} className="bg-yellow-500 px-2 py-1 rounded text-white">تعيين كخلفية</button>
              <button onClick={() => deleteFile(f.filename)} className="bg-red-600 px-2 py-1 rounded text-white">حذف</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
