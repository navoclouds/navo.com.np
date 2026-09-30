import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      message,
      to,
      fromName,
      fromEmail,
      template,
    } = await req.json();

    if (!name || !email || !message || !to || !fromEmail) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400, headers: { "Access-Control-Allow-Origin": "*" } }, // add this
      );
    }

    const { data, error } = await resend.emails.send({
      from: `${fromName || "Enquiry Form"} <${fromEmail}>`,
      to,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: template,
    });

    if (error)
      return Response.json(
        { error: error.message },
        { status: 500, headers: { "Access-Control-Allow-Origin": "*" } },
      );

    return Response.json(
      { success: true, data },
      { headers: { "Access-Control-Allow-Origin": "*" } },
    );
  } catch (err) {
    return Response.json(
      { error: "Something went wrong" },
      { status: 500, headers: { "Access-Control-Allow-Origin": "*" } },
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
