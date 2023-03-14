import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import '@fortawesome/fontawesome-free-webfonts';

import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { userService } from "../../services"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errorMessage: ''
        }
    }

    handleOnchangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleOnchangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    handleLogin = async() => {
        this.setState({
            errorMessage: ''
        })
        try {
            let data = await userService.handleLoginApi(this.state.username, this.state.password);
            if(data && data.errorCode !== 0) {
                this.setState({
                    errorMessage: data.message
                })
            }
            if(data && data.errorCode === 0) {
                // todo
                this.props.userLoginSuccess(data.user);
                console.log('login successful');
            }
        } catch(e) {
            if(e.response.data) {
                this.setState({
                    errorMessage: e.response.data.message
                })
            }
        }
    }

    render() {

        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 text-login">Login</div>
                        <div className="col-12 form-group login-input">
                            <label>Username:</label>
                            <input
                                type="text"
                                className="form-control mt-2"
                                placeholder="Enter username"
                                value={this.state.username}
                                onChange={(event) => this.handleOnchangeUsername(event)}
                            />
                        </div>
                        <div className="col-12 form-group login-input">
                            <label>Password:</label>
                            <div className="custom-input-password">
                                <input
                                    type={this.state.isShowPassword ? 'text' : 'password'}
                                    className="form-control mt-2"
                                    placeholder="Enter password"
                                    value={this.state.password}
                                    onChange={(event) => this.handleOnchangePassword(event)}
                                />
                                
                                <span onClick={() => this.handleShowHidePassword()}>
                                    {this.state.isShowPassword ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                                </span>
                            </div>
                        </div>
                        <div className="col-12" style={{ color: "red", fontSize: "13px" }}>
                            {this.state.errorMessage}
                        </div>
                        <div className="col-12 mt-3">
                            <button className="btn-login" onClick={() => { this.handleLogin() }}>Login</button>
                        </div>
                        <div className="col-12">
                            <span className="forgot-password">Forgot your password?</span>
                        </div>
                        <div className="col-12 text-center mt-3">
                            <span className="text-other-login">Or Login with:</span>
                        </div>
                        <div className="col-12 social-login mt-3 mb-4">
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
