import {HOME_ABOUT} from '../static/home_about.ts';

export function HomeAbout() {
    return (
        <>
            <div class="h-auto bg-[#ffffff75] rounded-md m-4 lg:hidden">
                <p class="m-3 text-justify">{HOME_ABOUT}</p>
                <div class="w-full p-4 text-center"><a class="text-blue-900" href="/about">A little more about me.</a></div>
            </div>
            <div class="hidden lg:grid grid-cols-3 grid-rows-1 m-4">
                <div class="flex-col bg-[#ffffff75] m-4 rounded-md ">
                    <img class="m-auto" src="./Paul_Mojica.png" />
                    <p class="m-3 text-justify">{HOME_ABOUT}</p>
                    <div class="w-full p-4 text-center"><a class="text-blue-900" href="/about">A little more about me.</a></div>
                </div>
                
            </div>
            
        </>
    );
}