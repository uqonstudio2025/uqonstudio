export interface HeroButton {
  label: string;

  href: string;
}

export interface HeroContent {
  eyebrow: string;

  title: string;

  description: string;

  primaryCTA: HeroButton;

  secondaryCTA?: HeroButton;
}