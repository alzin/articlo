import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import BlogCard from "../BlogCard/BlogCard";
import Article from "../Article/Article";

import "./BlogList.css";

const SERVER_URL = process.env.REACT_APP_ARTICLO_SERVER_URL;

const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/api/articles`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
          },
        });
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-list">
      {selectedBlog ? (
        <div className="article-container">
          <button
            className="show-all-blogs-btn"
            onClick={() => setSelectedBlog(null)}
          >
            Show All Blogs
          </button>
          <Article
            title={selectedBlog.title}
            image={selectedBlog.imageUrl}
            body={selectedBlog.body}
            sections=""
            onEdit={() => null}
          />
        </div>
      ) : (
        blogs.map((blog, index) => (
          <BlogCard
            key={blog.id || index}
            title={blog.title}
            image={blog.imageUrl}
            text={blog.body}
            onClick={() => setSelectedBlog(blog)}
          />
        ))
      )}
      <button
        className="create-new-article-btn"
        onClick={() => navigate("/home")}
      >
        Create New Article
      </button>
    </div>
  );
};

export default BlogList;
