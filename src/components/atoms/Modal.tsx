import { ReactNode } from 'react';

export type ModalProps = {
  modalId: string;
  children: ReactNode;
};

const Modal = ({ modalId, children }: ModalProps) => {
  return (
    <>
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <label htmlFor={modalId} className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          {children}
        </label>
      </label>
    </>
  );
};

export default Modal;
