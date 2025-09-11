import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
import { UiButton, UiHeading, UiInput, UiPara, UiSection } from "../../utils/uiMaterials";
import { ContactFlex, FormEl, SocialLinkWrapper } from "./style";
import SocialLinks from "../../components/SocialLinks";
import { EMAIL_CONFIG, EMAIL_MESSAGES } from "../../constants/emailConstants";
import { SECTION_HEADINGS } from "../../constants/navigationConstants";

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

  const validateForm = () => {
    const { name, email, message } = contactData;

    if (!name) {
      toast.error(EMAIL_MESSAGES.VALIDATION.NAME_REQUIRED);
      return false;
    }

    if (!email) {
      toast.error(EMAIL_MESSAGES.VALIDATION.EMAIL_REQUIRED);
      return false;
    }

    if (!message) {
      toast.error(EMAIL_MESSAGES.VALIDATION.MESSAGE_REQUIRED);
      return false;
    }

    return true;
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    setLoading(true);

    const emailPromise = emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      {
        from_name: contactData.name,
        from_email: contactData.email,
        message: contactData.message,
      },
      EMAIL_CONFIG.PUBLIC_KEY
    );

    await toast.promise(emailPromise, {
      loading: EMAIL_MESSAGES.LOADING,
      success: EMAIL_MESSAGES.SUCCESS,
      error: EMAIL_MESSAGES.ERROR,
    });

    emailPromise.then(() => resetForm()).finally(() => setLoading(false));
  };

  return (
    <UiSection id="contact">
      <UiHeading>
        <span>{SECTION_HEADINGS.contact.split(".")[0]}. </span> Contact
      </UiHeading>
      <ContactFlex>
        <FormEl onSubmit={submitForm} onReset={resetForm}>
          <UiInput type="text" placeholder="Your Name" name="name" value={contactData.name} onChange={onChangeFormData} />
          <UiInput type="email" placeholder="Your Email" name="email" value={contactData.email} onChange={onChangeFormData} />
          <UiInput type="text" placeholder="Your Message" name="message" value={contactData.message} onChange={onChangeFormData} />
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
