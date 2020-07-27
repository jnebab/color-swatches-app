import React from 'react'
import { useHistory } from "react-router-dom";
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

    .MuiButton-label,
    .MuiTypography-body1 {
        font-family: 'Source Serif Pro', serif;
        text-transform: capitalize;
        color: #000;
    }

    .MuiButton-label {
        font-size: 1.25rem;
        font-weight: 600;
    }

`

const InnerDrawer = styled.div`
    width: 90%;
    margin: 0 auto;
`

const StyledButton = styled(Button)`
    color: #000;
    padding: 8px 16px !important;
    border: 1px solid #000 !important;
    border-radius: 8px !important;
    background: #fff !important;
    width: 100%;

`

export default function Sidebar({ data }) {
    const history = useHistory()

    const handleRandomColor = () => {
        const randomIndex = Math.ceil(Math.random() * (11 - 0) + 0)
        const randomColor = data?.data[randomIndex].hex
        const hex = randomColor.replace("#", "")
        history.push(hex)
    }

    return (
        <StyledDrawer
            variant="permanent"
        >
            <InnerDrawer>
                <StyledButton onClick={handleRandomColor}>Random Color</StyledButton>
                <List>
                    {data?.data?.map((swatch) => (
                    <ListItem button key={swatch.hex} onClick={() => history.push(swatch.hex.replace("#", ""))}>
                        <ListItemText primary={swatch.name} />
                    </ListItem>
                    ))}
                </List>
            </InnerDrawer>
      </StyledDrawer>
    )
}