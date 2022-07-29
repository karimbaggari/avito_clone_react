import React from 'react';
import Header from '../components/Header';
import ProductsCarousel from '../components/ProductsCarousel';
import ProductsGrid from '../components/ProductsGrid';
import Footer from '../components/Footer';

const Landing = () => {
    return (
        <React.Fragment>
            <Header />
            <ProductsCarousel />
            <ProductsGrid />
            <ProductsCarousel />
            <ProductsGrid searchEnable={false} />
            <Footer />
        </React.Fragment>
    );
}

export default Landing;