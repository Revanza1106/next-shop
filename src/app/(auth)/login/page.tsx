"use client";
import Link from "next/link";
export default function loginPage() {
  const handleLogin = (e: any) => {
    e.preventDefault();
    fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
      }),
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-black">
      <div className=" bg-orange-500 shadow-md rounded-lg px-8 py-6 max-w-md">
        <form onSubmit={(e) => handleLogin(e)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black/70 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black/70  mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
              required
            />
            <a
              href="#"
              className="text-xs text-black/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Forgot Password ?
            </a>
            <div></div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
                checked
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-white hover:text-white/65"
              >
                Remember me
              </label>
            </div>
            <Link
              href="/signin"
              className="text-xs text-white hover:text-white/65 "
            >
              Don`t have an account ?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}