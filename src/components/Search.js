// @flow
import React, { Component } from 'react';
import './Search.scss';
import Button from './Button';
import Input from './Input';


export default class Search extends Component {

    addLocation = () => {
        const location = this.inputLocation.value
        if (location) {
            this.props.handleSearchSubmit(location);
        }
    }

    render() {
        const {location} =  this.props;
        return (
            <div className="Search">
                <Input
                    className="location-input"
                    outerRef={inputLocation => (this.inputLocation = inputLocation)}
                    placeholder="You City Name"
                />
                <Button className="add-btn" onClick={this.addLocation}>
                    Search
                </Button>
            </div>
        );
    }
}