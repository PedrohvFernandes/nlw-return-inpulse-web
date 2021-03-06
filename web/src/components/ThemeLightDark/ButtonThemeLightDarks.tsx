import { Popover } from "@headlessui/react";
import { Moon, Sun } from "phosphor-react";
import useDarkMode from "../../hooks/useDarkMode";

export function ButtonThemeLightDarks() {
  const [colorTheme, setTheme ] =  useDarkMode()
  
  return (
    <Popover onClick={() => setTheme(colorTheme)} id="theme-toggle" className="gap-2 items-center justify-center absolute top-4 right-4 rounded-lg flex : ;
    bg-zinc-100 hover:bg-zinc-200 dark:hover:text-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-500 px-4 py-1 cursor-pointer" > 
     
      { colorTheme === "light" ?
      <Sun className="w-6 h-6  rounded-md"/>
      :
      <Moon className="w-6 h-6 rounded-md"/>
      }

    </Popover>
  )
}