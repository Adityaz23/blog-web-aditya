import type { Usersignup } from "@adityaz23op/medium-blogs";
import { useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<Usersignup>({
    name: "",
    username: "",
    password: "",
  });
  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/users/${
          type === "signup" ? "signup" : "signin"
        }`,
        postInputs
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      alert("The username already exists.")
    }
  }
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-8">
            <div className="text-3xl font-extrabold">Create an account</div>
            <div className="text-blue-400 text-center">
              {type === "signin"
                ? "Don't have an account?"
                : "Already have an account?"}
              <Link
                to={type === "signin" ? "/signup" : "/signin"}
                className="hover:text-red-300 underline cursor-pointer pl-1"
              >
                {type === "signin" ? "Signup" : "Signin"}
              </Link>
            </div>
          </div>
          <div className="pt-4">
            {type === "signup" ? (
              <LabelledInput
                label="Name"
                placeholder="Enter your name..."
                onChange={(e) => {
                  setPostInputs((c) => ({
                    ...c,
                    name: e.target.value,
                  }));
                }}
              />
            ) : null}
            <LabelledInput
              label="Username"
              placeholder="ex: aditya@gmail.com"
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  username: e.target.value,
                }));
              }}
            />
            <LabelledInput
              label="Password"
              type={"password"}
              placeholder="Your Password"
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  password: e.target.value,
                }));
              }}
            />
            <button
              onClick={sendRequest}
              type="button"
              className="w-full text-white bg-gray-800 hover:cursor-pointer hover:bg-sky-600 rounded-lg text-sm px-5 py-2.5 mt-4"
            >
              {type === "signup" ? "Signup" : "Signin"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputTypes {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}
function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputTypes) {
  return (
    <div>
      <label className="block mb-2 text-sm font-extrabold text-black-300 dark:text-black pt-1.5">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
