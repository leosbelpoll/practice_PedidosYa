import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const NavStyled = styled.nav`
    position: absolute;
    top: 15px;
    right: 15px;
`;

const LinkStyled = styled(NavLink)`
    color: white;
    border: none;
    cursor: pointer;
    font-weight: 300;
    text-decoration: none;
    margin-left: 10px;
    padding-bottom: 5px;
    
    &.active {
      border-bottom: solid white 1px;
    }
    
    &:hover {
        color: rgba(255, 255, 255, 0.8);
    }
`;

class Nav extends Component {
    render() {
        return (
            <NavStyled>
                <LinkStyled exact to="/" activeClassName="active">Dashboard</LinkStyled>
                <LinkStyled exact to="/restaurants" activeClassName="active">Restaurant</LinkStyled>
            </NavStyled>
        );
    }
}

export default Nav;