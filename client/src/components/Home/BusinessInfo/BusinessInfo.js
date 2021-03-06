import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'
const infosData=[
    {title:'Opening Hours',
     description:'We are open 7 days',
     icon:faClock,
     background:'primary'
    },
    {title:'Visit Our Location',
     description:'Bashundhara,Dhaka,Bangladesh',
     icon:faMapMarker,
     background:'dark'
    },
    {title:'Call Us Now',
     description:'+8801718271193',
     icon:faPhone,
     background:'primary'
    }
]
const BusinessInfo = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className='w-75 row'>
            {
                infosData.map(info=><InfoCard info={info}></InfoCard>)
            }
            </div>
        </div>
    );
};

export default BusinessInfo;