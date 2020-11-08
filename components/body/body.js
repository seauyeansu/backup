import React from 'react'
import './body.css';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { whiteSpace } from '@material-ui/core/Box';
import profilepic from './profilepic.jpg';
import ProfiletextTween from '../animation/profiletexttween.js';



const Body = () => {
	return (
		<div>
		<Box height = {170} whiteSpace="nowrap"></Box>
		<Grid container>
     		<Grid item xs={6} className = 'col1'> 
         	 	<img 
				src = {profilepic} 
				alt = "" 
				style = {{borderRadius: '50%'}}
				/>
     		</Grid>
     		<Grid item xs={6} className = 'col2'>
     			<div id="profiletext">Hi, I'm Front-end Developer Giselle Su. </div>
     			
         	 	<ProfiletextTween />

    		 </Grid>
		</Grid>

		<Box height = {170} whiteSpace="nowrap"></Box>

		<Grid container>
     		<Grid item xs={6} className = 'col3'> 
     			<Box> Front-end Development </Box>
     		</Grid>
     		<Grid item xs={6} className = 'col4'> 
     			<Box> Coding Mentorship Program </Box>
     		</Grid>
     	</Grid>	
		</div>
	)
}

export default Body