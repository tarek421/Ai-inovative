import React from 'react';
import Navigation from '../../../components/Navigation/Navigation';
import BrowesCaseStudio from '../BrowesCaseStudio/BrowesCaseStudio';
import Capabilities from '../Capabilities/Capabilities';
import Header from '../Header/Header';
import UseCaseProduct from '../UseCaseProduct/UseCaseProduct';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Header />
            <Capabilities />
            <BrowesCaseStudio />
            <UseCaseProduct />
        </div>
    );
};

export default Home;