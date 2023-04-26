import React from 'react';
import './Capabilities.css';
import capabilitiesImage from '../../../image/Graph.png';
import Accordion from 'react-bootstrap/Accordion';


const Capabilities = () => {

    return (
        <div id='capabilities' className='py-5'>
            <div className="container py-5">
                <div className="capabilities-head">
                    <h4>Our Capabilities</h4>
                    <h1 className=''>A rapid problem solving framework</h1>
                    <p className="lead">We create solutions using a proven overarching guiding principle comprising of 4 key areas to ensure tanglible results and a high success rate.</p>
                </div>
                <div className="capabilities-main">
                    <div className="row pt-md-5">
                        <div className="col-md-6 col-sm-12">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item className='px-0' eventKey='0'>
                                    <div className="border-bottom">
                                        <Accordion.Header><span className='index-number'>1</span>Insights</Accordion.Header>
                                        <Accordion.Body>
                                            As a first step, we gather and mine for insights into the problem we ,re trying to solve. This involves business and customer understanding, collecting data, identifying patterns and trends that can help us better understand the root cause of the problem. By gaining insights into the problem and building clear hypothesis, we can develop a more targeted and effective solution.
                                        </Accordion.Body>
                                    </div>
                                </Accordion.Item>
                                <Accordion.Item className='px-0' eventKey='2'>
                                    <div className="border-bottom">
                                        <Accordion.Header><span className='index-number'>2</span>Use Case and Solutions</Accordion.Header>
                                        <Accordion.Body>
                                            As a first step, we gather and mine for insights into the problem we ,re trying to solve. This involves business and customer understanding, collecting data, identifying patterns and trends that can help us better understand the root cause of the problem. By gaining insights into the problem and building clear hypothesis, we can develop a more targeted and effective solution.
                                        </Accordion.Body>
                                    </div>
                                </Accordion.Item>
                                <Accordion.Item className='px-0' eventKey='3'>
                                    <div className="border-bottom">
                                        <Accordion.Header><span className='index-number'>3</span>Rapid Deployment</Accordion.Header>
                                        <Accordion.Body>
                                            As a first step, we gather and mine for insights into the problem we ,re trying to solve. This involves business and customer understanding, collecting data, identifying patterns and trends that can help us better understand the root cause of the problem. By gaining insights into the problem and building clear hypothesis, we can develop a more targeted and effective solution.
                                        </Accordion.Body>
                                    </div>
                                </Accordion.Item>
                                <Accordion.Item className='px-0' eventKey='4'>
                                    <div>
                                        <Accordion.Header><span className='index-number'>4</span>Business Impact</Accordion.Header>
                                        <Accordion.Body>
                                            As a first step, we gather and mine for insights into the problem we ,re trying to solve. This involves business and customer understanding, collecting data, identifying patterns and trends that can help us better understand the root cause of the problem. By gaining insights into the problem and building clear hypothesis, we can develop a more targeted and effective solution.
                                        </Accordion.Body>
                                    </div>
                                </Accordion.Item>
                            </Accordion>

                        </div>

                        <div className="col-md-6 col-sm-12">
                            <div className='m-auto mb-3' style={{ width: '250px', height: '250px' }}>
                                <img src={capabilitiesImage} alt="capabilitiesImage" />
                            </div>
                            <div className='icon m-auto' style={{ width: '15px' }}>
                                <img src="https://img.icons8.com/android/24/ffffff/expand-arrow.png" alt='img' />
                            </div>
                            <div>
                                <b>Outcomes</b>
                                <div className='build-revinew'>
                                    <ul>
                                        <li>Build Revinew</li>
                                        <li>Buisness Optimization</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Capabilities;