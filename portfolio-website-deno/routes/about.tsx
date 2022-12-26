import { Header } from "../components/Header.tsx";
import { ABOUT_HEADER, ABOUT_ME, ABOUT_ME_2 } from "../static/about.ts";

export default function About() {
    const contactInfo = [
        {
            label: 'Email',
            href: 'mailto:paulmojicatech@gmail.com',
            refLabel: 'paulmojicatech@gmail.com'
        },
        {
            label: 'Phone',
            href: 'tel:980-333-5505',
            refLabel: '980.333.5505'
        },
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/paul-mojica-94696871/',
            isStandalone: true
        },
        {
            label: 'Github',
            href: 'https://github.com/paulmojicatech',
            isStandalone: true
        }
    ];
    return (
        <>
        <main class="bg-clt w-[100vw] h-[100vh] flex flex-col bg-cover bg-no-repeat">
            <Header />
            <section class="flex flex-col w-[80%] mt-[2rem] p-[2rem] self-center justify-center bg-white rounded lg:bg-[#ffffff30] lg:w-[35%]">
                {contactInfo.map(info => {
                    if (info.isStandalone) {
                        return (
                            <div class="flex inline-flex">
                                <span class="mr-2"><a href={info.href} target="_blank">{info.label}</a></span>
                            </div>
                        );
                    } else {
                        return (
                            <div class="flex inline-flex">
                                <span class="mr-2">{info.label}:</span><a href={info.href}>{info.refLabel}</a>
                            </div>
                        );
                    }
                })}

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