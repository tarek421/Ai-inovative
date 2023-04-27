import React from 'react';
import useCase_1 from '../../../image/use-case-1.png';
import useCase_2 from '../../../image/use-case-2.png';
import useCase_3 from '../../../image/use-case-3.png';
import useCase_4 from '../../../image/use-case-4.png';
import logo_1 from '../../../image/usecase-log-1.svg';
import logo_2 from '../../../image/usecase-log-2.svg';
import logo_3 from '../../../image/usecase-log-3.svg';
import logo_4 from '../../../image/usecase-log-4.svg';
import './UseCaseProduct.css';

const UseCaseProduct = () => {
    return (
        <div id='usecase-product' className='py-5'>
            <div className="container">
                <div className='head px-sm-1 px-md-4'>
                    <h5>Our Capabilities</h5>
                    <h1>Use-Cases and Products</h1>
                    <p>Our expert team helps you identify impactful opportunities and implement tailored solutions to solve your business problems. See our core solutions to learn more about what we offer</p>
                </div>

                <div className="main text-white text-start">
                    <div className='row mt-5'>
                        <div className="col-md-6 col-sm-12">
                            <div className='pe-3 me-3'>
                                <div className="d-flex justify-content-start align-items-center logo mb-3">
                                    <img src={logo_1} alt="" />
                                    <h4>CX Boost™</h4>
                                </div>
                                <h2>Boost sales through personalized cross-selling reccomendations</h2>
                                <p>Grow topline sales with your existing customer base. Using data we can create personalized cross-selling strategies and tactics targeting relevant recomendations on an individual customer-level and at scale, leading to an increase in average revenue per customer.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <img className='use-case-1' src={useCase_1} alt="use-case-1" />
                        </div>
                    </div>

                    <div className="row mt-5 pt-5 align-items-center">
                        <div className="col-md-6 col-sm-12">
                            <img src={useCase_2} alt="" />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div>
                                <div className="d-flex justify-content-start align-items-center logo mb-3">
                                    <img src={logo_2} alt="" />
                                    <h4>CX Max™</h4>
                                </div>
                                <h2>Optimize pricing and promotion strategy with predictive analytics</h2>
                                <p>Strike the right balance between maximizing revenue and remaining competitive. Through predictive analytics we can forecast demand and identify patterns in customer behavior and preferences, which can help to optimize pricing and promotion strategies and allowing to dynamically adjust prices in real-time.</p>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-5 pt-5'>
                        <div className="col-md-6 col-sm-12">
                            <div className='pe-3 me-3'>
                                <div className="d-flex justify-content-start align-items-center logo mb-3">
                                    <img src={logo_3} alt="" />
                                    <h4>CX Squared™</h4>
                                </div>
                                <h2>Improve customer retention through customer experience and churn prediction</h2>
                                <p>Our team can identify at-risk customers and predict which customers are likely to not convert or stop doing business with your company. With this insight, we can offer potential solutions to take proactive steps to retain valuable customers and improve the customer experience, leading to improved business performance.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <img className='use-case-1' src={useCase_3} alt="use-case-1" />
                        </div>
                    </div>

                    <div className="row mt-5 pt-5 align-items-center">
                        <div className="col-md-6 col-sm-12">
                            <img src={useCase_4} alt="" />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div>
                                <div className="d-flex justify-content-start align-items-center logo mb-3">
                                    <img src={logo_4} alt="" />
                                    <h4>CX Drive™</h4>
                                </div>
                                <h2>Realize efficiencies and drive effectiveness in marketing and advertising investments</h2>
                                <p>Deliver effective marketing campaigns that give highest value for the dollar spent. Our team can help to attain high-value conversions and realize efficiencies in your marketing spend - from channel reallocation that translate to high ROI to optimization through targeting, attribution and customer journey analytics</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UseCaseProduct;