import React from "react";

export default function Details({
  title,
  uploader,
  Duration,
}: {
  title: string;
  uploader: string;
  Duration: string;
}) {
  return (
    <div className="py-5">
      <h3 className="text-lg leading-6 font-bold text-gray-900">{title}</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-700">
        <span className="font-bold">Uploader:</span> {uploader}{" "}
        <span className="font-bold">Duration:</span> {Duration}
      </p>
    </div>
  );
}
