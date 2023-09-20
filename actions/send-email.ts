'use server';

import { checkIsValidString } from '@/utils/check-is-valid-string';
import { getErrorMessage } from '@/utils/get-error-message';
import { Resend } from 'resend';

// Resend instance
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log('Running on server');
  const email = formData.get('email');
  const message = formData.get('message');
  console.log('email: >>', email);
  console.log('message: >>', message);

  if (!checkIsValidString(email, 500)) return {
    error: 'Invalid email'
  }

  if (!checkIsValidString(message, 5000)) return {
    error: 'Invalid message'
  }

  try {
    await resend.emails.send({
      from: 'Contact form <onboarding@resend.dev>',
      to: 'ktootaam@gmail.com',
      subject: `Message from Contact form. Sender: ${email}`,
      reply_to: email,
      text: message
    })
  } catch (error: unknown) {
    console.log('error: >>', error);
    return {
      error: getErrorMessage(error)
    }
  }
}