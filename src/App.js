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
    <div className="App container h-100 w-100 d-flex flex-column flex-md-row" >
      <CurrentSectionProvider>
        <DynamicContainer width='25vw'>
          <div className='fluid-container ps-md-5 mt-5 pt-5 w-100 mb-5'>
            <div className='d-flex flex-column'>
              <section className='my-4'>
                <div className='overflow-hidden'>
                  <h1 id="Name" className='display-5 text-light text-center pb-2'>Matthew Hamel</h1>
                </div>
                <hr id="NameDivider" className='w-100 text-center border-2' />
                <div className='overflow-hidden'>
                  <h3 id="JobTitle" className='display-6 fs-4 text-light text-center pt-3'>Web and Software Developer</h3>
                </div>
              </section >
              <section className='my-4'>
                <h6 className='row my-4'>
                  <b className='text-light col-md-4 col-4'><i class="bi bi-geo-alt-fill pe-2"></i>Location</b>
                  <span className='col-md-8 col-8'>San Francisco Bay Area, California</span>
                </h6 >
                <h6 className='row my-4'>
                  <b className='text-light col-md-4 col-4'><i class="bi bi-envelope-fill pe-2"></i>E-mail</b>
                  <span className='col-md-8 col-8'>matt@matthewhamel.dev</span>
                </h6 >
              </section>
            </div>
            <Menu />
          </div>
        </DynamicContainer>


        <div id="content" className='fluid-container d-flex position-relative' >
          <div className='w-100'>
            <SectionBox title="About Me">
              <figure className='py-3' />
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

        <DynamicContainer width='25vw' bottom='3vh'>
          <section className='mx-0 ps-md-5'>
            <h4 className='SectionTitle d-md-none mx-5 my-5'>Links</h4>
            <div className='Links d-flex flex-wrap justify-content-between'>
              <ExpandingIcon icon="bi-file-earmark-pdf-fill" text="Résumé" url={resumepdf} index="0" />
              <ExpandingIcon icon="bi-envelope-at-fill" text="Email" url="mailto:matt@matthewhamel.dev" index="1" />
              <ExpandingIcon icon="bi-linkedin" text="LinkedIn" url="https://www.linkedin.com/in/mattdhamel/" index="2" />
              <ExpandingIcon icon="bi-github" text="GitHub" url="https://github.com/MDHamel" index="3" />
              <ExpandingIcon icon="bi-twitter-x" text="Twitter" url="https://twitter.com/TheHamelDev" index="4" />
            </div>
          </section>
        </DynamicContainer>
      </CurrentSectionProvider>
    </div>
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
  const isVisible = useIntersection(triggerRef, "-48%");
  const { setCurrentSection } = useContext(currentSectionContext);


  useEffect(() => {
    if (isVisible) {
      setCurrentSection(title) // Trigger a function when the div is visible on view port
    }
  }, [setCurrentSection, isVisible, title]);


  return (
    <section id={title} className='SectionBox mt-5 py-4' ref={triggerRef} >
      <p className="SectionTitle h2 fw-bold d-block d-sm-none" >{title}</p>
      {children}
    </section>
  )
}

function Menu() {
  const { currentSection } = useContext(currentSectionContext);

  const sections = ["About Me", "Education", "Experience", "Projects"]
  
  return (
    <ul id="menu" className='text-light list-unstyled d-md-inline-block d-none user-select-none ms-0 row '>
      {sections.map((val, i) => { return (<a className='text-decoration-none' href={`#${val}`}><li id={currentSection === val ? "selected" : ""} className='col-8 my-2'>{val}</li></a>) })}
    </ul>
  )
}



function ExpandingIcon({ icon, text, url, index }) {

  return (
    <div className='ExpandingIcon d-flex' onClick={() => { window.open(url, '_blank') }}>
      <i className={`bi fs-4 ${icon}`} style={{ "--index": index }} />
      <p className='ms-2 h6 fw-bold '>{text}</p>
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
