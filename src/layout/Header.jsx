import { Navbar, Container } from "react-bootstrap";
import logo from "./../assets/images/sol-logo.png";
const Header = () => {
  return (
    <Navbar bg="white" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} alt="sol" height="30" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
