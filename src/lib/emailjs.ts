import emailjs from "emailjs-com";
import { EMAIL_CONFIG } from "../constants";

// Initialize EmailJS with public key
if (EMAIL_CONFIG.PUBLIC_KEY) {
  emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
}

export { emailjs };
export default emailjs;
