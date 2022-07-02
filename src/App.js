import React from "react";
import { BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
import TopMenu from "./components/TopMenu";
import LandingPage from "./components/LandingPage";
import Products from "./components/products/Products";
import Contact from "./components/Contact";
import About from "./components/About";
import NewProduct from "./components/products/NewProduct";
import PageNotFound from "./components/PageNotFound";
import Update from "./components/products/Update";
import Login from "./components/auth/Login";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer,toast} from "react-toastify";

function App() {
  return (
    
    <Router>
       
     <div>
     <TopMenu />
     <ToastContainer/>
        <Switch>
        
        <Route path="/products/newproduct" component={NewProduct}/>
        <Route path="/products/updateproduct/:id" component={Update}/>
          <Route path="/products" component={Products}/>
          
          <Route path="/contact" component={Contact}/> 
          <Route path="/about" component={About}/> 
          <Route path="/login" component={Login}/> 
          <Route path="/notfound" component={PageNotFound}/> 
          <Route path="/" exact component= {LandingPage}/>
          <Redirect to="/notfound"/>
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
