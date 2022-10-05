import React from 'react';
import Region from '../Region/Region';
import img_asia from '../../image/asia.jpg';
import img_africa from '../../image/africa.jpg';
import img_europe from '../../image/europe.jpg';
import img_america from '../../image/america.jpg';
import img_oceania from '../../image/oceania.jpg';

const Home = () => {
    return (
        <div>
            <Region img_region={img_asia} name_region={"Asia"}></Region>
            <Region img_region={img_europe} name_region={"Europe"}></Region>
            <Region img_region={img_america} name_region={"America"}></Region>
            <Region img_region={img_africa} name_region={"Africa"}></Region>
            <Region img_region={img_oceania} name_region={"Oceania"}></Region>
        </div>
    );
};

export default Home;