import type { IconName } from "@/lib/icons";


/* ==========================================================================
 * Contact Info
 * ========================================================================== */

export interface ContactInfoItem {
  readonly id: string;

  readonly title: string;

  readonly value: string;

  readonly href?: string;

  readonly icon: IconName;
}

/* ==========================================================================
 * Contact Form
 * ========================================================================== */

export interface ContactFormOption {
  readonly label: string;

  readonly value: string;
}

export interface ContactFormContent {
  readonly services: readonly ContactFormOption[];

  readonly submitLabel: string;

  readonly placeholders: {
    readonly name: string;

    readonly email: string;

    readonly message: string;

    readonly service: string;
  };
}

/* ==========================================================================
 * Contact Map
 * ========================================================================== */

export interface ContactMapContent {
  readonly embedUrl: string;

  readonly title: string;
}

/* ==========================================================================
 * Contact Content
 * ========================================================================== */

export interface ContactContent {
  readonly badge: string;

  readonly title: string;

  readonly description: string;

  readonly info: readonly ContactInfoItem[];

  readonly form: ContactFormContent;
  readonly map: ContactMapContent;
}

/* ==========================================================================
 * Contact Component
 * ========================================================================== */

export interface ContactProps {
  readonly className?: string;

  readonly content?: ContactContent;
}

/* ==========================================================================
 * Contact Info Component
 * ========================================================================== */

export interface ContactInfoProps {
  readonly content: ContactContent;

  readonly className?: string;
}

/* ==========================================================================
 * Contact Form Component
 * ========================================================================== */

export interface ContactFormProps {
  readonly content: ContactContent;

  readonly className?: string;
}

/* ==========================================================================
 * Contact Map Component
 * ========================================================================== */

export interface ContactMapProps {
  readonly content: ContactMapContent;

  readonly className?: string;
} 