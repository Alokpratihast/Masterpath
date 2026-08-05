import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { siteConfig } from "./site";

export const contactInfo = [
  {
    id: 1,
    title: "Call Us",
    value: siteConfig.phone,
    description:
      "Speak directly with our career counsellors.",
    icon: Phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },

  {
    id: 2,
    title: "Email Us",
    value: siteConfig.email,
    description:
      "Send your queries anytime via email.",
    icon: Mail,
    href: `mailto:${siteConfig.email}`,
  },

  {
    id: 3,
    title: "Visit Our Office",
    value: siteConfig.address,
    description:
      "Meet our trainers and career advisors.",
    icon: MapPin,
    href: "https://maps.google.com",
  },
];