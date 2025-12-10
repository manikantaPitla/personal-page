import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { UiButton, UiHeading, UiInput, UiPara, UiSection } from "../ui";
import { ContactFlex, FormEl, SocialLinkWrapper } from "./styles";
import SocialLinks from "../../components/SocialLinks";
import { EMAIL_MESSAGES, SECTION_HEADINGS } from "../../constants";
import { emailService } from "../../services";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [contactData, setContactData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const onChangeFormData = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = (): void => {
    setContactData({
      name: "",
      email: "",
      message: "",
    });
  };

  const validateForm = (): boolean => {
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

  const submitForm = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) return;
    setLoading(true);

    const emailPromise = emailService.sendEmail({
      name: contactData.name,
      email: contactData.email,
        message: contactData.message,
    });

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
          <UiInput
            type="text"
            placeholder="Your Name"
            name="name"
            value={contactData.name}
            onChange={onChangeFormData}
          />
          <UiInput
            type="email"
            placeholder="Your Email"
            name="email"
            value={contactData.email}
            onChange={onChangeFormData}
          />
          <UiInput
            type="text"
            placeholder="Your Message"
            name="message"
            value={contactData.message}
            onChange={onChangeFormData}
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
