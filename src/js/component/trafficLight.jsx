import React, { useState } from "react";

const TrafficLight = () => {
    const [chosenColor, setChosenColor] = useState("")
    return (
        <div className="traffic-light-stem">
            <div
				onClick={() => setChosenColor("green")}
				className={"light green" + (chosenColor === "green" ? " glow" : "")}>
			</div>
            <div
				onClick={() => setChosenColor("yellow")}
				className={"light yellow" + (chosenColor === "yellow" ? " glow" : "")}>
			</div>
            <div
				onClick={() => setChosenColor("red")}
				className={"light red" + (chosenColor === "red" ? " glow" : "")}>
			</div>


        </div>
       
            
    );


};

export default TrafficLight;

