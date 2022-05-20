import React from 'react';
import doctor from '../../../images//doctor.png';
import './MakeAppoinment.css';

const MakeAppoinment = () => {
    return (
        <div className="make-appoinment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block ">
                        <img src={doctor} alt="" />
                    </div>
                    <div className="col-md-7 text-white py-5 ">
                        <h5 style={{color:'#1cc7C1'}}>APPOINMENT</h5>
                        <h1 className="my-4 text-white">Make an Appoinment <br/>Today</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, enim?</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAppoinment;