import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message, category, service } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_TO_CONTACT,
    subject: "New Contact Form Submission",
    text: `
Name: ${name}
Email: ${email}
Category: ${category}
Selected Service: ${service}
Message: ${message}
    `,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Category:</strong> ${category}</p>
      <p><strong>Selected ${category === "solutions" ? "Solution" : "Service"}:</strong> ${service}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    return Response.json({ message: "Failed to send message." }, { status: 500 });
  }
}
