import React from "react";
import axios from "axios";
import downloader from "downloadjs";

interface Props {
  url: string;
  formats: {
    container: string;
    qualityLabel: string;
    itag: number;
    quality: string;
    width: number;
    height: number;
    bitrate: number;
    url: string;
  }[];
}

const fetcher = (Options: any) => {
  fetch(`api/download`, Options)
    .then((res) => res.blob())
    .then((blob) => {
      const sizeInBytes = blob.size;
      console.log("sizeInBytes: ", sizeInBytes);
      if (sizeInBytes <= 0) {
      } else {
        downloader(blob, `${Options.url}.mp4`, "video/mp4");
      }
    });
};

export default function Select({ formats, url }: Props) {
  const [options, setOptions] = React.useState("135");
  const download = async () => {
    const Options = {
      url,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ options, url }),
    };
    fetcher(Options);
    try {
      const res = await axios.post(`api/download`, { options, url });
      window.location.href = res.data;
      //downloader(res.data, `hjhjk.mp4`, "video/mp4");
      // console.log(res?.data?.blob);
    } catch (error) {}
  };

  return (
    <>
      <div>
        <label
          htmlFor="formats"
          className="block text-sm font-medium text-gray-700"
        >
          Select Format
        </label>
        <select
          onChange={(e) => setOptions(e.target?.value)}
          id="formats"
          className="mt-2 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          <optgroup label="Video">
            {formats.map((format, id) => {
              return (
                <option key={id} value={format.itag}>
                  📼 - {format.container} - ({format.width}x{format.height}) -{" "}
                  {format.qualityLabel} - ({format.bitrate}MiB)
                </option>
              );
            })}
          </optgroup>
        </select>
      </div>
      <div className="mt-4"></div>
      <button
        onClick={() => download()}
        className="flex items-center justify-center rounded-md shadow-sm border focus:outline-none relative bg-blue-500 hover:bg-blue-600 border-transparent focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 px-4 py-2 text-sm text-white w-full mt-4"
      >
        Download MP4
      </button>
    </>
  );
}
