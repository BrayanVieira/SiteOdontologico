import React from "react";

interface ToothProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

/**
 * Component that renders the tooth icon using the SVG located in the public/assets folder.
 * Make sure the file "tooth.svg" exists in "public/assets/tooth.svg".
 */
const Tooth: React.FC<ToothProps> = (props) => {
  // Use an absolute path for the asset. This allows the browser to correctly load the SVG file.
  return <img {...props} src="/assets/tooth.svg" alt="Ícone de Dente" />;
};

export default Tooth;
