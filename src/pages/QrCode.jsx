import React from 'react'
import { useState } from 'react';
import {QRCodeCanvas} from 'qrcode.react'
const QrCode = () => {
const [text, settext] = useState('https://');

  return (
    <div className='flex flex-col items-center justify-center p-6 min-h-screen'>
        <h1 className='text-3xl font-bold mb-6'>QrCode</h1>
        <input type="text" value={text} onChange={(e)=>settext(e.target.value)} className='p-2 border border-gray-200 rounded-3xl mb-4 w-full max-w-md' placeholder='Enter text or URL' />
        <div className='bg-white p-4 rounded-3xl shadow'>
        <QRCodeCanvas value={text} size={256}/>
        
        </div>
    </div>
  )
}

export default QrCode