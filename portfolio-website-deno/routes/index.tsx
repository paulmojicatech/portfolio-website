import { Head } from "$fresh/runtime.ts";
import { Handlers } from '$fresh/server.ts'
import { Header } from "../components/Header.tsx";
import { HomeAbout } from "../components/HomeAbout.tsx";
import { RecentActivity } from "../components/RecentActivity.tsx";
import {Blog} from '../models/blog.interface.ts'

export const handler: Handlers<Promise<Blog[]>> = {
  async GET(_: Request, ctx: any): Promise<Response> {
      // dev.to
      const url = 'https://dev.to/api/articles?username=paulmojicatech';
      const resp = await fetch(url);
      if (resp.status !== 200) {
          return ctx.render(null);
      }
      const blogs: Blog[] = (await resp.json()).map((blog: any) => {
        return {
          id: blog.id,
          title: blog.title,
          createdDate: new Date(blog.created_at),
          url: blog.url,
          description: blog.description,
          socialImage: blog.social_image
        }
      });
      return ctx.render(blogs);
  }
}

export default function Home({data}){
  return (
    <>
      <Head>
        <title>Paul Mojica Technologies</title>
      </Head>
      <div class="bg-clt bg-cover w-[100vw] bg-no-repeat h-[100vh]">
        <Header />
        <div class="flex flex-col h-[80vh] overflow-scroll ml-4 mr-4 lg:hidden">
          <HomeAbout />
          <RecentActivity blogs={data} />
        </div>
        <div class="hidden lg:flex inline-flex items-center justify-around">
          <div class="hidden lg:w-[30%] lg:block">
            <HomeAbout />
          </div>
          <div class="hidden lg:block m-4">
            <RecentActivity blogs={data}  />
          </div>
          
        </div>
        
      </div>
    </>
  );
}
