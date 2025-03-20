import Image from "next/image";

type FramedImageProps = {
  src: string;
  alt: string;
  width?: number;
  className?: string;
  priority?: boolean;
};

export function FramedImage({
  src,
  alt,
  width = 350,
  className = "",
  priority = false,
}: FramedImageProps) {
  return (
    <div
      className={`relative w-full max-w-[${width}px] aspect-square ${className}`}
    >
      <div className="absolute inset-0 border-2 border-yellow-400 rounded-md translate-x-4 translate-y-4" />
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-md"
        priority={priority}
      />
    </div>
  );
}
