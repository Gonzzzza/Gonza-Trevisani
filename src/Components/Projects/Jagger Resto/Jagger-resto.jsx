import './Jagger-resto.css';
import project4 from '../../../assets/Images/project4-portfolio.jpg';



export const Jagger = () => {
    return(
       <header className="container-total-project4">
                <div className="container-hero-project4">
                    <div className="center-project4">
                        <div className="container-title-project4">
                            <h1 className="title-project4">JAGGER RESTO</h1>
                        </div>
                        <div className="container-data-project4">
                            <p>
                            This project is a restaurant website, it does not have any functionality, it was a project that was designed to practice
                            React and Tailwindcss. This application I created with my front-end developer skills.
                            </p>
                        </div>
                        <div className="container-button-project4">
                            <a target='_blank' href="https://dashboard-store-orcin.vercel.app/">
                                <button className="btn-project4">
                                    Live Link
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container-second-project4">
                    <div className="container-img">
                        <img className='image-project4' src={project4} alt="img-project" />
                    </div>                
                    <div className="container-data-project-4">
                        <div className="container-title-project-4">
                            <h3 className="title-project-4">Jagger Resto </h3>
                            <p>
                                This project is a restaurant website, it does not have any functionality, it was a project that was designed to practice
                                React and Tailwindcss. This application I created with my front-end developer skills.
                            </p>
                        </div>
                        <div className="container-tecnologys-project-4">
                            <h3 className="title-project-4">Tools Used</h3>
                            <ul className='ul-skills-project-4'>
                                <li className='li-skills-project-4'>HTML</li>
                                <li className='li-skills-project-4'>Tailwind</li>
                                <li className='li-skills-project-4'>Javascript</li>
                                <li className='li-skills-project-4'>React</li>
                                <li className='li-skills-project-4'>GIT</li>
                                <li className='li-skills-project-4'>Github</li>
                            </ul>
                        </div>
                        <div className="container-see-project-4">
                            <h3 className="title-project-4">See live</h3>
                            <div className="container-buttons-project-4">
                                <a target='_blank' href="https://dashboard-store-orcin.vercel.app/">
                                    <button className='btn-link-project-4'>Live Link</button>
                                </a>
                                <a href="https://gonza-trevisani.vercel.app/">
                                    <button className='btn-back-project-4'>Go back</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </header>
    )
}