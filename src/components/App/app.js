import React, { Component } from 'react';
import * as appActions from './actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CNavBar from '../CNavBar';
import { Table, Container, Row, Col } from 'reactstrap';
class AppComp extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    componentDidMount() {
        this.props.actions.app.getCountries();
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <CNavBar />
                <Container>
                {this.props.children}
                    <Row>
                        <Col xs="12">My App</Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                            <Table hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th> Name</th>
                                        <th>Code</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.countries.map(item => {
                                        return (
                                            <tr key={item.id}>
                                                <th scope="row">{item.id}</th>
                                                <td>{item.name}</td>
                                                <td>{item.code}</td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
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