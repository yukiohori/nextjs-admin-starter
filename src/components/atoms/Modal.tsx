import { ReactNode } from 'react';

export type ModalProps = {
  children: ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  return (
    <>
      <input type="checkbox" id="modal" className="modal-toggle" />
      <label htmlFor="modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          {children}
        </label>
      </label>
    </>
  );
};

export default Modal;
