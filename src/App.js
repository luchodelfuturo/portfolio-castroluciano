import Navbar from "./components/Navbar";
import React,{useState, useEffect} from 'react';
import Cover from "./components/Cover";
import About from "./components/About";
import Projects from "./components/Projects";
import Info from "./components/Info";
import Footer from "./components/Footer";



function App() {

  const [scrollHeight, setScrollHeight] = useState()

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollHeight(position)
  }

  useEffect( () =>{
    window.addEventListener("scroll", handleScroll)
  }, [scrollHeight])




  return (
    <div>
      <Navbar isScrolling={scrollHeight}/>
      <Cover/>
      <About/>
      <Projects/>
      <Info/>
      <Footer/>
     
    </div>
  );
}

export default App;
