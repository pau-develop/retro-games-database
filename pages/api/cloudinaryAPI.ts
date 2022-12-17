import { NextApiRequest, NextApiResponse } from "next";

const cloudinaryAPI = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const result = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/resources/image/tags/card
`,
    {
      headers: {
        method: "GET",
        Authorization: `Basic ${Buffer.from(
          process.env.CLOUD_KEY + ":" + process.env.CLOUD_SECRET
        ).toString("base64")}`,
      },
    }
  );
  const data = await result.json();
  response.status(200).json(data.resources);
};

export default cloudinaryAPI;
