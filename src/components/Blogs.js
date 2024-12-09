import React, { useState } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Box, Collapse } from '@mui/material';
import './Blogs.css';

const BlogCards = () => {
  const [selectedBlog, setSelectedBlog] = useState(null); // Tıklanan blogu saklamak için durum

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
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
      sx={{ paddingTop: '4vh' }}
    >
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <h2 id='blogs'>Hukuki Makaleler</h2>
      </Box>

      {/* Kartlar */}
      {blogs.map((blog) => (
        <Box key={blog.id} flex={1} minWidth="240px" maxWidth="345px">
          <Card sx={{ maxWidth: 345, position: 'relative' }}>
            <CardActionArea onClick={() => handleClick(blog.id)}>
              <CardMedia
                component="img"
                height="140"
                image={blog.image}
                alt={blog.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {blog.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {blog.description}
                </Typography>
              </CardContent>
            </CardActionArea>

            {/* Açılır Kısım */}
            <Collapse in={selectedBlog === blog.id} timeout="auto" unmountOnExit>
              <Box className="despart">
                <Typography variant="body2" color="text.secondary">
                  {blog.id === 1 && "Aile hukuku, boşanma, nafaka ve velayet gibi konuları içerir."}
                  {blog.id === 2 && "Ceza hukuku, suçlar ve cezalar hakkında bilgi verir."}
                  {blog.id === 3 && "Ticaret hukuku, şirketlerin kurulması, ticaret anlaşmaları ve diğer iş süreçleri hakkında bilgi sağlar."}
                  {blog.id === 4 && "Miras hukuku, vefat durumunda mal paylaşımı ve varislik hakkında detaylar sunar."}
                </Typography>
              </Box>
            </Collapse>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default BlogCards;
