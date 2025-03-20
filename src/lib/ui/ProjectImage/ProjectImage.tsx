import Image from "next/image";

type ProjectImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function ProjectImage({ src, alt, className = "" }: ProjectImageProps) {
  return (
    <div
      className={`relative aspect-video overflow-hidden rounded-md ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={700}
        height={400}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
