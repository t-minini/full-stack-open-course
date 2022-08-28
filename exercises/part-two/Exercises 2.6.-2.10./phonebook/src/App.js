import { useState } from "react";
import PersonName from "./components/PersonName";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");

  const addPerson = (e) => {
    e.preventDefault();
    const person = {
      name: newName,
    };
    setPersons(persons.concat(person));
    setNewName("");
  };

  const handleAddName = (e) => {
    setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleAddName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <p>
        {persons.map((currentPerson) => (
          <PersonName key={currentPerson.name} currentPerson={currentPerson} />
        ))}
      </p>
    </div>
  );
};

export default App;
