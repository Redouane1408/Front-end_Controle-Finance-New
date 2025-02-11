import * as React from "react";

// FooterLink component
const FooterLink: React.FC<{ href: string; text: string }> = ({
  href,
  text,
}) => (
  <a href={href} className="text-cyan-700 hover:underline">
    {text}
  </a>
);

export default FooterLink;
