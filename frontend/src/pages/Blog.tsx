import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
import { Appbar } from "../components/Appbar";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading ||!blog) {
    return (
      <div>
        <Appbar />
        <div className="h-screen flex flex-col justify-center">
          <div className="flex justify-center">
            <Spinner />
          </div>
        </div>
        ;
      </div>
    );
  }
  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
};

export default Blog;

// using the atom family where we can literally just do the loader and then clicking it agian will remove the loader from the same fucntion
