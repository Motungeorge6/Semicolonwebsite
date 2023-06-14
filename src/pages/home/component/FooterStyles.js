import styled from "styled-components";

export const Box = styled.div`
  padding: 180px 60px;
  background: #ffffff;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20px;
  margin-bottom: 15%;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 45px;
  width: 90% @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #38516d;
  margin-bottom: 26px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #ff5a5a;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  color: #38516d;
  margin-bottom: 40px;
  font-weight: bold;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150.5%;
`;
