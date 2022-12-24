import { useState } from "preact/hooks";
import MobileMenu from "../islands/MobileMenu.tsx";

export function Header() {
    
    return (
        <div class="inline-flex justify-between items-center h-40 w-full bg-[#ffffff10] pl-2">
            <h1 class="text-white font-bold text-2xl">Paul Mojica Technologies</h1>
            <div class="flex-col justify-self-end pr-2 md:hidden">
                <MobileMenu />
            </div>
            <div class="hidden md:inline-flex text-white pr-2">
                <span class="p-2">About</span>
                <span class="p-2">Blogs</span>
                <span class="p-2">Videos</span>
                <span class="p-2">Projects</span>
            </div>
        </div>  
    );
  }