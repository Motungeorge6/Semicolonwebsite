import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";
import Button from "../../button/Button";
import semicolonLogo from "../../../asset/homePage/image/svg/semicolonLogo.svg";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavLink to="/">
          <img src={semicolonLogo} />
        </NavLink>
        <NavMenu>
          <NavLink to="/individuals" activeStyle>
            Individuals
          </NavLink>
          <NavLink to="/businesses" activeStyle>
            Businesses
          </NavLink>
          <NavLink to="/aboutUs" activeStyle>
            About Us
          </NavLink>
          <NavLink to="/careers" activeStyle>
            Careers
          </NavLink>
        </NavMenu>
        <NavBtn>
          <div>
            <Button variant="outline" style={{ padding: "10px 20px" }}>
              Join Talent Pool
            </Button>
          </div>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
