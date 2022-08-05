import React from "react";
import Alert from "./Alert";
import Loader from "./Loader";
import axios, { AxiosError } from "axios";
import Video from "./Video";

export default function Main() {
  const [url, setUrl] = React.useState<string>("");
  const [error, setError] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>("");
  const [info, setInfo] = React.useState(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const getDownloadinfo = async () => {
    try {
      setError(false);
      setLoading(true);
      const response = await axios.post(`api/getInfo`, { url });
      setInfo(response?.data);
    } catch (e) {
      const err = e as AxiosError;
      setError(true);
      setMessage(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6">
      <section className="py-12 sm:py-24 px-4 sm:px-6 ">
        <div className="mt-8 sm: sm:text-center lg:mx-0 ">
          <div className="mt-3 sm:text-center md:max-w-xl md:mx-auto lg:mx-auto lg:text-center  sm:flex">
            <label htmlFor="url" className="sr-only">
              Video Link
            </label>
            <input
              id="url"
              type="text"
              name="url"
              className="input "
              placeholder="Paste the video link here"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              onClick={getDownloadinfo}
              className="flex items-center justify-center rounded-md shadow-sm border focus:outline-none relative bg-gray-800 hover:bg-gray-900 border-transparent focus:ring-gray-500 focus:ring-2 focus:ring-offset-2 px-6 py-3 text-base text-white mt-3 sm:mt-0 w-full sm:w-auto sm:ml-3"
            >
              download
            </button>
          </div>
          {error && <Alert message={message} />}
        </div>
        <div className="mx-auto flex items-center justify-center px-3 mt-5">
          {loading && <Loader />}
          {info && (
            <Video
              formats={info?.formats}
              videoDetails={info?.videoDetails}
              url={url}
            />
          )}
        </div>
      </section>
    </main>
  );
}
