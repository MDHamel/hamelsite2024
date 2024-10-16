import { createContext, useContext, useState, useEffect, useRef } from 'react';
import './App.css';
import { Education, Experience, Footer, Projects, Highlight } from './paragraphs';
import resumepdf from "./assets/Matthew_Hamel_Resume_2024.pdf"


const currentSectionContext = createContext();

function CurrentSectionProvider({ children }) {
  const [currentSection, setCurrentSection] = useState(false);

  return (
    <currentSectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </currentSectionContext.Provider>
  )
}

function App() {
  return (
    <main className='container-fluid container-xxl mx-auto my-0 p-0'>
      <div className="App d-flex flex-column flex-xxl-row position-relative p-0 " >
        <CurrentSectionProvider>

          <DynamicContainer width=''>
            <div className='fluid-container ps-xl-5 mt-1 mt-xl-5 pt-0 w-100 mb-5 position-relative h-100'>
              <div className=''>
                <section className='my-4'>
                  <div className='overflow overflow-hidden  pb-2'>
                    <p id="Name" className=' display-5 text-light text-center w-100 overflow-hidden m-0'><span className='highlight'>Matthew Hamel</span></p>
                  </div>
                  <hr id="NameDivider" className='w-100 text-center border-2' />
                  <div className='overflow-hidden'>
                    <p id="JobTitle" className='display-6 fs-5 text-light text-center pt-3'><span className='highlight fw-light'>Web Developer</span> and <span className='highlight fw-light'>Software Engineer</span></p>
                  </div>
                </section >
                <section className=''>
                  <p className='row fs-6 ms-lg-2 text-center text-lg-start'>
                    <b className='text-light col-xl-4 col-4 ps-4 ps-lg-0'><i className="bi bi-geo-alt-fill me-3"></i>Location:</b>
                    <span className='col-xl-8 col-8'>San Francisco Bay Area, California</span>
                  </p >
                  <p className='row fs-6 ms-lg-2 text-center text-lg-start'>
                    <b className='text-light col-xl-4 col-4 ps-2 ps-lg-0'><i className="bi bi-envelope-fill me-3"></i>E-mail:</b>
                    <span className='col-xl-8 col-8'>matt@matthewhamel.dev</span>
                  </p >
                  <div className='ms-lg-2 text-lg-start p-3 px-lg-0 py-lg-3'>
                  <b className='text-light '><i class="bi bi-person-circle me-3"></i>About Me:</b> <br className='mb-3'/>

                    <p className='fs-small' >
                      I started programming as a part of my <Highlight>Engineering Coursework</Highlight> in highschool and later programmed for our <Highlight>Robotics Team</Highlight>. I even taught myself <Highlight>Java</Highlight> over the summer going into my Junior year.
                      <br/><br/>
                      After highschool, I pursued my passion in computer programming and started working towards a degree in <Highlight>Computer Science</Highlight>. At <Highlight>Las Positas</Highlight>, I gained a foundation for <Highlight>OOP</Highlight> that I expanded on when I transferred to <Highlight>Cal State East Bay</Highlight>. 
                      At the same time, I was mentoring kids at <Highlight>theCoderSchool</Highlight>, teaching them the basics and more advanced topics in coding.
                      <br/><br/>
                      Following graduation and receiving my bachelor's degree, I started doing <Highlight>Freelance Web Development</Highlight>. I am open to new and exciting opportunities to expand my skill set and knowledge.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </DynamicContainer>


          <div id="content" className='' >
            <div className='w-100'>
              <NavBar />
              <SectionBox title="Projects">
                <Projects />
              </SectionBox>
              <SectionBox title="Experience">
                <Experience />
              </SectionBox>
              <SectionBox title="Education">
                <Education />
              </SectionBox>

              <Footer />
            </div>
          </div>

          <DynamicContainer width='' bottom='0px'>
            <section className='mx-0 ps-xl-5 mb-5 mb-xl-0 pb-xl-2' style={{backgroundColor: "var(--background-secondary)"}}>
              <h4 className='d-xl-none mx-auto text-center my-4 text-light'>Links</h4>
              <div className='Links d-flex flex-wrap justify-content-between'>
                <ExpandingIcon icon="bi-file-earmark-pdf-fill" text="Résumé" url={resumepdf} index="4" />
                <ExpandingIcon icon="bi-envelope-at-fill" text="Email" url="mailto:matt@matthewhamel.dev" index="3" />
                <ExpandingIcon icon="bi-linkedin" text="LinkedIn" url="https://www.linkedin.com/in/mattdhamel/" index="2" />
                <ExpandingIcon icon="bi-github" text="GitHub" url="https://github.com/MDHamel" index="1" />
                <ExpandingIcon icon="bi-twitter-x" text="Twitter" url="https://twitter.com/TheHamelDev" index="0" />
              </div>
            </section>
          </DynamicContainer>
        </CurrentSectionProvider>
        <figure id="AppBackground" className='container m-0 p-0' />
      </div>
    </main>
  );
}

export const useIntersection = (element, rootMargin) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const current = element?.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );
    current && observer?.observe(current);

    return () => current && observer.unobserve(current);
  }, [element, rootMargin]);

  return isVisible;
};

function SectionBox({ title, children, topOffset }) {

  const triggerRef = useRef(null);
  const isVisible = useIntersection(triggerRef, "-49%");
  const { setCurrentSection } = useContext(currentSectionContext);


  useEffect(() => {
    if (isVisible) {
      setCurrentSection(title) // Trigger a function when the div is visible on view port
    }
  }, [setCurrentSection, isVisible, title]);


  return (
    <section id={title} className='SectionBox ' ref={triggerRef}>
      <p className="SectionTitle h2 fw-bold d-block" >{title}</p>
      {children}
    </section>
  )
}

function NavBar() {
  const { currentSection } = useContext(currentSectionContext);

  const sections = ["Projects", "Experience", "Education"]

  return (
    <nav id="menu" className='text-light list-unstyled user-select-none d-none d-lg-flex justify-content-evenly '>
      {sections.map((val, i) => { return (<a key={i} className='text-decoration-none' href={`#${val.replace(" ", "")}`} id={currentSection === val ? "selected" : ""} style={{ "--index": i }}>{val}</a>) })}
    </nav>
  )
}

function ExpandingIcon({ icon, text, url, index }) {

  return (
    <div className='ExpandingIcon d-flex' onClick={() => { window.open(url, '_blank') }}>
      <i className={`bi fs-4 ${icon}`} style={{ "--index": index }} />
      <p className='h6 fw-bold'>{text}</p>
    </div>
  )
}

function DynamicContainer({ top = "auto", left = "auto", right = "auto", bottom = "auto", width = "45%", children }) {

  return (
    <div className='DynamicContainer' style={{ top: top, left: left, right: right, bottom: bottom, width: width, maxWidth: "18.5vw" }}>
      {children}
    </div>
  );
}


export default App;
