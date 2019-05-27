import React, { Component } from 'react';
import { Modal as AntModal, Button } from 'antd';

export default class Modal extends Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
  };

  handleClose = () => {
    this.setState({ loading: false, visible: false });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    let { buttonTitle, title, footer, ModalContent, isLink, isView } = this.props;
    if (!footer) {
      footer = [
        <Button key="back" onClick={this.handleCancel}>
          Cancel
        </Button>,
        <Button key="submit" htmlType="submit" form="new_vehicle_form" type="primary" loading={loading}>
          Save
        </Button>,
      ];
    }

    const simpleFooter = [
      <Button key="back" onClick={this.handleCancel}>
        Ok
      </Button>
    ];
    return (
      <React.Fragment>
        {isLink ? <a onClick={this.showModal} href="#">{buttonTitle}</a> :
          <Button  shape="round" icon="plus" type="primary" onClick={this.showModal}>
            {buttonTitle}
          </Button>}
        <AntModal
          visible={visible}
          title={title}
          onCancel={this.handleCancel}
          footer={isView ? simpleFooter : footer}
        >
          <ModalContent {...{ ...this.props, handleOk: this.handleOk, handleClose: this.handleClose }} />
        </AntModal>
      </React.Fragment>
    );
  }
}