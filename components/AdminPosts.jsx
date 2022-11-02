import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from 'next/router'

const AdminPost = ({ postsFromApi, domain }) => {
  const router = useRouter();
  const [form, setForm] = useState({
    title: '',
    content: '',
  })
  // const domain = process.env.DOMAIN;
  const createPost = async (event) => {
    if (form.title === '' || form.content === '') {
      event.preventDefault()
      alert('Please fill out all fields')
    } else {
      event.preventDefault()
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      };
      await fetch(`${domain}/api/mongo`, requestOptions)
        .then(response => response.json())
        .then(setTimeout(router.reload(), 2000))
    }
  }
  const deletePost = async (event, ID) => {
    event.preventDefault()
    await fetch(`${domain}/api/${ID}`, {
      method: 'DELETE',
    })
      .then(router.reload())
  };

  return (
    postsFromApi === "Loading..." ? <h1>Loading...</h1>
      :
      <div className={styles.main}>
        <div style={{ width: '95vw' }} className={styles.post} >
          <h1>
            Edit Posts:
          </h1>
        </div>
        <form className={styles.editForm} >
          <input
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            type="text"
            contentEditable="true"
            name="title"
            id="title"
            style={{ width: '95vw' }}
            className={styles.editInput}
            placeholder='Type your title here' />
          <input
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            type="text"
            contentEditable="true"
            name="content"
            id="content"
            style={{ width: '95vw' }}
            className={styles.editInput}
            placeholder='Type your content here' />
          <div className="ml-16">
            <button
              type="submit"
              onClick={createPost}
              className='mx-2 text-black right-2.5 bottom-2.5 bg-green-500 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2'>
              Submit
            </button>
          </div>
          <br />
        </form>

        {
          postsFromApi.map((post) => {
            return (
              <div key={post._id} className="w-full">
                <div className={styles.post} >
                  <h2>{post.title}</h2>
                  <hr />
                  <div className={styles.p}>
                    {post.content}
                  </div>
                </div>
                <div className="ml-2" >
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                    }}
                    className='mx-2 text-black right-2.5 bottom-2.5 bg-amber-500 hover:bg-amber-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2'>
                    <Link as={`/admin/update/${post._id}`} href="admin/update/[id]">
                      <a>
                        Update
                      </a>
                    </Link>
                  </button>
                  <button
                    onClick={(event) => {
                      deletePost(event, post._id);
                    }}
                    className='mx-2 text-white right-2.5 bottom-2.5 bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2'>
                    Delete
                  </button>
                </div>
              </div>
            )
          })
        }

      </div >
  )
}

export default AdminPost

