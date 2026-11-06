import Image from "next/image";

type Client = {
  id: string;
  logo: string;
  name: string;
  description: string;
};

type ClientsProps = {
  clients: {
    title: string;
    description: string;
    items: Client[];
  };
};

export default function Clients({ clients }: ClientsProps) {
  return (
    <section
      className="bg-white px-6 py-16 md:py-20"
      aria-label="Navo Cloud Solutions clients"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            OUR CLIENTS
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {clients.title}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {clients.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 border-t border-slate-200 pt-8 sm:grid-cols-2 lg:grid-cols-3">
          {clients.items.map((client) => (
            <div key={client.id} className="flex items-center gap-4">
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={64}
                height={64}
                className="h-14 w-14 shrink-0 object-contain"
              />

              <div>
                <h3 className="font-semibold text-slate-950">{client.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
