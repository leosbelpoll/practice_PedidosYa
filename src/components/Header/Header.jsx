import React, {Component} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import Nav from "../Nav/Nav";

const HeaderStyled = styled.header`
    background: #626262;
    color: white;
    padding: 30px;
    text-align: center;
`;

class Header extends Component {
    render() {
        return (
            <>
                <HeaderStyled>
                    <Nav/>
                    <h1>This is the Header</h1>
                </HeaderStyled>
            </>
        );
    }
}

export default Header;