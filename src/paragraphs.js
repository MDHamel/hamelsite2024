import { createContext, useContext, useState } from 'react';
import diplomaSVG from "./assets/diploma.png";
import ramblePNG from "./assets/ramble-rumble-preview.jpg"
import rambleGIF from "./assets/ramble-rumble-preview.gif"
import focusPNG from "./assets/focus-flow.png";
import focusGIF from "./assets/focus-flow.gif";
import streamPNG from "./assets/shadow-stream.png";
import streamGIF from "./assets/shadow-stream.gif";
import snipPNG from "./assets/snip-clip-preview.png";
import snipGIF from "./assets/snip-clip-preview.gif";

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

/*
<SelectedEventProvider>
  <SubSectionBox><p>THIS IS A TEST OF YOUR EMERGENCY BROADCAST SYSTEM</p> <TaggedText>C++</TaggedText> <TaggedText>JavaScript</TaggedText></SubSectionBox>
  <SubSectionBox><p>the second one</p> <TaggedText>C++</TaggedText> <TaggedText>JavaScript</TaggedText></SubSectionBox>
</SelectedEventProvider>
*/

const selectedEventContext = createContext();

function SelectedEventProvider({ children }) {
    const [selectedEvent, setSelectedEvent] = useState(false);

    return (
        <selectedEventContext.Provider value={{ selectedEvent, setSelectedEvent }}>
            {children}
        </selectedEventContext.Provider>
    )
}


function Highlight({ children }) {
    const highlighter = (letter, i) => { return letter === " " ? <span> </span> : <div className='highlight' style={{ "--index": i }}>{letter}</div> };
    return (
        <div className='highlighted-text'>
            {children.split("").map(highlighter)}
        </div>
    )
}

function TaggedText({ children }) {
    return (
        <span className='TaggedText rounded-4 m-1 px-3 py-1 w-auto small fw-bold'>{children}</span>
    )
}



export function AboutMe() {
    return (
        <article className='mx-md-5 pt-3'>
            <p className='mx-3 mx-md-5 px-2'>
                Technology has always captivated me.
                In high school, I joined an <Highlight>engineering curriculum</Highlight> that followed me from sophomore year to graduation, and it was here where I was exposed to coding.
                Over one summer, I taught myself <Highlight>Java</Highlight> and started making <Highlight>Minecraft Mods</Highlight>.
                In my junior year, I joined the <Highlight>robotics club</Highlight> with friends, learned <Highlight>Python</Highlight>, and competed with other school in robotics competitions.
            </p>
            <p className='mx-3 mx-md-5 px-2'>
                After graduating high school, I pursued a degree in <Highlight>Computer Science</Highlight>.
                At the same time, I started working at <Highlight>theCoderSchool</Highlight> as a <Highlight>Code Coach</Highlight> (a coding tutor).
                I taught children aged 6-17 in <Highlight> Java</Highlight>, <Highlight>Python</Highlight>, <Highlight>C++</Highlight>, <Highlight>C#</Highlight>, <Highlight>Unity Game Development</Highlight>, <Highlight>Web Development</Highlight>, and <Highlight>more</Highlight>.
            </p>
            <p className='mx-3 mx-md-5 px-2'>
                Today, I primarily focus on my <Highlight>Freelance Web Developer</Highlight> career and develop other applications during my free time.
                From my <Highlight>video streaming application</Highlight> to my <Highlight>replayable Wordle clone</Highlight>, I am constantly looking for new personal projects to put my soul into.
            </p>
            <p className='mx-3 mx-md-5 px-2'>
                When I'm not toiling away on a project, you can find me <Highlight>playing games</Highlight> online with friends (or solo), <Highlight>cooking/baking</Highlight> delicious food, playing with my beloved dog <Highlight>Emma</Highlight>, or hanging out with my <Highlight>family</Highlight>.
            </p>
        </article>

    )
}

export function Education() {
    return (
        <article>
            <SelectedEventProvider>
                <SubSectionBox>
                    <div className="d-flex position-relative">
                        <div className='bg-cyan d-flex justify-content-center d-flex flex-column text-center fw-bold' style={{ minHeight: "100%", width: "25%" }}>
                            <div className='px-1 text-light'>
                                <p className='m-0 p-0'>A.S.</p>
                                <p className='m-0 p-0'>Computer</p>
                                <p className='m-0 p-0'>Science</p>
                            </div>
                            <img alt="A diploma." src={diplomaSVG} width={"40%"} className='mx-auto mt-2 px-md-2' />
                        </div>
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
                <SubSectionBox>
                    <div className="d-flex position-relative">
                        <div className='bg-blue d-flex justify-content-center d-flex flex-column text-center fw-bold ' style={{ minHeight: "100%", width: "25%" }}>
                            <div className='px-1 text-light'>
                                <p className='m-0 p-0'>B.S.</p>
                                <p className='m-0 p-0'>Computer</p>
                                <p className='m-0 p-0'>Science</p>
                            </div>
                            <img alt="A diploma." src={diplomaSVG} width={"40%"} className='mx-auto mt-2 px-md-2' />
                        </div>
                        <div className='my-3 mx-4' style={{ width: "82%" }}>
                            <h5 className='fw-bold underline text-center mt-3'>California State University East Bay</h5>
                            <hr className='w-75 text-light text-center my-3 mx-auto' />
                            <p className='my-4'>
                                During my time at CSU East Bay,
                                I was able to broaden my breadth of knowledge and learn new key computer science concepts.
                                Some notable courses include:
                            </p>

                            <span className='ms-2'><Highlight>Software Engineering</Highlight></span>
                            <div className='d-flex flex-wrap w-100 mb-4 mt-2'>
                                <TaggedText>Collaborative Coding</TaggedText> <TaggedText>Unit Testing</TaggedText> <TaggedText>Best Practices</TaggedText>
                            </div>

                            <span className='ms-2'><Highlight>Networking</Highlight></span>
                            <div className='d-flex flex-wrap w-100 mb-4 mt-2'>
                                <TaggedText>OSI Layers</TaggedText> <TaggedText>Web Packets</TaggedText> <TaggedText>Web Security</TaggedText>
                                <TaggedText>IOT</TaggedText> <TaggedText>Internet Protocols</TaggedText> <TaggedText>TCP/UDP</TaggedText>
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
                                <TaggedText>Optimization</TaggedText> <TaggedText>Time Complexity</TaggedText> <TaggedText>Greedy Algorithm</TaggedText> <TaggedText>Divide and Conquer</TaggedText>
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
                    <div className="d-flex position-relative">
                        <div className='bg-green d-flex justify-content-center d-flex flex-column text-center fw-bold' style={{ minHeight: "100%", width: "25%" }}>
                            <div className='px-1 text-light'>
                                <p className='m-0 p-0'>Nov. 2016</p>
                                <p class="m-1">to</p>
                                <p className='m-0 p-0'>July 2021</p>
                            </div>
                            <i class="bi bi-journal-code text-light mx-auto my-3 h1" ></i>
                        </div>
                        <div className='my-3 mx-4' style={{ width: "85%" }}>
                            <h5 className='fw-bold underline text-center mt-3'>Code Coach <span class="fw-normal">at</span> <b>theCoderSchool</b></h5>
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
                <SubSectionBox>
                    <div className="d-flex position-relative">
                        <div className='bg-turq d-flex justify-content-center d-flex flex-column text-center fw-bold' style={{ minHeight: "100%", width: "25%" }}>
                            <div className='px-1 text-light'>
                                <p className='m-0 p-0'>July 2021 </p>
                                <p class="m-1">to</p>
                                <p className='m-0 p-0'>Now</p>

                            </div>
                            <i class="bi bi-laptop text-light mx-auto my-3 h1" ></i>
                        </div>
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
            </SelectedEventProvider>
        </article>
    )
}

function ProjectBox({ title, href, tags, png_src, gif_src, children }) {
    return (
        <div className='ProjectBox px-3 '>

            <div className='py-3 ps-4 pe-2 my-auto w-100' >
                <a target="_blank" rel="noreferrer" className="ProjectLink" href={href}><h5 class="fw-bolder mt-3 mt-md-0" >{title}<i class="bi-link-45deg ms-1" /></h5></a>
                <div className='d-flex flex-column flex-md-row my-3'>
                    <div className='ProjectImage d-flex flex-column flex-md-row justify-content-center mx-auto ms-md-0 me-md-2 my-md-1 my-3 col-md-4 col-12' style={{minHeight:"120px"}}>
                        <img alt={`The "${title}" project, created by Matthew Hamel`} className="w-100 h-100 m-auto border border-1 border-light rounded-3 png" src={png_src} />
                        <img alt={`A demonstration of the "${title}" project, created by Matthew Hamel`} className="w-100 h-100 m-auto border border-1 border-light rounded-3 gif" src={gif_src} />
                    </div>
                    <div className='col-md-7 col-12 mx-0 mx-md-4 ProjectText'>
                        {children}
                    </div>
                </div>
                <div className='mt-4 mb-2 d-flex flex-wrap justify-content-md-start justify-content-center  w-100 h-100'>
                    {tags.map((item) => { return <TaggedText>{item}</TaggedText> })}
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
                        <p className='m-0'>A Wordle-inspired letter tile game with no limits on how many times you can play. Features two game modes, Timed Trial and High Score, for a challenging or relaxed gameplay experience.</p>
                    </ProjectBox>
                </SubSectionBox>
                <SubSectionBox>
                    <ProjectBox title="Focus Flow" tags={["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"]} href="https://focus.matthewhamel.dev/" png_src={focusPNG} gif_src={focusGIF}>
                        <p className='m-0'>A Pomodoro Technique based timer designed to enhance productivity and prevent burn-out by alerting the user when to take breaks. Timer features custom times and a wide array of themes to choose from.</p>
                    </ProjectBox>
                </SubSectionBox>
                <SubSectionBox>
                    <ProjectBox title="Shadow Stream" tags={["C#", "OpenCV", "Windows Forms"]} href="https://github.com/MDHamel/ShadowStream" png_src={streamPNG} gif_src={streamGIF}>
                        <p className='m-0'>A light-weight capture card streaming application. Users can stream video and audio from an external capture card straight to their computer without switching inputs. Supports 1080p at 30fps or 720p at 30/60 fps with minimal audio lag.</p>
                    </ProjectBox>
                </SubSectionBox>
                <SubSectionBox>
                    <ProjectBox title="Snip Clip" tags={["C#", "Game Bar SDK", "UWP"]} href="https://github.com/MDHamel/SnipClip" png_src={snipPNG} gif_src={snipGIF}>
                        <p className='m-0'>A simple, light-weight video editing tool integrated into the Windows Game Bar. Simply press <i class="bi bi-windows d-inline fs-6"></i> + G and add Snip Clip to your Game Bar Overlay. Easily crop the times of your clips and save videos anywhere on your PC. </p>
                    </ProjectBox>
                </SubSectionBox>
            </SelectedEventProvider>
            <div class="d-grid gap-2 col-md-10 col-sm-12 mx-auto">
                <button class="btn btn-dark border border-2 py-2 fw-bold" type="button" onClick={() => { window.open("https://github.com/MDHamel?tab=repositories") }}>
                    <i class="bi bi-github" />&nbsp;
                    Find More of My Projects on GitHub
                </button>
            </div>
        </article>
    )
}

export function Footer() {
    return (
        <footer className='w-75 mx-auto my-5 p-1 text-center'>
            <small>
                This site was developed by me, <Highlight>Matthew Hamel</Highlight>, using a blend of <Highlight>HTML</Highlight>, <Highlight>CSS</Highlight>, <Highlight>React.js</Highlight>, and <Highlight>Bootstrap</Highlight>.
                Check out the code on GitHub&nbsp;
                <a className='link-underline-light text-light' href='https://github.com/MDHamel/hamelsite2024' target='_blank' rel="noreferrer">Here</a>.
            </small>
        </footer>
    )
}
