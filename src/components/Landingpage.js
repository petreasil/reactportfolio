import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Logo from "../Img/140.png";

class Landing extends Component {
  state = {
    isHovered: false
  };

  handleHover = () => {
    this.setState(prevState => ({
      isHovered: !prevState.isHovered
    }));
  };

  render() {
    const wierd = this.state.isHovered ? "animated tada logo" : "logo";
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-page">
          <Cell col={12}>
            <img
              src={Logo}
              alt="logo"
              className={wierd}
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleHover}
            />
            <div className="banner">
              <h1>Junior Frontend Developer</h1>
              <hr />
              <p>HTML/CSS | Bootstrap | Javascript | React</p>
              <div className="social-icons">
                {/*GitHub*/}
                <a
                  href="https://github.com/petreasil"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github" aria-hidden="true" />
                </a>
                {/*LinkedIn*/}
                <a
                  href="https://linkedin.com/in/petrea-silviu-ba34908"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" aria-hidden="true" />
                </a>
                {/*Twitter*/}
                <a
                  href="https://twitter.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-twitter-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
