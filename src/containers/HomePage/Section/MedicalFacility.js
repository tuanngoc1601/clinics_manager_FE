import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './MedicalFacility.scss';
import Slider from 'react-slick';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import vietduc from '../../../assets/medical/lo-go-viet-duc.jpg';
import choray from '../../../assets/medical/logo-bvcr-moi.jpg';
import daihocyduoc from '../../../assets/medical/logo-y-duoc-1.jpg';
import benhvien108 from '../../../assets/medical/logobenhvien108.jpg';
import hungviet from '../../../assets/medical/benhvienhungviet1.png';
import medlatec from '../../../assets/medical/logo-med-tai-ha-noi--01.png';

class MedicalFacility extends Component {

    render() {

        return (
            <div className="section section-medical">
                <div className="section-container">
                    <div className="section-header">
                        <span>Cở sở y tế nổi bật</span>
                        <button>TÌM KIẾM</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className="bg-image" style={{ backgroundImage: `url(${vietduc})` }}></div>
                                <div className="section-text">Bệnh viện hữu nghị Việt Đức</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image" style={{ backgroundImage: `url(${choray})` }}></div>
                                <div className="section-text">Bệnh viện Chợ Rẫy</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image" style={{ backgroundImage: `url(${daihocyduoc})` }}></div>
                                <div className="section-text">Phòng khám bệnh viện Đại học Y Dược 1</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image" style={{ backgroundImage: `url(${benhvien108})` }}></div>
                                <div className="section-text">Trung tâm Khám sức khỏe định kỳ, Bệnh viện Trung ương Quân Đội 108</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image" style={{ backgroundImage: `url(${hungviet})` }}></div>
                                <div className="section-text">Bệnh viện Ung bước Hưng Việt</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image" style={{ backgroundImage: `url(${medlatec})` }}></div>
                                <div className="section-text">Hệ thống y tế MEDLATEC</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
