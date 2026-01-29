import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const collegeName = formData.get("collegeName") as string;
    const role = formData.get("role") as string;
    const importantLinks = formData.get("importantLinks") as string;
    const resume = formData.get("resume") as File;

    // Create email transporter
    // Note: For production, you should use environment variables for credentials
    // This is a simplified example using Gmail
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
      subject: `Career Application from ${fullName}`,
      html: `
        <h2>New Career Application from Ginsei Website</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>College:</strong> ${collegeName}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Important Links:</strong> ${importantLinks || "N/A"}</p>
        <p><strong>Resume:</strong> ${resume ? resume.name : "No file attached"}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log("Application submitted successfully:", {
      fullName,
      email,
      collegeName,
      role,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully, we'll get back to you shortly",
    });
  } catch (error) {
    console.error("Error processing application:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit application" },
      { status: 500 },
    );
  }
}
