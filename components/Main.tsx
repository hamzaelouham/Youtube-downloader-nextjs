import React from "react";

export default function Main() {
  const [url, setUrl] = React.useState<string>("");

  const clickHandler = async () => {
    const resp = await fetch(`api/downloader?URL=${url}`);
    const data = await resp.json();
    console.log(data);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-12 sm:py-24 px-4 sm:px-6 ">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:mx-0 lg:col-span-12 lg:text-left">
            <h1>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="text-blue-500">Téléchargeur</span> et{" "}
                <span className="text-blue-500">convertisseur</span> de vidéo en
                ligne
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Downloadateur vidéo en ligne gratuit pour Vimeo, Dailymotion,
              Twitter, Tiktok, Instagram, Facebook et{" "}
              <a className="underline" href="/">
                Beaucoup d'autres sites
              </a>
              .
            </p>
            <div className="mt-8 sm:mx-auto sm:text-center lg:mx-0 lg:text-left">
              <div className="mt-3 sm:flex">
                <label htmlFor="url" className="sr-only">
                  Lien vidéo
                </label>
                <input
                  id="url"
                  type="text"
                  name="url"
                  className="block w-full py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:flex-1 border-gray-300"
                  placeholder="Coller le lien vidéo ici"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <button
                  onClick={clickHandler}
                  className="flex items-center justify-center rounded-md shadow-sm border focus:outline-none relative bg-gray-800 hover:bg-gray-900 border-transparent focus:ring-gray-500 focus:ring-2 focus:ring-offset-2 px-6 py-3 text-base text-white mt-3 sm:mt-0 w-full sm:w-auto sm:ml-3"
                >
                  Début
                </button>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                Le téléchargement de tout matériel protégé par le droit d'auteur
                est strictement interdit, lisez nos{" "}
                <a
                  className="font-medium text-gray-900 underline"
                  href="/fr/terms"
                >
                  Conditions d'utilisation
                </a>
                .
              </p>
            </div>
            <div
              className="mt-16 hidden lg:block"
              dir="ltr"
              data-nosnippet="true"
            ></div>
          </div>
        </div>
      </section>
    </main>
  );
}
