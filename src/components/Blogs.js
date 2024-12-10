import React, { useState } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Box, Collapse } from '@mui/material';
import './Blogs.css';

const BlogCards = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    { id: 1, title: "Aile Hukuku", image: "/images/aile_hukuku.jpg", description: "Aile hukuku ile ilgili temel bilgiler." },
    { id: 2, title: "Ceza Hukuku", image: "/images/ceza_hukuku.jpg", description: "Ceza hukuku ve dava süreçleri hakkında detaylar." },
    { id: 3, title: "Ticaret Hukuku", image: "/images/ticaret_hukuku.jpg", description: "Ticaret hukuku ve şirket yönetimi." },
    { id: 4, title: "Miras Hukuku", image: "/images/miras_hukuku.jpg", description: "Miras hukuku ve haklar." },
  ];

  const handleClick = (id) => {
    setSelectedBlog(selectedBlog === id ? null : id);
  };

  return (
    <div className="blog-container">
      <div className="header">
        <h2 id="blogs">Hukuki Makaleler</h2>
      </div>
      <div className="blog-cards">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <Card className="card">
              <CardActionArea onClick={() => handleClick(blog.id)}>
                <CardMedia
                  component="img"
                  className="card-media"
                  image={blog.image}
                  alt={blog.title}
                />
                <CardContent className="card-content">
                  <Typography className="card-title">{blog.title}</Typography>
                  <Typography className="card-description">{blog.description}</Typography>
                </CardContent>
              </CardActionArea>
              <Collapse in={selectedBlog === blog.id} timeout="auto" unmountOnExit>
                <div className="collapse-content">
                  <Typography>
                    {blog.id === 1 && "Aile hukuku, boşanma, nafaka ve velayet gibi konuları içerir."}
                    {blog.id === 2 && "Ceza hukuku, suçlar ve cezalar hakkında bilgi verir."}
                    {blog.id === 3 && "Ticaret hukuku, şirketlerin kurulması, ticaret anlaşmaları ve diğer iş süreçleri hakkında bilgi sağlar."}
                    {blog.id === 4 && "Miras hukuku, vefat durumunda mal paylaşımı ve varislik hakkında detaylar sunar."}
                  </Typography>
                </div>
              </Collapse>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
