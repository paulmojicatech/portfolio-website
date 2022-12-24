
export function RecentActivity({blogs}) {
    const filteredBlogs = [];
    for (let i = 0; i < 5; i++) {
        filteredBlogs.push(blogs[i]);
    }
    return (
        <div class="bg-white rounded p-4 overflow-scroll h-[85vh]">
            { filteredBlogs.map(blog => {
                return (
                    <>
                    <div class="flex flex-col">
                        <img src={blog.socialImage} />
                        <div class="grid grid-cols-6 grid-rows-3">
                            <h3 class="font-bold ml-[3rem] mr-[2rem]">Title</h3>
                            <div class="col-span-5">{blog.title}</div>
                            <h3 class="font-bold ml-[3rem] mr-[2rem] w-[7rem]">Created</h3>
                            <div class="col-span-5">{blog.createdDate.toLocaleDateString()}</div>
                            <div class="col-span-6">
                                <h3 class="font-bold ml-[3rem] mr-[2rem]">Description</h3>
                                <div class="ml-[3rem]">{blog.description}</div>
                            </div>
                        </div>
                        
                    </div>
                   
                    </>
                )
            })}
        </div>
    )
}