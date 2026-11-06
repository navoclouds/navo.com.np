
import Form from "./Form";
import Channels from "./Channels";
import type { ContactContent } from "../data";

export default function Enquiry({ content }: { content: ContactContent }) {
  return (
    <section className="bg-white">
      {/* Enquiry Form */}
      <div className="px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <Form form={content.form} />
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-slate-950 px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <Channels
            channels={content.channels}
            expectations={content.expectations}
          />
        </div>
      </div>
    </section>
  );
}
