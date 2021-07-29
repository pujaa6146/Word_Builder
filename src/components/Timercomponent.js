import React, { Component } from "react";

class Timer extends Component {
  render() {
    return (
      <div className="circle">
        <svg
          width="200"
          viewBox="0 0 220 220"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(110,110)">
            <circle r="100" className="e-c-base" />
            <g transform="rotate(-90)">
              <circle r="100" className="e-c-progress" />
              <g id="e-pointer">
                <circle cx="100" cy="0" r="8" className="e-c-pointer" />
              </g>
            </g>
          </g>
          <foreignObject x="35" y="70" width="150" height="100">
            <g className="controlls">
              <g className="display-remain-time">02:00</g>
            </g>
          </foreignObject>
        </svg>
      </div>
    );
  }
}

export default Timer;
