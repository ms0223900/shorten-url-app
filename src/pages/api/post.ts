import { PrismaClient } from "@prisma/client";
import { type NextApiRequest, type NextApiResponse } from "next";
import { appRouter } from "~/server/api/root";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // const caller = appRouter.createCaller({
  //   session: null,
  //   db: new PrismaClient(),
  // });
  // console.log();

  // res.send(await caller.post.getAll());
  res.send([]); // TODO, connect with other service
}
