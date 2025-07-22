import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: string;
}
export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
  id,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`} >
    
    <div className="p-4 border-b border-slate-300 pb-3 w-screen max-w-screen-md cursor-pointer">
      <div className="flex">
        <Avatar name={authorName}/>
        <div className="text-sm font-mono mt-1 text-slate-400 pl-2">
          {authorName}
           ⋮
        </div>
        <div className="text-sm font-bold mt-1 text-fuchsia-300 pl-2">

          {publishedDate}
        </div>
        
      </div>
      <div className="text-2xl font-extrabold">
        {title}
      </div>
      <div className="text-sm font-thin text-slate-800">
        {content.slice(0, 100) + "...."}
      </div>
      <div className="text-xs font-thin text-slate-800">{`${Math.ceil(content.length) / 100} minute read`}</div>
      </div>
      </Link>
  );
};

export function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");
  return (
    <div className="relative inline-flex items-center justify-center w-7 h-7 bg-amber-100 overflow-hidden rounded-full dark:bg-gray-600">
      <span >
        {initials}
      </span>
    </div>
  );
}
