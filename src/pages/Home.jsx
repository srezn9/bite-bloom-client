import React from 'react';
import Banner from '../components/Banner';
import TopRecipes from '../components/TopRecipes';
import ReviewSection from '../components/ReviewSection';
import RestaurantShowcase from '../components/RestaurantShowcase';


const Home = () => {
    
    return (
        <div className='max-w-11/12 mx-auto'>
            <section className='my-16'><Banner></Banner></section>
            <section className='my-16'>
                <TopRecipes></TopRecipes>
            </section>
            <section className='my-16'>
                <RestaurantShowcase></RestaurantShowcase>
            </section>
            <section className='my-16'>
                <ReviewSection></ReviewSection>
            </section>
        </div>
    );
};

export default Home;