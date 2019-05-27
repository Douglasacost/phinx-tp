import React from 'react';
import { Consumer } from '../components/AppProvider';
import { notification } from 'antd';

const openNotification = (message, description, onClose) => {
  notification.open({
    message,
    description,
    onClose: () => {
      onClose();
    },
  });
};

const FlashMessage = () => <Consumer>
  {({ state, ...context }) => state.message && 
  openNotification('Message', state.message, () => context.clearMessage())}
</Consumer>;

export default FlashMessage;