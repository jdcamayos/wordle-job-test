import useTheme from '@/hooks/useTheme'

export default function ThemeSwitch() {
  const { toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`
        p-[1.5px] 
        h-[15px] 
        w-[30px] 
        sm:p-[3px] 
        sm:h-[30px] 
        sm:w-[60px] 
        bg-[url('/assets/switch-body-light.png')]
        dark:bg-[url('/assets/switch-body-dark.png')]
        bg-cover
        bg-no-repeat 
        relative 
        overflow-hidden 
        rounded-[25px]
        sm:rounded-[50px]
        transition-all
        duration-300
      `}
    >
      <div
        className={`
          p-0 
          h-[16px] 
          w-[16px] 
          dark:h-[15px]
          dark:w-[15px]
          sm:h-[32px] 
          sm:w-[32px] 
          sm:dark:h-[30px] 
          sm:dark:w-[30px] 
          bg-[url('/assets/switch-light.png')]
          dark:bg-[url('/assets/switch-dark.png')]  
          bg-cover
          bg-no-repeat 
          absolute 
          top-[-0.5px] 
          sm:top-[-1px] 
          right-[0px]
          dark:translate-x-[-15px]
          dark:translate-y-[0.5px]
          sm:dark:translate-x-[-30px]
          sm:dark:translate-y-[1px]
          transition-all
          duration-300
        `}
      />
    </button>
  )
}
