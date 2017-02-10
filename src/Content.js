import React, { Component } from 'react';
import './bttn.css';
import './bulma.css';
import {SelectBox} from './SelectBox';

export class BoxContent extends Component {
	state = {
		Start:'1',
	}

	Channal = (event) =>{
		this.setState({Start: event.target.value});	
	}
	render() {
		var Entry = [];
		for(var i=0; i<=this.state.Start-1;i++){
			Entry.push(i);
		}
		return(
			<div className="first">
              <div className="second">
				<p className="control">
		            <span>Please Select</span>
		            <span className="select">
		              <select onChange={this.Channal}>
		                <option value="1" defaultValue>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
		              </select>
                </span>
              </p>
              <div className="clearfix"></div>
              <div className="columns">
                {
                    Entry.map(function(i) {
                        return <SubBox index={i} key={i} />;
                    })
                 }
              </div>
            </div>
        );
    }
}
