import { useState } from "react";
import { login } from "./api";
import { Link } from "react-router-dom";

export default function Login() {
  const [f, setF] = useState({ email: "", password: "" });

  const submit = async () => {
    const res = await login(f);
    alert(res.data.message);
  
  };

  return (
    <div className=" relative w-130 h-85 left-100 top-20 log-des">
      <h1 className="text-4xl font-bold text-center p-6 ">Login</h1>
      <div className="flex flex-col gap-5 justify-center items-center">
      <input className="border w-80 h-10" placeholder="Email" onChange={e => setF({ ...f, email: e.target.value })} />
      <input className="border w-80 h-10" placeholder="Password" type="password" onChange={e => setF({ ...f, password: e.target.value })} />
      </div>
      <button className="p-2 relative top-10 left-25 btn" onClick={submit}>Login</button>
      <Link className="p-2 relative top-10 left-60" to="/forgot">Forgot Password</Link>
    </div>
  );
}
