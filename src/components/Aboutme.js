import React, { Component } from "react";
import {
  Layout,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button
} from "react-mdl";

class Aboutme extends Component {
  render() {
    return (
      <div>
        <Grid col={12} shadow={4}>
          <Card style={{ paddingTop: "2em" }}>
            <CardTitle
              expand
              style={{
                color: "#fff",
                background:
                  "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC"
              }}
            >
              Update
            </CardTitle>

            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>View Updates</Button>
            </CardActions>
          </Card>
        </Grid>
      </div>
    );
  }
}

export default Aboutme;
