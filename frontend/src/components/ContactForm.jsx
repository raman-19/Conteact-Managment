import React, { useState } from "react";

export default function ContactForm({ fetchContacts }) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", message: ""
  });
  const [error, setError] = useState("");

  // Keep button disabled if required fields are empty
  const isValid = form.name && form.phone;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check required fields
    if (!form.name || !form.phone) {
      return setError("Name and Phone are required");
    }

    // Check email if filled
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) {
      return setError("Invalid email format");
    }

    // Clear error before submitting
    setError("");

    // Submit the form
    await fetch("api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    // Reset form
    setForm({ name: "", email: "", phone: "", message: "" });
    fetchContacts();
  };

  return (
    <div className="max-w-md mx-auto mt-8
     bg-linear-to-r from-indigo-400  to-pink-500
     p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold text-center mb-4">
        📇 Add Contact
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="w-full p-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full p-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="w-full p-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <textarea
          className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          placeholder="Message"
          rows="3"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        {/* Display error messages */}
        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <button
          disabled={!isValid}
          className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 disabled:bg-red-500 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
