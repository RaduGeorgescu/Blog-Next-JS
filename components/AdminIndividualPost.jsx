import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Home.module.css";


const AdminIndividualPost = ({ title, content, id, domain }) => {
  const router = useRouter()
  const [post, setPost] = useState({
    Title: title,
    Content: content,
    ID: id,
  });
  const { Title, Content, ID } = post;
  const updatePost = async (event) => {
    event.preventDefault()
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: Title,
        content: Content,
      })
    };
    await fetch(`${domain}/api/${ID}`, requestOptions)
      .then(response => response.json())
  }

  return (
    <div className={styles.postIndividual}>
      <div className='pb-20 bg-accent1'>
        <div className={styles.post}>
          <div className={styles.post}>
            <textarea value={Title} onChange={(e) => setPost({ ...post, Title: e.target.value })} />
          </div>
          <hr />
          <div className={styles.post}>
            <textarea value={Content} onChange={(e) => setPost({ ...post, Content: e.target.value })} />
          </div>
          <hr />
          <button onClick={() => router.back()} className="bg-main1 mt-4 hover:bg-main2 text-black font-bold py-2 px-4 rounded">
            Go Back
          </button>
          <Link style={{ textDecoration: 'none' }} as={'/admin'} href='/admin'>
            <a>
              <button
                className=
                'mx-2 text-black right-2.5 bottom-2.5 bg-amber-500 hover:bg-amber-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded px-4 py-2'
                onClick={updatePost}>
                Update
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div >
  )
}

export default AdminIndividualPost