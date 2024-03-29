"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.error) {
        setError("Invalid Credentials");
        return;
      }
      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-xs">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  border-t-4 border-green-300 "
          >
            <h2 className="text-center text-gray-700  font-bold">Login Here</h2>
            <div className="mb-4 mt-5">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="  bg-gradient-to-tr group hover:to-green-400  hover:from-lime-500 from-green-500  to-lime-500
                 hover:scale-95 transition-all text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
            </div>
            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-3">
                {error}
              </div>
            )}
            <div className="mt-4 text-right text-sm">
              <Link href={"/register"}>
                Don&apos;t have an account?{" "}
                <span className="underline">Register</span>
              </Link>
            </div>
          </form>
          <p className="text-center font-sans text-sm">
            Made By ❤️{" "}
            <Link
              href={"https://hassanahmedkhan.netlify.app/"}
              className="underline font-semibold"
              target="_blank"
            >
              {" "}
              Hassan{" "}
            </Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
}
