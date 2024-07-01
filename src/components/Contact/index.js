import React, { useState } from "react";
import {
  UiButton,
  UiHeading,
  UiInput,
  UiPara,
  UiSection,
} from "../../utils/uiMaterials";
import { FormEl, SocialLinkWrapper } from "./style";
import SocialLinks from "../../utils/uiComponents/SocialLinks";

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    console.log(contactData);
  };

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

  return (
    <UiSection id="contact">
      <UiHeading>
        <span>05. </span> Contact
      </UiHeading>
      <SocialLinkWrapper>
        <UiPara>Connect with me on</UiPara>
        <div>
          <SocialLinks />
        </div>
      </SocialLinkWrapper>
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
          <UiButton type="reset">Clear</UiButton>
          <UiButton type="submit">Submit</UiButton>
        </div>
      </FormEl>
    </UiSection>
  );
};

export default Contact;
