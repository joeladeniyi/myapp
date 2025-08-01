import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Works from "./components/works/works";
import Contact from "./components/contact/contact";
import Education from "./components/education/education";
import Footer from "./components/footer/footer";
function App() {
  return (
   <div >
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  
  )
      
}
export default App;
