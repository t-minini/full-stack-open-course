import { React } from "react";

const PersonName = ({ currentPerson }) => (
  <p style={{ margin: 0 }}>{currentPerson.name}</p>
);

export default PersonName;
