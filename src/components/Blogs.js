import React from 'react';
import './Blogs.css';

const Blog1 = () => {
  const blogPosts = [
    { title: "Blog Başlık 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac lacus dolor. Fusce ut justo vitae metus." },
    { title: "Blog Başlık 2", content: "Nulla facilisi. Aenean in venenatis ipsum. Integer sit amet dui ut felis tincidunt gravida." },
    { title: "Blog Başlık 3", content: "Suspendisse potenti. Integer euismod ex eu augue tristique, id luctus augue blandit." },
    { title: "Blog Başlık 4", content: "Curabitur sit amet ante ut nunc laoreet mollis. Integer venenatis magna vitae erat auctor gravida." },
    { title: "Blog Başlık 5", content: "Aliquam erat volutpat. Etiam vehicula nisl in est venenatis, a vulputate ante malesuada." },
    { title: "Blog Başlık 6", content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." }
  ];

  return (
    <div className="blog-container">
      {blogPosts.map((post, index) => (
        <div className="blog-post" key={index}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog1;
