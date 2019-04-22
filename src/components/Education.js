import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {" "}
            {this.props.startyear}-{this.props.endyear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>{this.props.schoolname}</h4>
          <p>{this.props.schooldescription}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Education;
