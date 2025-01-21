import { FaLightbulb, FaChartLine, FaSmile, FaLock, FaCheckCircle, FaUserShield } from 'react-icons/fa';
import './choose.css';
import Card from '../Card/card';

const Choose = () => {
    return (
        <div className="Choose-page">
            <div className="row">
                <div className="column-div1">
                    <h3 className="h3">WELCOME TO REGISTORKRO.IN</h3>
                    <header>
                        <h2> Why Choose Register Karo</h2>
                    </header>
                    <p className="pp"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque error molestias, in dolorem corporis cum eum quae quam sunt repellendus, repellat quaerat, tempora ducimus pariatur! Placeat nemo blanditiis quas quam.</p>
                    <div className="row">
                        <div className="column">

                        </div>
                        <div className="column">
                            <div className="card1">
                                <FaSmile className="blue-smile-icon" />
                                <h2>Guaranteed Satisfaction</h2>
                                <p>We ensure that you stay 100% satisfied with <br />our offered services</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column-div2">
                    <div className="row">
                        <div className="column">
                            <div className="card2">
                                <FaLock className="orange-icon" />
                                <h2>Security</h2>
                                <p>Your data is safe with us</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card3">
                                <FaCheckCircle className="green-icon" />
                                <h2>Reliability</h2>
                                <p>Trusted and dependable services</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <div className="card4">
                                <FaUserShield className="red-icon" />
                                <h2>Protection</h2>
                                <p>Complete protection for your business</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card5">
                                <FaLock className="orange-icon" />
                                <h2>Security</h2>
                                <p>Top-notch security solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="youtube">
                <div className="column1">
                    <h1 className="white-text">Our Video Introduction</h1>
                    <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati tempora omnis libero maiores. Ex dicta fuga natus earum inventore. Asperiores.</p> 
                    <div className="icon-section"> 
                        <FaLightbulb className="icon" />
                         <p>Innovative ideas and insights to brighten your future.</p> </div>
                          <div className="icon-section"> 
                            <FaChartLine className="icon" />
                        <p>Stay updated with the latest stock market trends.</p>
                    </div>
                </div>
                <div className="column2"> <img src="https://img.freepik.com/free-photo/woman-holding-youtube-icon_53876-49348.jpg?t=st=1737399509~exp=1737403109~hmac=86fe0f8c8eb8f025fe5eb1abe6a3a4b0f7678104a3c9686020004a6481163af1&w=826" alt="Descriptive text" className="full-width-image" /> 
                </div>
            </div>
        </div>
    );
};

export default Choose;
