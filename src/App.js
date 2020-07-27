import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import shuffle from 'lodash/shuffle'

import CssBaseline from '@material-ui/core/CssBaseline';

import MainList from './components/MainList'
import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'


import { useGetColorSwatches } from './graphql/queries';
import ColorSwatch from './components/ColorSwatch';

const AppWrapper = styled.div`
  font-family: 'Source Serif Pro', serif;
  font-size: 16px;
  font-weight: 400;
`

function App() {
  const [page, setPage] = useState(0)
  const [randomSwatches, setRandomSwatches] = useState([])
  const { data, loading } = useGetColorSwatches(12, 12 * page)

  const handlePageChange = (event, page) => {
    setPage(page - 1)
  }

  const handleRandomColors = useCallback(() => {
    const shuffled = [...shuffle(data?.colorSwatches?.data).slice(0, 5)]
    setRandomSwatches(shuffled)
  }, [data])

  useEffect(() => {
    if(data?.colorSwatches) {
      handleRandomColors()
    }
  }, [data, handleRandomColors])

  if(loading) {
    return  (
     <div className="loading-page">
         <p>Loading...</p>
     </div>
    )
 }

  return (
    <Router>
      <AppWrapper>
        <CssBaseline />
        <Navigation />
        <Sidebar data={data?.colorSwatches} />
        <Switch>
            <Route
              path="/"
              exact
              children={
                <MainList data={data?.colorSwatches} currentPage={page} handlePageChange={handlePageChange} /> 
              }
            />
            <Route exact path="/:hexColor" children={<ColorSwatch randomSwatches={randomSwatches} />} />
          </Switch>
      </AppWrapper>
    </Router>
  );
}

export default App;
