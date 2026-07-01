import React, { Component } from 'react';
import Banner from '../banner/Banner';
import Projects from '../projects/Projects';

class Home extends Component {
    render() {
        return (
            <div className='pt-10'>
                <Banner></Banner>
                <Projects></Projects>
            </div>
        );
    }
}

export default Home;
