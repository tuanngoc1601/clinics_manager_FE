import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { emitter } from '../../utils/emitter';
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phonenumber: '',
            gender: '1',
            roleId: '1'
        }

        this.listenToEmitter();
    }

    listenToEmitter = () => {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
                phonenumber: '',
                gender: '1',
                roleId: '1'
            })
        })
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address', 'phonenumber'];
        for(let i = 0; i < arrInput.length; i++) {
            if(!this.state[arrInput[i]]) {
                isValid = false;
                break;
            }
        }
        return isValid;
    }

    handleAddNewUser = () => {
        let isValid = this.checkValidateInput();
        if(isValid) {
            this.props.createNewUser(this.state);
        }
    }


    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => this.toggle()}
                size="lg"
                className="modal-user-container"
                centered
            >
                <ModalHeader toggle={() => this.toggle()}>Create a new user</ModalHeader>
                <ModalBody>
                    <div className="container">
                        <div className="row my-4">
                            <div className="col-6 form-group">
                                <label>Email</label>
                                <input 
                                    type="email" 
                                    className="form-control mt-2" 
                                    placeholder="Enter email" 
                                    value={this.state.email}
                                    onChange={(event) => this.handleOnChangeInput(event, 'email')}
                                />
                            </div>
                            <div className="col-6 form-group">
                                <label>Password</label>
                                <input 
                                    type="password" 
                                    className="form-control mt-2" 
                                    placeholder="Enter password" 
                                    value={this.state.password}
                                    onChange={(event) => this.handleOnChangeInput(event, 'password')}
                                />
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-6 form-group">
                                <label>First Name</label>
                                <input 
                                    type="text" 
                                    className="form-control mt-2" 
                                    placeholder="Enter firstname" 
                                    value={this.state.firstName}
                                    onChange={(event) => this.handleOnChangeInput(event, 'firstName')}
                                />
                            </div>
                            <div className="col-6 form-group">
                                <label>Last Name</label>
                                <input 
                                    type="text" 
                                    className="form-control mt-2" 
                                    placeholder="Enter lastname" 
                                    value={this.state.lastName}
                                    onChange={(event) => this.handleOnChangeInput(event, 'lastName')}
                                />
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="form-group">
                                <label>Address</label>
                                <input 
                                    type="text" 
                                    className="form-control mt-2" 
                                    name="address" placeholder="1234 Main St"
                                    value={this.state.address}
                                    onChange={(event) => this.handleOnChangeInput(event, 'address')} 
                                />
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="form-group col-md-6">
                                <label>Phone Number</label>
                                <input 
                                    type="text" 
                                    name="phonenumber" 
                                    className="form-control mt-2" 
                                    value={this.state.phonenumber}
                                    onChange={(event) => this.handleOnChangeInput(event, 'phonenumber')}
                                />
                            </div>
                            <div className="form-group col-md-3">
                                <label>Sex</label>
                                <select name="gender" className="form-control mt-2" onChange={(event) => this.handleOnChangeInput(event, 'gender')}>
                                    <option value="1">Male</option>
                                    <option value="0">Female</option>
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label>Role</label>
                                <select name="roleId" className="form-control mt-2" onChange={(event) => this.handleOnChangeInput(event, 'roleId')}>
                                    <option value="1">Admin</option>
                                    <option value="2">Doctor</option>
                                    <option value="3">Patient</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter className="pe-4">
                    <Button color="primary" className="px-3" onClick={() => this.handleAddNewUser()}>Create new user</Button>
                    <Button color="secondary" className="px-3" onClick={() => this.toggle()}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
