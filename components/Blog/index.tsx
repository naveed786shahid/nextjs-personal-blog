"use client";
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData, { getPosts } from "./blogData";

const Blog = () => {
  const [singlePost, setSinglePost] = useState(null);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState<Boolean>();

  const fetchSinglePost = async () => {
    try {
      const fetchedSinglePosts = await getPosts();
      setSinglePost(fetchedSinglePosts);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSinglePost();
  }, []);

  console.log(singlePost, "singlePost");
  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Find a Blog You'll Love"
          paragraph="Find a World of Knowledge and Start Your Browsing Adventure"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {singlePost?.map((blog) => (
            <div key={blog?.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
