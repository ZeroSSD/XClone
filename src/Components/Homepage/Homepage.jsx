import React from 'react'
import {Grid} from '@mui/material';
import Navigation from '../Navigation/Navigation';
import HomeSection from '../HomeSection/HomeSection';
import RightPart from '../RightPart/RightPart';

const Homepage = () => {
  return (
    <Grid container className='px-5 lg:px-36 justify-between'>
        <Grid item xs={0} lg={2} className='hidden lg:block w-full relative'>
            <Navigation/>
        </Grid>
        <Grid item xs={12} lg={6} className='px-5 lg:px-9 hidden lg:block w-full relative'>
            <HomeSection/>
        </Grid>
        <Grid item xs={0} lg={4} className='hidden lg:block w-full relative'>
            <RightPart/>
        </Grid>

    </Grid>
  )
}

export default Homepage