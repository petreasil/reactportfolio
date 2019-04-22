import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Logo from "../Img/pic21.png";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={Logo}
                alt="logo"
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "200px",
                  padding: "10%"
                }}
              />
            </div>
            <h2 style={{ paddingTop: "1em" }}>Petrea Silviu </h2>
            <h4 style={{ color: "grey" }}>
              Web Developement/
              <br />
              Presales/Sales/Technology
            </h4>
            <hr style={{ width: "50%" }} />
            <p>
              Excellent problem solver, flexible, proactive and great team
              player. Sharp Eye for quality and details People, customer and
              result oriented.
            </p>
            <hr style={{ width: "50%" }} />
            <h5>Address</h5>
            <p>Galati, Romania</p>
            <h5>Phone</h5>
            <p>+40744441950</p>
            <h5>Email</h5>
            <p>petrea.silviu@gmail.com</p>
            <hr style={{ width: "50%" }} />
          </Cell>
          <Cell className="resume-right" col={8}>
            <h2>Education</h2>
            <Education
              startyear={2018}
              endyear={2019}
              schoolname="OpenClassrooms"
              schooldescription="FrontEnd Developement"
            />
            <Education
              startyear={1999}
              endyear={2004}
              schoolname="University Dunarea de Jos Galati"
              schooldescription="Electrical Engineering and
                    Computer Science Bachelor degree"
            />
            <hr style={{ borderTop: "3px solid #ff6e40" }} />
            <h2>Work Experience</h2>
            <Experience
              startyear={2008}
              endyear="current"
              jobname="Bussiness Sales Representative"
              jobdescription="Member of the Corporate Sales Team, provide initial analysis on
            customer requirements and solution design approach in order to
            provide the best technical solution. Create detailed solutions for
            Business Customers regarding mobile voice, fix voice , mobile
            DATA and IT solutions. Establish and improve customer relations.
            Propose and sell IT integrated solution for Business Customers.
            Achieve and exceed sales objectives and customer expectations
            whilst adhering to business development policies and
            procedures."
            />
            <Experience
              startyear={2006}
              endyear={2008}
              jobname="Sales Representative"
              jobdescription="Part of the Orange Sales Team, main task to promote Orange
              services and products. Establish and improve customer
              relationship.Identify needs and propose best solutions
              regarding assets utilization.To offer support to technical teams.
              To achieve and exceed sales objectives
              and customer expectations."
            />
            <Experience
              startyear={2005}
              endyear={2006}
              jobname="Problem Solving Executive Data"
              jobdescription="Part of the Orange Customer Service Team. Main task: to offer
              clear information to the clients, regarding company’s products
              and services.To promote company’s products and services.To
              process all the necessary changes in the client’s profile,offering
              assistance and counselling to the clients.Technical support for
              mobile internet connection using modems/phones/data cards."
            />
            <Experience
              startyear={2004}
              endyear={2005}
              jobname="Customer Care Representative"
              jobdescription="Customer support for Orange Romania SA clients regarding
              company products and services."
            />
            <hr style={{ borderTop: "3px solid #ff6e40" }} />
            <h2>Skills</h2>
            <Skills skill="Javascript" progress={82} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="REACTJS" progress={78} />
            <Skills skill="NodeJS" progress={50} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
