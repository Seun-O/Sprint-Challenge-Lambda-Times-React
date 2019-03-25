import React from "react";
import styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const STopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const SContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
    .top-bar .container {
      width: 1280px;
    }

`;

const SContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const SSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;

  ${props =>
    props.direction === "left"
      ? `cursor: pointer; margin-right: 25%; font-weight: bold;`
      : null}
  ${props => (props.direction === "right" ? `cursor: pointer;` : null)}
  ${props =>
    props.direction === "center"
      ? `cursor: pointer; margin-right: 5%; &:hover{text-decoration: underline;} &:last-child{ margin-right: 0;}`
      : null}
`;

const SContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const SContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;
const TopBar = () => {
  return (
    <STopBar>
      <SContainer>
        <SContainerLeft>
          <SSpan direction="left">TOPICS</SSpan>
          <SSpan direction="left">SEARCH</SSpan>
        </SContainerLeft>
        <SContainerCenter>
          <SSpan direction="center">GENERAL</SSpan>
          <SSpan direction="center">BROWNBAG</SSpan>
          <SSpan direction="center">RANDOM</SSpan>
          <SSpan direction="center">MUSIC</SSpan>
          <SSpan direction="center">ANNOUNCEMENTS</SSpan>
        </SContainerCenter>
        <SContainerRight>
          <SSpan direction="right">LOG IN</SSpan>
        </SContainerRight>
      </SContainer>
    </STopBar>
  );
};

export default TopBar;
