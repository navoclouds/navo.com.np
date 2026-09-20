import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, projectType, budget, timeline, message, to, fromName, fromEmail, logoUrl } =
      await req.json();

    if (!name || !email || !message || !to || !fromEmail) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: `${fromName || "Enquiry Form" } <${fromEmail}>`,
      to,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: `
<div style="margin:0; padding:40px 20px; background:#f4f7fb; font-family:Arial,Helvetica,sans-serif; color:#172033;">
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
                    <img src=${logoUrl || 'https://navo.com.np/images/Logo.webp'} alt="brand-logo" height="32" style="display:block; height:32px; width:auto;" />
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
              <img src=${logoUrl || 'https://navo.com.np/images/Logo.webp'} alt="brand-logo" height="20" style="display:inline-block; height:20px; width:auto; opacity:0.7; margin-bottom:8px;" />
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
</div>
`,
    });

    if (error) return Response.json({ error: error.message }, { status: 500 });
    return Response.json({ success: true, data });
  } catch (err) {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}