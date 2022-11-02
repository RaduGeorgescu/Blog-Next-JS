import Link from "next/link"
const Footer = () => {
  return (
    <footer className='bg-main1 flex flex-col justify-center items-center pb-8 pt-4 text-lg font-bold'>
      <Link href="/about">
        <a>
          About me
        </a>
      </Link>
      <Link href="/about">
        <a>
          © Radu Georgescu
          Powered by NextJS
        </a>
      </ Link>
    </footer >
  )
}

export default Footer