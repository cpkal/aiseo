import Link from "next/link";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen p-2 md:p-0">
      <div className="w-1/1 md:w-1/3 rounded-3xl border-1 border-gray-800 p-12 bg-neutral-900">
        <div className="flex flex-col gap-3">
          <label>Email</label>
          <input className="block border-1 border-gray-500 bg-[#000000] px-4 py-2 rounded-xl" />
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <label>Password</label>
          <input className="block border-1 border-gray-500 bg-[#000000] px-4 py-2 rounded-xl" />
        </div>

        <div className="flex gap-3 py-4">
          <input id="remember_me" type="checkbox" className="py-2" placeholder="Remember " />
          <label htmlFor="remember_me">Remember Me</label>
        </div>

        <button className="w-full bg-violet-500 p-2 rounded-xl hover:cursor-pointer">Login</button>

        <div className="flex justify-between mt-4">
          <Link href={'/forgot-password'}>Forgot password</Link>
          <Link href={'/reset-password'}>Reset Password</Link>
        </div>

        {/* <div className="text-center mt-4">
          <p className="text-2xl">OR</p>
        </div> */}
        
      </div>
    </div>
  )
}