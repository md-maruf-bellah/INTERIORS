import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, address, description, budget } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: "your-email@gmail.com",
      subject: "New Project Lead",
      html: `
        <h2>Details: ${name}</h2>
        <p>Name: ${name}</p>
        <p>Phone: ${phone}</p>
        <p>Email: ${email}</p>
        <p>Address: ${address}</p>
        <p>Budget: ${Array.isArray(budget) ? budget.join(", ") : budget}</p>
        <p>Description: ${description}</p>
      `,
    });

    return NextResponse.json({ message: "Sent" }, { status: 200 });
    //   } catch (error) {
    //     return NextResponse.json({ message: "Error" }, { status: 500 });
    //   }
  } catch (error: any) {
    console.error("Email Error:", error); // টার্মিনালে আসল এররটি দেখাবে
    return NextResponse.json(
      { message: "Failed to send email", error: error.message },
      { status: 500 },
    );
  }
}
