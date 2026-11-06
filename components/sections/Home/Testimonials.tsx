import Image from "next/image";

const testimonials = [
  {
    image: "/Sachitra.webp",
    rating: 5,
    name: "Sachitra Kitab",
    description:
      "Navo Cloud Solutions brought our vision to life with a professional website that reflects our brand and makes it easier to showcase our books online. Their website development process was smooth, and we appreciated their attention to design, functionality, and detail.",
  },
  {
    image: "/Taali.webp",
    rating: 5,
    name: "TAALI Education",
    description:
      "Navo Cloud Solutions understood our requirements and developed a website that represents our educational services effectively. From the design to the overall user experience, they delivered a clean, responsive, and easy-to-navigate website that meets our needs.",
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
                <p
                  className="text-brand-pink"
                  aria-label={`Rated ${item.rating} out of 5`}
                >
                  <span aria-hidden="true">{"★".repeat(item.rating)}</span>
                </p>
              </figcaption>
            </div>
            <blockquote className="text-slate-600">
              {item.description}
            </blockquote>
          </figure>
        </li>
      ))}
    </ul>
  );
}
