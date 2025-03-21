import Image from "next/image";

type ProjectImageProps = {
  src: string;
  alt: string;
  position: "left" | "right";
  className?: string;
};

export function ProjectImage({
  src,
  alt,
  position,
  className = "",
}: ProjectImageProps) {
  const isLeft = position === "left";

  return (
    <div
      className={`col-span-12 md:col-span-7 relative z-10 ${
        !isLeft ? "" : "md:col-start-6"
      } ${className}`}
    >
      <div className="relative aspect-video overflow-hidden rounded-md">
        <Image
          src={src}
          alt={alt}
          width={700}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
