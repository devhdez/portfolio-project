import React from "react"

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <h2>Projects</h2>
            <div className="projects-container">
                <div className="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="project1.jpg" alt="Project 1" />
                            <div className="carousel-caption">
                                <h3>Project 1</h3>
                                <p>Description of Project 1</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="project2.jpg" alt="Project 2" />
                            <div className="carousel-caption">
                                <h3>Project 2</h3>
                                <p>Description of Project 2</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="project3.jpg" alt="Project 3" />
                            <div className="carousel-caption">
                                <h3>Project 3</h3>
                                <p>Description of Project 3</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#projects" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#projects" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div></div>
        </section>
    );
}   

export default Projects;