import React, { Component } from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
  Jumbotron,
} from "reactstrap";
import Game from "./Gamecomponent";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game_started: false,
    };
    this.startGame = this.startGame.bind(this);
  }
  startGame() {
    this.setState({ game_started: true });
  }
  render() {
    return (
      <Container>
        <Row style={{ padding: "5%" }}>
          <Col>
            <Jumbotron>
              <h1 className="display-3">Word Builder</h1>
            </Jumbotron>
          </Col>
        </Row>

        {this.state.game_started ? (
          <Game />
        ) : (
          <Card style={{ width: "50%", margin: "auto" }}>
            <CardHeader tag="h3">Rules</CardHeader>
            <CardBody>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
            </CardBody>
            <CardFooter>
              <Button onClick={this.startGame} outline color="secondary">
                Start Game
              </Button>
            </CardFooter>
          </Card>
        )}
      </Container>
    );
  }
}

export default Home;
