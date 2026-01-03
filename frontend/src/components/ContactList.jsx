import React from "react";

export default function ContactList({ contacts, fetchContacts }) {
  const deleteContact = async (id) => {
    await fetch(`http://localhost:5000/api/contacts/${id}`, {
      method: "DELETE",
    });
    fetchContacts();
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      {/* Header with count */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-indigo-600">📋 Saved Contacts</h2>
        <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-medium">
          {contacts.length} {contacts.length === 1 ? "Contact" : "Contacts"}
        </span>
      </div>

      {contacts.length === 0 ? (
        <p className="text-center text-gray-500 mt-6 text-lg">
          No contacts added yet.
        </p>
      ) : (
        // Center the cards
        <div className="flex flex-wrap justify-center gap-6">
          {contacts.map((c, index) => (
            <div
              key={c._id}
              className={`
                w-80 sm:w-96 h-auto
                bg-linear-to-r from-gray-400 via-green-200 to-orange-200
                text-black
                rounded-2xl
                p-5
                shadow-lg
                hover:shadow-3xl
                transition
                flex flex-col
                justify-between
              `}
            >
              <div className="mb-3">
                <h3 className="text-lg font-bold">Name: {c.name}</h3>
                {c.email && (
                  <p className="mt-1 text-sm break-all">✉️ {c.email}</p>
                )}
                <p className="mt-1 text-sm">📞 {c.phone}</p>
              </div>

              {c.message && (
                <p className="mt-2 text-sm bg-white/20 p-2 rounded">
                  📝 {c.message}
                </p>
              )}

              <button
                onClick={() => deleteContact(c._id)}
                className="mt-3 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700 text-sm transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
