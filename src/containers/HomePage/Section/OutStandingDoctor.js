import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './OutStandingDoctor.scss';
import Slider from 'react-slick';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bsHung from '../../../assets/outstanding-doctor/bshung.jpg';
import bsAn from '../../../assets/outstanding-doctor/pgs-nguyen-thi-hoai-an.jpg';
import namhoc from '../../../assets/outstanding-doctor/anh-dai-dien-bs.jpg';
import bsKhuyen from '../../../assets/outstanding-doctor/bsckii-tran-minh-khuyen.jpg';
import bsHon from '../../../assets/outstanding-doctor/gs-do-nhu-hon.jpg';
import bsNga from '../../../assets/outstanding-doctor/bs-tuyet-nga.jpg';

class OutStandingDoctor extends Component {

    render() {

        return (
            <div className="section section-outstanding-doctor">
                <div className="section-container">
                    <div className="section-header">
                        <span>Bác sĩ nổi bật tuần qua</span>
                        <button>TÌM KIẾM</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className="bg-image" style={{ backgroundImage: `url(${bsHung})` }}></div>
                                <h3>Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng</h3>
                                <h4>Da liễu</h4>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image" style={{ backgroundImage: `url(${bsAn})` }}></div>
                                <h3>Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Thị Hoài An</h3>
                                <h4>Tai Mũi Họng - Nhi khoa</h4>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image" style={{ backgroundImage: `url(${namhoc})` }}></div>
                                <h3>Khám Nam học, Bệnh viện Nam học và Hiếm muộn Hà Nội</h3>
                                <h4>Nam học</h4>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image" style={{ backgroundImage: `url(${bsKhuyen})` }}></div>
                                <h3>Bác sĩ Chuyên khoa II Trần Minh Khuyên</h3>
                                <h4>Sức khỏe tâm thần - Tư vấn, trị liệu Tâm lý</h4>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image" style={{ backgroundImage: `url(${bsHon})` }}></div>
                                <h3>Giáo sư, Thầy thuốc Nhân dân Đỗ Như Hơn</h3>
                                <h4>Chuyên khoa Mắt</h4>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image" style={{ backgroundImage: `url(${bsNga})` }}></div>
                                <h3>Bác sĩ Chuyên khoa I Phí Thị Tuyết Nga</h3>
                                <h4>Sản Phụ khoa</h4>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
