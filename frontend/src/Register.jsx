import { useState } from "react";
import { register } from "./api";
import { Link } from "react-router-dom";
import './App.css'

export default function Register() {
  
  const [f, setF] = useState({ name: "", email: "", password: "" });

  const submit = async () => {
    const res = await register(f);
    alert(res.data.message);
  };

  return (
    <div className="w-100 h-110 relative left-120 top-30 reg-des">
      <h1 className="justify-center items-center text-center p-5 font-bold text-4xl" >Register</h1>
      <div className="flex flex-col gap-5 justify-center items-center relative top-5">
      <input className="border w-80 h-10 p-2" placeholder="Name" onChange={e => setF({ ...f, name: e.target.value })} />
      <input className="border w-80 h-10 p-2" placeholder="Email" onChange={e => setF({ ...f, email: e.target.value })} />
      <input className="border w-80 h-10 p-2" placeholder="Password" type="password" onChange={e => setF({ ...f, password: e.target.value })} />
      <button className="p-2 btn" onClick={submit}>Register</button>
      </div>

      <div className="relative top-10 p-10 font-bold">Already having account? </div>
      {/* <button onSubmit={navigate('./login')}>Login</button> */}
      <Link className="relative left-60 bottom-6 pointer" to="/login">Login</Link>
    </div>
  );
}
