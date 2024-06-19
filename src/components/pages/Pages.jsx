import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Blog from "../offers/Offers"
import Contact from "../contact/Contact"
import Services from "../services/Services"
import Offers from "../offers/Offers"


const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/offers' component={Offers} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/services' component={Services} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
