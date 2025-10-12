import { useState } from 'react';
import MapButton from './MapButton';
import MapWindow from './MapWindow';

const MapWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MapButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <MapWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default MapWidget;
