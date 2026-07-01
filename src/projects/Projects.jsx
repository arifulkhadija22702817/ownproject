import React, { Component } from 'react';
import Project from '../project/Project';

class Projects extends Component {
    render() {
        return (
            <div className='my-10 text-center max-w-7xl mx-auto text-3xl font-bolder bg-[#050522] text-pink-600 px-2 py-20'>
                <div className="relative inline-flex overflow-hidden rounded-xl p-[3px]">
                    {/* Rotating glow */}
                    <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite]
bg-[conic-gradient(from_0deg,transparent_240deg,#22c55e_300deg,#22c55e_360deg)]
blur-md">
                    </div>

                    {/* Content */}
                    <div className="relative rounded-xl bg-black px-6 py-3 text-3xl font-bold text-purple-500">
                        My_Projects
                    </div>
                </div>
                <Project></Project>
            </div>
        );
    }
}

export default Projects;
