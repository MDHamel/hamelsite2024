import { createContext, useContext, useState, useEffect, useRef } from 'react';
import './App.css';
import { AboutMe, Contact, Education, Experience, Footer, Projects } from './paragraphs';
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
            <div className='d-flex flex-column py-3 p-3 '>
              <div className='overflow-hidden'>
                <h1 id="Name" className='display-5 text-light text-center pb-2'>Matthew Hamel</h1>
              </div>
              <hr id="NameDivider" className='w-100 text-center' />
              <div className='overflow-hidden'>
                <h3 id="JobTitle" className='display-6 fs-4 text-light text-center pt-3'>Web and Software Developer</h3>
              </div>
              <div className='my-5'>
                <h6>
                  <b className='text-light'><i class="bi bi-geo-alt-fill"></i>&emsp;Location &emsp;</b>
                  San Francisco Bay Area, California
                </h6 >
                <h6>
                  <b className='text-light'><i class="bi bi-envelope-fill"></i>&emsp;E-mail &emsp;&emsp;</b>
                  matt@matthewhamel.dev
                </h6>

              </div>
            </div>
            <Menu />
          </div>
        </DynamicContainer>


        <div id="content" className='fluid-container d-flex position-relative pt-5' >
          <div className='w-100 pt-4'>
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

        <DynamicContainer width='150px' right='3vw' bottom='0'>
          <h4 className='SectionTitle d-md-none px-5 my-5'>Links</h4>
          <div className='Links d-flex flex-md-column flex-wrap mb-5 mb-md-0'>
            <ExpandingIcon icon="bi-file-earmark-pdf-fill" text="Résumé" url={resumepdf} index="4" />
            <ExpandingIcon icon="bi-envelope-at-fill" text="Email" url="mailto:matt@matthewhamel.dev" index="3" />
            <ExpandingIcon icon="bi-linkedin" text="LinkedIn" url="https://www.linkedin.com/in/mattdhamel/" index="2" />
            <ExpandingIcon icon="bi-github" text="GitHub" url="https://github.com/MDHamel" index="1" />
            <ExpandingIcon icon="bi-twitter-x" text="Twitter" url="https://twitter.com/TheHamelDev" index="0" />
            <figure id="IconLine" className='vr text-light ms-4 mt-3 mb-0 d-md-block d-none' style={{ height: '78px', width: '2px' }} />
          </div>
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
  }, []);

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
  }, [setCurrentSection, isVisible]);


  return (
    <section id={title} className='SectionBox pb-5 mt-5 ' ref={triggerRef} >
      <p className="SectionTitle h2 px-5 fw-bold d-block d-sm-none" >{title}</p>
      {children}
    </section>
  )
}

function Menu() {
  const { currentSection } = useContext(currentSectionContext);

  const sections = ["About Me", "Education", "Experience", "Projects"]

  const scrollTo = (section) => {
    const element = document.getElementById(section.replace(/ /g, ''));

    window.scrollTo({
      top: element[0].offsetTop - (75 * (1 + (1 / element[0].offsetHeight))),
      behavior: 'smooth'
    });
  }

  return (
    <ul id="menu" className='text-light list-unstyled d-md-block d-none user-select-none ps-2 ms-3'>
      {sections.map((val, i) => { return (<a className='text-decoration-none' href={`#${val}`}><li id={currentSection == val ? "selected" : ""}>{val}</li></a>) })}
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
