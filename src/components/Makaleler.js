import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Helmet } from 'react-helmet';
import './Makaleler.css';

const blogData = [
  { id: 1, title: "Aile Hukuku", image: "/images/aile_hukuku.jpg", description: "Aile hukuku ile ilgili temel bilgiler." },
  { id: 2, title: "Ceza Hukuku", image: "/images/ceza_hukuku.jpg", description: "Ceza hukuku ve dava süreçleri hakkında detaylar." },
  { id: 3, title: "Ticaret Hukuku", image: "/images/ticaret_hukuku.jpg", description: "Ticaret hukuku ve şirket yönetimi." },
  { id: 4, title: "Miras Hukuku", image: "/images/miras_hukuku.jpg", description: "Miras hukuku ve haklar." },
  { id: 5, title: "İş Hukuku", image: "/images/is_hukuku.jpg", description: "İş hukuku ile ilgili detaylar." },
  { id: 6, title: "Aile Hukuku", image: "/images/aile_hukuku.jpg", description: "Aile hukuku ile ilgili temel bilgiler." },
  { id: 7, title: "Ceza Hukuku", image: "/images/ceza_hukuku.jpg", description: "Ceza hukuku ve dava süreçleri hakkında detaylar." },
  { id: 8, title: "Ticaret Hukuku", image: "/images/ticaret_hukuku.jpg", description: "Ticaret hukuku ve şirket yönetimi." },
  { id: 9, title: "Miras Hukuku", image: "/images/miras_hukuku.jpg", description: "Miras hukuku ve haklar." },
  { id: 10, title: "İş Hukuku", image: "/images/is_hukuku.jpg", description: "İş hukuku ile ilgili detaylar." },
];

export default function Makaleler() {
  return (
    <div id='ankara-avukat-tum-makaleler' className="makaleler-container">
      <Helmet>
        <title>Tüm Makaleler | Hukuk Blogu</title>
        <meta name="description" content="Hukuk alaninda bilgi veren kapsamli makaleler. Aile hukuku, ceza hukuku, iş hukuku ve daha fazlasini keşfedin." />
        <meta name="keywords" content="Hukuk, Ankara avukat, Avukat, Boşanma avukati,  Aile Hukuku, Ceza Hukuku, İş Hukuku, Ticaret Hukuku, Miras Hukuku, Hukuk Blogu" />
      </Helmet>

      <h2 className="makaleler-header">Tüm Makaleler</h2>

      {blogData.map(blog => (
        <Card key={blog.id} className="makaleler-card">
          <CardActionArea>
            <CardMedia
              component="img"
              className="makaleler-media"
              image={blog.image}
              alt={blog.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" className="makaleler-card-title">
                {blog.title}
              </Typography>
              <Typography variant="body2" className="makaleler-card-description">
                {blog.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={`/blog/${blog.id}`} style={{ textDecoration: 'none' }}>
              <Button size="small" className="makaleler-button">
                Devamını Oku...
              </Button>
            </Link>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
