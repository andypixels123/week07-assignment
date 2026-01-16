//TODO TEMPLATE: set up a routing system and import relevant components
//note: I advise you have a component for your root route too ("/")
// export default function App() {
//   return (
//     <>
//       <h1>Home</h1>
//       {/* routing system */}
//     </>
//   );
// }

//in the components folder you have the minimum amount of components to make your app work, but I really recommend you make the most of the component system (props!!!!!)
//it's not a requirement, but I think the users would like some conditional rendering to make the UI less cluttered...


import { BrowserRouter, Routes, Route, Link } from "react-router";
// import { useState } from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Form from "./components/Form"
import Posts from "./components/Posts"
import './App.css'
import TopButton from "./components/TopButton";

function App() {


  // ! top button ----------------------
  // todo: set state for top button?? is this the way to go?
  // const [btn, setBtn] = useState(false);
  // if 'true' -> style={{display:"block"}}, 'false' -> style={{display:"none"}}, set top button state??
  // conditional render??
  // const topBtn = document.getElementById("topBtn");
  // function scrollFunction() {// show / hide 'top' button
  //     if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
  // ! conditional render??
  //         topBtn.style.display = "block";
  //     } else {
  //         topBtn.style.display = "none";
  //     }
  // }
  // window.onscroll = () => scrollFunction();
  // ! end top button ------------------


  return (
    <>
      <BrowserRouter>
        <Header />
        <Link to="/form">guestbook form</Link>&nbsp;|&nbsp;{/* todo: decide link/route */}
        <Link to="/posts">guestbook comments</Link>{/* todo: decide link/route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/Posts" element={<Posts />} />
        </Routes>
        <Footer />
        {/* conditionally render top button?? */}
        <TopButton />
      </BrowserRouter>
    </>
  )
}

export default App