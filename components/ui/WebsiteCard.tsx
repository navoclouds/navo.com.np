import { Website } from "@/lib/types";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WebsiteCard = ({ website }: { website: Website }) => {
  return (
    <article
      key={website.id}
      className="bg-white shadow-sm group p-4 rounded-sm flex flex-col gap-4"
    >
      <Image
        src={website.cover}
        width={300}
        height={200}
        alt={`${website.tag} for ${website.title}`}
        className="w-full aspect-square object-cover object-top shadow-sm border-2 border-gray-200"
      />
      <h3 className="text-slate-800 font-semibold text-xl transition-all duration-300 group-hover:text-brand-pink">
        {website.title}
      </h3>
      <p className="text-gray-500 font-medium uppercase text-sm">
        {website.tag}
      </p>
      <Link
        href={website.link}
        target="_blank"
        className="text-sm cursor-pointer transition-all duration-300 hover:text-brand-pink hover:border-brand-pink flex uppercase p-2 px-4 border-dashed border-2 rounded-sm border-gray-400 items-center gap-4 w-fit text-gray-400"
      >
        <span>Visit Website</span>
        <ExternalLink size={14} />
      </Link>
    </article>
  );
};

export default WebsiteCard;
