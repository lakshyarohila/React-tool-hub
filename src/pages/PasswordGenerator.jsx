import React from "react";
import { useState } from "react";
const PasswordGenerator = () => {
  const [length, setlength] = useState(12);
  const [includeUppercase, setincludeUppercase] = useState(true);
  const [includeLowercase, setincludeLowercase] = useState(true);
  const [includeNumber, setincludeNumber] = useState(true);
  const [includeSymbols, setincludeSymbols] = useState(true);
  const [password, setpassword] = useState("");

  const generatepassword = () => {
    let charset = "";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumber) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+{}?><?";

    if (charset.length === 0) return;
    let pwd = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      pwd += charset[randomIndex];
    }
    setpassword(pwd);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password Copied to Clipboard");
  };

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl text-white font-bold mb-6">Generate Password</h1>
      <div className="bg-slate-700 p-6 rounded-2xl shadow-2xl w-full max-w-md space-y-4">
        <div>
          <label className="block font-medium">Length:{length}</label>
          <input
            type="range"
            min={4}
            max={32}
            value={length}
            onChange={(e) => setlength(e.target.value)}
            className="w-full"
          />
        </div>
        <div  className="space-y-2">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={includeUppercase} onChange={()=>setincludeUppercase(!includeUppercase)} />
          Include UpperCase Letters
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={includeLowercase} onChange={()=>setincludeLowercase(!includeLowercase)} />
          Include LowerCase Letters
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={includeNumber} onChange={()=>setincludeNumber(!includeNumber)} />
          Include Numbers Letters
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={includeSymbols} onChange={()=>setincludeSymbols(!includeSymbols)} />
          Include Symbols
        </label>
        </div>
        <div className="flex items-center gap-2">
        <input type="text" value={password} readOnly className="flex-1 px-2 py-2 border rounded-2xl" />
        <button onClick={copyToClipboard} className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-700">Copy</button>
        </div>
        <button className="bg-green-500 text-white hover:bg-green-600 px-4 py-2" onClick={generatepassword}>GeneRate Password</button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
