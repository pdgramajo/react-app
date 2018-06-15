import React, { Component } from 'react';
import { Row, Col, Table } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as homeActions from './actions';

class HomeComp extends Component {
  componentDidMount() {
    this.props.actions.home.getCountries();
  }

  render() {
    return (
      <Row>
        <Col xs="12"> <h1>Home Page</h1></Col>
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
              {this.props.countries.map(item => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.code}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  countries: state.homeReducer.countries
});

const mapDispatchToProps = (dispatch) => {
  const actions = {
    home: bindActionCreators(homeActions, dispatch)
  };
  return { actions };
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComp);

export default Home;
