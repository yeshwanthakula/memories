import React from 'react'
import { useEffect ,useState} from 'react';
import {Container ,AppBar ,Typography, Grow,Grid} from '@mui/material'
import { useDispatch } from 'react-redux';

import memories from './images/memories.png'

import Posts from './Posts/Posts';
import Form from './Form/Form';
import useStyles from './styles'
import {getPosts} from './actions/posts';




const App = () => {

  const [currid , setCurrid] =useState(0);

  const classes = useStyles();
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  
   
  }, [currid,dispatch]);


  
  return (
      <>
   

    <Container maxWidth="lg">
      <AppBar className ={classes.appBar} position="static" color="inherit">
        <Typography className= {classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>

       <Grow in>
         <Container>
             <Grid   className={classes.mainContainer} container  justify="space-between" alignItems ="stretch" spacing ={3}>

              <Grid item xs={12} sm={7}> <Posts setCurrid = {setCurrid}/> </Grid>

              <Grid item xs={12} sm ={4}>  <Form currid ={currid}  setCurrid = {setCurrid}/> </Grid>



             </Grid>




         </Container>


   


       </Grow>


      </Container>
    </>
  );
}

export default App;