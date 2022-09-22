import React from "react";
import { useNavigate } from "react-router-dom";

function SkillsItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="SkillsItem"
      onClick={() => {
      navigate("/skills/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
}

export default SkillsItem;