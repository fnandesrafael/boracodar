import React, { useContext, useState } from 'react';
import { Modal } from '../../../../components/Modal/index';
import RejectionCard from '../../../../components/RejectionCard/Composition';
import { FilesContext } from '../../../../context/FilesContext';

export default function Composition() {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const { rejections } = useContext(FilesContext);

  return (
    <Modal.Root>
      <Modal.Button props={{ setIsOpened }} />
      <Modal.Popup props={{ isOpened, setIsOpened }}>
        {rejections.map((rejection) => (
          <RejectionCard key={rejection.id} props={{ data: rejection }} />
        ))}
      </Modal.Popup>
    </Modal.Root>
  );
}
