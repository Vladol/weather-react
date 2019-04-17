import React, { Component } from 'react';
 import './Search.scss';
import Button from './Button';
import Input from './Input';


export default class Search extends Component {



    addLocation = () => {
        const location = this.inputLocation.value
        if (location) {
            console.log(location);
            console.log(process.env.REACT_APP_API_URL);
            this.props.handleSearchSubmit(location);
        }
    }

    render() {
        return (
            <div className="Search">
                <Input
                    className="location-input"
                    outerRef={inputLocation => (this.inputLocation = inputLocation)}
                    placeholder="London, UK"
                />
                <Button className="add-btn" onClick={this.addLocation}>
                    + Add
                </Button>
            </div>
        );
    }
}