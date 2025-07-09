import nodemailer from "nodemailer";

export async function POST(req) {
  const { fullName, email, phone, location, company, services, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "Gmail", // Or SMTP config
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${fullName}" <${email}>`,
    to: process.env.EMAIL_TO,
    subject: "New Quote Request",
    html: `
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Requested Services:</strong> ${services}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ message: "Quote request sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    return Response.json({ message: "Failed to send quote request." }, { status: 500 });
  }
}
