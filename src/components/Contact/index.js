import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
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

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    const emailPromise = emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      {
        from_name: contactData.name,
        from_email: contactData.email,
        message: contactData.message,
      },
      process.env.REACT_APP_PUBLIC_KEY
    );

    await toast.promise(emailPromise, {
      loading: "Sending your message...",
      success: "Your message has been sent successfully!",
      error: "Failed to send your message. Please try again later.",
    });

    emailPromise.then(() => resetForm()).finally(() => setLoading(false));
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
