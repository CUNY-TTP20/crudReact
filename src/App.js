import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import CampusCard from "./Components/campusCard";

function App() {
    return (<div>
        <div style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            maxWidth: "80vw"
        }}>
            <CampusCard
            imgSrc="https://via.placeholder.com/150"
            collegeName="Brooklyn College"
                studentNumber={30} />
            <CampusCard
                imgSrc="https://via.placeholder.com/150"
                collegeName="JJ College"
                studentNumber={20} />
            <CampusCard
                imgSrc="https://via.placeholder.com/150"
                collegeName="MIT"
                studentNumber={31} />
            <CampusCard
                imgSrc="https://via.placeholder.com/150"
                collegeName="Queens College"
                studentNumber={27} />
            </div>
        </div>
    );
}

export default App;