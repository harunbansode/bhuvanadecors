// import { Resend } from 'resend';
// import { NextResponse } from 'next/server';

// const resend = new Resend(process.env.RESEND_API_KEY);
// console.log("API Key found:", process.env.RESEND_API_KEY ? "YES" : "NO");
// console.log("Key Starts with:", process.env.RESEND_API_KEY?.substring(0, 5));

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { 
//       name, 
//       email, 
//       phone, 
//       event_date, 
//       event_time, 
//       event_location, 
//       contactMethod, 
//       message 
//     } = body;

//     const { data, error } = await resend.emails.send({
//       from: 'Buvana Decors <contact@bhuvanadecors.com>', 
//       to: ['contact@bhuvanadecors.com'], 
//       subject: `New Inquiry from ${name}`,
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Event Date:</strong> ${event_date} at ${event_time}</p>
//         <p><strong>Location:</strong> ${event_location}</p>
//         <p><strong>Preferred Contact:</strong> ${contactMethod}</p>
//         <hr />
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `,
//     });

//     if (error) {
//       return NextResponse.json({ error }, { status: 500 });
//     }

//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }


import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// 1. Move the initialization INSIDE the function
export async function POST(req: Request) {
  // Check the terminal to confirm the key is still there
  console.log("Processing request with key:", process.env.RESEND_API_KEY?.substring(0, 10) + "...");

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const { 
      name, 
      email, 
      phone, 
      event_date, 
      event_time, 
      event_location, 
      contactMethod, 
      message 
    } = body;

    // 2. Use the local resend instance
    const { data, error } = await resend.emails.send({
      from: 'Buvana Decors <contact@bhuvanadecors.com>', 
      to: ['contact@bhuvanadecors.com'], 
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Event Date:</strong> ${event_date} at ${event_time}</p>
        <p><strong>Location:</strong> ${event_location}</p>
        <p><strong>Preferred Contact:</strong> ${contactMethod}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error); // Log the full error to your terminal
      return NextResponse.json({ error }, { status: 401 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}