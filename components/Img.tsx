import React from "react";

export default function Img({
  imgUrl,
  title,
}: {
  imgUrl: string;
  title: string;
}) {
  return (
    <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
      <img src={imgUrl} alt={title} loading="lazy" className="w-full sm:w-52" />
    </div>
  );
}
