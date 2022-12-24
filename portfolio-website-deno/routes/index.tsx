import { Head } from "$fresh/runtime.ts";
import { Header } from "../components/Header.tsx";
import { HomeAbout } from "../components/HomeAbout.tsx";

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Paul Mojica Technologies</title>
      </Head>
      <div class="bg-clt bg-cover w-[100vw] bg-no-repeat h-[100vh]">
        <Header />
        <HomeAbout />
      </div>
    </>
  );
}
