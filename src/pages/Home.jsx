import React from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router';
import AllRecipes from './AllRecipes';

const Home = () => {
    const recipes = useLoaderData();
    console.log(recipes);
    return (
        <div className='max-w-11/12 mx-auto'>
            <div className='my-16'><Banner></Banner></div>
        </div>
    );
};

export default Home;