import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as aboutActions from './actions';

class DetailComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    openModal = () => {
        console.log('set state to open modal');
        this.setState({
            open: true
        });
    }
    closeModal = () => {
        this.setState({
            open: false
        });
    }
    render() {
        return (
            <div>
                <Button color="secondary" size="lg" block onClick={this.openModal}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.open} toggle={this.closeModal} className={this.props.className}>
                    <ModalHeader toggle={this.closeModal}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.closeModal}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.closeModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    product: state.aboutReducer.product
});

const mapDispatchToProps = dispatch => {
    const actions = {
        about: bindActionCreators(aboutActions, dispatch)
    }
    return { actions };
}

const Detail = connect(mapStateToProps, mapDispatchToProps)(DetailComp)

export default Detail;
