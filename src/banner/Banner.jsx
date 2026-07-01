import React, { Component } from 'react';
// import Img from '../../public/ariful.jpg'

class Banner extends Component {
    render() {

        return (
            <div className="hero max-w-7xl mx-auto bg-[#070b2e] rounded-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="ariful.jpg"
                        className="w-[380px] h-[480px] rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-bold text-transparent">Hey ! I'm Ariful Islam</h1>
                        <p className="py-6 mr-10 text-green-300">
                            I'm a passionate web developer with expertise in React, JavaScript, and modern web technologies. I create dynamic and responsive web applications that provide seamless user experiences. With a strong focus on clean code and innovative design, I strive to bring ideas to life through the power of web development.
                        </p>
                        <button className="btn btn-primary transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:scale-110 bg-gradient-to-r from-pink-500 to-purple-500  text-white">More Info</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;
