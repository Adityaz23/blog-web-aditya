import type { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";
export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-20 max-w-screen-2xl">
          <div className=" col-span-8">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-400 pt-2">2nd Decemeber 2023</div>
            <div className="pt-2 text-gray-600">{blog.content}</div>
          </div>
          <div className="col-span-4">
            <div className="text-2xl font-serif">Author</div>
            <div className="flex w-full">
              <div className="pr-4 flex flex-col justify-center">
                <Avatar name={blog.author.name || "Anonymous User"} />
              </div>
              <div className=" text-xl font-bold">
                {blog.author.name || "Anonymous User"}
              </div>
              </div>
              <div className="pt-2 text-slate-600">
                This is the most famous website to write the blogs for the
                users.
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
