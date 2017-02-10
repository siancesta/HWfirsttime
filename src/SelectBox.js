import React, { Component } from 'react';
import './bttn.css';
import './bulma.css';
import {Content} from './Content';

export class SelectBox extends Component {
	state = {
		count:'4',
	}

	subChannal = (event) =>{
		this.setState({count: event.target.value});	
	}
	render() {
		var SecondEntry = [];
		for(var i=0; i<=this.state.count-1;i++){
			SecondEntry.push(i);
		}

	    return (
	    	<div className="container has-text-centered">
	          <p className="control">
	            <span>Please Select</span>
	            <span className="select">
	              <select onChange={this.subChannal}>
	                <option value="1">1</option>
	                <option value="2">2</option>
	                <option value="3">3</option>
	                <option value="4" selected>4</option>
	              </select>
                </span>
              </p>
              <div className="clearfix"></div>
              <div className="columns">
                {
                    SelectBox.map(function(i) {
                        return <Boxy index={i} key={i} />;
                    })
                 }
              </div>
            </div>
        );
    }
}

