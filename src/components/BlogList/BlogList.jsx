import React, { useEffect, useState } from "react";
import axios from "axios";

import BlogCard from "../BlogCard/BlogCard";

import "./BlogList.css";

const SERVER_URL = process.env.REACT_APP_ARTICLO_SERVER_URL;

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}api/blogs`);
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          image={blog.image}
          text={blog.text}
        />
      ))}
    </div>
  );
};

export default BlogList;
