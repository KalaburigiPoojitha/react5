import React from "react";

function Player(props) {
  return (
    <div className="playerDiv">
      <img className="playerPic" alt="" src={props.pic}></img>
      <h2>{props.name}</h2>
      <h3>{props.role}</h3>
    </div>
  );
}

export default Player;
