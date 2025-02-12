"use client";
import { IKImage } from "imagekitio-next";
import React from "react";

type ImageProps = {
  path: string;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
  tr?: boolean;
};
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Image = ({ path, width, height, alt, className, tr }: ImageProps) => {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={path}
      alt={alt}
      className={className}
      lqip={{ active: true, quality: 20 }}
      {...(tr
        ? {
            transformation: [
              {
                width: width ? String(width) : undefined,
                height: height ? String(height) : undefined,
              },
            ],
          }
        : { width, height })}
    />
  );
};

export default Image;
