// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default function handler(req, res) {
  fs.readdir("pages/blogdata/", (err, data) => {
    if (err) {
      return res.status(500).json({"error" : "No blogs found at the location."});
    }
    return res.status(200).json(data);
  });
}
