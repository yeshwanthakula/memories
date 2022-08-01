import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import { Typography ,Paper,Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch ,useSelector} from 'react-redux';
import { createPost } from '../actions/posts';
import { updatePost } from '../api';
import { useEffect } from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(3),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));




// loop over all the elements in the state and return the elements whose id is cuuentid-->const post does

const Form = ({currid ,setCurrid}) => {
 
  const post = useSelector((state) => currid ? state.posts.find((p) => p._id === currid)  : null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if(post)setpostData(post);
  
    
  }, [post])
  

  const [postData ,setpostData] = useState({
    creator :'',title :'',message: '',tags:'',selectedFile:'',
  });
  const clear = () => {
    setCurrid(0);
    setpostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clear();

    if (currid === 0) {
      dispatch(createPost(postData));
      
    } else {
      dispatch(updatePost(currid, postData));
      
    }

    
  };

  return (
    <>
    <Paper className={classes.paper}>
       <form autoComplete='off' noValidate className ={`${classes.root} ${classes.form}`} onSubmit ={handleSubmit}>

         <Typography variant='h6'>{currid ? 'Editing' : 'Creating'} a Memory</Typography>
         <TextField
            name='creator' 
            variant='outlined' 
            label='Creator' 
            value={postData.creator}
            onChange ={ (e)=>setpostData({...postData,creator:e.target.value})}
            fullWidth
          
          />
          <TextField
            name='title' 
            variant='outlined' 
            label='Title' 
            value={postData.title}
            onChange ={ (e)=>setpostData({...postData,title:e.target.value})}
            fullWidth
          
          />
          <TextField
            name='message' 
            variant='outlined' 
            label='Message' 
            value={postData.message}
            onChange ={ (e)=>setpostData({...postData,message:e.target.value})}
            fullWidth
          
          />
          <TextField
            name='tags' 
            variant='outlined' 
            label='Tags' 
            value={postData.tags}
            onChange ={ (e)=>setpostData({...postData,tags:e.target.value.split(',')})} /* ...postData will create a copy of previous data and then we change explicitly the needed one*/
            fullWidth
          
          />

          <div className={classes.fileInput}>
            <FileBase type="file" multiple={false} onDone={({ base64 }) => setpostData({ ...postData, selectedFile: base64 })} />
          </div>
              <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
              <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>





       </form>



    </Paper>
    </>
  )
}

export default Form