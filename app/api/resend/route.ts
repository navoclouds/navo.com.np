import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      projectType,
      budget,
      timeline,
      message,
      to,
      fromName,
      fromEmail,
      logoUrl,
      template,
    } = await req.json();

    if (!name || !email || !message || !to || !fromEmail) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400, headers: { "Access-Control-Allow-Origin": "*" } }, // add this
      );
    }

    function buildEmailFormat() {
      if (template === "nepalmemorable.com") {
        return `
            <div style="margin:0; padding:40px 16px; background:#f3f6fa; font-family:Arial,Helvetica,sans-serif; color:#172033;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center">

                    <!-- Main Container -->
                    <table width="100%" cellpadding="0" cellspacing="0" border="0"
                      style="max-width:640px; background:#ffffff; border-radius:16px; overflow:hidden;">

                      <!-- Header -->
                      <tr>
                        <td style="padding:28px 36px; background:#0b0b0f;">
                          <table width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td>
                                <img
                                  src="${logoUrl}"
                                  height="32"
                                  alt="NAVO"
                                  style="display:block; height:32px; width:auto; border:0;"
                                />
                              </td>

                              <td align="right"
                                style="font-size:11px; font-weight:bold; letter-spacing:1.5px; color:#8f98a8;">
                                NEW ENQUIRY
                              </td>
                            </tr>
                          </table>

                        </td>
                      </tr>

                      <!-- Accent Line -->
                      <tr>
                        <td style="height:3px; background:#1eaefc; font-size:0; line-height:0;">
                          &nbsp;
                        </td>
                      </tr>

                      <!-- Content -->
                      <tr>
                        <td style="padding:36px;">

                          <!-- Heading -->
                          <p style="margin:0 0 8px; font-size:13px; font-weight:bold; color:#1eaefc; letter-spacing:1px; text-transform:uppercase;">
                            Contact Form
                          </p>

                          <h1 style="margin:0 0 12px; font-size:26px; line-height:34px; color:#101522; font-weight:700;">
                            New enquiry from ${name}
                          </h1>

                          <p style="margin:0 0 28px; font-size:14px; line-height:22px; color:#687386;">
                            Someone has submitted a new enquiry through your website.
                          </p>

                          <!-- Details -->
                          <table width="100%" cellpadding="0" cellspacing="0" border="0"
                            style="margin-bottom:28px;">

                            <!-- Name -->
                            <tr>
                              <td style="padding:14px 16px; background:#f7f9fc; border-bottom:1px solid #e8edf3;">
                                <div style="font-size:11px; font-weight:bold; text-transform:uppercase; letter-spacing:.8px; color:#8a94a6; margin-bottom:5px;">
                                  Name
                                </div>

                                <div style="font-size:14px; color:#172033; font-weight:600;">
                                  ${name}
                                </div>
                              </td>
                            </tr>

                            <!-- Email -->
                            <tr>
                              <td style="padding:14px 16px; background:#f7f9fc; border-bottom:1px solid #e8edf3;">
                                <div style="font-size:11px; font-weight:bold; text-transform:uppercase; letter-spacing:.8px; color:#8a94a6; margin-bottom:5px;">
                                  Email
                                </div>

                                <a
                                  href="mailto:${email}"
                                  style="font-size:14px; color:#168fd1; text-decoration:none; font-weight:600;"
                                >
                                  ${email}
                                </a>
                              </td>
                            </tr>

                            <!-- Subject -->
                            <tr>
                              <td style="padding:14px 16px; background:#f7f9fc;">
                                <div style="font-size:11px; font-weight:bold; text-transform:uppercase; letter-spacing:.8px; color:#8a94a6; margin-bottom:5px;">
                                  Subject
                                </div>

                                <div style="font-size:14px; color:#172033; font-weight:600;">
                                  ${projectType || "-"}
                                </div>
                              </td>
                            </tr>

                          </table>

                          <!-- Message -->
                          <div style="margin-bottom:28px;">

                            <div style="margin-bottom:10px; font-size:12px; font-weight:bold; text-transform:uppercase; letter-spacing:.8px; color:#687386;">
                              Message
                            </div>

                            <div style="
                              padding:20px;
                              background:#f8fafc;
                              border:1px solid #e6ebf1;
                              border-left:4px solid #1eaefc;
                              border-radius:8px;
                              font-size:14px;
                              line-height:24px;
                              color:#303b4d;
                              white-space:pre-line;
                            ">
                              ${message}
                            </div>

                          </div>

                          <!-- Reply Button -->
                          <table cellpadding="0" cellspacing="0" border="0">
                            <tr>
                              <td style="border-radius:8px; background:#1eaefc;">
                                <a
                                  href="mailto:${email}"
                                  style="
                                    display:inline-block;
                                    padding:13px 22px;
                                    font-size:13px;
                                    font-weight:bold;
                                    color:#ffffff;
                                    text-decoration:none;
                                  "
                                >
                                  Reply to ${name}
                                </a>
                              </td>
                            </tr>
                          </table>

                        </td>
                      </tr>

                      <!-- Footer -->
                      <tr>
                        <td style="padding:24px 36px; background:#f8fafc; border-top:1px solid #e8edf3;">

                          <p style="margin:0 0 5px; font-size:12px; font-weight:bold; color:#172033;">
                            NAVO
                          </p>

                          <p style="margin:0; font-size:11px; line-height:18px; color:#8a94a6;">
                            This message was automatically generated from the NAVO website contact form.
                          </p>

                        </td>
                      </tr>

                    </table>

                    <!-- Outside Footer -->
                    <p style="
                      margin:18px 0 0;
                      font-size:11px;
                      color:#9aa3b2;
                      text-align:center;
                    ">
                      © NAVO · Build Smarter. Build With NAVO.
                    </p>

                  </td>
                </tr>
              </table>

            </div>
`;
      } else if (template === "navo.com.np") {
        return `<div style="margin:0; padding:40px 20px; background:#f4f7fb; font-family:Arial,Helvetica,sans-serif; color:#172033;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td align="center">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
                          style="max-width:640px; background:#ffffff; border-radius:20px; overflow:hidden; box-shadow:0 10px 40px rgba(15,23,42,0.10);">

                          <!-- Header -->
                          <tr>
                            <td style="padding:32px 36px; background:#0b0b0f;">
                              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                  <td valign="middle">
                                    <img src=${logoUrl || "https://navo.com.np/images/Logo.webp"} alt="brand-logo" height="32" style="display:block; height:32px; width:auto;" />
                                  </td>
                                  <td align="right" valign="middle">
                                    <span style="display:inline-block; padding:8px 14px; border-radius:999px; background:rgba(30,174,252,0.12); border:1px solid rgba(30,174,252,0.3); color:#1eaefc; font-size:11px; font-weight:700; letter-spacing:0.5px;">
                                      NEW ENQUIRY
                                    </span>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>

                          <!-- Accent bar -->
                          <tr>
                            <td style="height:4px; background:linear-gradient(90deg,#1eaefc,#0b0b0f);"></td>
                          </tr>

                          <!-- Intro -->
                          <tr>
                            <td style="padding:40px 36px 8px;">
                              <div style="font-size:12px; font-weight:800; color:#1eaefc; letter-spacing:1.5px; text-transform:uppercase;">
                                Contact Form Submission
                              </div>
                              <h1 style="margin:12px 0 10px; font-size:26px; line-height:1.3; color:#0b0b0f; font-weight:800;">
                                New enquiry from ${name}
                              </h1>
                              <p style="margin:0; font-size:14px; line-height:1.7; color:#667085;">
                                Someone just reached out through the Navo website. Details below.
                              </p>
                            </td>
                          </tr>

                          <!-- Contact card -->
                          <tr>
                            <td style="padding:24px 36px 0;">
                              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                                style="border:1px solid #e7eaf0; border-radius:14px; overflow:hidden;">

                                <tr>
                                  <td width="35%" style="padding:16px 20px; font-size:12px; font-weight:700; color:#98a2b3; text-transform:uppercase; letter-spacing:0.4px; border-bottom:1px solid #eef0f4; background:#fafbfc;">
                                    Name
                                  </td>
                                  <td style="padding:16px 20px; font-size:14px; font-weight:700; color:#0b0b0f; border-bottom:1px solid #eef0f4;">
                                    ${name}
                                  </td>
                                </tr>

                                <tr>
                                  <td style="padding:16px 20px; font-size:12px; font-weight:700; color:#98a2b3; text-transform:uppercase; letter-spacing:0.4px; border-bottom:1px solid #eef0f4; background:#fafbfc;">
                                    Email
                                  </td>
                                  <td style="padding:16px 20px; font-size:14px; border-bottom:1px solid #eef0f4;">
                                    <a href="mailto:${email}" style="color:#1eaefc; text-decoration:none; font-weight:600;">${email}</a>
                                  </td>
                                </tr>

                                <tr>
                                  <td style="padding:16px 20px; font-size:12px; font-weight:700; color:#98a2b3; text-transform:uppercase; letter-spacing:0.4px; background:#fafbfc;">
                                    Project Type
                                  </td>
                                  <td style="padding:16px 20px; font-size:14px; color:#0b0b0f;">
                                    ${projectType || "-"}
                                  </td>
                                </tr>

                              </table>
                            </td>
                          </tr>

                          <!-- Budget / Timeline -->
                          <tr>
                            <td style="padding:20px 36px 0;">
                              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                  <td width="50%" style="padding-right:8px;">
                                    <div style="padding:18px 20px; background:#fafbfc; border:1px solid #e7eaf0; border-radius:14px;">
                                      <div style="font-size:11px; font-weight:800; color:#98a2b3; text-transform:uppercase; letter-spacing:0.6px;">
                                        Budget
                                      </div>
                                      <div style="margin-top:8px; font-size:16px; font-weight:800; color:#0b0b0f;">
                                        ${budget || "-"}
                                      </div>
                                    </div>
                                  </td>
                                  <td width="50%" style="padding-left:8px;">
                                    <div style="padding:18px 20px; background:#fafbfc; border:1px solid #e7eaf0; border-radius:14px;">
                                      <div style="font-size:11px; font-weight:800; color:#98a2b3; text-transform:uppercase; letter-spacing:0.6px;">
                                        Timeline
                                      </div>
                                      <div style="margin-top:8px; font-size:16px; font-weight:800; color:#0b0b0f;">
                                        ${timeline || "-"}
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>

                          <!-- Message -->
                          <tr>
                            <td style="padding:28px 36px 0;">
                              <div style="font-size:12px; font-weight:800; color:#98a2b3; text-transform:uppercase; letter-spacing:0.6px; margin-bottom:10px;">
                                Message
                              </div>
                              <div style="padding:20px; background:#fafbfc; border-left:4px solid #1eaefc; border-radius:10px; font-size:14px; line-height:1.8; color:#344054;">
                                ${message.replace(/\n/g, "<br/>")}
                              </div>
                            </td>
                          </tr>

                          <!-- CTA -->
                          <tr>
                            <td style="padding:32px 36px 40px;">
                              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                  <td align="center" style="border-radius:12px; background:#0b0b0f;">
                                    <a href="mailto:${email}" style="display:block; padding:16px 24px; font-size:14px; font-weight:700; color:#ffffff; text-decoration:none;">
                                      Reply to ${name} →
                                    </a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>

                          <!-- Footer -->
                          <tr>
                            <td style="padding:24px 36px; background:#fafbfc; border-top:1px solid #eef0f4; text-align:center;">
                              <img src=${logoUrl || "https://navo.com.np/images/Logo.webp"} alt="brand-logo" height="20" style="display:inline-block; height:20px; width:auto; opacity:0.7; margin-bottom:8px;" />
                              <div style="font-size:12px; color:#98a2b3;">
                                Build Smarter. Build With Navo.
                              </div>
                              <div style="margin-top:10px; font-size:11px; color:#c1c7d0;">
                                This notification was generated from the Navo website contact form.
                              </div>
                            </td>
                          </tr>

                        </table>
                      </td>
                    </tr>
                  </table>
                </div>`;
      } else {
        throw new Error("Error no template available");
      }
    }

    const { data, error } = await resend.emails.send({
      from: `${fromName || "Enquiry Form"} <${fromEmail}>`,
      to,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: buildEmailFormat(),
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
