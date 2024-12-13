import React from 'react';
import { Link } from 'react-router-dom'; 
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const blogData = [
    { id: 1, title: "Aile Hukuku", content: "Detaylı aile hukuku makalesi..." },
    { id: 2, title: "Ceza Hukuku", content: "Ceza hukuku hakkında detaylı açıklamalar..." },
    { id: 3, title: "Ticaret Hukuku", content: "Ticaret hukuku ile ilgili önemli bilgiler..." },
    { id: 4, title: "Miras Hukuku", content: "Miras hukuku ve ilgili davalar hakkında bilgi..." },
  ];

  const blog = blogData.find((blog) => blog.id === parseInt(id));

  return (
    <div className="blog-detail">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>

      <div>
        <h3>İlgili Bölümlere Git:</h3>
        <ul>
          <li><Link to="/#ankara-avukat-ana-sayfa">Ana Sayfa</Link></li>
          <li><Link to="/#ankara-avukat-hakkimizda">Hakkımızda</Link></li>
          <li><Link to="/#ankara-avukat-calisma-alanlarimiz">Çalışma Alanlarımız</Link></li>
          <li><Link to="/#ankara-avukat-hukuki-makaleler">Hukuki Makaleler</Link></li>
          <li><Link to="/#ankara-avukat-iletisim">İletişim</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default BlogDetail;
