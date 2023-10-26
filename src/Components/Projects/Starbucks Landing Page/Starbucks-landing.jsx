import './Starbucks-landing.css';
import project2 from '../../../assets/Images/project2-portfolio.jpg';



export const StarLanding = () => {
    return(
        <header className="container-total-project2">
                <div className="container-hero-project2">
                    <div className="center-project2">
                        <div className="container-title-project2">
                            <h1 className="title-project2">STARBUCKS LANDING CLONE</h1>
                        </div>
                        <div className="container-data-project2">
                            <p>
                            This page is a clone of a one page similar to the starbucks website that includes the project overview, tools used and live links to the official product.
                            </p>
                        </div>
                        <div className="container-button-project2">
                            <a target='_blank' href="https://gonzzzza.github.io/Starbucks-Landingpage/">
                                <button className="btn-project2">
                                    Live Link
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container-second-project2">
                    <div className="container-img">
                        <img className='image-project2' src={project2} alt="img-project" />
                    </div>                
                    <div className="container-data-project-2">
                        <div className="container-title-project-2">
                            <h3 className="title-project-2">Starbucks Landing Clone</h3>
                            <p>This project is a simulation of a Starbucks website landing page that I created with my front-end developer skills. To guide me when making the site, I used the Starbucks website and some more images to make it complete.
                            Feel free to check out the Project by visiting the Live Link.</p>
                        </div>
                        <div className="container-tecnologys-project-2">
                            <h3 className="title-project-2">Tools Used</h3>
                            <ul className='ul-skills-project-2'>
                                <li className='li-skills-project-2'>HTML</li>
                                <li className='li-skills-project-2'>CSS</li>
                                <li className='li-skills-project-2'>Javascript</li>
                                <li className='li-skills-project-2'>GitHub</li>
                                <li className='li-skills-project-2'>GIT</li>
                            </ul>
                        </div>
                        <div className="container-see-project-2">
                            <h3 className="title-project-2">See live</h3>
                            <div className="container-buttons-project-2">
                                <a target='_blank' href="https://gonzzzza.github.io/Starbucks-Landingpage/">
                                    <button className='btn-link-project-2'>Live Link</button>
                                </a>
                                <a href="/">
                                    <button className='btn-back-project-2'>Go back</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </header>
    )
}