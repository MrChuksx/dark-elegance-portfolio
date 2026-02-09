import { motion } from "framer-motion";

interface OvalImageProps {
  src: string;
  alt: string;
  className?: string;
}

const OvalImage = ({ src, alt, className = "" }: OvalImageProps) => (
  <motion.div
    className={`overflow-hidden ${className}`}
    style={{ borderRadius: "50% / 40%" }}
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <motion.img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
  </motion.div>
);

export default OvalImage;
