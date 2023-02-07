import useTheme from '@/hooks/useTheme'

export default function ThemeSwitch() {
  const { toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`
        p-[3px] 
        h-[30px] 
        w-[60px] 
        bg-[url('/assets/switch-body-light.png')]
        dark:bg-[url('/assets/switch-body-dark.png')]
        bg-cover
        bg-no-repeat 
        relative 
        overflow-hidden 
        rounded-[50px]
        transition-all
        duration-300
      `}
    >
      <div
        className={`
          p-0 
          h-[32px] 
          w-[32px] 
          dark:h-[30px] 
          dark:w-[30px] 
          bg-[url('/assets/switch-light.png')]
          dark:bg-[url('/assets/switch-dark.png')]  
          bg-cover
          bg-no-repeat 
          absolute 
          top-[-1px] 
          right-[0px]
          dark:translate-x-[-30px]
          dark:translate-y-[1px]
          transition-all
          duration-300
        `}
      />
    </button>
  )
}
