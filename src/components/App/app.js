import React, { Component } from 'react';
import * as appActions from './actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AppComp extends Component {

    componentDidMount() {
        this.props.actions.app.getCountries();
    }

    render() {
        return (
            <div id="app">
                <h1> react app !</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    countries: state.appReducer.countries
});

const mapDispatchToProps = (dispatch) => {
    const actions = {
        app: bindActionCreators(appActions, dispatch)
    };
    return { actions };
};


const App = connect(mapStateToProps, mapDispatchToProps)(AppComp);

export default App;