import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './Media.scss';
// import Slider from 'react-slick';
// Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import suckhoedoisong from '../../../assets/media/suckhoedoisong.png';
import vtv1_1 from '../../../assets/media/vtv1.png';
import ictnews from '../../../assets/media/ictnews.png';
import vnexpress from '../../../assets/media/vnexpress.png';
import vtcnews from '../../../assets/media/vtcnews.png';
import boyte from '../../../assets/media/cuc-cong-nghe-thong-tin-bo-y-te.png';
import infonet from '../../../assets/media/infonet.png';
import vtv1_2 from '../../../assets/media/vtv1-2.png';
import vtcgo from '../../../assets/media/vtcgo.png';
import vtv1_3 from '../../../assets/media/vtv1-3.png';

class Media extends Component {

    render() {

        return (
            <div className="section section-media">
                <div className="section-container">
                    <div className="section-header">
                        <span>Truyền thông nói về BookingCare</span>
                    </div>
                    <div className="section-body">
                        <div className="section-customize">
                            <iframe
                                className="video-media"
                                src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                                frameborder='0'
                                allow='autoplay; encrypted-media'
                                allowfullscreen
                                title='video'
                            />
                        </div>
                        <div className="section-customize">
                            <ul>
                                <li>
                                    <a target="_blank" title="Báo sức khỏe đời sống nói về BookingCare" href="https://suckhoedoisong.vn/dat-lich-kham-benh-tiet-kiem-thong-minh-va-hieu-qua-n153232.html">
                                        <div style={{ backgroundImage: `url(${suckhoedoisong})`, width: '162px', backgroundSize: '142px 30px' }}></div>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" title="VTV1 - Cà phê khởi nghiệp 14-11-2018" href="https://vtv.vn/video/ca-phe-khoi-nghiep-14-11-2018-334894.htm">
                                        <div style={{ backgroundImage: `url(${vtv1_1})`, width: '106px', backgroundSize: '86px 30px' }}></div>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" title="Báo điện tử ictnews giới thiệu BookingCare" href="https://ictnews.vn/kinh-doanh/doanh-nghiep/startup-bookingcare-chinh-thuc-ra-mat-phien-ban-di-dong-cua-nen-tang-ho-tro-dat-lich-kham-online-173512.ict">
                                        <div style={{ backgroundImage: `url(${ictnews})`, width: '127px', backgroundSize: '107px 30px' }}></div>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" title="VnExpress nói về BookingCare" href="https://video.vnexpress.net/tin-tuc/cuoc-song-4-0/kham-benh-khong-phai-xep-hang-o-ha-noi-3797126.html">
                                        <div style={{ backgroundImage: `url(${vnexpress})`, width: '183px', backgroundSize: '163px 30px' }}></div>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" title="VTC News nói về BookingCare" href="https://vtc.vn/dat-kham-chuyen-khoa-va-hanh-trinh-ho-tro-cac-benh-vien-qua-tai-d434101.html">
                                        <div style={{ backgroundImage: `url(${vtcnews})`, width: '151px', backgroundSize: '131px 30px', backgroundColor: '#a3171e' }}></div>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" title="Cục công nghệ thông tin - Bộ Y tế nói về BookingCare" href="http://ehealth.gov.vn/?action=News&newsId=46094">
                                        <div style={{ backgroundImage: `url(${boyte})`, width: '127px', backgroundSize: '107px 40px' }}></div>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" title="Báo điện tử infonet nói về BookingCare" href="https://infonet.vietnamnet.vn/khoe-dep/da-co-hon-20-000-luot-benh-nhan-dat-lich-kham-qua-bookingcare-175080.html">
                                        <div style={{ backgroundImage: `url(${infonet})`, width: '129px', backgroundSize: '109px 30px' }}></div>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" title="VTV1 - Cà phê khởi nghiệp 16-08-2018" href="https://vtv.vn/video/ca-phe-khoi-nghiep-16-8-2018-317687.htm">
                                        <div style={{ backgroundImage: `url(${vtv1_2})`, width: '106px', backgroundSize: '86px 30px' }}></div>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" title="VTC Go nói về BookingCare" href="https://www.youtube.com/watch?v=mstAc81lpMc">
                                        <div style={{ backgroundImage: `url(${vtcgo})`, width: '96px', backgroundSize: '76px 25px', backgroundColor: '#16325C' }}></div>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" title="VTV1 - Cà phê khởi nghiệp 21-02-2018" href="https://vtv.vn/video/ca-phe-khoi-nghiep-21-02-2018-282723.htm">
                                        <div style={{ backgroundImage: `url(${vtv1_3})`, width: '106px', backgroundSize: '86px 30px' }}></div>
                                    </a>
                                </li>
                            </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Media);
