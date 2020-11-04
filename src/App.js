import logo from './logo.svg';
import React from 'react';
import './App.css';

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
       <div> hello react </div>
     );
	}
}

export default App;
