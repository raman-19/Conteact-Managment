import React from "react";
import { useEffect, useState } from "react";
import ContactForm from "./components/contactForm"
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await fetch("http://localhost:5000/api/contacts");
    setContacts(await res.json());
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="min-h-screen  bg-linear-to-r from-gray-400 via-purple-300 to-blue-200 p-6 rounded-xl shadow-xl text-black">
      <h3 className=" txt-2xl font-semibold text-center mb-4 ">Contact Manager</h3>
      <ContactForm fetchContacts={fetchContacts} />
      <ContactList contacts={contacts} fetchContacts={fetchContacts} />
    </div>
  );
}

export default App;
