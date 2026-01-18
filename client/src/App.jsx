//TODO TEMPLATE: set up a routing system and import relevant components
//note: I advise you have a component for your root route too ("/")
//in the components folder you have the minimum amount of components to make your app work, but I really recommend you make the most of the component system (props!!!!!)
//it's not a requirement, but I think the users would like some conditional rendering to make the UI less cluttered...

import { BrowserRouter, Routes, Route } from "react-router";
import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Form from "./components/Form";
import Posts from "./components/Posts";
import './App.css';
import TopButton from "./components/TopButton";

function App() {
  // todo: conditionally render top button based on 'isVisible' true or false
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    function handleScroll() {
      window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
      // console.log(isVisible);
    }
    // add listener to document window
    window.addEventListener("scroll", handleScroll);
    // clean up listener when component unmounts, prevents memory leak
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/Posts" element={<Posts />} />
        </Routes>
        <Footer />
        {isVisible && <TopButton />}
      </BrowserRouter>
    </>
  )
}

export default App;