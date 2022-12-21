
export function Header() {
    return (
        <div class="inline-flex justify-between items-center h-40 w-full bg-[#ffffff10] pl-2">
            <span class="text-white font-bold text-2xl">Paul Mojica Technologies</span>
            <div class="flex-col justify-self-end pr-2 md:hidden">
                <div class="space-y-2">
                    <div class="w-8 h-0.5 bg-gray-600"></div>
                    <div class="w-8 h-0.5 bg-gray-600"></div>
                    <div class="w-8 h-0.5 bg-gray-600"></div>
                </div>
            </div>
            <div class="hidden md:inline-flex text-white pr-2">
                <span class="p-2">Item 1</span>
                <span class="p-2">Item 2</span>
            </div>
        </div>  
    );
  }