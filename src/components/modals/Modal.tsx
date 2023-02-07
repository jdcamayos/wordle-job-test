import { RFC } from '@/types'

export default function Modal(props: RFC) {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-[#f3f3f3] dark:bg-dark-bg opacity-[89%]"
      />
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-[546px] p-4 mx-auto bg-[#F3F3F3] dark:bg-dark-bg rounded-[15px] border border-[black] dark:border-[#939B9F]">
          {props.children}
        </div>
      </div>
    </div>
  )
}
