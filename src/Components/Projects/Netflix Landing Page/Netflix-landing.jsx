    import './Netflix-landing.css';
    import project1 from '../../../assets/Images/project1-porfolio.jpg';



    export const NetLanding = () => {
        return(
            <header id="home" className="container-total-project1">
                <div className="container-hero-project1">
                    <div className="center-project1">
                        <div className="container-title-project1">
                            <h1 className="title-project1">NETFLIX LANDING CLONE</h1>
                        </div>
                        <div className="container-data-project1">
                            <p>
                            This page is a clone of a one page similar to the Netflix website that includes the project overview, tools used and live links to the official product.
                            </p>
                        </div>
                        <div className="container-button-project1">
                            <a target='_blank' href="https://gonzzzza.github.io/netflix-landingpage/">
                                <button className="btn-project1">
                                    Live Link
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container-second-project1">
                    <div className="container-img">
                        <img className='image-project1' src={project1} alt="img-project" />
                    </div>                
                    <div className="container-data-project-1">
                        <div className="container-title-project-1">
                            <h3 className="title-project-1">Netflix Landing Clone</h3>
                            <p>This project is a simulation of a Netflix website landing page that I created with my front-end developer skills. To guide me when making the site, I used the Netflix website and some more images to make it complete.
                            Feel free to check out the Project by visiting the Live Link.</p>
                        </div>
                        <div className="container-tecnologys-project-1">
                            <h3 className="title-project-1">Tools Used</h3>
                            <ul className='ul-skills-project-1'>
                                <li className='li-skills-project-1'>HTML</li>
                                <li className='li-skills-project-1'>CSS</li>
                                <li className='li-skills-project-1'>Javascript</li>
                                <li className='li-skills-project-1'>GitHub</li>
                                <li className='li-skills-project-1'>GIT</li>
                            </ul>
                        </div>
                        <div className="container-see-project-1">
                            <h3 className="title-project-1">See live</h3>
                            <div className="container-buttons-project-1">
                                <a target='_blank' href="https://gonzzzza.github.io/netflix-landingpage/">
                                    <button className='btn-link-project-1'>Live Link</button>
                                </a>
                                <a href="/">
                                    <button className='btn-back-project-1'>Go back</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }