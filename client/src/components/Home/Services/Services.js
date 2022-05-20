import React from "react";
import flouride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const ServiceData=[
    {
        name:'Flouride Treatment',
        img:flouride
    },
    {
        name:'Cavity Filling',
        img:cavity
    },
    {
        name:'Teeth Whitening',
        img:whitening
    }
]

const Services = () => {
  return (
    <section className="service-container mt-5">
      <div className="text-center">
        <h4 style={{color:'#1CC7C1'}}>OUR SERVICES</h4>
        <h2>Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center">
          <div className='w-75 row mt-5 pt-5'>
              {
                  ServiceData.map(service=><ServiceDetail service={service}></ServiceDetail>)
              }
          </div>
      </div>
    </section>
  );
};

export default Services;
