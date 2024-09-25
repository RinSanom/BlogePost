import React, { useEffect, useState } from "react"; // Import useEffect and useState
import BlogCard from "../components/card/BlogCart.jsx";
import getAllbloge from "../service/blogs/BlogeAction.js";
import Profile from "../pages/auth/Profile.jsx";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]); // Renamed 'bloge' to 'blogs'
  useEffect(() => {
    async function fetchAllBlogs() {
      const fetchedBlogs = await getAllbloge();
      console.log("Fetched blogs:", fetchedBlogs);
      setBlogs(fetchedBlogs);
    }
    fetchAllBlogs();
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            thumbnail={blog.thumbnail}
            content={blog.content}
            username={blog.author.username}
            profileUrl={blog.author.profileUrl}
            updated_at={blog.author.updated_at}
          />
        ))}
      </div>
    </>
  );
}
export function profiledetials(blog) {
  return (
    <Profile
      title={blog.title}
      thumbnail={blog.thumbnail}
      content={blog.content}
      username={blog.author.username}
      profileUrl={blog.author.profileUrl}
    />
  );
}
