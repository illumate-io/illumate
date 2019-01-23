import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import {Link} from "react-router-dom";
import './NavigationBar.css'

class NavigationBar extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  logout = () => {
    window.localStorage.clear()
  };

  render() {
    return (
      <div>
        <Navbar className='navi' light expand="md">
          <NavbarBrand tag={Link} to="/home">illumate</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/profile">Account</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.logout} href="/login">Logout</NavLink>
              </NavItem>
              {/*<UncontrolledDropdown nav inNavbar>*/}
                {/*<DropdownToggle nav caret>*/}
                  {/*Options*/}
                {/*</DropdownToggle>*/}
                {/*<DropdownMenu right>*/}
                  {/*<DropdownItem>*/}
                    {/*Option 1*/}
                  {/*</DropdownItem>*/}
                  {/*<DropdownItem>*/}
                    {/*Option 2*/}
                  {/*</DropdownItem>*/}
                  {/*<DropdownItem divider />*/}
                  {/*<DropdownItem>*/}
                    {/*Reset*/}
                  {/*</DropdownItem>*/}
                {/*</DropdownMenu>*/}
              {/*</UncontrolledDropdown>*/}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar
