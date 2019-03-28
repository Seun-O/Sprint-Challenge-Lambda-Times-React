import React, { Component } from "react";

export default function withAuthenticate(Login, Content) {
  return class extends Component {
    state = { loggedIn: false, username: "", password: "" };

    getLogin = () => {
      if (this.state.username === "") {
        alert("Please enter a Username");
      } else if (this.state.password === "") {
        alert("Please enter a Password");
      } else {
        this.setState({ loggedIn: true });
      }
    };

    getUsername = usernameInput => {
      this.setState({ username: usernameInput }, () => {
        localStorage.setItem("username", this.state.username);
      });
    };

    getPassword = passwordInput => {
      this.setState({ password: passwordInput });
    };

    render() {
      return (
        <div>
          {this.state.loggedIn ? (
            <Content />
          ) : (
            <Login
              getLogin={this.getLogin}
              getUsername={this.getUsername}
              value={this.state.username}
              getPassword={this.getPassword}
              pValue={this.state.password}
            />
          )}
        </div>
      );
    }

    componentDidMount() {
      if (localStorage.hasOwnProperty("username")) {
        let value = localStorage.getItem("username");
        this.setState({ username: value, loggedIn: true });
      }
    }
  };
}
