import React, { Component } from 'react';

import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';


class About extends Component {


    render() {
        return (
            <Container >
                <Row>
                    <Col xs="12">
                        <h1>About Page</h1>
                    </Col>
                    <Col xs="12">
                        <Row>
                            <Col xs="6" md="4" lg="3">
                                <Card>
                                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <Button color="secondary" size="lg" block>Button</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="6" md="4" lg="3">
                                <Card>
                                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <Button color="secondary" size="lg" block>Button</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="6" md="4" lg="3">
                                <Card>
                                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <Button color="secondary" size="lg" block>Button</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="6" md="4" lg="3">
                                <Card>
                                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <Button color="secondary" size="lg" block>Button</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        );
    }
}



export default About;