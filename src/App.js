import { createContext, useContext, useState, useEffect, useRef } from 'react';
import './App.css';
import { AboutMe, Education, Experience, Footer, Projects } from './paragraphs';
import resumepdf from "./assets/WD_Matthew_Hamel_Resume_2024.pdf"


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
    <main className='container mx-auto my-0 p-0'>
      <div className="App container-fluid d-flex flex-column flex-md-row position-relative p-0 " >
        <CurrentSectionProvider>

          <DynamicContainer width=''>
            <div className='fluid-container ps-md-5 mt-1 mt-md-5 pt-0 w-100 mb-5'>
              <div className='d-flex flex-column'>
                <section className='my-4'>
                  <div className='overflow overflow-hidden  pb-2'>
                    <p id="Name"  className='display-5 text-light text-center overflow-hidden m-0'>Matthew Hamel</p>
                  </div>
                  <hr id="NameDivider" className='w-100 text-center border-2' />
                  <div className='overflow-hidden'>
                    <p id="JobTitle" className='display-6 fs-4 text-light text-center pt-3'>Web and Software Developer</p>
                  </div>
                </section >
                <section className='my-4'>
                  <p className='row my-4 fs-6'>
                    <b className='text-light col-md-4 col-4'><i className="bi bi-geo-alt-fill pe-2"></i>Location</b>
                    <span className='col-md-8 col-8'>San Francisco Bay Area, California</span>
                  </p >
                  <p className='row my-4 fs-6'>
                    <b className='text-light col-md-4 col-4'><i className="bi bi-envelope-fill pe-2"></i>E-mail</b>
                    <span className='col-md-8 col-8'>matt@matthewhamel.dev</span>
                  </p >
                </section>
              </div>
            </div>
          </DynamicContainer>


          <div id="content" className='' >
            <div className='w-100'>
              <Menu />

              <SectionBox title="About Me">
                <AboutMe />
              </SectionBox>
              <SectionBox title="Education">
                <Education />
              </SectionBox>
              <SectionBox title="Experience">
                <Experience />
              </SectionBox>
              <SectionBox title="Projects">
                <Projects />
              </SectionBox>
              <Footer />
            </div>
          </div>

          <DynamicContainer width='' bottom='3vh'>
            <section className='mx-0 ps-md-5 mb-3 mb-md-0'>
              <h4 className='d-md-none mx-auto text-center my-4 text-light'>Links</h4>
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

function SectionBox({ title, children }) {

  const triggerRef = useRef(null);
  const isVisible = useIntersection(triggerRef, "-49%");
  const { setCurrentSection } = useContext(currentSectionContext);


  useEffect(() => {
    if (isVisible) {
      setCurrentSection(title) // Trigger a function when the div is visible on view port
    }
  }, [setCurrentSection, isVisible, title]);


  return (
    <section id={title.replace(" ", "")} className='SectionBox' style={{ paddingTop: '75px' }} ref={triggerRef} >
      <p className="SectionTitle h2 fw-bold d-block d-sm-none" >{title}</p>
      {children}
    </section>
  )
}

function Menu() {
  const { currentSection } = useContext(currentSectionContext);

  const sections = ["About Me", "Education", "Experience", "Projects"]

  return (
    <nav id="menu" className='text-light list-unstyled user-select-none d-none d-md-flex justify-content-evenly '>
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
    <div className='DynamicContainer' style={{ top: top, left: left, right: right, bottom: bottom, width: width }}>
      {children}
    </div>
  );
}


export default App;
