import React, { Component } from "react";
import { HiPlus } from "react-icons/hi";

class Project extends Component {
    state = {
        searchText: "",
        selectedProject: null,
    };

    projects = [
        {
            id: 1,
            name: "Banking App",
            link: "https://arifulkhadija22702817.github.io/banking/",
        },
        {
            id: 2,
            name: "House Site",
            link: "https://arifulkhadija22702817.github.io/house-site/",
        },
        {
            id: 3,
            name: "Penguin Tailwind",
            link: "https://arifulkhadija22702817.github.io/penguin-using-tailwind/",
        },
        {
            id: 4,
            name: "Bike Tailwind",
            link: "https://arifulkhadija22702817.github.io/bike-tailwind/",
        },
        {
            id: 5,
            name: "Mill Manegment",
            link: "https://arifulkhadija22702817.github.io/mill_mane/",
        },
        {
            id: 6,
            name: "Learn html",
            link: "https://arifulkhadija22702817.github.io/learn-html/",
        },
        {
            id: 7,
            name: "Final-Mill-Management",
            link: "https://mill-mangment.vercel.app/",
        }
    ];

    render() {
        const filteredProjects = this.projects.filter((project) =>
            project.name
                .toLowerCase()
                .includes(this.state.searchText.toLowerCase())
        );

        return (
            <div className="my-8">
                <div className="max-w-5xl mx-auto px-4 h-screen flex flex-col">

                    {/* Search */}
                    <div className="sticky top-0 z-10 bg-[#02051F] py-4">

                        <input
                            type="text"
                            placeholder="Search Project"
                            value={this.state.searchText}
                            onChange={(e) =>
                                this.setState({ searchText: e.target.value })
                            }
                            className="input w-full max-w-4xl
      bg-[#270a3b]
      border focus:border-purple-500
      outline-none
      text-white
      placeholder:text-gray-400"
                        />
                        {/* Project Count */}
                        <p className="text-purple-500 mb-10 mt-10">
                            Total Projects: {filteredProjects.length}
                        </p>


                    </div>



                    {/* Project Cards */}
                    <div className="h-[60vh] overflow-y-auto space-y-4 py-4 project-scroll pr-2">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="
          bg-[#0d0425]
          rounded-xl
          px-6
          py-4
          border border-[#2d1248]
          hover:border-purple-500
          transition-all duration-300
          cursor-pointer"
                            >
                                <div className="flex justify-between items-center" onClick={() => window.open(project.link, "_blank")}>

                                    <div className="text-start">
                                        <h2 className="text-purple-500 text-xl font-semibold">
                                            {project.name}
                                        </h2>

                                        <p className="text-pink-600 text-sm">
                                            Click to visit project
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => window.open(project.link, "_blank")}
                                        className="
              w-8 h-8
              rounded
              bg-purple-600
              hover:bg-purple-500
              text-white"
                                    >
                                        <HiPlus></HiPlus>
                                    </button>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        );
    }
}

export default Project;