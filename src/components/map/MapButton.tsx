import { MapPin, X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

const MapButton: React.FC<Props> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed top-24 right-6 w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center z-50 group"
    >
      {isOpen ? <X className="w-5 h-5" /> : <MapPin className="w-6 h-6" />}
    </button>
  );
};

export default MapButton;
