import { useState } from "react";
import { forgot } from "./api";
import { useNavigate } from "react-router-dom";

export default function Forgot() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");

  const submit = async () => {
    const res = await forgot({ email });
    alert(res.data.message);
    setTimeout(() => {
      {nav('/login')}
      
    }, 1000);
  };

  return (
    <div className="p-10 relative left-110 top-40 w-120 h-60 forgot-des">
      <h2 className="font-bold text-4xl text-center">Forgot Password</h2>
      <input className="border w-70 h-10 p-5 relative top-10" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <button className="relative top-10 left-5 p-2 btn" onClick={submit}>Send Link</button>
    </div>
  );
}
