import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/Main";
import { Link } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-modify"
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                MyPortfolio
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/Aboutme">About Me</Link>
              <Link to="/Projects">Projects</Link>
              <Link to="/Resume">Resume</Link>
              <Link to="/Contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                MyPortfolio
              </Link>
            }
          >
            <Navigation>
              <Link to="/Aboutme">About Me</Link>
              <Link to="/Projects">Projects</Link>
              <Link to="/Resume">Resume</Link>
              <Link to="/Contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
