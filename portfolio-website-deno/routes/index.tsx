import { Head } from "$fresh/runtime.ts";
import { Header } from "../components/Header.tsx";

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Paul Mojica Technologies</title>
      </Head>
      <div style="background-image: url('./charlotte.jpg'); background-size: cover; width: 100vw; background-repeat: no-repeat; height: 100vh;">
        <Header />
      </div>
    </>
  );
}
