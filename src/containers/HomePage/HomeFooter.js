import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './HomeFooter.scss';
// import Slider from 'react-slick';
// Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

class DoctorMedical extends Component {

    render() {

        return (
            <div className="section section-footer">
                <div className="footer-contact">
                    <div className="section-container">
                        <div className="section-body">
                            <div className="footer-brand">
                                <a target="_blank" title="BookingCare" href="http://localhost:3000/home">
                                    <div className="logo-image"></div>
                                </a>
                                <div className="information">
                                    <h2>Công ty Cổ phần Công nghệ BookingCare</h2>
                                    <p><i className="fas fa-map-marker-alt"></i>Tầng 6, Tòa nhà D'Office, tổ 28, P. Dịch Vọng, Q. Cầu Giấy, Tp. Hà Nội</p>
                                    <p><i className="fas fa-check"></i>ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015</p>
                                </div>
                                <div className="certificate">
                                    <a target="_blank" title="BookingCare certificate" href="http://online.gov.vn/Home/WebDetails/68563">
                                        <div className="certificate-bg"></div>
                                    </a>
                                    <a target="_blank" title="BookingCare certificate" href="http://online.gov.vn/Home/AppDetails/1101">
                                        <div className="certificate-bg"></div>
                                    </a>
                                </div>
                            </div>
                            <div className="footer-support">
                                <ul>
                                    <li><a href="https://bookingcare.vn/hop-tac-voi-bookingcare">Liên hệ hợp tác</a></li>
                                    <li><a href="https://bookingcare.vn/goi-chuyen-doi-so">Gói chuyển đổi số doanh nghiệp</a></li>
                                    <li><a href="https://tuyendung.bookingcare.vn/">Tuyển dụng</a></li>
                                    <li><a href="https://bookingcare.vn/benh-nhan-thuong-hoi">Câu hỏi thường gặp</a></li>
                                    <li><a href="https://bookingcare.vn/page/dieu-khoan-su-dung-p7">Điều khoản sử dụng</a></li>
                                    <li><a href="https://bookingcare.vn/page/chinh-sach-bao-mat-p8">Chính sách Bảo mật</a></li>
                                    <li><a href="https://bookingcare.vn/thong-tin/quy-trinh-ho-tro-giai-quyet-khieu-nai-p13">Quy trình hỗ trợ giải quyết khiếu nại</a></li>
                                    <li><a href="https://bookingcare.vn/site/quyche">Quy chế hoạt động</a></li>
                                </ul>
                            </div>
                            <div className="footer-address">
                                <div className="address-branch">
                                    <strong>Trụ sở tại Hà Nội</strong>
                                    <p>Tầng 6, Tòa nhà D'Office, tổ 28, P. Dịch Vọng, Q. Cầu Giấy, Tp. Hà Nội</p>
                                </div>
                                <div className="address-branch">
                                    <strong>Văn phòng tại TP Hồ Chí Minh</strong>
                                    <p>Số 01, Hồ Bá Kiện, Phường 15, Quận 10</p>
                                </div>
                                <div className="address-branch">
                                    <strong>Hỗ trợ khách hàng</strong>
                                    <p>support@bookingcare.vn (7h - 18h)</p>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="platform">
                            <i className="fas fa-mobile-alt"></i>
                            Tải ứng dụng BookingCare cho điện thoại hoặc máy tính bảng:&nbsp;
                            <a target="_blank" href="https://bookingcare.vn/app/android">Android</a>
                            &nbsp;-&nbsp;
                            <a target="_blank" href="https://bookingcare.vn/app/ios">iPhone/IPad</a>
                            &nbsp;-&nbsp;
                            <a target="_blank" href="https://bookingcare.vn/app">Khác</a>
                        </div>
                    </div>
                </div>
                <div className="footer-soical">
                    <div className="section-container soical-container">
                        <span>BookingCare Copyright: Nguyễn Đình Tuấn Ngọc</span>
                        <div className="soical">
                            <i className="facebook fab fa-facebook-square"></i>
                            <i className="youtube fab fa-youtube-square"></i>
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorMedical);
