import React, { useState } from "react";
import "./Contact.css";
import Pyramid from "../../ui/Pyramid";
import { contactInfo } from "../../data";
import SocialHandles from "../../ui/SocialHandles";
import { BsFillSendFill } from "react-icons/bs";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("idle"); // To track form status

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("loading");

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      access_key: "443b821d-e9e0-40c8-b1bb-32cbdd4edf39",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        e.target.reset(); // Optional: Reset form after successful submission
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <section id="contact">
      <div className="section__wrapper">
        <div className="pyramid__container">
          <Pyramid />
        </div>
        <div className="contact__group">
          <div>
            <h3 className="title">
              Let's talk on your <span className="shine">great project</span> together
            </h3>
            <div className="flex contact__options">
              {contactInfo.map((contact, index) => (
                <article className="flex option" key={index}>
                  <div className="contact__icon">
                    <img src={contact.icon} alt="" />
                  </div>
                  <div className="flex contact__content">
                    <div>
                      <h3 className="name">{contact.name}</h3>
                      <p className="text__muted line__clamp__1 value">{contact.value}</p>
                    </div>
                    <a href={contact.link} target="_blank" className="flex__center btn">
                      <span className="btn__shine text">Message</span>
                      <div className="flex__center icon" style={{ background: contact.color }}>
                        {contact.btnIcon}
                      </div>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <SocialHandles />
          </div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Fullname" name="name" required />
            <input type="text" placeholder="Your Email" name="email" required />
            <textarea name="message" rows={7} placeholder="Your Message"></textarea>
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
            <button type="submit" className="btn flex__center submit__btn">
              <div className="icon"><BsFillSendFill /></div>
              <span>{formStatus === "loading" ? "Sending..." : "Send Now"}</span>
            </button>
            {formStatus === "success" && <p>Message sent successfully!</p>}
            {formStatus === "error" && <p>Something went wrong, please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;