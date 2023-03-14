import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { userService } from '../../services';
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
import { emitter } from '../../utils/emitter';
import './UserManage.scss';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit: {}
        }
    }

    async componentDidMount() {
        await this.getAllUsersData();
    }

    getAllUsersData = async() => {
        let response = await userService.getAllUsers('ALL');
        if (response && response.errorCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true
        })
    }

    handleEditUser = async(user) => {
        this.setState({
            isOpenModalEditUser: true,
            userEdit: user
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        })
    }

    toggleEditUserModal = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser
        })
    }

    createNewUser = async(data) => {
        // call api create new user
        try {
            let response = await userService.createNewUserService(data);
            if(response && response.errorCode !== 0) {
                console.log(response.message);
            } else {
                this.getAllUsersData();
                this.setState({
                    isOpenModalUser: !this.state.isOpenModalUser
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA');
            }
        } catch (e) {
            console.log(e);
        }
    }

    editUser = async(user) => {
        try {
            let response = await userService.editUserService(user);
            if(response && response.errorCode === 0) {
                this.setState({
                    isOpenModalEditUser: false
                });
                
                await this.getAllUsersData();
            } else {
                console.log(response.message);
            }
        } catch(e) {

        }
    }

    handleDeleteUser = async(user) => {
        try {
            let response = await userService.deleteUserService(user.id);
            if(response && response.errorCode === 0) {
                await this.getAllUsersData();
            } else {
                console.log(response.message);
            }
        } catch(e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className="user-container">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                {this.state.isOpenModalEditUser && 
                    <ModalEditUser 
                        isOpen={this.state.isOpenModalEditUser}
                        toggleFromParent={this.toggleEditUserModal}
                        currentUser={this.state.userEdit}
                        editUser={this.editUser}
                    />
                }
                <div className="title">Manage users with React</div>
                <div className="d-flex justify-content-end mx-5 mt-4">
                    <button className="btn btn-primary px-4" onClick={() => this.handleAddNewUser()}>
                        <i className="fas fa-plus pe-2"></i>
                        Add new user
                    </button>
                </div>
                <div className="users-table mt-4 mx-5">
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                            {this.state.arrUsers && this.state.arrUsers.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className="btn-edit" onClick={() => this.handleEditUser(item)}><i className="fas fa-pencil-alt"></i></button>
                                            <button className="btn-delete" onClick={() => this.handleDeleteUser(item)}><i className="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
