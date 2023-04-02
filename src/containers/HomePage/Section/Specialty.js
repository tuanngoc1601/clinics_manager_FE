import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './Specialty.scss';
import Slider from 'react-slick';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import coxuongkhop from '../../../assets/specialty/co-xuong-khop.jpg';
import thankinh from '../../../assets/specialty/than-kinh.jpg';
import tieuhoa from '../../../assets/specialty/tieu-hoa.jpg';
import timmach from '../../../assets/specialty/tim-mach.jpg';
import taimuihong from '../../../assets/specialty/tai-mui-hong.jpg';
import cotsong from '../../../assets/specialty/cot-song.jpg';

class Specialty extends Component {

    render() {

        return (
            <div className="section section-specialty">
                <div className="section-container">
                    <div className="section-header">
                        <span>Chuyên khoa phổ biến</span>
                        <button>XEM THÊM</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className="bg-image" style={{ backgroundImage: `url(${coxuongkhop})` }}></div>
                                <div className="section-text">Cơ Xương Khớp</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image" style={{ backgroundImage: `url(${thankinh})` }}></div>
                                <div className="section-text">Thần kinh</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image" style={{ backgroundImage: `url(${tieuhoa})` }}></div>
                                <div className="section-text">Tiêu hóa</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image" style={{ backgroundImage: `url(${timmach})` }}></div>
                                <div className="section-text">Tim mạch</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image" style={{ backgroundImage: `url(${taimuihong})` }}></div>
                                <div className="section-text">Tai Mũi Họng</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image" style={{ backgroundImage: `url(${cotsong})` }}></div>
                                <div className="section-text">Cột sống</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
