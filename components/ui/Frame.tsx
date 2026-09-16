import Image from "next/image";

type FrameProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  rounded?: string;
};

export default function Frame({
  src,
  alt,
  className = "aspect-4/3",
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority = false,
  rounded = "rounded-2xl",
}: FrameProps) {
  return (
    <div
      className={`relative w-full overflow-hidden border border-gray-300 bg-white ${rounded} ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div
          className="absolute inset-0 grid place-items-center px-6 text-center"
          role="img"
          aria-label={alt}
          style={{
            backgroundImage:
              "radial-gradient(120% 120% at 10% 0%, rgba(207,63,154,0.14) 0%, rgba(30,174,252,0.12) 45%, rgba(54,70,122,0.06) 100%)",
          }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
            Image slot
          </span>
        </div>
      )}
    </div>
  );
}