import { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import SearchBox from "./components/SearchBox";
import "./App.css";
import { nanoid } from "nanoid";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => setFilter(event.target.value);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const handleAddContact = (newContact) => {
    const contactWithId = { ...newContact, id: nanoid() };
    setContacts([...contacts, contactWithId]);
  };
  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  return (
    <>
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onAddContact={handleAddContact} />
        <SearchBox onFilterChange={handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDelete={handleDeleteContact}
        />
      </div>
    </>
  );
};

export default App;
