import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetail.css';

const blogData = [
  {
    "id": 1,
    "title": "Aile Hukuku",
    "image": "/images/aile_hukuku.jpg",
    "firstcontent": `
      <h3 id="miras-hukuku">Miras Hukuku Nedir?</h3>
      <p>Miras hukuku, bir kişinin ölümünden sonra geriye kalan mal varlığının paylaşımını düzenleyen hukuk dalıdır. Türkiye'deki miras hukuku, mirasçıların hakları, mirasın paylaşımı ve vasiyetname düzenlemelerini içerir.</p>
    `,
    "content": `
      <h3 id="aile-hukuku">Aile Hukuku Nedir?</h3>
      <p>Aile hukuku, aile içindeki bireylerin haklarını ve yükümlülüklerini düzenleyen bir hukuk dalıdır. Türkiye'deki aile hukuku, evlilik, boşanma, çocukların velayeti, nafaka ve mal paylaşımını kapsamaktadır.</p>
      <h4 id="evlilik">Evlilik ve Boşanma</h4>
      <p>Evlilik sözleşmeleri, boşanma davaları ve mal paylaşımı, aile hukuku davalarının temelini oluşturur.</p>
      <h4 id="cocuk-haklari">Çocuk Hakları ve Velayet</h4>
      <p>Çocukların velayeti, en önemli aile hukuku meselelerinden biridir. Çocuğun üstün yararı gözetilerek velayet hakkı bir ebeveyne veya her ikisine verilebilir.</p>
    `
  },
  {
    "id": 2,
    "title": "İş Hukuku",
    "image": "/images/is_hukuku.jpg",
    "firstcontent": `
      <h3 id="is-hukuku">İş Hukuku Nedir?</h3>
      <p>İş hukuku, işçi ve işveren arasındaki ilişkileri düzenleyen hukuk dalıdır. İşçi hakları, iş güvenliği ve çalışma şartları gibi konuları kapsar.</p>
    `,
    "content": `
      <h3 id="calisma-haklari">Çalışma Hakları ve Güvenceler</h3>
      <p>İş hukuku, çalışanların sosyal hakları, maaş ödemeleri ve iş sözleşmeleri gibi konuları düzenler. Ayrıca işçi ve işveren arasındaki uyuşmazlıkların çözümünü sağlar.</p>
      <h4 id="is-guvenligi">İş Güvenliği</h4>
      <p>İş sağlığı ve güvenliği kanunları, çalışanların iş yerinde güvenli bir ortamda çalışmasını sağlar ve iş kazalarını önlemeyi amaçlar.</p>
    `
  },
  {
    "id": 3,
    "title": "Ceza Hukuku",
    "image": "/images/ceza_hukuku.jpg",
    "firstcontent": `
      <h3 id="ceza-hukuku">Ceza Hukuku Nedir?</h3>
      <p>Ceza hukuku, suç ve ceza arasındaki ilişkileri düzenleyen hukuk dalıdır. Kişilerin ve toplumun güvenliğini sağlamak amacıyla cezalar öngörülür.</p>
    `,
    "content": `
      <h3 id="suc-ve-ceza">Suç ve Ceza Kavramları</h3>
      <p>Ceza hukuku, suç teşkil eden fiilleri tanımlar ve bunlar için öngörülen cezaları düzenler. Bu bağlamda bireylerin haklarını ve toplumsal düzeni korur.</p>
      <h4 id="adli-surec">Adli Süreç</h4>
      <p>Soruşturma, kovuşturma ve yargılama aşamaları ceza hukukunun temel unsurlarını oluşturur.</p>
    `
  },
  {
    "id": 4,
    "title": "Ticaret Hukuku",
    "image": "/images/ticaret_hukuku.jpg",
    "firstcontent": `
      <h3 id="ticaret-hukuku">Ticaret Hukuku Nedir?</h3>
      <p>Ticaret hukuku, ticari faaliyetleri ve işletmeleri düzenleyen hukuk dalıdır. Şirket kuruluşları, ticari sözleşmeler ve rekabet hukuku gibi alanları kapsar.</p>
    `,
    "content": `
      <h3 id="sirketler">Şirketler ve Sözleşmeler</h3>
      <p>Ticaret hukuku, anonim ve limited şirketlerin kuruluş, işleyiş ve sona erme süreçlerini düzenler. Ayrıca ticari sözleşmelerin geçerliliği ve uygulamaları da bu hukuk dalının bir parçasıdır.</p>
      <h4 id="rekabet-hukuku">Rekabet Hukuku</h4>
      <p>Adil rekabeti sağlamak amacıyla piyasa düzenlemeleri yapılır ve tekelleşmenin önüne geçilir.</p>
    `
  },
  {
    "id": 5,
    "title": "İdare Hukuku",
    "image": "/images/idare_hukuku.jpg",
    "firstcontent": `
      <h3 id="idare-hukuku">İdare Hukuku Nedir?</h3>
      <p>İdare hukuku, kamu idaresinin faaliyetlerini düzenleyen hukuk dalıdır. İdari işlemler, kamu görevlilerinin hakları ve yükümlülükleri bu kapsamda değerlendirilir.</p>
    `,
    "content": `
      <h3 id="kamu-idaresi">Kamu İdaresi ve İşlemleri</h3>
      <p>İdare hukuku, devletin vatandaşlarla olan ilişkilerini düzenler ve kamu hizmetlerinin etkin şekilde sunulmasını sağlar.</p>
      <h4 id="idari-davalari">İdari Davalar</h4>
      <p>İdarenin karar ve işlemlerine karşı açılan iptal ve tam yargı davaları idare hukukunun önemli unsurlarındandır.</p>
    `
  },
  [
    {
      "id": 6,
      "title": "Aile Hukuku",
      "image": "/images/aile_hukuku.jpg",
      "firstcontent": `
        <h3 id="miras-hukuku">Miras Hukuku Nedir?</h3>
        <p>Miras hukuku, bir kişinin ölümünden sonra geriye kalan mal varlığının paylaşımını düzenleyen hukuk dalıdır. Türkiye'deki miras hukuku, mirasçıların hakları, mirasın paylaşımı ve vasiyetname düzenlemelerini içerir.</p>
      `,
      "content": `
        <h3 id="aile-hukuku">Aile Hukuku Nedir?</h3>
        <p>Aile hukuku, aile içindeki bireylerin haklarını ve yükümlülüklerini düzenleyen bir hukuk dalıdır. Türkiye'deki aile hukuku, evlilik, boşanma, çocukların velayeti, nafaka ve mal paylaşımını kapsamaktadır.</p>
        <h4 id="evlilik">Evlilik ve Boşanma</h4>
        <p>Evlilik sözleşmeleri, boşanma davaları ve mal paylaşımı, aile hukuku davalarının temelini oluşturur.</p>
        <h4 id="cocuk-haklari">Çocuk Hakları ve Velayet</h4>
        <p>Çocukların velayeti, en önemli aile hukuku meselelerinden biridir. Çocuğun üstün yararı gözetilerek velayet hakkı bir ebeveyne veya her ikisine verilebilir.</p>
      `
    },
    {
      "id": 7,
      "title": "İş Hukuku",
      "image": "/images/is_hukuku.jpg",
      "firstcontent": `
        <h3 id="is-hukuku">İş Hukuku Nedir?</h3>
        <p>İş hukuku, işçi ve işveren arasındaki ilişkileri düzenleyen hukuk dalıdır. İşçi hakları, iş güvenliği ve çalışma şartları gibi konuları kapsar.</p>
      `,
      "content": `
        <h3 id="calisma-haklari">Çalışma Hakları ve Güvenceler</h3>
        <p>İş hukuku, çalışanların sosyal hakları, maaş ödemeleri ve iş sözleşmeleri gibi konuları düzenler. Ayrıca işçi ve işveren arasındaki uyuşmazlıkların çözümünü sağlar.</p>
        <h4 id="is-guvenligi">İş Güvenliği</h4>
        <p>İş sağlığı ve güvenliği kanunları, çalışanların iş yerinde güvenli bir ortamda çalışmasını sağlar ve iş kazalarını önlemeyi amaçlar.</p>
      `
    },
    {
      "id": 8,
      "title": "Ceza Hukuku",
      "image": "/images/ceza_hukuku.jpg",
      "firstcontent": `
        <h3 id="ceza-hukuku">Ceza Hukuku Nedir?</h3>
        <p>Ceza hukuku, suç ve ceza arasındaki ilişkileri düzenleyen hukuk dalıdır. Kişilerin ve toplumun güvenliğini sağlamak amacıyla cezalar öngörülür.</p>
      `,
      "content": `
        <h3 id="suc-ve-ceza">Suç ve Ceza Kavramları</h3>
        <p>Ceza hukuku, suç teşkil eden fiilleri tanımlar ve bunlar için öngörülen cezaları düzenler. Bu bağlamda bireylerin haklarını ve toplumsal düzeni korur.</p>
        <h4 id="adli-surec">Adli Süreç</h4>
        <p>Soruşturma, kovuşturma ve yargılama aşamaları ceza hukukunun temel unsurlarını oluşturur.</p>
      `
    },
    {
      "id": 9,
      "title": "Ticaret Hukuku",
      "image": "/images/ticaret_hukuku.jpg",
      "firstcontent": `
        <h3 id="ticaret-hukuku">Ticaret Hukuku Nedir?</h3>
        <p>Ticaret hukuku, ticari faaliyetleri ve işletmeleri düzenleyen hukuk dalıdır. Şirket kuruluşları, ticari sözleşmeler ve rekabet hukuku gibi alanları kapsar.</p>
      `,
      "content": `
        <h3 id="sirketler">Şirketler ve Sözleşmeler</h3>
        <p>Ticaret hukuku, anonim ve limited şirketlerin kuruluş, işleyiş ve sona erme süreçlerini düzenler. Ayrıca ticari sözleşmelerin geçerliliği ve uygulamaları da bu hukuk dalının bir parçasıdır.</p>
        <h4 id="rekabet-hukuku">Rekabet Hukuku</h4>
        <p>Adil rekabeti sağlamak amacıyla piyasa düzenlemeleri yapılır ve tekelleşmenin önüne geçilir.</p>
      `
    },
    {
      "id": 10,
      "title": "İdare Hukuku",
      "image": "/images/idare_hukuku.jpg",
      "firstcontent": `
        <h3 id="idare-hukuku">İdare Hukuku Nedir?</h3>
        <p>İdare hukuku, kamu idaresinin faaliyetlerini düzenleyen hukuk dalıdır. İdari işlemler, kamu görevlilerinin hakları ve yükümlülükleri bu kapsamda değerlendirilir.</p>
      `,
      "content": `
        <h3 id="kamu-idaresi">Kamu İdaresi ve İşlemleri</h3>
        <p>İdare hukuku, devletin vatandaşlarla olan ilişkilerini düzenler ve kamu hizmetlerinin etkin şekilde sunulmasını sağlar.</p>
        <h4 id="idari-davalari">İdari Davalar</h4>
        <p>İdarenin karar ve işlemlerine karşı açılan iptal ve tam yargı davaları idare hukukunun önemli unsurlarındandır.</p>
      `
    }
  ]
];
  


export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find(b => b.id === parseInt(id));

  const [headings, setHeadings] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    if (blog) {
      // Başlıkları topla
      const headingTags = [];
      const contentContainer = ref.current;
      const headingsList = contentContainer.querySelectorAll('h3, h4');
      headingsList.forEach(tag => {
        headingTags.push({
          id: tag.id,
          text: tag.innerText,
          tag: tag.tagName,
        });
      });
      setHeadings(headingTags);
    }
  }, [blog]);

  if (!blog) {
    return <div className="not-found">Blog not found</div>;
  }

  return (
    <div className="blog-detail-container">
      <h2 className="blog-detail-title">{blog.title}</h2>

      <div className="blog-detail-card">
        <img src={blog.image} alt={blog.title} className="blog-detail-image" />
        <div
          className="blog-detail-firstcontent"
          dangerouslySetInnerHTML={{ __html: blog.firstcontent }}
        />
      </div>

      {/* Table of Contents */}
      {headings.length > 0 && (
        <div className="table-of-contents">
            <h5>İçindekiler</h5>
          <ul>
            {headings.map((heading, index) => (
              <li key={index}>
                <a href={`#${heading.id}`}>{heading.text}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div
        className="blog-detail-content"
        ref={ref}
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
      <div className="signature">
        <h5>Av.Ayşenur Konar</h5>
      </div>
    </div>
  );
}
