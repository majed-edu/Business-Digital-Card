import facebookIcon from "../assets/Facebook Icon.svg";
import githubIcon from "../assets/GitHub Icon.svg";
import instagramIcon from "../assets/Instagram Icon.svg";
import linkedinIcon from "../assets/Linkedin Icon.svg";
import twitterIcon from "../assets/Twitter Icon.svg";

const socialLinks = [
  { name: "Twitter", icon: twitterIcon, href: "#twitter" },
  { name: "Facebook", icon: facebookIcon, href: "#facebook" },
  { name: "Instagram", icon: instagramIcon, href: "#instagram" },
  { name: "LinkedIn", icon: linkedinIcon, href: "#linkedin" },
  { name: "GitHub", icon: githubIcon, href: "#github" },
];

export default function SocialLinks() {
  return (
    <footer className="social-bar">
      {socialLinks.map((socialLink) => (
        <a
          key={socialLink.name}
          href={socialLink.href}
          aria-label={socialLink.name}
        >
          <img src={socialLink.icon} alt="" aria-hidden="true" />
        </a>
      ))}
    </footer>
  );
}
