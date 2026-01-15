import { BrowserRouter, Routes, Route, Link } from "react-router";
// import { useState } from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Form from "./components/Form"
import Posts from "./components/Posts"
import './App.css'

function App() {

  // todo: set state for top button??
  // const [btn, setBtn] = useState(false);
  // if 'true' -> style={{display:"block"}}, 'false' -> style={{display:"none"}}, set top button state??

  // const topBtn = document.getElementById("topBtn");
  // function scrollFunction() {// show / hide 'top' button
  //     if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
  //         topBtn.style.display = "block";
  //     } else {
  //         topBtn.style.display = "none";
  //     }
  // }

  // window.onscroll = () => scrollFunction();


  return (
    <>
      <BrowserRouter>
        <Header />
        <Link to="/form">guestbook</Link>&nbsp;|&nbsp;{/* todo: decide link/route */}
        <Link to="/posts">guestbook comments</Link>{/* todo: decide link/route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/Posts" element={<Posts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App