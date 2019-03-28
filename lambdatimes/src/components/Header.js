import React from "react";
import styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const SH1 = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const SSpan = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;

  ${props => (props.type === "date" ? `margin-left: 25px; flex: 1;` : null)}
  ${props =>
    props.type === "temp"
      ? `text-align: right;margin-right: 25px;flex: 1;`
      : null}
`;
const Header = props => {
  return (
    <SHeader style={props.topBar}>
      <SSpan type="date">SMARCH 32, 2018</SSpan>
      <SH1 style={props.header}>Lambda Times</SH1>
      <SSpan type="temp">98°</SSpan>
    </SHeader>
  );
};

export default Header;
