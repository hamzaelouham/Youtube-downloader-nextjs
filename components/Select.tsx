import React from "react";
import axios from "axios";

interface Props {
  url: string;
  formats: {
    container: string;
    qualityLabel: string;
    width: number;
    height: number;
    bitrate: number;
  }[];
}

export default function Select({ formats, url }: Props) {
  const [qualit, setQualit] = React.useState("480p");
  const download = async () => {
    try {
      await axios.post(`api/downloader`, { qualit, url });
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
          onChange={(e) => setQualit(e.target?.value)}
          id="formats"
          className="mt-2 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          <optgroup label="Video">
            {formats.map((format, id) => {
              return (
                <option key={id} value={format.qualityLabel}>
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
