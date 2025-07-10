import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
const CONTENT = fs.readFileSync(path.join(process.cwd(), 'korez.lua'), 'utf-8')

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const ua = req.headers['user-agent'] || ''
  if (ua.includes('Roblox')) {
    res.setHeader('Content-Type', 'text/plain')
    res.send(CONTENT)
  } else {
    res.redirect(307, '/')
  }
}