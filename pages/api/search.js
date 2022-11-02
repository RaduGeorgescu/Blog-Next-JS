import connectMongo from "../../utils/connectMongo";
import Post from "../../models/postModel";

export const SearchApi = async (req, res) => {
  await connectMongo();
  if (req.method === "POST") {
    try {
      const postsBYTitle = await Post.find({
        title: {
          $regex: `${req.body.title}`,
          $options: "i",
        },
      }).sort({
        createdAt: -1,
      });
      const postsByContent = await Post.find({
        content: {
          $regex: `${req.body.title}`,
          $options: "i",
        },
      }).sort({
        createdAt: -1,
      });
      const posts = [...postsBYTitle, ...postsByContent];
      return res.status(200).json(JSON.parse(JSON.stringify(posts)));
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
};
export default SearchApi;
