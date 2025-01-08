import Img5 from "@/assets/Illustration/browser-windows-with-different-information 1.svg?react";
import StarEmoticon from "@/assets/Illustration/emoticon-likes-and-stars-around 2.svg?react";
import Img2 from "@/assets/Illustration/selecting-a-value-in-the-browser-window 1.svg?react";
import SendingMessage from "@/assets/Illustration/sending-messages-from-one-place-to-another 1.svg?react";
import VolumetricAnalytics from "@/assets/Illustration/volumetric-analytics-of-different-types-in-web-browsers 2.svg?react";
import Img1 from "@/assets/Illustration/web-search-with-elements 2.svg?react";

type ServiceType = {
  heading1: string;
  heading2: string;
  Element: typeof Img2;
  extantLink: string;
  bgColor: "gray" | "green" | "black";
};

export const serviceList: ServiceType[] = [
  {
    heading1: "Search Engine",
    heading2: "Optimization",
    Element: Img1,
    bgColor: "gray",
    extantLink: "#",
  },
  {
    heading1: "Pay-per-click",
    heading2: "Advertising",
    Element: Img2,
    bgColor: "green",
    extantLink: "#",
  },
  {
    heading1: "Social Media",
    heading2: "Marketing",
    Element: StarEmoticon,
    bgColor: "black",
    extantLink: "#",
  },
  {
    heading1: "Email",
    heading2: "Marketing",
    Element: SendingMessage,
    bgColor: "gray",
    extantLink: "#",
  },
  {
    heading1: "Content",
    heading2: "Creations",
    Element: Img5,
    bgColor: "green",
    extantLink: "#",
  },
  {
    heading1: "Analytics and ",
    heading2: "Tracking",
    Element: VolumetricAnalytics,
    bgColor: "black",
    extantLink: "#",
  },
];
