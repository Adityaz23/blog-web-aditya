import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-3">
      <Link to={'/blogs'}>
        <div className="flex flex-col font-extrabold text-yellow-700 hover:cursor-pointer">Blog</div>
      </Link>
     

      <div className="">
        <Link to={`/publish`} >
         <button type="button" className="mr-4 text-white bg-green-700 hover:bg-amber-600 hover:text-black focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  hover: cursor-pointer">New Blog</button>
        </Link>
        <Avatar name="Aditya Soni"/>
      </div>
      </div>
  )
}