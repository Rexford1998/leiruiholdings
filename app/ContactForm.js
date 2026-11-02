"use client";

import { useState } from "react";

// No backend yet: the form opens the visitor's email app with everything filled in.
export default function ContactForm({ email }) {
  const [form, setForm] = useState({ name: "", from: "", type: "Talent", handle: "", message: "" });
  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  function submit(e) {
    e.preventDefault();
    const subject = `${form.type} inquiry from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.from}`,
      `I am a: ${form.type}`,
      form.handle ? `Portfolio / business: ${form.handle}` : null,
      "",
      form.message,
    ]
      .filter((line) => line !== null)
      .join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="form" onSubmit={submit}>
      <label>
        Name
        <input required value={form.name} onChange={set("name")} />
      </label>
      <label>
        Email
        <input required type="email" value={form.from} onChange={set("from")} />
      </label>
      <label>
        I am a
        <select value={form.type} onChange={set("type")}>
          <option>Talent</option>
          <option>Company hiring</option>
          <option>Business services client</option>
        </select>
      </label>
      <label>
        Portfolio link or business name
        <input value={form.handle} onChange={set("handle")} />
      </label>
      <label className="full">
        What do you need help with?
        <textarea required rows={4} value={form.message} onChange={set("message")} />
      </label>
      <button className="btn full" type="submit">Send message</button>
    </form>
  );
}
