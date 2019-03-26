import React from "react";
import Tab from "./Tab";

import PropTypes from "prop-types";

import styled from "styled-components";

const STabs = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const STopics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const SSpan = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;
const Tabs = props => {
  return (
    <STabs>
      <STopics>
        <SSpan>TRENDING TOPICS:</SSpan>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {props.tabs.map((tab, i) => (
          <Tab
            key={i}
            tab={tab}
            selectedTabHandler={props.selectedTabHandler}
            selectedTab={props.selectedTab}
          />
        ))}
      </STopics>
    </STabs>
  );
};

// Make sure to use PropTypes to validate your types!

Tabs.propTypes = {
  selectedTabHandler: PropTypes.func,
  selectedTab: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.string)
};

export default Tabs;
