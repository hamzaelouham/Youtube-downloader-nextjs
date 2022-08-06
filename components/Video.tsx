import React from "react";
import Details from "./Details";
import Img from "./Img";
import Select from "./Select";

interface videoProps {
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
  videoDetails: {
    title: string;
    ownerChannelName: string;
    lengthSeconds: string;
    thumbnails: { url: string }[];
  };
}

const Video: React.FC<videoProps> = (props) => {
  const formats = props.formats;
  const videoDetails = props.videoDetails;

  return (
    <div>
      <div className="inline-block align-bottom bg-white rounded-lg pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full px-6 sm:max-w-2xl text-left">
        <div>
          <div className="">
            <div className="">
              <Details
                title={videoDetails?.title}
                uploader={videoDetails?.ownerChannelName}
                Duration={videoDetails?.lengthSeconds}
              />
              <div className="border-t border-gray-200 py-5">
                <div className="sm:flex">
                  <Img
                    title={videoDetails?.title}
                    imgUrl={videoDetails?.thumbnails[3].url}
                  />
                  <div className="w-full">
                    <div className="mb-4">
                      <div>
                        <div className="hidden sm:block">
                          <div className="border-b border-gray-200">
                            <ul className="-mb-px flex justify-center space-x-8 ">
                              <li className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer focus:outline-none border-blue-500 text-blue-600 react-tabs__tab--selected">
                                Download video !
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="pt-2">
                          <div className="react-tabs__tab-panel react-tabs__tab-panel--selected">
                            <div>
                              {/**select */}
                              <Select formats={formats} url={props.url} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
