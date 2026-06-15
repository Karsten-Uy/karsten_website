// Contact page content + EmailJS configuration.

export const contactPage = {
  heading: 'Contact Me',
  intro:
    "Welcome to the contact page! Feel free to reach out with questions, project ideas, or just to say hello using the form below. I'll get back to you as soon as possible. Excited to connect!",
  // Form fields. `name` must match the EmailJS template variables.
  fields: [
    { label: 'Name', name: 'user_name', type: 'text', multiline: false },
    { label: 'Email', name: 'user_email', type: 'email', multiline: false },
    { label: 'Message', name: 'message', type: 'text', multiline: true },
  ],
  submitLabel: 'Send',
  success: {
    title: 'Thank you!',
    body: 'Your message has been sent successfully.',
    close: 'Close',
  },
  failure: {
    title: 'Failed to Send',
    body: 'There was an issue sending your message. Please try again later.',
    close: 'Close',
  },
};

export const emailConfig = {
  serviceId: 'Website Email',
  templateId: 'template_jngaswu',
  publicKey: 'ikqlTILyAQbKMyOWC',
};
