import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { fullName, email, description } = body;

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rajat.saraswat.0409@gmail.com",
        pass: process.env.EMAIL_PASSWORD, // You need to set this in .env.local
      },
    });

    // Create email content
    const mailOptions = {
      from: "rajat.saraswat.0409@gmail.com",
      to: "rajat.saraswat.0409@gmail.com",
      subject: `New Contact Message from ${fullName}`,
      html: `
        <h2>New Contact Message from Ginsei Website</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Description:</strong></p>
        <p>${description}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log("Contact message sent successfully:", {
      fullName,
      email,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully, we'll get back to you shortly",
    });
  } catch (error) {
    console.error("Error sending contact message:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message" },
      { status: 500 },
    );
  }
}
