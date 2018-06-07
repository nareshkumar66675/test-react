import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

export default class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
    this.handleOk = this.handleOk.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  handleOk() {
    this.toggle();
    this.props.handleOk();
  }
  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          <ModalBody>
            {this.props.body}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleOk}>Ok</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

Popup.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleOk: PropTypes.func.isRequired,
};
