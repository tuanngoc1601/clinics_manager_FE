import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './Handbook.scss';
import Slider from 'react-slick';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import suckhoetainha from '../../../assets/handbook/goi-cham-soc-suc-khoe-tai-nha.jpg';
import khamvosinh from '../../../assets/handbook/kham-vo-sinh-hiem-muon.jpg';
import pkdalieu from '../../../assets/handbook/pk-da-lieu.jpg';
import noitiet from '../../../assets/handbook/noi-tiet.jpg';

class Handbook extends Component {

    render() {

        let settings = this.props.settings;
        settings = {
            ...settings,
            slidesToShow: 2
        }

        return (
            <div className="section section-handbook">
                <div className="section-container">
                    <div className="section-header">
                        <span>Cẩm nang</span>
                        <button>TẤT CẢ BÀI VIẾT</button>
                    </div>
                    <div className="section-body">
                        <Slider {...settings}>
                            <div className="section-customize">
                                <div className="bg-image" style={{ backgroundImage: `url(${suckhoetainha})` }}></div>
                                <h3>Gói Chăm sóc Sức khỏe Tại nhà dành cho người Rối loạn chuyển hóa</h3>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image" style={{ backgroundImage: `url(${khamvosinh})` }}></div>
                                <h3>6 phòng khám vô sinh, hiếm muộn uy tín tại Hà Nội</h3>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image" style={{ backgroundImage: `url(${pkdalieu})` }}></div>
                                <h3>Top 5 bệnh viện, phòng khám da liễu tốt tại Quận 5</h3>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image" style={{ backgroundImage: `url(${noitiet})` }}></div>
                                <h3>7 bác sĩ khám chữa bệnh Nội tiết Hà Nội giỏi, nhiều kinh nghiệm (phần 2)</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(Handbook);
