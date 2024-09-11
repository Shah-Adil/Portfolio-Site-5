/** @format */

import Header from "./assets/page/Header";
import Home from "./assets/page/Home";
import About from "./assets/page/About";
import Contact from "./assets/page/Contact";
import Work from "./assets/page/Work";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='bg-background   h-screen'>
          <div className=' m-auto px-4' style={{ maxWidth: "1200px" }}>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/work' element={<Work />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
