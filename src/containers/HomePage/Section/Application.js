import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './Application.scss';
// import Slider from 'react-slick';
// Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import appAndroid from '../../../assets/application/google-play-badge.svg';
import appIOS from '../../../assets/application/app-store-badge-black.svg';

class Application extends Component {

    render() {

        return (
            <div className="section section-application">
                <div className="section-container">
                    <div className="section-body">
                        <div className="section-customize">
                            <div className="bg-image"></div>
                            <div className="application-content">
                                <h2>Tải ứng dụng BookingCare</h2>
                                <ul>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        Đặt khám nhanh hơn
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        Nhận thông báo từ hệ thống
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        Nhận hướng dẫn thông báo chi tiết
                                    </li>
                                </ul>
                                <div className="app-link">
                                    <a href="https://bookingcare.vn/app/android">
                                        <img src={appAndroid} />
                                    </a>
                                    <a href="https://bookingcare.vn/app/ios">
                                        <img src={appIOS} />
                                    </a>
                                </div>
                                <a className="app-link-auto">
                                    Hoặc mở liên kết:&nbsp;
                                    <strong>https://bookingcare.vn/app</strong>
                                </a>
                            </div>
                        </div>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Application);
