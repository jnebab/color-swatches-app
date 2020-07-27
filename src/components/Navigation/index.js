import React from 'react'
import styled from 'styled-components'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';

const StyledAppBar = styled(AppBar)`
    background-color: #363c3c !important;    
    z-index: 1300 !important;

    .MuiToolbar-regular {
        min-height: 80px;
    }
`

const StyledToolbar = styled(Toolbar)`
    display: flex;
    ${'' /* width: 100%; */}
    justify-content: space-between;
`

const StyledSearchBox = styled(InputBase)`
    input {
        color: #878b8b;
        background: #fff;
        border-radius: 8px;
        padding: 8px 15px;
    }
`

export default function Navigation(props) {
    return (
    <StyledAppBar position="fixed">
        <StyledToolbar>
            <Typography variant="h6" noWrap>
                Helpful Human
            </Typography>
            <StyledSearchBox
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
            />
        </StyledToolbar>
      </StyledAppBar>
    )
}