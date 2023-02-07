import React from 'react'

type Props = React.SVGProps<SVGSVGElement>

export default function StatsIcon(props: Props) {
  return (
    // <svg className='fill-[#818181] dark:fill-[#DADCE0] stroke-[#F3F3F3] dark:stroke-dark-bg w-[20px] h-[20x] sm:w-[27px] sm:h-[27px]' width="40" height="36" viewBox="0 0 40 36" fill="inherit" xmlns="http://www.w3.org/2000/svg" {...props}>
    <svg className='fill-[#818181] dark:fill-[#DADCE0] stroke-[#F3F3F3] dark:stroke-dark-bg w-[30px] h-[27x] sm:w-[40px] sm:h-[36px]' width="40" height="36" viewBox="0 0 40 36" fill="inherit" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="4.93549" y="6" width="29.6129" height="24" rx="2" fill="inherit" />
      <path d="M13.1613 15L13.1613 24" stroke="inherit" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.7419 18V24" stroke="inherit" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26.3226 12V24" stroke="inherit" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
