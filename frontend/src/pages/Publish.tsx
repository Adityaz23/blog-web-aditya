import axios from "axios";
import { Appbar } from "../components/Appbar";
import { BACKEND_URL } from "../config";
import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="max-w-screen-lg mt-3 w-full">
          <label className="mb-2 text-sm font-medium text-gray-900 ">
            Your new blog.
          </label>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            className="bg-gray-50 border  text-slate-900 font-serif text-2xl  rounded-lg focus:ring-blue-300 focus: border-pink-400 block w-full p-2.5"
            placeholder="Title"
          />
          <TextEditor
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <button
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                {
                  title,
                  content,
                },
                {
                  headers: {
                    Authorization: localStorage.getItem("token"),
                  },
                }
              );
              navigate(`/blog/${response.data.id}`);
            }}
            type="button"
            className="justify-center text-white bg-gradient-to-r from-pink-700 via-pink-500 to-pink-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:cursor-pointer"
          >
            Publish Blog
          </button>
        </div>
      </div>
    </div>
  );
};

function TextEditor({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <form>
      <div className="mt-2 w-full mb-4 rounded-lg border focus:ring-blue-300 focus: border-pink-400 block bg-gray-50 ">
        <div className="px-4 py-2 bg-white rounded-t-lg">
          <textarea
            onChange={onChange}
            id="comment"
            rows={6}
            className="focus:outline-none w-full px-0 text-sm text-slate-800 bg-white border-0  focus:ring-0 font-semibold font-sans"
            placeholder="Write the content of your blog."
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between px-3 py-2 border-t d border-gray-200">
          <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2"></div>
        </div>
      </div>
    </form>
  );
}
