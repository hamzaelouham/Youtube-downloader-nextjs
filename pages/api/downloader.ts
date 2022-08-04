// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {
  NextApiRequest as Request,
  NextApiResponse as Response,
} from "next";

import ytdl from "ytdl-core";

export default async function handler(req: Request, res: Response) {
  const info = await ytdl.getInfo(req.query.URL as string);
  //console.log(info);
  res.send(info);
}
