import emailjs from '@emailjs/browser';

// Replace 'your_user_id' with your actual EmailJS User ID
const PUBLIC_KEY = 'UK1f1M4ykDUNDDvIY';
const SERVICE_ID = 'service_wq18ytl'

// Initialize EmailJS SDK
emailjs.init(PUBLIC_KEY);

export const sendEmail = async (templateId: string, templateParams: any) => {
  try {
    // Call the EmailJS SDK to send the email using the provided templateId and templateParams
    await emailjs.send(SERVICE_ID, templateId, templateParams);
  } catch (error) {
    throw new Error('Error sending email: ' + error);
  }
};
