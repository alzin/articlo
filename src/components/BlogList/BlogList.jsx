import React, { useEffect, useState } from "react";
import axios from "axios";

import BlogCard from "../BlogCard/BlogCard";

import "./BlogList.css";

const SERVER_URL = process.env.REACT_APP_ARTICLO_SERVER_URL;

const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/api/articles`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
          },
        });
        console.log("response.data:", response.data);

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
        <BlogCard title={blog.title} image={blog.imageUrl} text={blog.body} />
      ))}
    </div>
  );
};

export default BlogList;
