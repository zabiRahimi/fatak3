import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from './header/index.js';
import Nav from './nav/index.js';
import MenuMiddle from './menuMiddle/index.js';
import About from './aboutUs/index.js';
import Content from './content/index.js';
import Footer from './footer/index.js';


import Options from './options/index.js';
import Contact from './contactUs/index.js';
import Complaint from './complaint/index.js';
import Order from './order/index.js';
import User from './user/index.js';
import Register from './user/register.js';
import Login from './user/login.js';
import ShowVerifyMobile from './user/showVerifyMobile.js';





class App extends Component {
    componentDidMount() {
        // Pusher.logToConsole = true;
        console.log(React.version)
    }
    render() {
        // const location=useParams();

        return (

            <Router >
                <div className="container2">
                    <Header />
                    <Nav />
                    <MenuMiddle />
                    <Routes>
                        <Route path="/">
                            <Home />
                        </Route>
                        <Route path="/aboutUs">
                            <About />
                        </Route>
                        {/* <Route path="/register">
                        <Register />
                    </Route> */}
                        <Route path="/contactUs">
                            <Contact />
                        </Route>
                        <Route path="/complaint">
                            <Complaint />
                        </Route>
                        <Route path="/order">
                            <Order />
                        </Route>
                        <Route path="user" element={<User />}>
                            <Route path="register" element={<Register />} />
                            <Route path="login" element={<Login />} />
                            <Route path="showVerifyMobile" element={<ShowVerifyMobile />} />
                        </Route>

                        <Route>
                            <NoMatch />
                        </Route>
                    </Routes>
                    <Content />

                    <Footer />
                </div>
            </Router>

        )
    }

}
// function About() {
//     return <h2>About</h2>;
// }

// function Users() {
//     return <h2>Users</h2>;
// }
function NoMatch() {
    // let location = useLocation();

    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}
export default App;
function Home() {
    return <h2>Home</h2>;
}




if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
