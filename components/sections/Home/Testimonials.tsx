import Image from "next/image";

const testimonials = [
  {
    image: "/Sachitra.webp",
    rating: 5,
    name: "Sachitra Kitab",
    description:
      "NAVO understood what we were trying to build and brought the idea to life better than we expected. Their attention to detail, communication, and technical expertise made the entire process clear and fast.",
  },
  {
    image: "/Taali.webp",
    rating: 5,
    name: "TAALI Education",
    description:
      "NAVO didn't just build what we asked for — they took the time to understand the problem behind it. The final platform was thoughtfully designed, easy to scale, and made a real difference to how our students learn.",
  },
];

export default function Testimonials() {
  return (
    <ul className="grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
      {testimonials.map((item) => (
        <li key={item.name}>
          <figure className="relative h-full rounded-xl border border-slate-200/80 bg-white px-8 py-5 text-left shadow-md shadow-slate-100/60 transition-transform duration-200 hover:-translate-y-2">
            <div className="mb-4 flex gap-4">
              <Image
                src={item.image}
                alt={`${item.name} logo`}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
              <figcaption>
                <p className="font-semibold text-slate-800">{item.name}</p>
                <p className="text-brand-pink" aria-label={`Rated ${item.rating} out of 5`}>
                  <span aria-hidden="true">{"★".repeat(item.rating)}</span>
                </p>
              </figcaption>
            </div>
            <blockquote className="text-slate-600">{item.description}</blockquote>
          </figure>
        </li>
      ))}
    </ul>
  );
}