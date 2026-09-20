import Form from "./Form";
import Channels from "./Channels";
import type { ContactContent } from "../data";

export default function Enquiry({ content }: { content: ContactContent }) {
  return (
    <section className="border-b border-gray-300 px-6 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Form form={content.form} />
        </div>
        <div className="lg:col-span-5">
          <Channels channels={content.channels} expectations={content.expectations} />
        </div>
      </div>
    </section>
  );
}