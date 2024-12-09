import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Box, Button } from '@mui/material';

const BlogDetail = () => {
  const { id } = useParams();  // URL'den blog id parametresini alıyoruz
  const navigate = useNavigate();  // navigate fonksiyonunu alıyoruz

  const blogs = [
    { id: "1", title: "Aile Hukuku", content: "Aile hukuku ile ilgili ayrıntılı bilgiler burada." },
    { id: "2", title: "Ceza Hukuku", content: "Ceza hukuku süreçleri hakkında detaylı bilgiler burada." },
    { id: "3", title: "Ticaret Hukuku", content: "Ticaret hukuku ve şirket yönetimi konuları burada." },
    { id: "4", title: "Miras Hukuku", content: "Miras hukuku ve haklar hakkında bilgiler burada." },
  ];

  const blog = blogs.find((b) => b.id === id);  // id'ye göre blogu buluyoruz

  return (
    <Box sx={{ padding: '2rem' }}>
      <Button variant="contained" onClick={() => navigate('/')}>Geri Dön</Button>
      
      <Typography variant="h4" sx={{ marginTop: '1rem' }}>
        {blog.title}
      </Typography>
      <Typography variant="body1" sx={{ marginTop: '1rem' }}>
        {blog.content}
      </Typography>
    </Box>
  );
};

export default BlogDetail;
