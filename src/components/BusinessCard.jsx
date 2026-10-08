import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import SocialLinks from "./SocialLinks";

export default function BusinessCard() {
  return (
    <article className="business-card">
      <ProfileImage />
      <ProfileInfo />
      <SocialLinks />
    </article>
  );
}
