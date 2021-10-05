import { Modal as AntdModal } from 'antd';
import { FC } from 'react';

import { ModalProps } from './modal.types';

const Modal: FC<ModalProps> = ({
  destroyOnClose = false,
  maskClosable = true,
  keyboard = true,
  footer = null,
  closeModal,
  children,
  visible,
  title,
}) => {
  return (
    <div>
      <AntdModal
        destroyOnClose={destroyOnClose}
        maskClosable={maskClosable}
        onCancel={closeModal}
        keyboard={keyboard}
        visible={visible}
        footer={footer}
        title={title}
      >
        {children}
      </AntdModal>
    </div>
  );
};

export default Modal;
