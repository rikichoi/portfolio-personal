"use server";
import React from "react";
import { Resend } from "resend";

const resendKey = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

const sendEmail = async (name, email, subject, message) => {
  const { data, error } = await resendKey.emails.send({
    from: `${name} <onboarding@resend.dev>`,
    to: "choi.riki@gmail.com",
    subject: `${subject}`,
    reply_to: `${email}`,
    text: `The sender name is: ${name}. The sender email is: ${email}, their message was: ${message}`,
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
};

export default sendEmail;
