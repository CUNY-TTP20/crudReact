import React, { Component } from "react";
import classes from "./css/campus.module.css";

class Campus extends from Component{
    constructor(props) {
        super(props);
        this.state = {
            campuses: [
                {
                    url: "https://via.placeholder.com/150",
                    name: "Brooklyn College",
                    student_number:28                  
                    
                }, {
                    url: "https://via.placeholder.com/150",
                    name: "MIT",
                    student_number: 20

                }, {
                    url: "https://via.placeholder.com/150",
                    name: "Queens College",
                    student_number: 20

                }, {
                    url: "https://via.placeholder.com/150",
                    name: "The ORganization College",
                    student_number: 6

                }
            ]
        }
    }
    render() {
        let campuses = ()
    }
}
export default Campus;