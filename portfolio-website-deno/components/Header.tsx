import { useState } from "preact/hooks";
import MobileMenu from "../islands/MobileMenu.tsx";

export function Header() {
    
    return (
        <div class="inline-flex justify-between items-center h-[10vh] w-full bg-[#ffffff10] pl-4">
            <h1 class="text-white font-bold text-2xl">
                <a href='./'>Paul Mojica Technologies</a>
            </h1>
            <div class="flex-col justify-self-end pr-2 md:hidden">
                <MobileMenu />
            </div>
            <div class="hidden md:inline-flex text-white pr-2">
                <span class="p-2">
                    <a href='/about'>About</a>
                </span>
                {/* <span class="p-2">
                    <a href='/blog'>Blogs</a>
                </span>
                <span class="p-2">Videos</span>
                <span class="p-2">Projects</span> */}
            </div>
        </div>  
    );
  }