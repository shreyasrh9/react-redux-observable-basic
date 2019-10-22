import React, { Component } from 'react'
import './LandingPage.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as jobActions from '../actions'
import { Container } from 'reactstrap'

class Landingpage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <h1>Test</h1>
            </Container>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        customerForm: state.customerForm,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators(jobActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Landingpage);


