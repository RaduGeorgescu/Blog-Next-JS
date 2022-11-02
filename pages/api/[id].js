import connectMongo from "../../utils/connectMongo";
import Post from "../../models/postModel";

export const VariableAPi = async (req, res) => {
  await connectMongo();
  const {
    query: { id },
  } = req;
  switch (req.method) {
    case "GET":
      try {
        const posts = await Post.find({ _id: id });
        return res.status(200).json(JSON.parse(JSON.stringify(posts)));
      } catch (error) {
        return res.status(500).json({ error });
      }

      break;
    case "DELETE":
      try {
        const deletedPost = await Post.deleteOne({ _id: id });
        if (!deletedPost) {
          return res.status(400).json("No post found with this ID");
        }
        return res.status(200).json("post deleted");
      } catch (error) {
        return res.status(500).json({ error });
      }

      break;
    case "PUT":
      try {
        const updatedPost = await Post.findOneAndUpdate(
          { _id: id },
          { title: req.body.title, content: req.body.content }
        );
        if (!updatedPost) {
          return res.status(400).json("No post found with this ID");
        }
        return res.status(200).json("post updated");
      } catch (error) {
        return res.status(500).json({ error });
      }
      break;

    default:
      return res.status(500).json({ success: false });
      break;
  }
};
export default VariableAPi;
