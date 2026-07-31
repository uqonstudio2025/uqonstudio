export type SocialPlatform =
  | "instagram"
  | "facebook"
  | "tiktok"
  | "youtube"
  | "linkedin"
  | "whatsapp"
  | "email";

export interface SocialLink {
  platform: SocialPlatform;

  label: string;

  href: string;
}