import { accent } from '../styles.js'

export function SectionHeading({ children, variant = 'project' }) {
  const size = variant === 'resume' ? 'mb-[22px] text-[1.2rem]' : 'mb-[18px] text-[1.1rem]'

  return (
    <h2 className={`${size} border-b-2 border-[#3f5a3f] pb-1.5 font-bold uppercase tracking-[0.08em] ${accent}`}>
      {children}
    </h2>
  )
}
