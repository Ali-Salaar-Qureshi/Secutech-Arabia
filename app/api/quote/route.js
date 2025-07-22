import nodemailer from "nodemailer";

export async function POST(req) {
  const data = await req.json();

  const {
    name = "No Name Provided",
    email = "No Email Provided",
    phone = "No Phone Provided",
    location,
    company,
    date,
    time,
    dateandtime,
    dateTime,  // <-- added this to destructure dateTime from data
    services = [],
    projectDetails = "",
    category,
    selection,
  } = data;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let htmlBody = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
  `;

  if (company) htmlBody += `<p><strong>Company:</strong> ${company}</p>`;
  if (location) htmlBody += `<p><strong>Location:</strong> ${location}</p>`;

  if (dateTime) {
    // Format ISO string to readable date & time
    const dt = new Date(dateTime);
    const formattedDate = dt.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const formattedTime = dt.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });
    htmlBody += `<p><strong>Date & Time:</strong> ${formattedDate} ${formattedTime}</p>`;
  } else if (dateandtime) {
    htmlBody += `<p><strong>Date & Time:</strong> ${dateandtime}</p>`;
  } else {
    if (date) htmlBody += `<p><strong>Date:</strong> ${date}</p>`;
    if (time) htmlBody += `<p><strong>Time:</strong> ${time}</p>`;
  }

  if (category) htmlBody += `<p><strong>Category:</strong> ${category}</p>`;
  if (selection) htmlBody += `<p><strong>Selection:</strong> ${selection}</p>`;

  if (services.length > 0) {
    htmlBody += `<p><strong>Requested Services:</strong> ${services.join(", ")}</p>`;
  }

  htmlBody += `<p><strong>Project Details:</strong><br/>${projectDetails || "No details provided"}</p>`;

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_TO_QUOTE,
    subject: "New Quote Request",
    html: htmlBody,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Quote request sent successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(
      JSON.stringify({ message: "Failed to send quote request." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
