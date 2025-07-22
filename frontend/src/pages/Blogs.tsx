import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { Skeleton } from "../components/Skeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  /*
    There are 4 ways to store the the blogs ->
    1. Store it in state.
    2. Store it directly here.
    3. Store it in a context variables.
    4. Create our own cutstom hook calling useBlogs.
  */
  const { loading, blogs } = useBlogs();
  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymous name"}
              content={blog.content}
              title={blog.title}
              publishedDate={"29th Feb 2025"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
