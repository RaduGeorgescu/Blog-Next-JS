import connectMongo from "../../utils/connectMongo";
import Post from "../../models/postModel";


export const MongoApi = async (req, res) => {
  await connectMongo();
  switch (req.method) {
    case "GET":
      try {
        const posts = await Post.find({}).sort({ createdAt: -1 });
        return res.status(200).json(JSON.parse(JSON.stringify(posts)));
      } catch (error) {
        return res.status(500).json({ error });
      }

      break;
    case "POST":
      try {
        const post = await Post.create(req.body);
        return res.status(200).json(JSON.parse(JSON.stringify(post)));
      } catch (error) {
        return res.status(500).json({ error });
      }
      break;

    default:
      return res.status(500).json({ success: false });
      break;
  }
};
export default MongoApi;
