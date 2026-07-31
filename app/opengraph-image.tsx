import { ImageResponse } from "next/og";

import { createSocialImage } from "@/lib/seo";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const alt =
  "UQONSTUDIO — Interior Design & Custom Furniture";

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    createSocialImage(),
    size
  );
}