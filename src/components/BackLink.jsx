import { muted } from '../styles.js'

export function BackLink() {
  return (
    <a className={`mb-2.5 inline-block text-[0.9rem] no-underline hover:text-[#3f5a3f] ${muted}`} href="#/">
      ← Back to Portfolio
    </a>
  )
}
