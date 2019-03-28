import React from "react";
import styled from "styled-components";
import TopBar from "./TopBar";
import Header from "./Header";

const SDiv = styled.div`
  text-align: center;
  color: #333;
  margin-top: 10rem;
`;

const SForm = styled.form`
  background-color: white;
  width: 300px;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 1px 2px 0 rgba(34, 36, 38, 0.15);

  input {
    margin: 0 0 0.5rem 0;
    width: 100%;
    height: 2rem;
    border-radius: 4px;
    padding: 0 0 0 0.5rem;
    border: 0.5px solid lightgray;

    &::placeholder {
      color: lightgray;
    }
  }

  button {
    transition: all 0.5s ease-out;
    font-size: 1rem;
    background: #333;
    color: white;
    border: none;
    padding: 0.5rem 2rem;
    width: 100%;
    border-radius: 3px;

    &:hover {
      background: #f1f1f1;
      color: #333;
    }
  }
`;

export default props => {
  const getLogin = e => {
    e.preventDefault();
    props.getLogin();
  };

  const getUsername = e => {
    props.getUsername(e.target.value);
  };

  const getPassword = e => {
    props.getPassword(e.target.value);
  };
  return (
    <React.Fragment>
      <TopBar />
      <Header topBar={{ marginTop: 0 }} header={{ marginBottom: 0 }} />
      <SDiv>
        <div>
          <h1>Login to Lambda Times</h1>
        </div>
        <SForm onSubmit={getLogin}>
          <div>
            <input
              onChange={getUsername}
              type="text"
              placeholder="Username"
              value={props.value}
            />
          </div>
          <div>
            <input
              onChange={getPassword}
              type="password"
              placeholder="Password"
              value={props.pValue}
            />
          </div>
          <div>
            <button type="submit" value="submit">
              Submit
            </button>
          </div>
        </SForm>
      </SDiv>
    </React.Fragment>
  );
};
