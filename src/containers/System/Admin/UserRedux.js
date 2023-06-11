import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES, CRUD_ACTIONS, CommonUtils } from '../../../utils';
import * as actions from '../../../store/actions';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import TableManageUser from './TableManageUser';

class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            roleArr: [],
            positionArr: [],
            previewImgUrl: '',
            isOpen: false,

            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phonenumber: '',
            address: '',
            gender: '',
            position: '',
            role: '',
            avatar: '',

            action: '',
            userEditId: ''
        }
    }

    handleOnChangeInput = (event, type) => {
        let copyState = { ...this.state };
        copyState[type] = event.target.value;
        this.setState({
            ...copyState
        })
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['email', 'password', 'firstName', 'lastName', 'phonenumber', 'address', 'gender', 'position', 'role'];
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert('This input is required: ' + arrCheck[i]);
                break;
            }
        }
        return isValid;
    }

    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            let arrGenders = this.props.genderRedux;
            this.setState({
                genderArr: arrGenders,
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].key : ''
            })
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            let arrPositions = this.props.positionRedux;
            this.setState({
                positionArr: arrPositions,
                position: arrPositions && arrPositions.length > 0 ? arrPositions[0].key : ''
            })
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            let arrRoles = this.props.roleRedux;
            this.setState({
                roleArr: arrRoles,
                role: arrRoles && arrRoles.length > 0 ? arrRoles[0].key : ''
            })
        }

        if (prevProps.users !== this.props.users) {
            let arrGenders = this.props.genderRedux;
            let arrPositions = this.props.positionRedux;
            let arrRoles = this.props.roleRedux;
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                phonenumber: '',
                address: '',
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].key : '',
                position: arrPositions && arrPositions.length > 0 ? arrPositions[0].key : '',
                role: arrRoles && arrRoles.length > 0 ? arrRoles[0].key : '',
                avatar: '',
                action: CRUD_ACTIONS.CREATE,
                previewImgUrl: ''
            })
        }
    }

    handleOnChangeImage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            let objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgUrl: objectUrl,
                avatar: base64
            })
        }
    }

    openPreviewImage = () => {
        if (!this.state.previewImgUrl) return;
        this.setState({
            isOpen: true
        })
    }

    handleEditUserFromParent = (user) => {
        let imageBase64 = '';
        if (user.image) {
            imageBase64 = new Buffer(user.image, 'base64').toString('binary');
        }

        this.setState({
            email: user.email,
            password: 'hardcode',
            firstName: user.firstName,
            lastName: user.lastName,
            phonenumber: user.phonenumber,
            address: user.address,
            gender: user.gender,
            position: user.positionId,
            role: user.roleId,
            avatar: '',
            previewImgUrl: imageBase64,
            action: CRUD_ACTIONS.EDIT,
            userEditId: user.id
        })
    }

    handleSaveUser = () => {
        let valid = this.checkValidateInput();
        if (!valid) return;
        let { action } = this.state;
        if (action === CRUD_ACTIONS.CREATE) {
            // fire redux create user
            this.props.createNewUser({
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phonenumber: this.state.phonenumber,
                gender: this.state.gender,
                role: this.state.role,
                position: this.state.position,
                avatar: this.state.avatar
            })
        }
        if (action === CRUD_ACTIONS.EDIT) {
            // fire redux update user
            this.props.editUserRedux({
                id: this.state.userEditId,
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phonenumber: this.state.phonenumber,
                gender: this.state.gender,
                roleId: this.state.role,
                positionId: this.state.position,
                avatar: this.state.avatar
            })
        }

        this.props.fetchUserRedux();
    }

    render() {
        let genders = this.state.genderArr;
        let positions = this.state.positionArr;
        let roles = this.state.roleArr;
        let language = this.props.language;

        let { email, password, firstName, lastName, phonenumber, address, gender, position, role, avatar } = this.state;
        return (
            <div className="user-redux-container">
                <div className="title">User Redux</div>
                <div className="user-redux-body">
                    <div className="container">
                        <form>
                            <div className="row my-4">
                                <div className="col-6 form-group">
                                    <label><FormattedMessage id="manage-user.email" /></label>
                                    <input
                                        type="email"
                                        className="form-control mt-2"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(event) => this.handleOnChangeInput(event, 'email')}
                                        disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                                    />
                                </div>
                                <div className="col-6 form-group">
                                    <label><FormattedMessage id="manage-user.password" /></label>
                                    <input
                                        type="password"
                                        className="form-control mt-2"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(event) => this.handleOnChangeInput(event, 'password')}
                                        disabled={this.state.action === CRUD_ACTIONS.EDIT ? true : false}
                                    />
                                </div>
                            </div>
                            <div className="row my-4">
                                <div className="col-6 form-group">
                                    <label><FormattedMessage id="manage-user.first-name" /></label>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        placeholder="Enter firstname"
                                        value={firstName}
                                        onChange={(event) => this.handleOnChangeInput(event, 'firstName')}
                                    />
                                </div>
                                <div className="col-6 form-group">
                                    <label><FormattedMessage id="manage-user.last-name" /></label>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        placeholder="Enter lastname"
                                        value={lastName}
                                        onChange={(event) => this.handleOnChangeInput(event, 'lastName')}
                                    />
                                </div>
                            </div>
                            <div className="row my-4">
                                <div className="form-group col-6">
                                    <label><FormattedMessage id="manage-user.address" /></label>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        name="address" placeholder="1234 Main St"
                                        value={address}
                                        onChange={(event) => this.handleOnChangeInput(event, 'address')}
                                    />
                                </div>
                                <div className="form-group col-6">
                                    <label><FormattedMessage id="manage-user.phone-number" /></label>
                                    <input
                                        type="text"
                                        name="phonenumber" placeholder="0123456789"
                                        className="form-control mt-2"
                                        value={phonenumber}
                                        onChange={(event) => this.handleOnChangeInput(event, 'phonenumber')}
                                    />
                                </div>
                            </div>
                            <div className="row my-4">
                                <div className="form-group col-3">
                                    <label><FormattedMessage id="manage-user.gender" /></label>
                                    <select
                                        name="gender"
                                        className="form-control mt-2"
                                        onChange={(event) => this.handleOnChangeInput(event, 'gender')}
                                        value={gender}
                                    >
                                        {genders && genders.length > 0 &&
                                            genders.map((gender, index) => {
                                                return (
                                                    <option key={index} value={gender.key}>{language == LANGUAGES.VI ? gender.valueVi : gender.valueEn}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="form-group col-3">
                                    <label><FormattedMessage id="manage-user.role" /></label>
                                    <select
                                        name="role"
                                        className="form-control mt-2"
                                        onChange={(event) => this.handleOnChangeInput(event, 'role')}
                                        value={role}
                                    >
                                        {roles && roles.length > 0 &&
                                            roles.map((role, index) => {
                                                return (
                                                    <option key={index} value={role.key}>{language == LANGUAGES.VI ? role.valueVi : role.valueEn}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="form-group col-3">
                                    <label><FormattedMessage id="manage-user.position" /></label>
                                    <select
                                        name="position"
                                        className="form-control mt-2"
                                        onChange={(event) => this.handleOnChangeInput(event, 'position')}
                                        value={position}
                                    >
                                        {positions && positions.length > 0 &&
                                            positions.map((position, index) => {
                                                return (
                                                    <option key={index} value={position.key}>{language == LANGUAGES.VI ? position.valueVi : position.valueEn}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="form-group col-3">
                                    <label><FormattedMessage id="manage-user.image" /></label>
                                    <div className="d-flex">
                                        <input
                                            id="previewImg"
                                            type="file"
                                            onChange={(event) => this.handleOnChangeImage(event)}
                                            hidden
                                        />
                                        <label
                                            style={{ backgroundColor: '#ddd' }}
                                            className="px-3 py-2 mt-2 rounded"
                                            role="button"
                                            htmlFor="previewImg"
                                        >
                                            Tải ảnh
                                            <i className="fas fa-upload ps-2"></i>
                                        </label>
                                        <div
                                            className="ms-3"
                                            role={this.state.previewImgUrl !== '' ? 'button' : ''}
                                            style={{
                                                width: '100px',
                                                backgroundImage: `url(${this.state.previewImgUrl})`,
                                                backgroundPosition: 'center center',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: 'contain'
                                            }}
                                            onClick={() => this.openPreviewImage()}
                                        >
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-4">
                                    <button
                                        className={this.state.action === CRUD_ACTIONS.EDIT ? "btn btn-warning" : "btn btn-primary"}
                                        type="button"
                                        onClick={() => this.handleSaveUser()}
                                    >
                                        {this.state.action === CRUD_ACTIONS.EDIT ? <FormattedMessage id="manage-user.edit" /> : <FormattedMessage id="manage-user.save" />}
                                    </button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <TableManageUser
                                        handleEditUserFromParent={this.handleEditUserFromParent}
                                        action={this.state.action}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {this.state.isOpen &&
                    <Lightbox
                        mainSrc={this.state.previewImgUrl}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                }
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        positionRedux: state.admin.positions,
        roleRedux: state.admin.roles,
        users: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
        fetchUserRedux: () => dispatch(actions.getAllUserStart()),
        editUserRedux: (data) => dispatch(actions.editUser(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
