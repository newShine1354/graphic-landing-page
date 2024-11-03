import { Email } from "@/helpers/Email";
import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
export async function POST(request: Request) {
  try {
    // send mail with defined transport object
    const { fullname, email, message } = await request.json();

    if (!fullname || !email || !message) {
      return Response.json(
        {
          success: false,
          message: "Fill form completely.",
        },
        { status: 400 }
      );
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL,
        pass: process.env.MAIL_PASS,
      },
    });

    const info: any = await transporter.sendMail({
      from: email, // sender address
      to: "navnoorsinghthind1354@gmail.com", // list of receivers
      subject: "From Portfolio", // Subject line
      text: "Hello world?", // plain text body
      html: `<div><h1 className="">Hi, I am ${fullname}</h1>
      <h2 className="">My email address is ${email}</h2>
      <p className="">${message}</p></div>`, // html body
    });

    console.log("Message sent: %s", info?.messageId);
    return Response.json(
      {
        success: true,
        data: info,
        message: "Verification email send successfully.",
      },
      { status: 200 }
    );
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  } catch (error) {
    console.error("Error sending verification email", error);
    return Response.json(
      {
        success: false,
        message: "Failed to send verification email.",
      },
      { status: 500 }
    );
  }
}
