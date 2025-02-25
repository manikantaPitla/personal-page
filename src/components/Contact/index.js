import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  UiButton,
  UiHeading,
  UiInput,
  UiPara,
  UiSection,
} from "../../utils/uiMaterials";
import { ContactFlex, FormEl, SocialLinkWrapper } from "./style";
import SocialLinks from "../../components/SocialLinks";

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const onChangeFormData = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setContactData({
      name: "",
      email: "",
      message: "",
    });
  };
  const submitForm = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        {
          from_name: contactData.name,
          from_email: contactData.email,
          message: contactData.message,
        },
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          resetForm();
          setLoading(false);
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setLoading(false);
          alert("Failed to send your message. Please try again later.");
        }
      );
  };

  return (
    <UiSection id="contact">
      <UiHeading>
        <span>06. </span> Contact
      </UiHeading>
      <ContactFlex>
        <FormEl onSubmit={submitForm} onReset={resetForm}>
          <UiInput
            type="text"
            placeholder="Your Name"
            name="name"
            value={contactData.name}
            onChange={onChangeFormData}
            required
          />
          <UiInput
            type="email"
            placeholder="Your Email"
            name="email"
            value={contactData.email}
            onChange={onChangeFormData}
            required
          />
          <UiInput
            type="text"
            placeholder="Your Message"
            name="message"
            value={contactData.message}
            onChange={onChangeFormData}
            required
          />
          <div>
            <UiButton type="reset" disabled={loading}>
              Clear
            </UiButton>
            <UiButton type="submit" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </UiButton>
          </div>
        </FormEl>
        <SocialLinkWrapper>
          <UiPara>Connect with me on</UiPara>
          <div>
            <SocialLinks isrender={true} />
          </div>
        </SocialLinkWrapper>
      </ContactFlex>
    </UiSection>
  );
};

export default Contact;
