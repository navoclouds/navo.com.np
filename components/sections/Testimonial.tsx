import Image from "next/image";

const userData = [
  {
    image: "/Sachitra.png",
    rating: "★★★★★",
    name: "Sachitra Kitab",
    description:
      "NAVO understood what we were trying to build and brought the idea to life better than we expected. Their attention to detail, communication, and technical expertise made the entire process clear and fast.",
  },
  {
    image: "/Taali.png",
    rating: "★★★★★",
    name: "TAALI Education",
    description:
      "NAVO didn't just build what we asked for they took the time to understand the problem behind it. The final platform was thoughtfully designed, easy to scale, and made a real difference to how our students learn.",
  },
];

export default function Testimonial() {
  return (
    <div className="w-full flex flex-col items-center bg-white py-5">
      <p className="text-slate-400">Trusted to turn ideas into practical digital products</p>
      <div className="max-w-250 grid gap-10 my-10 md:grid-cols-2 grid-cols-1">
        {userData.map((data) => (
          <div
            key={data.name}
            className="py-5 px-8 rounded-xl bg-white/80 transition-transform duration-200 hover:-translate-y-2  border border-slate-200/80 shadow-md shadow-slate-100/60 card-hover-effect relative"
          >
            <div className="flex gap-4 mb-4">
              <Image src={data.image} alt={data.name} width={40} height={40} />
              <div>
                <h2 className="font-semibold text-slate-800">{data.name}</h2>
                <p className="text-[#c9449e]">{data.rating}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-blue-500 font-serif text-3xl leading-none inline-block">
                “
              </span>
              <p className="text-slate-600">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
