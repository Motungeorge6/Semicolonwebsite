import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
`;
export const Entity = styled.div`
  color: #070707;
  border: 1px solid #FF2E2E;
  border-radius: 10px;
  max-width: 690px;
  width: 100%;

  margin: auto;
  &:first-of-type {
    margin-top: 1.5em;
  }
`;
export const Inner = styled.div`
  padding: 75px 40px;
  max-width: 800px;
  margin: auto;
  flex-direction: column;
  display: flex;
`;
export const Question = styled.div`
  font: 25px;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 2px;
  display: flex;
  font-weight: normal;
  background: #FFF2C7;
  padding: 0.75em 1.12em;
  align-items: center;
  border-radius: 10px;
  box-sizing: border-box;
`;
export const Text = styled.p`
  max-height: 1190px;
  background: #FFF2C7;
  transition: max-height 0.23s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 2%;
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150.5%;

  @media (max-width: 550px) {
    font-size: 15px;
    line-height: 25px;
  }
`;
export const Header = styled.h1`
  color: #070707;
  line-height: 7;
  margin-top: 0 !important;
  font-size: 45px;
  margin-bottom: 9px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 33px;
  }

`;