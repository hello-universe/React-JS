import React from 'react'
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material'
import {PhotoCamera} from '@mui/icons-material'

export const App = () => {
  return (
    <>
    <CssBaseline />
    <AppBar position='relative'>
        <Toolbar>
            <PhotoCamera />
            <Typography variant='h6' ml={2}>
                Photo Album
            </Typography>
        </Toolbar>
    </AppBar>
    </>
  )
}
