import React from 'react';
import './BrowesCaseStudio.css';
import work from '../../../image/Image.png';

import SwiperCore, { Virtual, Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Virtual, Navigation]);

const BrowesCaseStudio = () => {
    return (
        <div id='browes_case_studio' className='py-5 text-start'>
            <div className="container">
                <h6>Our Work</h6>
                <div className="position-relative">
                    <div>
                        <h2 className='title'>Browse Case Studies</h2>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        spaceBetween={0}
                        pagination={{
                            type: "fraction",
                        }}
                        navigation={true}
                        virtual
                        className='position-initial'
                    >
                        <SwiperSlide>
                            <div className='row my-md-5 my-sm-1'>
                                <div className="col-md-5 col-sm-12">
                                    <img src={work} alt="" />
                                </div>
                                <div className="col-md-7 col-sm-12">
                                    <div className='text-start'>
                                        <h4 className='semi-title'>A Retail Coffee Chain's Journey to Achieving Data-driven Growth</h4>
                                        <p className='content'>Our solution led to significant improvements in the retail coffee chain's sales and revenue. The predictive model provided real-time recommendations for targeted campaigns, resulting in a 25% sales increase and 15% revenue increase in the first quarter. The marketing team was able to optimize their spend and achieved a 10% reduction while maintaining a higher ROI.</p>
                                        <button className="btn btn-primary">Read Case Studio</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default BrowesCaseStudio;