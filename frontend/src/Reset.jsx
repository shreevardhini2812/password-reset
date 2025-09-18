import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { reset } from "./api";

export default function Reset() {
   const nav = useNavigate();
  const { token } = useParams();
  const [password, setPassword] = useState("");

  const submit = async () => {
  
    const res = await reset(token, { password });
    alert(res.data.message);
    {nav('/login')}
  };

  return (
    <div className="w-120 h-60 relative left-100 top-50 reset-des">
      <h2 className="text-center text-4xl font-bold p-10">Reset Password</h2>
      <input className="border w-70 p-2 relative left-15" placeholder="New Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button className="btn relative left-20 " onClick={submit}>Reset</button> 
      
    </div>
  );

}
