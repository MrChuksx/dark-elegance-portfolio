interface OvalImageProps {
  src: string;
  alt: string;
  className?: string;
}

const OvalImage = ({ src, alt, className = "" }: OvalImageProps) => (
  <div className={`overflow-hidden ${className}`} style={{ borderRadius: "50% / 40%" }}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
    />
  </div>
);

export default OvalImage;
