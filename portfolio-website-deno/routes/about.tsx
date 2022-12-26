import { Header } from "../components/Header.tsx";
import { ABOUT_HEADER, ABOUT_ME, ABOUT_ME_2 } from "../static/about.ts";

export default function About() {
    
    return (
        <>
        <main class="bg-clt w-[100vw] h-[100vh] flex flex-col bg-cover bg-no-repeat">
            <Header />
            <section class="flex flex-col w-[80%] mt-[2rem] p-[2rem] self-center justify-center bg-white rounded lg:bg-[#ffffff30] lg:w-[35%]">
                <div class="flex inline-flex">
                    <span class="mr-2">Email:</span><a href="emailto:paulmojicatech@gmail.com">paulmojicatech@gmail.com</a>
                </div>
                <div class="flex inline-flex">
                    <span class="mr-2">Phone:</span><a href="tel:980-333-5505">980.333.5505</a>
                </div>
                

            </section>
            <section class="bg-white m-[2rem] flex flex-col items-center justify-self-center self-center h-[90%] rounded w-[80%] lg:w-[35%] lg:bg-[#ffffff30] overflow-hidden">
                <h1 class="font-bold text-3xl pt-[2rem] lg:text-white">{ABOUT_HEADER}</h1>
                <p class="p-[2rem] text-justify">
                    {ABOUT_ME}
                </p>
                <p class="pl-[2rem] pr-[2rem] pb-[2rem]">
                    {ABOUT_ME_2}
                </p>
                <img src='./family.jpeg' class='hidden lg:block lg:w-full lg:h-full lg:object-contain' />
            </section>
        </main>
        </>
    );
}