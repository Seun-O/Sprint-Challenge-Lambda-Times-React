import React from "react";

import PropTypes from "prop-types";

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

  const selectTab = () => {
    props.selectedTabHandler(props.tab);
  };

  console.log(props.selectedTab);
  return (
    <div
      className={props.tab === props.selectedTab ? `tab active-tab` : `tab`}
      onClick={selectTab}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  selectedTabHandler: PropTypes.func,
  selectedTab: PropTypes.string,
  tab: PropTypes.string
};

export default Tab;
