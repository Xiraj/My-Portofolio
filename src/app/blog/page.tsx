import React from "react";
import BlogItem from "@/components/blogItem";

const page = () => {
    return(
        <div className="ml-[36px]">
            <h1 className='font-bold text-[48px]'>Blog</h1>
            <div className="flex flex-col gap-4 mb-4">
                {
                    [0,1,2,3,4,5].map(item=>(
                        <BlogItem key={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default page;