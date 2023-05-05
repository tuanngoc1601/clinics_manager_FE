import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { userService } from '../../../services';
import { LANGUAGES } from '../../../utils';
import * as actions from '../../../store/actions';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            roleArr: [],
            positionArr: [],
            previewImgUrl: '',
            isOpen: false
        }
    }

    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux
            })
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            this.setState({
                positionArr: this.props.positionRedux
            })
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            this.setState({
                roleArr: this.props.roleRedux
            })
        }
    }

    handleOnChangeImage = (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgUrl: objectUrl
            })
        }
    }

    openPreviewImage = () => {
        if(!this.state.previewImgUrl) return;
        this.setState({
            isOpen: true
        })
    }

    render() {
        let genders = this.state.genderArr;
        let positions = this.state.positionArr;
        let roles = this.state.roleArr;
        let language = this.props.language;
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
                                        value={this.state.email}
                                        onChange={(event) => this.handleOnChangeInput(event, 'email')}
                                    />
                                </div>
                                <div className="col-6 form-group">
                                    <label><FormattedMessage id="manage-user.password" /></label>
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
                                    <label><FormattedMessage id="manage-user.first-name" /></label>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        placeholder="Enter firstname"
                                        value={this.state.firstName}
                                        onChange={(event) => this.handleOnChangeInput(event, 'firstName')}
                                    />
                                </div>
                                <div className="col-6 form-group">
                                    <label><FormattedMessage id="manage-user.last-name" /></label>
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
                                <div className="form-group col-6">
                                    <label><FormattedMessage id="manage-user.address" /></label>
                                    <input
                                        type="text"
                                        className="form-control mt-2"
                                        name="address" placeholder="1234 Main St"
                                        value={this.state.address}
                                        onChange={(event) => this.handleOnChangeInput(event, 'address')}
                                    />
                                </div>
                                <div className="form-group col-6">
                                    <label><FormattedMessage id="manage-user.phone-number" /></label>
                                    <input
                                        type="text"
                                        name="phonenumber" placeholder="0123456789"
                                        className="form-control mt-2"
                                        value={this.state.phonenumber}
                                        onChange={(event) => this.handleOnChangeInput(event, 'phonenumber')}
                                    />
                                </div>
                            </div>
                            <div className="row my-4">
                                <div className="form-group col-3">
                                    <label><FormattedMessage id="manage-user.gender" /></label>
                                    <select name="gender" className="form-control mt-2" onChange={(event) => this.handleOnChangeInput(event, 'gender')}>
                                        {genders && genders.length > 0 &&
                                            genders.map((gender, index) => {
                                                return (
                                                    <option key={index}>{language == LANGUAGES.VI ? gender.valueVi : gender.valueEn}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="form-group col-3">
                                    <label><FormattedMessage id="manage-user.role" /></label>
                                    <select name="roleId" className="form-control mt-2" onChange={(event) => this.handleOnChangeInput(event, 'roleId')}>
                                        {roles && roles.length > 0 &&
                                            roles.map((role, index) => {
                                                return (
                                                    <option key={index}>{language == LANGUAGES.VI ? role.valueVi : role.valueEn}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="form-group col-3">
                                    <label><FormattedMessage id="manage-user.position" /></label>
                                    <select name="position" className="form-control mt-2" onChange={(event) => this.handleOnChangeInput(event, 'position')}>
                                        {positions && positions.length > 0 &&
                                            positions.map((position, index) => {
                                                return (
                                                    <option key={index}>{language == LANGUAGES.VI ? position.valueVi : position.valueEn}</option>
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
                                            <i class="fas fa-upload ps-2"></i>
                                        </label>
                                        <div
                                            className="ms-3"
                                            role={this.state.previewImgUrl !== '' ? 'button' : ''}
                                            style={{
                                                width: '100px',
                                                backgroundImage: `url(${this.state.previewImgUrl})`,
                                                background: 'center center no-repeat',
                                                backgroundSize: 'contain'
                                            }}
                                            onClick={() => this.openPreviewImage()}
                                        >
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mt-4">
                                    <button className="btn btn-primary"><FormattedMessage id="manage-user.save" /></button>
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
        roleRedux: state.admin.roles
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
