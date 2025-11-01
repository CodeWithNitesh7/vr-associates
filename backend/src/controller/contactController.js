import Contact from "../models/contact.js";
import Owner from "../models/owner.js";
import { sendEmail } from "../configs/nodemailer.js";

export const submitContact = async (req, res) => {
    try {
        const {name, email,message} = req.body;

        const newContact = new Contact({
            name,
            email,
            message
        })

        await newContact.save();

        const owner = await Owner.findOne();
    const adminEmail = owner?.email || process.env.ADMIN_EMAIL;

    if (!adminEmail) {
      console.warn("⚠️ No admin email found in DB or .env");
      return res.status(200).json({ message: "Message saved, but no admin email found" });
    }

    // ✅ Send email to admin
    const subject = `📬 New Contact Message from ${name}`;
    const html = `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    await sendEmail(adminEmail, subject, html);

        return res.status(200).json({message:"Messagge sent successfully"})
    } catch (error) {
        console.error("Error sending the message",error);
        return res.status(500).json({message:"Internal server error"})
        
    }
}

