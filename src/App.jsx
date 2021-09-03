import React from 'react'
import Navbar from './Navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Switch } from 'react-router-dom';
import Home from './Home'
import Hiring from './Components/Hiring'
import Footer from './Footer';
import Testimonial from './HomeComponents/Testimonial';
import Complaints from './Components/Complaints';
import ContactUs from './Components/ContactUs';
import Courses from './Components/Courses';

function App() {

    return (
        <div>
            <Navbar />
            <Switch>
                <Route path={ ''} exact component={Home} />
                <Route path={ '/TEN-frontend-clone-/'} exact component={Home} />
                <Route path='/hiring' exact component={Hiring} />
                <Route path='/testimonials' exact component={Testimonial} />
                <Route path='/complaints' exact component={Complaints} />
                <Route path='/contact' exact component={ContactUs} />
                <Route path='/onlinecourse' exact component={Courses} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App
