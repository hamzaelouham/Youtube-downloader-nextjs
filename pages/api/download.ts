// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {
  NextApiRequest as Request,
  NextApiResponse as Response,
} from "next";

import ytdl from "ytdl-core";

export default async function handler(req: Request, res: Response) {
  if (req.method === "POST") {
    const url: string = req.body.url;
    const quality: string = req.body.quality;

    try {
      const info = await ytdl.getInfo(url);

      res.status(200).send(info);
    } catch (e) {
      res.status(404).json({
        message: " Please insert another YouTube link",
      });
    }
  }
}
