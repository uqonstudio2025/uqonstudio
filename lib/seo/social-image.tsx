/* ==========================================================================
   UQONSTUDIO
   Social Image Builder
   ========================================================================== */

import type {
  ReactElement,
} from "react";

import {
  SITE,
  THEME,
} from "./constants";

/* ==========================================================================
   Types
   ========================================================================== */

export interface SocialImageOptions {
  readonly badge?: string;

  readonly title?: string;

  readonly description?: string;

  readonly website?: string;
}

/* ==========================================================================
   Builder
   ========================================================================== */

export function createSocialImage({
  badge = "Interior Design Studio",

  title = SITE.name,

  description = SITE.description,

  website = SITE.url,
}: SocialImageOptions = {}): ReactElement {
  return (
    <div
      style={{
        width: "100%",

        height: "100%",

        display: "flex",

        position: "relative",

        overflow: "hidden",

        background: THEME.background,

        color: "#F8FAFC",

        fontFamily:
          "system-ui, sans-serif",
      }}
    >
      {/* Glow */}

      <div
        style={{
          position: "absolute",

          left: -180,

          top: -220,

          width: 720,

          height: 720,

          borderRadius: "50%",

          background:
            "rgba(245,158,11,.15)",

          filter: "blur(100px)",
        }}
      />

      <div
        style={{
          position: "absolute",

          right: -120,

          bottom: -120,

          width: 520,

          height: 520,

          borderRadius: "50%",

          background:
            "rgba(59,130,246,.10)",

          filter: "blur(90px)",
        }}
      />

      {/* Content */}

      <div
        style={{
          display: "flex",

          flexDirection: "column",

          justifyContent: "center",

          width: "100%",

          padding: "84px",
        }}
      >
        {/* Badge */}

        <div
          style={{
            display: "flex",

            alignItems: "center",

            width: "fit-content",

            padding: "10px 22px",

            borderRadius: 999,

            background:
              "rgba(255,255,255,.05)",

            border:
              "1px solid rgba(255,255,255,.08)",

            color: "#FBBF24",

            fontSize: 22,

            fontWeight: 700,
          }}
        >
          {badge}
        </div>

        {/* Brand */}

        <div
          style={{
            marginTop: 28,

            fontSize: 72,

            fontWeight: 800,

            letterSpacing: -3,
          }}
        >
          {title}
        </div>

        {/* Description */}

        <div
          style={{
            marginTop: 18,

            maxWidth: 820,

            fontSize: 32,

            lineHeight: 1.45,

            color:
              "rgba(248,250,252,.82)",
          }}
        >
          {description}
        </div>

        {/* Services */}

        <div
          style={{
            display: "flex",

            gap: 18,

            marginTop: 42,

            flexWrap: "wrap",
          }}
        >
          {[
            "Interior Design",
            "Custom Furniture",
            "Kitchen Set",
            "Commercial Interior",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",

                padding: "10px 18px",

                borderRadius: 999,

                background:
                  "rgba(255,255,255,.05)",

                border:
                  "1px solid rgba(255,255,255,.08)",

                fontSize: 20,
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Website */}

        <div
          style={{
            marginTop: 56,

            fontSize: 24,

            color:
              "rgba(255,255,255,.45)",
          }}
        >
          {website}
        </div>
      </div>
    </div>
  );
}