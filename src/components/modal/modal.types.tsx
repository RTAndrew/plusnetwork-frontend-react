import { ReactNode } from 'react';

export interface ModalProps {
  title?: ReactNode;
  visible: boolean;
  keyboard?: boolean;
  maskClosable?: boolean;
  destroyOnClose?: boolean;
  openModal?: () => void;
  closeModal: () => void;
  footer?: ReactNode | null;
  confirmLoading?: boolean;
}
