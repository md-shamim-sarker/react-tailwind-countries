import React from 'react';

const Region = ({img_region, name_region}) => {
    return (
        <div>
            <img src={img_region} alt="region_image" />
            <h2>{name_region}</h2>
        </div>
    );
};

export default Region;