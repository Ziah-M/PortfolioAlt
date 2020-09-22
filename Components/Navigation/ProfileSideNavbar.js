import {
  faEnvelope,
  faGem,
  faHome,
  faUniversity
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Button,
  DropdownButton,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";
import { useLocation } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import * as ROUTES from "../../../../core/routes/routes";
import * as ROLES from "../../../../shared/constants/roles";
import { AuthUserContext } from "../../../../shared/Session";

const iconHomeStyle = {
  color: "#cfb12d",
  background: "#ECF0F0",
  borderRadius: "5px",
};

const iconEnvelopeStyle = {
  color: "#cfb12d",
  background: "#ECF0F0",
  borderRadius: "5px",
};

const iconUniversityStyle = {
  color: "#cfb12d",
  background: "#ECF0F0",
  borderRadius: "5px",
};

const iconGemStyle = {
  color: "#cfb12d",
  background: "#ECF0F0",
  borderRadius: "5px",
};

const Navigation = () => {
  const location = useLocation();
  const activePath = location.pathname;

  return (
    <Navbar expand="md" style={{ padding: "0px" }} className="flex-column">
      <NavItemContact activePath={activePath} />
      <p
        className="text-center"
        style={{
          backgroundColor: "#cfb12d",
          color: "white",
          margin: "0px",
          padding: ".8em",
          lineHeight: "1.2",
          spacing: "0px",
          width: "100%",
        }}
      >
        Ziah Mayne
      </p>
      <NavItemHome activePath={activePath} />
      <NavItemSkills activePath={activePath} />
      <NavItemPortfolio activePath={activePath} />
    </Navbar>
  );
};

const NavItemContact = () => (
  <LinkContainer to={ROUTES.ENTER}>
    <Nav.Link>
      <Button
        size="sm"
        variant="success"
        style={{
          padding: "10px",
          margin: "0px",
          spacing: "0px",
          backgroundColor: "#ECF0F0",
          borderColor: "#ECF0F0",
          color: "#cfb12d",
        }}
      >
        <FontAwesomeIcon
          style={iconEnvelopeStyle}
          icon={faEnvelope}
          size="3x"
        />
      </Button>
    </Nav.Link>
  </LinkContainer>
);

const NavItemHome = ({ activePath }) => (
  <LinkContainer to={ROUTES.LANDING}>
    <Nav.Link>
      <Button
        size="sm"
        variant="success"
        style={{
          padding: "10px",
          margin: "0px",
          spacing: "0px",
          backgroundColor: "#ECF0F0",
          borderColor: "#ECF0F0",
          color: "#cfb12d",
          borderBottom: "1px solid lightgray",
        }}
      >
        <FontAwesomeIcon
          style={activePath === "/landing" ? { color: "grey" } : iconHomeStyle}
          icon={faHome}
          size="3x"
        />
        <br />
        <p
          style={
            activePath === "/landing" ? { color: "grey" } : { color: "#cfb12d" }
          }
        >
          Home
        </p>
      </Button>
    </Nav.Link>
  </LinkContainer>
);

const NavItemSkills = ({ activePath }) => (
  <LinkContainer to={ROUTES.SKILLS}>
    <Nav.Link>
      <Button
        size="sm"
        variant="success"
        style={{
          padding: "10px",
          margin: "0px",
          spacing: "0px",
          backgroundColor: "#ECF0F0",
          borderColor: "#ECF0F0",
          color: "#cfb12d",
          borderBottom: "1px solid lightgray",
        }}
      >
        <FontAwesomeIcon
          style={
            activePath === "/skills" ? { color: "grey" } : iconUniversityStyle
          }
          icon={faUniversity}
          size="3x"
        />
        <br />
        <p
          style={
            activePath === "/skills" ? { color: "grey" } : { color: "#cfb12d" }
          }
        >
          Skills
        </p>
      </Button>
    </Nav.Link>
  </LinkContainer>
);

const NavItemPortfolio = ({ activePath }) => (
  <LinkContainer to={ROUTES.PORTFOLIO}>
    <Nav.Link>
      <Button
        size="sm"
        variant="success"
        style={{
          padding: "10px",
          margin: "0px",
          spacing: "0px",
          backgroundColor: "#ECF0F0",
          borderColor: "#ECF0F0",
          color: "#cfb12d",
          borderBottom: "1px solid lightgray",
        }}
      >
        <FontAwesomeIcon
          style={activePath === "/portfolio" ? { color: "grey" } : iconGemStyle}
          icon={faGem}
          size="3x"
        />
        <br />
        <p
          style={
            activePath === "/portfolio"
              ? { color: "grey" }
              : { color: "#cfb12d" }
          }
        >
          Portfolio
        </p>
      </Button>
    </Nav.Link>
  </LinkContainer>
);

// <Navbar expand="md" style={{ borderBottom: "3px solid #e7e7e7" }}
// className='flex-column'>
//   <NavItemPortfolioHome />
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="mr-auto flex-column">
//       <NavItemAppOne />
//       <NavItemAppTwo />
//       <NavItemAppThree />
//     </Nav>
//   </Navbar.Collapse>

//   <Navbar.Collapse
//     id="basic-navbar-nav"
//     className="justify-content-end mr-sm-2"
//   >
//     <Nav className="ml-auto flex-column">
//       <NavItemMyDropDown />
//       <Nav.Link>
//         <SignOutButton />
//       </Nav.Link>
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>
// );

export function NavItemPortfolioHome() {
  return (
    <LinkContainer to={ROUTES.ENTER}>
      <Navbar.Brand>Test</Navbar.Brand>
    </LinkContainer>
  );
}

function NavItemAppOne() {
  return (
    <LinkContainer to={ROUTES.PORTFOLIO}>
      <Nav.Link>
        <Button
          size="sm"
          style={{
            backgroundColor: "#c1d62e",
            borderColor: "#c1d62e",
          }}
        >
          App 1: e-commerce Store
        </Button>
      </Nav.Link>
    </LinkContainer>
  );
}

function NavItemAppTwo() {
  return (
    <LinkContainer to={ROUTES.PORTFOLIO}>
      <Nav.Link>
        <Button size="sm" variant="success">
          App 2: BetterNotes
        </Button>
      </Nav.Link>
    </LinkContainer>
  );
}

function NavItemAppThree() {
  return (
    <LinkContainer to={ROUTES.PORTFOLIO}>
      <Nav.Link>
        <Button size="sm" variant="light">
          App3: TODO
        </Button>
      </Nav.Link>
    </LinkContainer>
  );
}

function NavItemMyDropDown() {
  return (
    <AuthUserContext.Consumer>
      {(authUser) => (
        <Nav.Link>
          <DropdownButton
            size="sm"
            title="Example Pages"
            id="basic-nav-dropdown"
            variant="info"
            className="justify-center"
          >
            {/* NavDropDown doesn't seem to have access to 'variant' so had to use this 
Also by surrounding it with Nav.Link it correctly centers the element in the navbar (otherwise it goes to the top of it)
*/}
            <LinkContainer to={ROUTES.HOME}>
              <NavDropdown.Item>TODO - random dropdown item</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to={ROUTES.ACCOUNT}>
              <NavDropdown.Item>TODO - Account Page for User</NavDropdown.Item>
            </LinkContainer>
            {authUser && !!authUser.roles[ROLES.ADMIN] && (
              <LinkContainer to={ROUTES.ADMIN}>
                <NavDropdown.Item>
                  TODO - Admin Page for portfolio site - shows only for authed
                  admins
                </NavDropdown.Item>
              </LinkContainer>
            )}
            <NavDropdown.Divider />
          </DropdownButton>
        </Nav.Link>
      )}
    </AuthUserContext.Consumer>
  );
}

function NavItemSignOut() {
  return (
    <LinkContainer to={ROUTES.SIGN_IN}>
      <Nav.Link>
        <Button size="sm" variant="success">
          Sign In
        </Button>
      </Nav.Link>
    </LinkContainer>
  );
}

export default Navigation;
