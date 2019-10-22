import React, { Component } from 'react';
import './App.css'
import LandingPage from './containers/LandingPage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import version from './version.json';
import { connect } from 'react-redux';
class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log("Version : " + version.version)
        return (
            <div>
                <ToastContainer />
                <LandingPage />
            </div>
        );
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        customerform: state.customerform,
    }
}


export default connect(mapStateToProps)(App);
