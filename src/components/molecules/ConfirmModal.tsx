import Modal from '@/components/atoms/Modal';

type ConfirmModalProps = {
  modalId: string;
  children: React.ReactNode;
  option: React.ReactNode;
};

const ConfirmModal = ({ modalId, children, option }: ConfirmModalProps) => {
  return (
    <Modal modalId={modalId}>
      <div className="flex flex-col items-center justify-center space-y-6">
        {children}
        {option}
      </div>
    </Modal>
  );
};

export default ConfirmModal;
