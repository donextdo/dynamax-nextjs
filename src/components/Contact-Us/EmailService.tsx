import emailjs from '@emailjs/browser';
import dotenv from 'dotenv';
dotenv.config();

const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY!;
const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID!;


// Initialize EmailJS SDK
emailjs.init(PUBLIC_KEY);

export const sendEmail = async (templateParams: any) => {
  
  try {
    // Call the EmailJS SDK to send the email using the provided templateId and templateParams
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
  } catch (error) {
    throw new Error('Error sending email: ' + error);
  }
};
