import React, { Component } from "react";
import classes from "./css/campuscard.module.css";
import PropTypes from "prop-types";
class CampusCard extends Component{
    render() {
        return (<div className={classes.campusCardMain}>
            <img src={this.props.imgSrc}alt = "Campus"/>
            <h3>{this.props.collegeName} </h3>
            <p> {this.props.studentNumber} student</p>
            <a>edit</a>
            <button>delete</button>
        </div>)
    }
}
CampusCard.propTypes = {
    imgSrc : PropTypes.string.isRequired,
    collegeName : PropTypes.string.isRequired,
    studentNumber : PropTypes.number,
}
export default CampusCard;