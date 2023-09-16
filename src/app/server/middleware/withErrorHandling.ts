import { NextApiRequest, NextApiResponse } from "next";

const withErrorHandling = (
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await handler(req, res);
    } catch (err: any) {
      console.log("api Error", err);
      res
        .status(err.statusCode || 500)
        .json({ error: err.message || "Internal Server Error" });
    }
  };
};

export default withErrorHandling;
