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
                1. Welcome to Word Builder game <br /> 2. Please read the rules
                before starting game <br /> 3. Total game time is 2 minutes and
                the timer starts once "Start Game" is clicked
                <br /> 4. Once game started,enter any word in the given
                field.The Bot displays word with respect to last letter of your
                word <br />
                5. Then continue game by entering next word in the field.The
                next word should start with lastletter of bot word <br />
                6. Enjoy the game and improve your vocabulary skills
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
