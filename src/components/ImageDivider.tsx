interface ImageDividerProps {
  src: string;
  alt: string;
}

const ImageDivider = ({ src, alt }: ImageDividerProps) => (
  <div className="relative h-64 md:h-80 overflow-hidden">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-background/50" />
    <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
  </div>
);

export default ImageDivider;
