import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import * as aboutActions from './actions';
import Detail from "./detail";
class AboutComp extends Component {

  componentDidMount() {
    this.props.actions.about.getProducts();
  }

  render() {
    return (
      <Row>
        <Col xs="12">
          <h1>About Page</h1>
        </Col>
        <Col xs="12">
          <Row>
            {this.props.products.map(item => {
              return (
                <Col xs="12" md="4" lg="3" key={item.id} className="PT5" >
                  <Card>
                    <CardImg top width="100%" src={item.image} height="300px" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>{item.name} {item.model} </CardTitle>
                      <CardSubtitle>{item.year} {item.class}</CardSubtitle>
                      <CardText className="cardTextCustom">
                        {item.description}
                      </CardText>
                      <Detail buttonLabel="Show Details"/>
                    </CardBody>
                  </Card>
                </Col>
                );
            })
            }
          </Row>

        </Col>
      </Row>

    )
  }
};



const mapStateToProps = state => ({
  products: state.aboutReducer.products
});

const mapDispatchToProps = dispatch => {
  const actions = {
    about: bindActionCreators(aboutActions, dispatch)
  }
  return { actions };
}

const About = connect(mapStateToProps, mapDispatchToProps)(AboutComp)

export default About;
