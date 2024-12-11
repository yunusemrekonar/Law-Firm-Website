import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  flex: '1 1 250px', // Kart genişliği dinamik, ekran boyutuna göre değişir
  maxWidth: 600,
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  overflow: 'hidden',
  margin: '0.5vh', // Kartlar arası mesafe
  '&:hover': {
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
  },
  [theme.breakpoints.down('md')]: { // Orta büyüklükteki ekranlar için
    flexBasis: '48%', // Kartlar 2'li grupla gösterilecek
  },
  [theme.breakpoints.down('sm')]: { // Küçük ekranlar için
    flexBasis: '100%', // Kartlar tek sütun olarak gösterilecek
  },
}));

const StyledMedia = styled(CardMedia)({
  height: 200, // Kartlar daha büyük olacak
  objectFit: 'cover',
});

const StyledButton = styled(Button)({
  backgroundColor: '#e0a96d',
  color: 'white',
  '&:hover': {
    backgroundColor: '#ddc3a5',
  },
});

const blogData = [
  { id: 1, title: "Aile Hukuku", image: "/images/aile_hukuku.jpg", description: "Aile hukuku ile ilgili temel bilgiler." },
  { id: 2, title: "Ceza Hukuku", image: "/images/ceza_hukuku.jpg", description: "Ceza hukuku ve dava süreçleri hakkında detaylar." },
  { id: 3, title: "Ticaret Hukuku", image: "/images/ticaret_hukuku.jpg", description: "Ticaret hukuku ve şirket yönetimi." },
  { id: 4, title: "Miras Hukuku", image: "/images/miras_hukuku.jpg", description: "Miras hukuku ve haklar." }
];

export default function MultiActionAreaCard() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1vh' }}>
      {blogData.map(blog => (
        <StyledCard key={blog.id}>
          <CardActionArea>
            <StyledMedia
              component="img"
              image={blog.image}
              alt={blog.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" style={{ fontWeight: 'bold', color: '#2c3e50' }}>
                {blog.title}
              </Typography>
              <Typography variant="body2" style={{ color: '#7f8c8d' }}>
                {blog.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
            <StyledButton size="small">
              Devamını Oku...
            </StyledButton>
          </CardActions>
        </StyledCard>
      ))}
    </div>
  );
}
