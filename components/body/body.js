import React from 'react'
import profilepic from './profilepic.jpg';
import './body.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Body = () => {
	return (
		<div>
		<div className = "body1">
		<Grid fluid>
		<Row>
 		 <Col xs className = "col1">
     		<img src = {profilepic} alt = "pp" style = {{
			  borderRadius: '50%',
			  }} />
		 </Col>
		 <Col xs className = "col2">
			  Hello World!
		 </Col>	  
		</Row>	
		</Grid>

		</div>
		<div className = "body2">
		<Grid fluid>
		<Row>
		 <Col xs className = "col3">
		  <h1>I'm Web Developer <br/> Giselle Su. </h1>
		 </Col> 

		 <Col xs className = "col4">
		  Hello, world!
		 </Col> 
		</Row>
		</Grid>
		</div>
		</div>
	)
}

export default Body