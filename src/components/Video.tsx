"use client";
import React from "react";
import { IKVideo } from "imagekitio-next";

type VideoProps = { path: string; className?: string };
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Video = ({ path, className }: VideoProps) => {
  return (
    <IKVideo
      className={className}
      path={path}
      urlEndpoint={urlEndpoint}
      controls
      transformation={[ { width: "1920",height: "1080",q:"90" },{ raw: "l-text,i-nazmul,fs-100,co-white,l-end" } ]}
    />
  );
};

export default Video;
