import Link from "next/link"
import styles from "../styles/Home.module.css";

const CreatePostForm = () => {
  return (
    <div className={styles.createPost}>
      <form className="w-full max-w-5xl">
        <div className="w-72	flex items-center border-b border-main1 py-2">
          <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Title" aria-label="Title" />
        </div>
        <div className=" w-full flex items-center border-b border-main1 py-2">
          <textarea className="resize-y appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Content" aria-label="Content" />
        </div>
      </form>
      <div className="mt-4">
        <button className="flex-shrink-0 bg-main1 hover:bg-main2 border-main1 hover:border-main2 text-sm border-4 text-white py-1 px-2 rounded" type="button">
          Post
        </button>
        <button className="flex-shrink-0 border-transparent border-4 text-main1 hover:text-main2 text-sm py-1 px-2 rounded" type="button">
          Cancel
        </button>
      </div>
    </div >
  )
}

export default CreatePostForm