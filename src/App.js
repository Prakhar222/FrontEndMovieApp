import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Signup from './SignUp';
import { Provider } from 'react-redux';
import store from "./Store.js";
import Dashboard from './components/Dashboard.js';
import TheatreList from "./components/theatres/TheatreList.js";
import ShowScreening from './components/screening/ShowScreening.js';
import AdminDashboard from './components/AdminDashboard.js';
import UpdateMovie from './components/adminmovies/UpdateMovie';
import AddMovie from './components/adminmovies/AddMovie';
import AdminScreeningList from './components/AdminScreeningList.js';
import AddScreening from './components/adminscreening/AddScreening.js';
import UpdateScreening from './components/adminscreening/UpdateScreening.js';
import UserList from './components/UserList.js';
import Bookingcard from './booking/Bookingcard.js';
import MyTicketList from './booking/MyTicketList.js';

// import { auth } from "./firebase.js";
// import { useEffect, useState } from 'react';
class App extends Component {

    constructor(props)
    {
        super(props);
        this.logout=this.logout.bind(this);
        this.state={
            userId:JSON.parse(localStorage.getItem('user')),
            adminId:JSON.parse(localStorage.getItem('admin'))
           //userId:null
        }  
    }

    // componentDidMount() {
    //     if (typeof window !== 'undefined') {
    //         this.setState({userId: localStorage.getItem('user')})

    //         window.addEventListener('storage', this.localStorageUpdated)
    //     }
    // }
    // componentWillUnmount(){
    //     if (typeof window !== 'undefined') {
    //         window.removeEventListener('storage', this.localStorageUpdated)
    //     }
    // }
   
    // localStorageUpdated(){
    //     // if (!localStorage.getItem('localstorage-status')) {
    //     //     this.updateState(false)
    //     // } 
    //     // else if (!this.state.userId) {
    //     //     this.updateState(true)
    //     // }
    //     this.updateState(localStorage.getItem('user'));
    // }
    // updateState(value){
    //     this.setState({userId:value})
    // }
    
    // checkStorage = (e) => {
    //     // if('user' == e.key && this.state.userId != JSON.parse(localStorage.getItem('user'))){
    //         this.setState({userId: JSON.parse(localStorage.getItem('user'))})
    //     // }
    // }
    
    // componentDidMount(){
    //     window.addEventListener('storage', this.checkStorage)
    // }
    
    // componentWillUnmount(){
    //     window.removeEventListener('storage', this.checkStorage)
    // }


    logout()
    {
        localStorage.removeItem("user");
        localStorage.removeItem("admin");

        //this.props.history.push("/sign-up");
    }
    
    //console.log(userId);
    render()
    {

      //const userId=JSON.parse(localStorage.getItem('user'));

    return (
        <div>
            <Provider store={store}>
                <Router>
                    <div className="wrapper ">
                        <link href="../assets/css/material-dashboard.css?v=2.1.2" rel="stylesheet" />
                        <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
                            <div className="logo"><a  className="simple-text logo-normal">
                               <i> Movie Booking app</i>
                            </a></div>
                            <div className="sidebar-wrapper">
                                <ul className="nav">
                                {this.state.userId==null || this.state.userId==0 ? null:
                                <li className="nav-item active  ">
                                        <Link to={"/dashboard"} className="nav-link">
                                            <i className="home">Home</i>
                                            <br />
                                        </Link>
                                </li>}
                                {this.state.userId==null || this.state.userId==0 ? null:
                                     <li className="nav-item ">
                                        <Link to={"/myticketlist"} className="nav-link">
                                            <i  className="material-icons">MyBookings</i>
                                            <br />
                                        </Link>
                                    </li>}

                                {this.state.adminId==null || this.state.adminId==0 ? null:
                                     <li className="nav-item ">
                                        <Link to={"/admindashboard"} className="nav-link">
                                            <i  className="material-icons">MovieCRUD</i>
                                            <br />
                                        </Link>
                                    </li>}

                                    {this.state.adminId==null || this.state.adminId==0 ? null:
                                     <li className="nav-item ">
                                        <Link to={"/adminscreeninglist"} className="nav-link">
                                            <i  className="material-icons">ScreeningCRUD</i>
                                            <br />
                                        </Link>
                                    </li>}

                                    {this.state.adminId==null || this.state.adminId==0 ? null:
                                     <li className="nav-item ">
                                        <Link to={"/userlist"} className="nav-link">
                                            <i  className="material-icons">User</i>
                                            <br />
                                        </Link>
                                    </li>}


                                   { 
                                   this.state.adminId==null ||this.state.adminId==0 || this.state.userId==null ||this.state.userId==0 ?  
                                   <li className="fa fa-fw fa-user ">
                                        <Link to={"/sign-up"} className="nav-link" >
                                            <i className="fa fa-fw fa-user">Login/Register</i>
                                            <br />
                                        </Link>
                                    </li>:null

                                    }
                                     
                                    {this.state.userId==null || this.state.userId==0 ? null:
                                     <li className="nav-item ">
                                        <Link to={"/"} className="nav-link">
                                            <i onClick={this.logout} className="material-icons">Logout</i>
                                            <br />
                                        </Link>
                                    </li>}
                                    {this.state.adminId==null || this.state.adminId==0 ? null:
                                     <li className="nav-item ">
                                        <Link to={"/"} className="nav-link">
                                            <i onClick={this.logout} className="material-icons">Logout</i>
                                            <br />
                                        </Link>
                                    </li>}
                                   
                                </ul>
                                <footer><b>BookMovieTicket ??</b></footer>
                            </div>
                        </div> 
                        <div className="main-panel">
                            <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                                <div class="container-fluid">
                                    <div class="navbar-wrapper">
                                    </div>
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="navbar-toggler-icon icon-bar"></span>
                                        <span class="navbar-toggler-icon icon-bar"></span>
                                        <span class="navbar-toggler-icon icon-bar"></span>
                                    </button>
                                </div>
                            </nav>
                        </div>

                        <div className="outer">
                            <div className="inner"> 
                          
                                <Switch>
                                    <Route path="/admindashboard" component={AdminDashboard}/>
                                    <Route exact path="/" component={Signup} />
                                    <Route path="/dashboard" component={Dashboard} />
                                    <Route path="/showscreening/:id" component={ShowScreening} />
                                    <Route path="/theatres/:id" component={TheatreList} />
                                    <Route path="/sign-up" component={Signup} />
                                    <Route path="/updateadminmovie/:id" component={UpdateMovie}/>
                                    <Route path="/adminscreeninglist" component={AdminScreeningList}/>
                                     <Route path="/addscreening" component={AddScreening} />
                                     <Route path="/updatescreening/:id" component={UpdateScreening} />
                                        <Route path="/myticketlist" component={MyTicketList}/>
                                     <Route path="/addadminmovie" component={AddMovie}/>
                                        <Route path="/bookingcard" component={Bookingcard}/>
                                     <Route path ="/userlist" component={UserList}/>
                                </Switch>
                            </div>
                        </div>
                     </div> 
                    </Router>
            </Provider>
        </div>
    );
}
}
export default App;