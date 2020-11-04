import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route , Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
	constructor(props){
	  super(props);
       this.state = {
	     title:'Garrett',
		 headerLinks:[
		 {title:'Home',path: '/'},
		 {title:'About',path: '/about'},
		 {title:'contact',path: '/contact'},
		 ],
		 home:{ 
		    title:'Be Relentless',
			subTitle:'Projects the make a difference',
			textne:'Checkbox'
		 },
		 about:{
		    title:'About Me'
		 },
		 contact:{
			 title:'contact Me'
		 }
		 
	   }		   
	}
	
	render () {
      return (
      <Router>
	     <Container fluid={false}>
		 <p>boostrap testing</p>
		 </Container>
	  </Router>
     );
	}
}

export default App;
