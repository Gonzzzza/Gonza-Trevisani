import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import './Home.css'
import project1 from '../../assets/Images/project1-porfolio.jpg';
import project2 from '../../assets/Images/project2-portfolio.jpg';
import project3 from '../../assets/Images/project3-portfolio.jpg';
import project4 from '../../assets/Images/project4-portfolio.jpg';
import project5 from '../../assets/Images/project5-portfolio.jpg';

export const Home = () => {
    return( 
        <>
            <header id="home" className="container-total-hero">
                <div className="center">
                    <div className="container-title-hero">
                        <h1 className="title-hero">Hey, i'm Gonza Trevisani</h1>
                    </div>
                    <div className="container-data-hero">
                        <p>
                            A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
                        </p>
                    </div>
                    <div className="container-button-hero">
                        <a href="https://gonza-trevisani.vercel.app/#projects">
                            <button className="btn-hero">
                                Projects
                            </button>
                        </a>
                    </div>
                </div>
                <div className="mouse">
                </div>
                <div className="home-hero-social">
                    <div className='link-social'>
                        <a target="_blank" href="https://www.linkedin.com/in/gonza-trevisani/" className="social-hero">
                            <AiFillLinkedin className="icon-links-hero" />
                        </a>
                    </div>
                    <div className='link-social'>
                        <a target="_blank" href="https://github.com/Gonzzzza" className="social-hero">
                            <AiOutlineGithub className="icon-links-hero" />
                        </a>
                    </div>
                </div>
            </header>
            <header id="about" className="container-about">
                <div className="container-up-about">
                    <div className="container-title-about">
                        <h1>ABOUT ME</h1>
                    </div>
                    <span className="subrayado"></span>
                    <div className="container-data-about">
                        <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
                    </div>
                </div>
                <div className="container-down-about">  
                    <div className="container-left-about">
                        <h1>Get to know me!</h1>
                        <p className="about-text">I'm a <a href="https://gonza-trevisani.vercel.app/#home"><span className="properties-text">Frontend Web Developer</span></a> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <a href="https://gonza-trevisani.vercel.app/#projects"><span className="properties-text"> Projects 
                        </span></a> section. 
                        </p>
                        <p className="about-text">I'm open to <a href="https://gonza-trevisani.vercel.app/#projects"><span className="properties-text">Job
                        </span></a> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <a href="https://gonza-trevisani.vercel.app/#contact"><span className="properties-text">contact</span></a> me.</p>
                        <a href="#contact"><button className="btn-about">Contact</button></a>
                    </div>
                    <div className="container-rigth-about">
                        <h1>My Skills</h1>
                        <ul className="ul-skills">
                            <li className="li-skills">Html</li>
                            <li className="li-skills">Css</li>
                            <li className="li-skills">JavaScript</li>
                            <li className="li-skills">React</li>
                            <li className="li-skills">GIT</li>
                            <li className="li-skills">Github</li>
                            <li className="li-skills">Responsive Design</li>
                            <li className="li-skills">SEO</li>
                            <li className="li-skills">Tailwind</li>
                            <li className="li-skills">WordPress</li>
                            <li className="li-skills">SQL Basics</li>
                            <li className="li-skills">Express Basics</li>
                            <li className="li-skills">Figma</li>
                        </ul>
                    </div>
                </div>
            </header>
            <header id="projects" className="container-projects">
                <div className="container-up-section-projects">
                    <div className="container-title-projects">
                        <h1>PROJECTS</h1>
                    </div>
                    <span className="subrayado"></span>
                    <div className="container-data-projects">
                        <p className="projects-text">Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
                    </div>
                </div>
                <div className="container-down-section-projects">
                    <div className="img-project">
                        <img src={project1} alt="" />
                    </div>
                    <div className="container-left-projects">
                        <h1>Netflix Landing Page</h1>
                        <p className="projects-text">It is a landing page based on the visual of the Netflix streaming site, it is a project that helped me strengthen learning and generate confidence to create projects. 
                        </p>
                        <a target='_blank' href="https://gonza-trevisani.vercel.app/project1"><button className="btn-projects">CASE STUDY</button></a>
                    </div>
                </div>
                <div className="container-down-section-projects">
                    <div className="img-project">
                        <img src={project2} alt="" />
                    </div>
                    <div className="container-left-projects">
                        <h1>Starbucks Landing Page</h1>
                        <p className="projects-text">It is a landing page based on the visual of the Starbucks website, it is a project that helped me strengthen learning and generate confidence to create projects. 
                        </p>
                        <a target='_blank' href="https://gonza-trevisani.vercel.app/project2"><button className="btn-projects">CASE STUDY</button></a>
                    </div>
                </div>
                <div className="container-down-section-projects-videogame">
                    <div className="img-project-videogame">
                        <img src={project3} className="change-image-videogamepage" alt="" />
                    </div>
                    <div className="container-left-projects-videogame">
                        <h1>Videogame Page</h1>
                        <p className="projects-text">This is a video game page in which I bring data from an API and show it in a visual, it is a project I did to pass the bootcamp. Contains search engine, filters and video game creation form.
                        </p>
                        <a target='_blank' href="https://gonza-trevisani.vercel.app/project3"><button className="btn-projects">CASE STUDY</button></a>
                    </div>
                </div>
                <div className="container-down-section-projects">
                    <div className="img-project">
                        <img src={project4} alt="" />
                    </div>
                    <div className="container-left-projects">
                        <h1>Jager Resto</h1>
                        <p className="projects-text">It is a landing page for the restaurant Jager, it is a project that helped me strengthen learning and generate confidence to create projects.  
                        </p>
                        <a target='_blank' href="https://gonza-trevisani.vercel.app/project4"><button className="btn-projects">CASE STUDY</button></a>
                    </div>
                </div>
                <div className="container-down-section-projects">
                    <div className="img-project">
                        <img src={project5} alt="" />
                    </div>
                    <div className="container-left-projects">
                        <h1>Moggeta Landing Page</h1>
                        <p className="projects-text">It is a design created in figma for a landing page for a silo sales business. 6 page design created, finished and delivered. 
                        </p>
                        <a target='_blank' href="https://gonza-trevisani.vercel.app/project5"><button className="btn-projects">CASE STUDY</button></a>
                    </div>
                </div>
            </header>
            <header id="contact" className="container-contact">
                <div className="container-up-section-contact">
                    <div className="container-title-contact">
                        <h1>CONTACT</h1>
                    </div>
                    <span className="subrayado"></span>
                    <div className="container-data-contact">
                        <p className="contact-text">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
                    </div>
                    <div className="container-down-section-contact">
                        <div className="contact-form-container">
                            <form action='https://formsubmit.co/gonzalotrevisani1105@gmail.com' className='contact-form' method='post'>
                                <input type='hidden' name='form-name' value='form 1' />
                                <div className="contact-form-field">
                                    <label className="contact-form-label" for="name">Name</label>
                                    <input required placeholder="Enter Your Name" type="text" className="contact-form-input" name="name"
                                    id="name" />
                                </div>
                                <div className="contact-form-field">
                                    <label className="contact-form-label" for="email">Email</label>
                                    <input required placeholder="Enter Your Email" type="email" className="contact-form-input" name="email"
                                    id="email" />
                                </div>
                                <div className="contact-form-field">
                                    <label className="contact-form-label" for="message">Message</label>
                                    <textarea required cols="30" rows="10" className="contact-form-input" placeholder="Enter Your Message"
                                    name="message" id="message"></textarea>
                                </div>
                                <button type="submit" className="contact-btn">
                                    Submit
                                </button>
                                <input type="hidden" name="_next" value="https://gonza-trevisani.vercel.app/"></input>
                                <input type="hidden" name="_captcha" value="false"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}