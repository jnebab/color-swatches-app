import React from 'react'
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';

const MainWrapper = styled.div`
    margin-left: 325px;
    margin-top: 120px;
    margin-right: 25px;
`

const GridWrapper = styled.div`
    
`

export default function ColorSwatch({ randomSwatches = [] }) {
    const { hexColor } = useParams();
    const history = useHistory();

    const hex = `#${hexColor}`
    return (
        <MainWrapper>
            <Card style={{
                background: hex
            }}>
                <CardContent>
                    {hex}
                </CardContent>
            </Card>
            <GridWrapper>
                <GridList cols={5} spacing={40}>
                    {randomSwatches.map((swatch) => (
                        <GridListTile key={swatch.hex} style={{
                            background: swatch.hex
                        }}>
                            {swatch.hex}
                        </GridListTile>
                    ))}
                </GridList>
            </GridWrapper>
            <div>
                <Button onClick={() => history.push('/')}>Clear</Button>
            </div>
        </MainWrapper>
    )
}