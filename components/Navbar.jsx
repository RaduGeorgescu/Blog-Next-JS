import styles from "../styles/Home.module.css";
import { ImGithub, ImLinkedin } from "react-icons/im";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter()
  const [inputValue, setInputValue] = useState("")
  const search = (e) => {
    e.preventDefault()
    if (inputValue === "") {
      router.push(`/`)
    } else {
      router.push(`/search/${inputValue}`)
    }
  }
  return (
    <header className="bg-main1 text-lg py-6 sticky top-0 z-50 flex flex-row justify-between px-3">
      <div className=" flex flex-row font-semibold">
        <a
          href="https://github.com/RaduGeorgescu"
          target="Github"
          rel="noopener noreferrer"
        >
          <span
          >
            <ImGithub className={styles.logo} size='2rem' alt="Github Logo" />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/radu-georgescu-/"
          target="LinkedIn"
          rel="noopener noreferrer"
        >
          <span
          >
            <ImLinkedin className={styles.logo} size='2rem' alt="LinkedIn Logo" />
          </span>
        </a>
      </div>
      <div className="font-bold">
        <Link href="/">
          <a>
            <img src="TitlePic.png" className="h-16" alt="Radu's Blog" />
          </a>
        </Link>
      </div>
      <div className="font-semibold w-80 duration-500 ">
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          </div>
          <form>
            <input onChange={e => setInputValue(e.target.value)} type="search" id="title" name='title' placeholder="Search..." required="" className="block p-4 pl-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " />
            <button onClick={search} type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-main2 hover:bg-accent2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">
              <svg aria-hidden="true" className="w-5 h-5 text-grey-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div>
      </div >
    </header >
  )
}

export default Navbar