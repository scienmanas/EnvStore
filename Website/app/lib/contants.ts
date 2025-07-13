import { IconType } from "react-icons";
import { SiBuymeacoffee, SiSolana } from "react-icons/si";
import { FaBitcoin, FaEthereum } from "react-icons/fa";

interface navigationLinksType {
  name: string;
  link: string;
}

interface donationType {
  name: string;
  icon: IconType;
  address: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

export const navigationLinks: navigationLinksType[] = [
  {
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    name: "Login/SignUp",
    link: "/auth",
  },
  {
    name: "Terms & Condiitons",
    link: "/legal/terms-and-conditions",
  },
  {
    name: "Privacy Policy",
    link: "/legal/privacy-policy",
  },
  {
    name: "Github",
    link: "https://github.com/scienmanas/EnvStore",
  },
];

export const donationLinks: donationType[] = [
  {
    name: "Buy me a coffee",
    icon: SiBuymeacoffee,
    address: "https://buymeacoffee.com/scienmanas",
  },
  {
    name: "Bitcoin",
    icon: FaBitcoin,
    address:
      "https://btcscan.org/address/bc1qwcahm8aq9uqg5zthnvnkvl0vxkm3wku90hs4j4",
  },
  {
    name: "Ethereum",
    icon: FaEthereum,
    address:
      "https://etherscan.io/address/0x54da97548d91f8A157634C3a60f82831cD913A9c",
  },
  {
    name: "Solana",
    icon: SiSolana,
    address:
      "https://solscan.io/account/E3FrcftDnb1FXDpRBA96ja7vQmWnQ8mTk85i7m85FmhD",
  },
];

export const faqData: FAQItem[] = [
  {
    question: "Are there any terms for use?",
    answer:
      "Yes, EnvStore is intended for ethical use only. It should not be used to harm anyone.",
  },
  {
    question: "Is it open source?",
    answer:
      "Yes, EnvStore is an open-source project. You can find the source code on our GitHub repository. Contributions are welcome!",
  },
  {
    question: "How do I use EnvStore?",
    answer:
      "You can refer to the demo video in the landing page. If you need further assistance, please check the documentation on our GitHub repository or contact us (email mention just above the Footer).",
  },
  {
    question: "Are you backed by any organization?",
    answer:
      "No, EnvStore is an independent open-source project. Currently we are not backed by any organization or company, but we are seeking for donations to support the project.",
  },
  {
    question: "Can I contribute to EnvStore?",
    answer:
      "Absolutely! We welcome contributions from the community. You can contribute by reporting issues, suggesting features, or submitting pull requests on our GitHub repository.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can mail at iamscientistmanas@gmail.com. For urgent issues, please open an issue on our GitHub repository, and we will get back to you as soon as possible.",
  },
];

export const navBarLinks: navigationLinksType[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Contact",
    link: "https://mail.google.com/mail/?view=cm&to=iamscientistmanas@gmail.com",
  },
  {
    name: "Github",
    link: "https://github.com/scienmanas/EnvStore",
  },
  {
    name: "Author",
    link: "https://github.com/scienmanas",
  },
];
