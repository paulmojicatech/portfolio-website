import { useState } from 'preact/hooks';

export default function MobileMenu() {
    const [showMenu, setShowMenu] = useState(false);
   return (
        <section class="absolute right-[2rem] top-[1.5rem]">
            <button onClick={() => setShowMenu(!showMenu)}>
                <div class="space-y-2">
                <div class="w-8 h-0.5 bg-gray-600"></div>
                <div class="w-8 h-0.5 bg-gray-600"></div>
                <div class="w-8 h-0.5 bg-gray-600"></div>
            </div>
        </button>
        {
            showMenu && (
                <div class="p-4 absolute right-[0] top-[2rem] bg-white rounded">
                    <div class="mb-2">About</div>
                    <div class="mb-2">Blogs</div>
                    <div class="mb-2">Videos</div>
                    <div>Projects</div>
                </div>
            )
        }
        </section>
        
    )
}
