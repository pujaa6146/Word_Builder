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
    setTimeout(function () {
      if (window.confirm("Time out")) {
        window.location.reload();
      } else {
        window.location.reload();
      }
    }, 120000);
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
              <CardText style={{ textAlign: "left" }}>
                1. Welcome to Word Builder game. <br /> 2. Please read the rules
                before starting the game. <br /> 3. Total game time is 2 minutes
                and the timer will start once "Start Game" is clicked.
                <br /> 4. Enter any word in the given field for the Bot to
                predict a new word based on your word's last alphabet. <br />
                5. Carry on by following up with a new word starting with the
                last alphabet of bot's word. <br />
                6. Enjoy by improving your vocabulary!!!
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
