import React from 'react'

import styled from 'styled-components'

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

const StyledDrawer = styled(Drawer)`
    .MuiDrawer-paper {
        width: 300px !important;
        padding-top: 120px;
        background: #d6d8d8 !important;
    }
`

const StyledButton = styled(Button)`
    color: #000;
    padding: 8px 16px !important;
    border: 1px solid #000 !important;
    border-radius: 8px !important;
    background: #fff !important;
`

export default function Sidebar({ randomSwatches, handleRandomColor }) {
    return (
        <StyledDrawer
            variant="permanent"
        >
            <div>
                <StyledButton onClick={handleRandomColor}>Random Color</StyledButton>
                <List>
                    {randomSwatches.map((swatch) => (
                    <ListItem button key={swatch.hex}>
                        <ListItemText primary={swatch.name} />
                    </ListItem>
                    ))}
                </List>
            </div>
      </StyledDrawer>
    )
}