// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {
  NextApiRequest as Request,
  NextApiResponse as Response,
} from "next";

import ytdl from "ytdl-core";

export const config = {
  api: {
    responseLimit: false,
  },
};

export default async function handler(req: Request, res: Response) {
  if (req.method === "POST") {
    res.setHeader("content-type", "application/json");
    const url = req.query.url as string;
    const options = req.query.options;

    const info = await ytdl.getInfo(url);
    const format = ytdl.chooseFormat(info.formats, { quality: options });
    if (!format && typeof format != "object") {
      return res.status(404).json({
        message: "something worn!",
      });
    }

    //res.setHeader("content-type", `video/${format.container}`);
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${info.videoDetails.title}.${format.container}"`
    );

    ytdl(url, {
      filter: (arg) => arg.container === format.container,
    }).pipe(res);

    // try {

    // } catch (e) {
    //   res.status(404).json({
    //     message: "something worn!",
    //   });
    // }
  }
}
