import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";


const IndividualPost = ({ title, content, id }) => {
  const router = useRouter();
  return (
    <div className={styles.postIndividual}>
      <div className='pb-20 bg-accent1'>
        <div className={styles.post}>
          <div key={id} className={styles.post}>
            <h2>{title}</h2>
          </div>
          <hr />
          <div className={styles.p}>
            {content}
          </div>
          <hr />
          <button onClick={() => router.back()} className="bg-main1 mt-4 hover:bg-main2 text-black font-bold py-2 px-4 rounded">
            <a>Go Back</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default IndividualPost