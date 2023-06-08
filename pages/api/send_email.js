import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, message } = req.body;

    try {
      // Create a nodemailer transporter
      const transporter = nodemailer.createTransport({
        // Configure the transporter with your email provider settings
        host: "your-smtp-host",
        port: 587,
        secure: false,
        auth: {
          user: "your-email",
          pass: "your-password"
        }
      });
 
      // Create the email message
      const mailOptions = {
        from: email,
        to: "akuakujonathan5488@gmail.com",
        subject: `EssentialERP Customer Message from ${firstName} ${lastName}`,
        text: message
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.log("Error occurred while sending email", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(404).json({ error: "Invalid request method" });
  }
}
