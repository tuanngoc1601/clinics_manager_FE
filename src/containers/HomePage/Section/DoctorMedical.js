import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './DoctorMedical.scss';
import Slider from 'react-slick';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import seoYte from '../../../assets/doctor-medical/seo-y-te.png';
import googleKeyword from '../../../assets/doctor-medical/google-keyword-planner.png';
import websitePk from '../../../assets/doctor-medical/website-phong-kham.jpg';
import maketingPk from '../../../assets/doctor-medical/marketing-phong-kham.png';

class DoctorMedical extends Component {

    render() {

        let settings = this.props.settings;
        settings = {
            ...settings,
            slidesToShow: 2
        }

        return (
            <div className="section section-doctor-medical">
                <div className="section-container">
                    <div className="section-header">
                        <span>Dành cho bác sĩ và cơ sở y tế</span>
                        <div className="button-group">
                            <button>BÀI VIẾT</button>
                            <button>HỢP TÁC</button>
                            <button>LIÊN HỆ</button>
                        </div>
                    </div>
                    <div className="section-body">
                        <Slider {...settings}>
                            <div className="section-customize">
                                <div className="bg-image" style={{ backgroundImage: `url(${seoYte})` }}></div>
                                <h3>10X Content là gì? Cách xây dựng Content SEO Y tế theo 10X Content</h3>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image" style={{ backgroundImage: `url(${googleKeyword})` }}></div>
                                <h3>Cách sử dụng Google Keyword Planner để chọn từ khóa bài viết</h3>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image" style={{ backgroundImage: `url(${websitePk})` }}></div>
                                <h3>Các Module quan trọng trong thiết kế Ưebsite phòng khám</h3>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image" style={{ backgroundImage: `url(${maketingPk})` }}></div>
                                <h3>Marketing phòng khám - phần 1: Chiến lược tập trung vào chất lượng khám chữa bệnh</h3>
                            </div>
                        </Slider>
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
