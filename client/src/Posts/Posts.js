import React from 'react'
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import {Grid ,CircularProgress} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles= makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
}));





const Posts = ({setCurrid}) => {

  const classes = useStyles();
 
 const posts = useSelector((state)=> state.posts);

 console.log(posts);


  return (
   
    
      !posts.length ? <CircularProgress/>:(

       <Grid className={classes.container} container alignItems='stretch' spacing={3}>
            {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrid ={setCurrid} />
          </Grid>
        ))}

       </Grid>


      )
    
  )
}

export default Posts