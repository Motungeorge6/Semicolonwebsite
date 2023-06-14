import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import "../style/Footer.css";
import Tribal from "../../../asset/career/tribal-mark-square-white.png";

const Footer = () => {
  return (
    <>
      <Box>
        <Container>
          <Row>
            <Column>
              <Heading>Contact Us</Heading>
              <FooterLink href="#">
                312, Herbert Macaulay Way, Sabo Yaba, Lagos.
              </FooterLink>
              <FooterLink href="#">+234 906 000 8609</FooterLink>
              <FooterLink href="#">info@semicolon.africa</FooterLink>
            </Column>
            <Column>
              <Heading>For Businesses</Heading>
              <FooterLink href="#">Talent Outsourcing</FooterLink>
              <FooterLink href="#">Corporate Training</FooterLink>
              <FooterLink href="#">Project Implementation</FooterLink>
              <FooterLink href="#">Project Advisory</FooterLink>
            </Column>
            <Column>
              <Heading>For Individuals</Heading>
              <FooterLink href="#">Apply to Program</FooterLink>
              <FooterLink href="#">Join SWiT</FooterLink>
              <FooterLink href="#">Find Jobs</FooterLink>
            </Column>
            <Column>
              <Heading>About Us</Heading>
              <FooterLink href="#">Events</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
            </Column>
          </Row>

          <Row>
            <Column>
              <Heading>Follow Us</Heading>
            </Column>
            <Column>
              <Heading>Insights</Heading>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Case Studies</FooterLink>
              <FooterLink href="#">Reports</FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
