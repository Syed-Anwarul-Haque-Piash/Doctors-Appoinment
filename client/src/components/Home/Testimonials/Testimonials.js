import React from 'react';
import people1 from '../../../images/people-1.png';
import  people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png'
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css'

const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : people1
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : people2
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : people3
    }
]

const Testimonials = () => {
    return (
        <div className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-primary text-uppercase">Testimonials</h5>
                    <h1>What Our Patients <br/>Says</h1>
                </div>
                <div className="card-deck mt-5">
                   {
                      testimonialData.map(testimonial=><Testimonial testimonial={testimonial}></Testimonial>) 
                   }
                </div>
            </div> 
        </div>
    );
};

export default Testimonials;