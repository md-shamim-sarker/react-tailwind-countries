import React from 'react';
import {Link} from 'react-router-dom';

const Region = ({img_region, name_region}) => {
    return (
        <div className='shadow-lg py-5'>
            <Link to={`/region/${name_region}`}>
                <img className='w-full p-5 rounded-full' src={img_region} alt="region_image" />
                <h2 className='text-2xl font-bold text-center text-blue-900'>{name_region}</h2>
            </Link>
        </div>
    );
};

export default Region;