import { About,Contact, PageNotFound } from "./components/pages/index";
import {Route,Routes}from 'react-router-dom'
import Home from "./components/pages/Home/Home";

function Router(){
  return(
   < Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact us" element={<Contact/>}/>
    <Route path="*" element={<PageNotFound/>}/>
  </Routes>
  )
  
}
export default Router;