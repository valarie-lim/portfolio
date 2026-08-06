"use client";
import { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendToWhatsapp = (e) => {
    e.preventDefault();
    const phoneNumber = "60109640097";
    const text =
      `*Hi Valarie! I have an opportunity to share with you.\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Message:* ${message}\n`;

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <form id="contactForm" onSubmit={sendToWhatsapp}>
      <label htmlFor="name">Your Name</label>
      <input
        required
        type="text"
        id="name"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <label htmlFor="message">Message</label>
      <textarea
        required
        id="message"
        rows="3"
        placeholder="Tell me about your opportunity..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit" className="btn">
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
