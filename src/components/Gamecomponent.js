import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  InputGroup,
  Input,
  Button,
  Card,
  CardText,
  CardBody,
  CardHeader,
} from "reactstrap";
import Timer from "./Timercomponent";
import Home from "./Homecomponent";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_entries: [],
      botword: "",
    };
    this.updateUserInput = this.updateUserInput.bind(this);
  }
  componentDidMount() {
    //circle start
    let progressBar = document.querySelector(".e-c-progress");
    let pointer = document.getElementById("e-pointer");
    let length = Math.PI * 2 * 100;

    progressBar.style.strokeDasharray = length;

    function update(value, timePercent) {
      var offset = -length - (length * value) / timePercent;
      progressBar.style.strokeDashoffset = offset;
      pointer.style.transform = `rotate(${(360 * value) / timePercent}deg)`;
    }

    //circle ends
    const displayOutput = document.querySelector(".display-remain-time");

    let intervalTimer;
    let timeLeft;
    let wholeTime = 2 * 60; // manage this to set the whole time

    let isStarted = false;
    let isPaused = false;

    update(wholeTime, wholeTime); //refreshes progress bar
    displayTimeLeft(wholeTime);

    function timer(seconds) {
      //counts time, takes seconds
      let remainTime = Date.now() + seconds * 1000;
      displayTimeLeft(seconds);

      intervalTimer = setInterval(function () {
        timeLeft = Math.round((remainTime - Date.now()) / 1000);
        if (timeLeft < 0) {
          clearInterval(intervalTimer);
          isStarted = false;
          displayTimeLeft(wholeTime);
          return;
        }
        displayTimeLeft(timeLeft);
      }, 1000);
    }

    function pauseTimer() {
      if (isStarted === false) {
        timer(wholeTime);
        isStarted = true;
      } else if (isPaused) {
        timer(timeLeft);
        isPaused = isPaused ? false : true;
      } else {
        clearInterval(intervalTimer);
        isPaused = isPaused ? false : true;
      }
    }

    function displayTimeLeft(timeLeft) {
      //displays time on the input
      let minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;
      let displayString = `${minutes < 10 ? "0" : ""}${minutes}:${
        seconds < 10 ? "0" : ""
      }${seconds}`;
      displayOutput.textContent = displayString;
      update(timeLeft, wholeTime);
    }

    pauseTimer();

    // Execute a function when the user releases a key on the keyboard
    document
      .getElementById("user_input")
      .addEventListener("keyup", function (event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          document.getElementById("myBtn").click();
        }
      });
  }

  updateUserInput() {
    let user_word = document.getElementById("user_input").value;
    if (
      this.state.botword != "" &&
      user_word[0] != this.state.botword[this.state.botword.length - 1]
    ) {
      alert(
        "Enter a word starting with " +
          this.state.botword[this.state.botword.length - 1]
      );
      return;
    }
    fetch(
      "https://api.dictionaryapi.dev/api/v2/entries/en_US/" + user_word
    ).then((response) => {
      if (response.status == 404) {
        alert("Please enter a meaningful word");
        return;
      }
    });

    document.getElementById("user_input").value = "";

    if (this.state.user_entries.indexOf(user_word) > -1) {
      alert("You have already entered this word");
      return;
    } else {
      this.state.user_entries.push(user_word);
    }

    let user_lastletter = user_word[user_word.length - 1];
    let availsubjects = ["noun", "adjective", "animal"];
    fetch(
      "https://generate-words-api.herokuapp.com/random/" +
        availsubjects[Math.floor(Math.random() * 3)] +
        "/" +
        user_lastletter
    )
      .then((response) => response.json())
      .then((data) => this.setState({ botword: data[0] }));
  }

  render() {
    return (
      <>
        <Row>
          <Col xs="4">
            <InputGroup>
              <Input id="user_input" placeholder="Enter any word" />
            </InputGroup>
            <Button
              id="myBtn"
              style={{ margin: 10 }}
              onClick={this.updateUserInput}
            >
              ENTER
            </Button>
          </Col>
          <Col xs="4">
            <Card>
              <CardHeader>Bot-word</CardHeader>
              <CardBody>{this.state.botword}</CardBody>
            </Card>
          </Col>
          <Col xs="4">
            <Timer />
          </Col>
        </Row>
      </>
    );
  }
}

export default Game;
