import React from 'react';

const Region = ({img_region, name_region}) => {
    return (
        <div className='border'>
            <img className='w-full' src={img_region} alt="region_image" />
            <h2 className='text-2xl font-bold text-center'>{name_region}</h2>
        </div>
    );
};

export default Region;