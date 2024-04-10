import { createContext, useContext, useState } from 'react';
import diplomaSVG from "./assets/diploma.png";


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
    const highlighter = (letter, i) => { return letter == " " ? <span> </span> : <div className='highlight' style={{ "--index": i }}>{letter}</div> };
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
        <article className='mx-md-5'>
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
                            <img src={diplomaSVG} width={"40%"} className='mx-auto mt-2 px-md-2' />
                        </div>
                        <div className='my-3 mx-4' style={{ width: "85%" }}>
                            <h5 className='fw-bold underline text-center mt-3'>Las Positas Community College</h5>
                            <hr className='w-75 text-light text-center my-3 mx-auto' />

                            <p >
                                After graduating highschool, I enrolled at Las Positas Community College and worked towards transferring to a four year university for my B.S.
                                While here, I also formed a <Highlight>Programming Club</Highlight> with some friends and was named Vice President.
                                I took courses that covered concepts such as <Highlight>Computer Science</Highlight>, <Highlight>Assembly Languages</Highlight>, <Highlight>Physics</Highlight>, <Highlight>2D and 3D Calculus</Highlight>, and more GE classes.
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
                        <div className='bg-lite-blue d-flex justify-content-center d-flex flex-column text-center fw-bold ' style={{ minHeight: "100%", width: "25%" }}>
                            <div className='px-1 text-light'>
                                <p className='m-0 p-0'>B.S.</p>
                                <p className='m-0 p-0'>Computer</p>
                                <p className='m-0 p-0'>Science</p>
                            </div>
                            <img src={diplomaSVG} width={"40%"} className='mx-auto mt-2 px-md-2' />
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
                                During my tenure at <Highlight>theCoderSchool</Highlight>, I taught children aged 6-16 how to code and/or helped them with homework as individuals or in groups of two.
                                I tried to make each student's experience unique and exciting so that they would become <Highlight>passionate</Highlight> about their projects.
                                During the summer, I was also responsible for <Highlight>organizing</Highlight> and <Highlight>instructing</Highlight> a larger number of students for <Highlight>Summer Camps</Highlight> that would meet for around 5-6 hours a day for one week.
                                I often took <Highlight>initiative</Highlight> and would sign-up to teach multiple camps along with normal workload.
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
                                
                            </p>
                            <div className='d-flex flex-wrap w-100'>
                                

                            </div>
                        </div>
                    </div>
                </SubSectionBox>
            </SelectedEventProvider>
        </article>
    )
}

export function Contact() {

}
