import { useState } from 'react'
export default function Home() {
  const [pw, setPw] = useState('')
  const [ok, setOk] = useState(false)
  return ok ? (
    <pre>{`Protected script is accessible only via Roblox. Please use:
loadstring(game:HttpGet("https://YOUR_DOMAIN/api/script"))()`}</pre>
  ) : (
    <div style={{ textAlign:'center', marginTop:'20vh' }}>
      <h2>Enter Password to View</h2>
      <input type="password" value={pw} onChange={e=>setPw(e.target.value)} />
      <button onClick={()=>setOk(pw==='11320009')}>Go</button>
    </div>
  )
}