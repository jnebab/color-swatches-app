import React, { useMemo } from 'react'
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Pagination from '@material-ui/lab/Pagination';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const MainListWrapper = styled.div`
    flex-grow: 1;
    margin-left: 325px;
    margin-top: 120px;
    margin-right: 25px;
`

const StyledGridListTile = styled(GridListTile)`

    .MuiGridListTile-tile {
        -webkit-box-shadow: 7px 7px 11px -9px rgba(0,0,0,0.29);
        -moz-box-shadow: 7px 7px 11px -9px rgba(0,0,0,0.29);
        box-shadow: 7px 7px 11px -9px rgba(0,0,0,0.29);
        border-radius: 8px;
    }

    .MuiGridListTileBar-root {
        background: #fff;
    }

    .MuiGridListTileBar-title {
        color: #000;
        font-family: 'Source Serif Pro', serif;
    }
`

const PaginationWrapper = styled.div`
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
`

const StyledPagination = styled(Pagination)`
    .MuiPaginationItem-page.Mui-selected {
        background: none;
        border-bottom: 2px solid #000;
        border-radius: 0;
    }
`

export default function MainList({ data, currentPage, handlePageChange }) {
    const total = data?.total
    const swatches = data?.data

    const maxPage = useMemo(() => Math.ceil(total / 12), [total])
    const history = useHistory();

    return (
        <MainListWrapper>
            <GridList cols={4} spacing={40} cellHeight={180} >
                {swatches.map((swatch) => (
                    <StyledGridListTile 
                        key={swatch.hex} 
                        onClick={() => {
                            history.push(swatch.hex.replace("#", ""));
                        }}>
                        <div style={{
                            backgroundColor: swatch.hex,
                            height: '100%',
                            width: '100%'
                        }}/>
                        <GridListTileBar
                            title={swatch.hex}
                        />
                    </StyledGridListTile>
                ))}
            </GridList>

            <PaginationWrapper>
                <StyledPagination count={maxPage} page={currentPage + 1} hideNextButton hidePrevButton onChange={handlePageChange} />
            </PaginationWrapper>
        </MainListWrapper>
    )
}