import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './HomeHeader.scss';
import khamchuyenkhoa from '../../assets/khamchuyenkhoa.png';
import khamtuxa from '../../assets/khamtuxa.png';
import khamtongquat from '../../assets/khamtongquat.png';
import dichvuxetnghiem from '../../assets/dichvuxetnghiem.png';
import suckhoetinhthan from '../../assets/suckhoetinhthan.png';
import khamnhakhoa from '../../assets/khamnhakhoa.png';
import phauthuat from '../../assets/phau-thuat.jpg';
import khamtainha from '../../assets/khamtainha.png';
import doanhnghiep from '../../assets/icon-lich-su.jpg';
import { LANGUAGES } from '../../utils';

import { changeLanguageApp } from '../../store/actions';

class HomeHeader extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    }

    render() {

        return (
            <React.Fragment>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i class="fas fa-bars"></i>
                            <div className="header-logo"></div>
                        </div>
                        <div className="center-content">
                            <div className="child-content">
                                <div><b><FormattedMessage id="homeheader.speciality" /></b></div>
                                <div className="sub-title"><FormattedMessage id="homeheader.search-doctor" /></div>
                            </div>
                            <div className="child-content">
                                <div><b><FormattedMessage id="homeheader.health-facility" /></b></div>
                                <div className="sub-title"><FormattedMessage id="homeheader.select-room" /></div>
                            </div>
                            <div className="child-content">
                                <div><b><FormattedMessage id="homeheader.doctor" /></b></div>
                                <div className="sub-title"><FormattedMessage id="homeheader.select-doctor" /></div>
                            </div>
                            <div className="child-content">
                                <div><b><FormattedMessage id="homeheader.fee" /></b></div>
                                <div className="sub-title"><FormattedMessage id="homeheader.check-health" /></div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="support">
                                <i className="fas fa-question-circle"></i>
                                <FormattedMessage id="homeheader.support" />
                            </div>
                            <div className={this.props.language === LANGUAGES.VI ? "language-vi active" : "language-vi"}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
                            <div className={this.props.language === LANGUAGES.EN ? "language-en active" : "language-en"}><span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                        </div>
                    </div>
                </div>  
                <div className="home-header-banner">
                    <div className="content-up">
                        <div className="title1"><FormattedMessage id="banner.title1" /></div>
                        <div className="title2"><FormattedMessage id="banner.title2" /></div>
                        <div className="search">
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder="Tìm chuyên khoa khám bệnh" />
                        </div>
                    </div>
                    <div className="content-down">
                        <div className="options">
                            <ul>
                                <li>
                                    <div className="option-child">
                                        <div className="icon-child" style={{ backgroundImage: `url(${khamchuyenkhoa})` }}></div>
                                        <div className="text-child"><FormattedMessage id="banner.examination" /><br /><FormattedMessage id="banner.speciality" /></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="option-child">
                                        <div className="icon-child" style={{ backgroundImage: `url(${khamtuxa})` }}></div>
                                        <div className="text-child"><FormattedMessage id="banner.examination" /><br /><FormattedMessage id="banner.remote" /></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="option-child">
                                        <div className="icon-child" style={{ backgroundImage: `url(${khamtongquat})` }}></div>
                                        <div className="text-child"><FormattedMessage id="banner.examination" /><br /><FormattedMessage id="banner.general" /></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="option-child">
                                        <div className="icon-child" style={{ backgroundImage: `url(${dichvuxetnghiem})` }}></div>
                                        <div className="text-child"><FormattedMessage id="banner.test" /><br /><FormattedMessage id="banner.medicine" /></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="option-child">
                                        <div className="icon-child" style={{ backgroundImage: `url(${suckhoetinhthan})` }}></div>
                                        <div className="text-child"><FormattedMessage id="banner.health" /><br /><FormattedMessage id="banner.spirit" /></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="option-child">
                                        <div className="icon-child" style={{ backgroundImage: `url(${khamnhakhoa})` }}></div>
                                        <div className="text-child"><FormattedMessage id="banner.examination" /><br /><FormattedMessage id="banner.dentistry" /></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="option-child">
                                        <div className="icon-child" style={{ backgroundImage: `url(${phauthuat})` }}></div>
                                        <div className="text-child"><FormattedMessage id="banner.package" /><br /><FormattedMessage id="banner.surgery" /></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="option-child">
                                        <div className="icon-child" style={{ backgroundImage: `url(${khamtainha})` }}></div>
                                        <div className="text-child"><FormattedMessage id="banner.product" /><br /><FormattedMessage id="banner.medical" /></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="option-child">
                                        <div className="icon-child" style={{ backgroundImage: `url(${doanhnghiep})` }}></div>
                                        <div className="text-child"><FormattedMessage id="banner.health" /><br /><FormattedMessage id="banner.enterprise" /></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
