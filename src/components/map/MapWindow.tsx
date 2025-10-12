interface MapWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const MapWindow: React.FC<MapWindowProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 bg-white rounded-2xl shadow-2xl w-[360px] h-[300px] overflow-hidden z-50 animate-fade-in">
      <iframe
        title="موقعنا على الخريطة"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11592.073878266427!2d46.7414511!3d24.6381881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0fbe469bdb2f%3A0x0!2zMjTCsDM4JzE3LjUiTiA0NsKwNDQnMjkuMiJF!5e0!3m2!1sar!2ssa!4v1697070000000!5m2!1sar!2ssa"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapWindow;
