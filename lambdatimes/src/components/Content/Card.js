import React from "react";

import PropTypes from "prop-types";

import styled from "styled-components";

const SCard = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`;

const SHeadline = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`;

const SAuthor = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
`;
const SImgC = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
`;

const SImg = styled.img`
  width: 40px;
`;

const SSpan = styled.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;
const Card = ({ headline, img, author }) => {
  return (
    <SCard>
      <SHeadline>{headline}</SHeadline>
      <SAuthor>
        <SImgC>
          <SImg src={img} />
        </SImgC>
        <SSpan>By {author}</SSpan>
      </SAuthor>
    </SCard>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  headline: PropTypes.string,
  img: PropTypes.string,
  author: PropTypes.string
};

export default Card;
