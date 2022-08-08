import ytdl from "ytdl-core";

import type {
  NextApiRequest as Request,
  NextApiResponse as Response,
} from "next";

export default async function handler(req: Request, res: Response) {
  if (req.method === "GET") {
    const url = req.query.url as string;
    const options = req.query.options;

    const info = await ytdl.getInfo(url);
    const format = ytdl.chooseFormat(info.formats, { quality: options });
    if (!format && typeof format != "object") {
      return res.status(404).json({
        message: "something worn!",
      });
    }

    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${info.videoDetails.title}.${format.container}"`
    );

    ytdl(url, {
      filter: (arg) => arg.container === format.container,
    }).pipe(res);
  }
}

// export const config = {
//   api: {
//     responseLimit: false,
//   },
// };
