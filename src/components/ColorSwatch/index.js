import React from 'react'
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import Button from '@material-ui/core/Button';

const MainWrapper = styled.div`
    margin-left: 325px;
    margin-top: 120px;
    margin-right: 25px;
    
    .MuiCardContent-root {
        height: calc(100vh - 450px) !important;
    }

    .MuiGridList-root {
        margin: 30px 0 !important;
        display: flex;
        justify-content: space-between;
    }

    .MuiButton-root {
        border: 1px solid #000;
        padding: 5px 30px;
        border-radius: 10px;
        width: 200px;
    }

    .MuiButton-label {
        font-family: 'Source Serif Pro', serif;
        text-transform: capitalize;
        font-size: 1.5rem;
        font-size: 600;
    }
`

const StyledMainCard = styled(Card)`
    position: relative;
    border-radius: 8px !important;

    .MuiCardContent-root {
        padding: 0 !important;
    }
`

const CardLabel = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: #fff;
    display: flex;
    align-items: center;
    padding-left: 2rem;
    font-size: 2rem;
`

const MiniCardLabels = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
`

const ClearButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const StyledGridCard = styled(Card)`
    position: relative;
    padding: 0 !important;
    width: 17% !important;
`

export default function ColorSwatch({ randomSwatches = [] }) {
    const { hexColor } = useParams();
    const history = useHistory();

    const hex = `#${hexColor}`
    return (
        <MainWrapper>
            <StyledMainCard >
                <CardContent style={{ background: hex }}>
                    <CardLabel>
                        <span>{hex}</span>
                    </CardLabel>
                </CardContent>
            </StyledMainCard>
            <div>
                <GridList cols={5}>
                    {randomSwatches.map((swatch) => (
                        <StyledGridCard 
                            key={swatch.hex} 
                            style={{
                                background: swatch.hex,   
                            }}
                            onClick={() => history.push(swatch.hex.replace("#", ""))}
                        >
                            <MiniCardLabels>
                                <span>{swatch.hex}</span>
                            </MiniCardLabels>
                        </StyledGridCard>
                    ))}
                </GridList>
            </div>
            <ClearButtonWrapper>
                <Button onClick={() => history.push('/')}>Clear</Button>
            </ClearButtonWrapper>
        </MainWrapper>
    )
}