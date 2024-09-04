import { createContext, useContext, useState, useRef } from 'react';
import ramblePNG from "./assets/ramble-rumble-preview.webp"
import rambleGIF from "./assets/ramble-rumble-preview.webm"
import focusPNG from "./assets/focus-flow.webp";
import focusGIF from "./assets/focus-flow.webm";
import streamPNG from "./assets/shadow-stream.webp";
import streamGIF from "./assets/shadow-stream.webm";
import snipPNG from "./assets/snip-clip-preview.webp";
import snipGIF from "./assets/snip-clip.webm";
import personaP from "./assets/persona_answers_preview.webp";
import personaM from "./assets/persona_answers_preview.webm";

function SubSectionBox({ children }) {
    const [isSelected, setIsSelected] = useState(false)
    const { selectedEvent, setSelectedEvent } = useContext(selectedEventContext);
    var identity = isSelected ? "SelectedBox" : selectedEvent ? "MutedBox" : "";

    return (
        <div
            className={`SubSectionBox my-5 mx-auto overflow-hidden ${identity}`}
            onMouseEnter={() => { setIsSelected(true); setSelectedEvent(true) }}
            onMouseLeave={() => { setIsSelected(false); setSelectedEvent(false) }}
        >
            {children}
        </div>
    );
}

const selectedEventContext = createContext();

function SelectedEventProvider({ children }) {
    const [selectedEvent, setSelectedEvent] = useState(false);

    return (
        <selectedEventContext.Provider value={{ selectedEvent, setSelectedEvent }}>
            {children}
        </selectedEventContext.Provider>
    )
}


export function Highlight({ children }) {
    const highlighter = (letter, i) => { return letter === " " ? <span key={i}> </span> : <span key={i} className='highlight' style={{ "--index": i }}>{letter}</span> };
    return (
        <span className='highlighted-text'>
            {children.split("").map(highlighter)}
        </span>
    )
}

function TaggedText({ children }) {
    return (
        <span className='TaggedText rounded-4 m-1 px-3 py-1 w-auto small fw-bold'>{children}</span>
    )
}

function ColorTab({ children, className }) {

    return (
        <div className={`ColorTab ${className} d-flex justify-content-center d-flex flex-column text-center fw-bold p-2 p-md-0`}>
            {children}
        </div>
    )
}

export function Education() {
    return (
        <article>
            <SelectedEventProvider>
                <SubSectionBox>
                    <div className="d-flex position-relative text-shadow">
                        <ColorTab className='bg-blue'>
                            <div className='px-1 text-white'>
                                <p className='m-0 p-0'>B.S.</p>
                                <p className='m-0 p-0'>Computer</p>
                                <p className='m-0 p-0'>Science</p>
                            </div>
                            <i class="bi bi-mortarboard-fill text-light mx-auto my-3 h1 text-shadow"></i>
                        </ColorTab>
                        <div className='my-3 mx-4' style={{ width: "82%" }}>
                            <h5 className='fw-bold underline text-center mt-3'>California State University East Bay</h5>
                            <hr className='w-75 text-light text-center my-3 mx-auto' />
                            <p className='my-4 text-soft'>
                                During my time at CSU East Bay,
                                I was able to broaden my breadth of knowledge and learn new key computer science concepts.
                                Some notable courses include:
                            </p>

                            <span className='ms-2'><Highlight>Software Engineering</Highlight></span>
                            <div className='d-flex flex-wrap w-100 mb-4 mt-2'>
                                <TaggedText>Co-op Coding</TaggedText> <TaggedText>Unit Testing</TaggedText> <TaggedText>Best Practices</TaggedText>
                            </div>

                            <span className='ms-2'><Highlight>Networking</Highlight></span>
                            <div className='d-flex flex-wrap w-100 mb-4 mt-2'>
                                <TaggedText>OSI Layers</TaggedText> <TaggedText>Web Packets</TaggedText> <TaggedText>Web Security</TaggedText>
                                <TaggedText>TCP/UDP</TaggedText>
                            </div>

                            <span className='ms-2'><Highlight>Database Architecture</Highlight></span>
                            <div className='d-flex flex-wrap w-100 mb-4 mt-2'>
                                <TaggedText>Relational Database</TaggedText> <TaggedText>SQL</TaggedText> <TaggedText>Data Manipulation</TaggedText>
                            </div>

                            <span className='ms-2'><Highlight>Web Development</Highlight></span>
                            <div className='d-flex flex-wrap w-100 mb-4 mt-2'>
                                <TaggedText>HTML</TaggedText> <TaggedText>CSS</TaggedText> <TaggedText>JavaScript</TaggedText> <TaggedText>Python Django</TaggedText>
                            </div>

                            <span className='ms-2'><Highlight>Mobile Development</Highlight></span>
                            <div className='d-flex flex-wrap w-100 mb-4 mt-2'>
                                <TaggedText>Java</TaggedText> <TaggedText>Android Studio</TaggedText> <TaggedText>App Development</TaggedText>
                            </div>

                            <span className='ms-2'><Highlight>Computer Graphics</Highlight></span>
                            <div className='d-flex flex-wrap w-100 mb-4 mt-2'>
                                <TaggedText>UI Development</TaggedText> <TaggedText>Qt</TaggedText> <TaggedText>C++</TaggedText> <TaggedText>3D Rendering</TaggedText>
                            </div>

                            <span className='ms-2'><Highlight>Analysis of Algorithms</Highlight></span>
                            <div className='d-flex flex-wrap w-100 mb-4 mt-2'>
                                <TaggedText>Optimization</TaggedText> <TaggedText>Time Complexity</TaggedText> <TaggedText>Big O</TaggedText> <TaggedText>Greedy Algorithm</TaggedText> <TaggedText>Divide and Conquer</TaggedText> 
                            </div>

                        </div>
                    </div>
                </SubSectionBox>
                <SubSectionBox>
                    <div className="d-flex position-relative">
                        <ColorTab className='bg-cyan text-shadow' >
                            <div className='px-1 text-white '>
                                <p className='m-0 p-0'>A.S.</p>
                                <p className='m-0 p-0'>Computer</p>
                                <p className='m-0 p-0'>Science</p>
                            </div>
                            <i class="bi bi-mortarboard-fill text-light mx-auto my-3 h1 text-shadow"></i>
                        </ColorTab>
                        <div className='my-3 mx-4' style={{ width: "85%" }}>
                            <h5 className='fw-bold underline text-center mt-3'>Las Positas Community College</h5>
                            <hr className='w-75 text-light text-center my-3 mx-auto' />

                            <p >
                                After graduating highschool, I enrolled at Las Positas Community College and worked towards transferring to a four year university for my B.S.
                                While here, I also formed a <Highlight>Programming Club</Highlight> with some friends and was named Vice President.
                                I took courses that covered concepts such as <Highlight>Computer Science</Highlight>, <Highlight>Physics</Highlight>, <Highlight>2D and 3D Calculus</Highlight>, and more general education classes.
                                After meeting the required classes and taking a few extra, I was able to transfer and receive A.S. in Computer Science.
                            </p>
                            <div className='d-flex flex-wrap w-100'>
                                <TaggedText>C++</TaggedText>
                                <TaggedText>NASM</TaggedText>
                                <TaggedText>MASM</TaggedText>
                                <TaggedText>Linux</TaggedText>
                                <TaggedText>OOP</TaggedText>
                                <TaggedText>Physics</TaggedText>
                                <TaggedText>Linear Algebra</TaggedText>
                                <TaggedText>2D/3D Calculus</TaggedText>
                            </div>
                        </div>
                    </div>
                </SubSectionBox>
            </SelectedEventProvider>
        </article>
    )
}

export function Experience() {
    return (
        <article>
            <SelectedEventProvider>
                <SubSectionBox>
                    <div className="d-flex position-relative ">
                        <ColorTab className='bg-turq d-flex justify-content-center d-flex flex-column text-center fw-bold w-25 text-shadow' style={{ minHeight: "100%" }}>
                            <div className='px-1 text-white'>
                                <p className='m-0 p-0'>July 2021 </p>
                                <p className="m-1">to</p>
                                <p className='m-0 p-0'>Now</p>
                            </div>
                            <i className="bi bi-laptop text-light mx-auto my-3 h1 text-shadow" ></i>
                        </ColorTab>
                        <div className='my-3 mx-4' style={{ width: "85%" }}>
                            <h5 className='fw-bold underline text-center mt-3'>Freelance Web Developer</h5>
                            <hr className='w-75 text-light text-center my-3 mx-auto' />
                            <p >
                                Following graduation, I embarked on my <Highlight>freelance</Highlight> journey, developing <Highlight>applications and websites</Highlight> tailored to the unique needs of my clients.
                                My passion lies in developing applications that exceed expectations both visually and functionally.
                            </p>
                            <p>
                                My current projects consist of mostly <Highlight>web development</Highlight>, but I also have a few long-term <Highlight>software application</Highlight> projects that I contribute to.
                                I meticulously test each application to ensure it delivers an <Highlight>exceptional</Highlight> user experience while being within the client's specifications.
                            </p>
                            <p>
                                Through this journey, I've honed my <Highlight>technical skills</Highlight>, developed a <Highlight>keen eye for detail</Highlight>, and deepened my understanding of a <Highlight>user's needs</Highlight>.
                                Each project I undertake is a new opportunity to <Highlight>learn, grow, and contribute</Highlight> to the success of my clients' ventures, making every project a unique and rewarding experience.
                            </p>
                            <div className='d-flex flex-wrap w-100'>
                                <TaggedText>HTML</TaggedText> <TaggedText>CSS</TaggedText> <TaggedText>Bootstrap</TaggedText> <TaggedText>SASS</TaggedText> <TaggedText>React.js</TaggedText>  <TaggedText>JavaScript</TaggedText> <TaggedText>TypeScript</TaggedText>
                                <TaggedText>Java</TaggedText> <TaggedText>C#</TaggedText> <TaggedText>Python</TaggedText>
                            </div>
                        </div>
                    </div>
                </SubSectionBox>
                <SubSectionBox>
                    <div className="d-flex position-relative">
                        <ColorTab className='bg-green' >
                            <div className='px-1 text-white text-shadow'>
                                <p className='m-0 p-0'>Nov. 2016</p>
                                <p className="m-1">to</p>
                                <p className='m-0 p-0'>July 2021</p>
                            </div>
                            <i className="bi bi-journal-code text-light mx-auto my-3 h1 text-shadow" ></i>
                        </ColorTab>
                        <div className='my-3 mx-4' style={{ width: "85%" }}>
                            <h5 className='fw-bold underline text-center mt-3'>Code Coach <span className="fw-normal">at</span> <b>theCoderSchool</b></h5>
                            <hr className='w-75 text-light text-center my-3 mx-auto' />
                            <p >
                                During my tenure at <Highlight>theCoderSchool</Highlight>, I taught children aged 6-16 how to code through projects or helped them with homework.
                                I tried to make each student's experience unique and exciting so that they would become <Highlight>passionate</Highlight> about their projects.
                                During the summer, I was also responsible for <Highlight>organizing</Highlight> and <Highlight>instructing</Highlight> a large number of students for <Highlight>Summer Camps</Highlight> that would meet for around 5-6 hours a day for one week.
                                I often took <Highlight>initiative</Highlight> and would sign up to teach multiple camps along with my usual workload.
                                Projects ranged from beginners <Highlight>learning the basics</Highlight> to more advanced projects including <Highlight>Web Development</Highlight> and <Highlight>Game Development</Highlight>.
                            </p>
                            <div className='d-flex flex-wrap w-100'>
                                <TaggedText>C++</TaggedText> <TaggedText>C#</TaggedText><TaggedText>Python</TaggedText><TaggedText>Java</TaggedText> <TaggedText>JavaScript</TaggedText>
                                <TaggedText>HTML</TaggedText> <TaggedText>CSS</TaggedText> <TaggedText>Android Studio</TaggedText> <TaggedText>React.js</TaggedText> <TaggedText>Unity Game Engine</TaggedText> <TaggedText>Web Development</TaggedText>
                                <TaggedText>Networking</TaggedText>

                            </div>
                        </div>
                    </div>
                </SubSectionBox>

            </SelectedEventProvider>
        </article>
    )
}

function ProjectBox({ title, href, tags, png_src, gif_src, children }) {
    const vid = useRef(0)
    return (
        <div className='ProjectBox px-3'
            onMouseOver={event => { vid.current.play().catch((e) => { }) }}
            onMouseOut={event => { vid.current.pause(); }}

        >
            <div className='py-3 ps-4 pe-2 my-auto w-100 ' >
                <div className='d-flex flex-column-reverse flex-md-row my-3'>
                    <div className='ProjectImage justify-content-center mx-auto ms-md-0 me-md-2 my-md-1 my-3 col-md-4 col-12' style={{ minHeight: "120px" }}>
                        <video muted loop
                            ref={vid}
                            onMouseOver={event => event.target.play()}

                            className="w-100 h-100 m-auto border border-1 border-light rounded-3"
                            poster={png_src}>
                            <source src={gif_src} type="video/webm" />
                        </video>
                    </div>
                    <div className='col-md-7 col-12 mx-0 mx-md-4 mb-3 mb-md-0 ProjectText'>
                        <a target="_blank" rel="noreferrer" className="ProjectLink text-shadow" href={href}><h5 className="fw-bolder my-2 mb-md-3 mt-md-0" >{title}<i className="bi-link-45deg ms-1" /></h5></a>
                        {children}
                    </div>
                </div>
                <div className='mt-4 d-flex flex-wrap  justify-content-md-start justify-content-center w-100'>
                    {tags.map((item, i) => { return <span className='mb-3' key={i}><TaggedText>{item}</TaggedText></span> })}
                </div>
            </div>

        </div>
    )
}

export function Projects() {

    return (
        <article className='w-100'>
            <SelectedEventProvider>
                <SubSectionBox>
                    <ProjectBox title="Ramble Rumble" tags={["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"]} href="https://ramblerumble.matthewhamel.dev/" png_src={ramblePNG} gif_src={rambleGIF}>
                        <p className='m-0'>A Wordle-inspired letter tile game with no limits on how many times you can play. Features two game modes,
                            Timed Trial and High Score, for a challenging or relaxed gameplay experience.</p>
                    </ProjectBox>
                </SubSectionBox>
                <SubSectionBox>
                    <ProjectBox title="Focus Flow" tags={["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"]} href="https://focus.matthewhamel.dev/" png_src={focusPNG} gif_src={focusGIF}>
                        <p className='m-0'>A Pomodoro Technique-based timer designed to enhance productivity and prevent burn-out by alerting the user
                            when to take breaks. The timer features custom times and a wide array of themes to choose from.</p>
                    </ProjectBox>
                </SubSectionBox>
                <SubSectionBox>
                    <ProjectBox title="Persona 5 Answers" tags={["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"]} href="https://persona.matthewhamel.dev/" png_src={personaP} gif_src={personaM}>
                        <p className='m-0'>A comprehensive guide for the acclaimed game Persona 5 Royal, meticulously crafted to reflect the game's distinctive aesthetics. This guide assists players in answering in-game pop-up questions and saves where you left off via cookies.</p>
                    </ProjectBox>
                </SubSectionBox>
                <SubSectionBox>
                    <ProjectBox title="Shadow Stream" tags={["C#", "OpenCV", "Windows Forms"]} href="https://github.com/MDHamel/ShadowStream" png_src={streamPNG} gif_src={streamGIF}>
                        <p className='m-0'>A lightweight capture card streaming application. Users can stream video and audio straight to their computer
                            from an external capture card. Supports 1080p at 30fps or 720p at 30/60 fps with minimal audio lag.</p>
                    </ProjectBox>
                </SubSectionBox>
                <SubSectionBox>
                    <ProjectBox title="Snip Clip" tags={["C#", "Game Bar SDK", "UWP"]} href="https://github.com/MDHamel/SnipClip" png_src={snipPNG} gif_src={snipGIF}>
                        <p className='m-0'>A simple, lightweight video editing tool integrated into the Windows Game Bar. Easily crop clips and save videos
                            anywhere on your PC.</p>
                    </ProjectBox>
                </SubSectionBox>
            </SelectedEventProvider>

            <div className="d-grid mx-md-5 mx-0 mb-2 p-0 ">
                <button className="btn btn-dark border border-2 py-2 fw-bold col-11 col-md-8 col-xl-12 mx-auto mt-2" type="button" onClick={() => { window.open("https://github.com/MDHamel?tab=repositories") }}>
                    <i className="bi bi-github" />&nbsp;
                    Find More of My Projects on GitHub
                </button>
            </div>
        </article>
    )
}

export function Footer() {
    return (
        <footer className='col-12 col-md-9 mx-auto my-5 px-2 px-md-1 text-center'>
            <small>
                This site was developed by me, <Highlight>Matthew Hamel</Highlight>, using a blend of <Highlight>HTML</Highlight>, <Highlight>CSS</Highlight>, <Highlight>React.js</Highlight>, <Highlight>Bootstrap</Highlight>, and <Highlight>Webpack</Highlight>.&nbsp;

                Check out the &nbsp;
                <a className='link-underline-light text-light' href='https://github.com/MDHamel/hamelsite2024' target='_blank' rel="noreferrer">code on GitHub</a>.
            </small>
        </footer>
    )
}
