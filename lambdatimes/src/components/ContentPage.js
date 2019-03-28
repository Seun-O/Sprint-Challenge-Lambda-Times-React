import React from "react";
import TopBar from "./TopBar";
import Header from "./Header";
import Content from "./Content/Content";
import styled from "styled-components";

const SApp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: "PT Sans", sans-serif;
`;

export default function ContentPage() {
  return (
    <div>
      <SApp>
        <TopBar />
        <Header />
        <Content />
      </SApp>
    </div>
  );
}
