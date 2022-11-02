import Link from "next/link";
import styles from "../styles/Home.module.css";


const Posts = ({ postsFromApi }) => {

  return (
    <div className={styles.main}>
      <div className='pb-20 sm:mx-2 md:mx-20 bg-accent1'>
        <div className={styles.post}>
        </div>
        {postsFromApi.map((post, key) => {
          const date = post.createdAt.split("T")[0];
          const time = post.createdAt.split("T")[1].split(".")[0]
          return (
            <Link key={key} as={`/post/${post._id}`} href="post/[id]">
              <div className={styles.post}>
                <a>
                  <h2 style={{ cursor: 'pointer' }}>{post.title}</h2>
                </a>
                <hr />
                <div className={styles.p}>
                  {post.content}
                </div>
                <p
                  className={styles.date}
                >
                  Posted on {date} at {time} UTC
                </p>
              </div>
            </Link>

          )
        })
        }
      </div>
    </div>
  )
}

export default Posts