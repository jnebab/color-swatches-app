import React from 'react'
import styled from 'styled-components'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Avatar from '@material-ui/core/Avatar';

import Logo from '../../assets/logo-symbol.svg'

const StyledAppBar = styled(AppBar)`
    background-color: #363c3c !important;    
    z-index: 1300 !important;

    .MuiToolbar-regular {
        min-height: 80px;
    }
`

const StyledToolbar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
`

const StyledSearchBox = styled(InputBase)`
    input {
        color: #878b8b;
        background: #fff;
        border-radius: 8px;
        padding: 8px 15px;
        font-family: 'Source Serif Pro', serif;
    }
`

export default function Navigation(props) {
    return (
    <StyledAppBar position="fixed">
        <StyledToolbar>
            <Avatar src={Logo} />
            <StyledSearchBox
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
            />
        </StyledToolbar>
      </StyledAppBar>
    )
}