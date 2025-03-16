"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";


export default function ThemeToggle(){
    const {theme, setTheme} = useTheme();
    const switchTheme = () => {
        switch (theme) {
          case 'light':
            setTheme('dark');
            break;
          case 'dark':
            setTheme('light');
            break;
          default:
            break;
        }
      };
    
      const toggleTheme = () => {
          switchTheme();
      };
    return <button className="w-8 h-8 hover:bg-gray-200/50 rounded-md" onClick={toggleTheme}>
                {theme === "dark" ? <Moon className="stroke-purple-600"/> : <Sun className="inline-flex stroke-purple-600"/> }
            </button>


}