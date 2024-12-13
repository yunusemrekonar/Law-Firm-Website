import React, { useEffect, useRef } from 'react';
import team1 from '../assets/team1.jpg';
import { Helmet } from 'react-helmet';
import './Hakkimizda.css';  // Yeni CSS dosyasını içeri aktar

const AboutusDetail = () => {

  const teamSectionRef = useRef(null);
  const aboutTextRef = useRef(null);

  useEffect(() => {
    const teamSection = teamSectionRef.current;
    const aboutText = aboutTextRef.current;

    const observerOptions = {
      root: null, 
      threshold: 0.3,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === teamSection) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          } else if (entry.target === aboutText) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (teamSection) observer.observe(teamSection);
    if (aboutText) observer.observe(aboutText);

    return () => {
      if (teamSection) observer.unobserve(teamSection);
      if (aboutText) observer.unobserve(aboutText);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Hakkimizda - Ankara Avukat</title>
        <meta name="description" content="Ankara'da avukatlik ve danişmanlik hizmeti sunan hukuk büromuz hakkinda bilgi." />
        <meta name="keywords" content="Ankara, avukat, danismanlik, hukuk, müvekkil memnuniyeti, Ankara avukat, Çankaya avukat" />
        <meta name="author" content="Avukat Ayşenur Konar" />
      </Helmet>

      <section id="ankara-avukat-hakkimizda">
        <div className="content">
          <div ref={teamSectionRef} className="teamSection">
            <h2 className="founder-title">Kurucumuz</h2>
            <div className="teamMember">
              <img src={team1} alt="Avukat Ayşenur Konar" />
              <h3>Av. Ayşenur Konar</h3>
              <p>Ankara Barosu - 37181</p>
            </div>
          </div>

          <div ref={aboutTextRef} className="aboutText">
            <h2>Hakkımızda</h2>
            <p>
            Biz, Ankara'da avukatlık ve danışmanlık hizmeti veren, kaliteli hizmet ve müvekkil memnuniyetini her zaman en ön planda tutan, müvekkil odaklı bir hukuk bürosuyuz. Yılların getirdiği tecrübe ve bilgi birikimiyle, her zaman en iyi çözümleri sunmak için titizlikle çalışıyoruz. Ankara'daki avukatlık ve danışmanlık ihtiyaçlarınızı en iyi şekilde anlayarak, size yenilikçi, etkili ve sürdürülebilir hizmetler sağlıyoruz. Hukuk alanındaki geniş uzmanlık yelpazemiz ile; ticaret hukuku, aile hukuku, iş hukuku, miras hukuku, ceza hukuku, gayrimenkul hukuku, icra iflas hukuku, vergi hukuku, idare hukuku, sözleşme hukuku, borçlar hukuku, sağlık hukuku, işçi hakları, ipotekli taşınmazlar, iflas erteleme, boşanma davaları, nafaka davaları, mal paylaşımı davaları gibi birçok alanda profesyonel destek sunuyoruz.
            Ankara avukat arayışınızda, hukuk bürosu, hukuk danışmanlık hizmeti ve hizmet içi danışmanlık konularında da sizlere yardımcı olmak için buradayız. Alanında uzman aile avukatı, ticaret avukatı, ceza avukatı, gayrimenkul avukatı ve icra avukatı gibi deneyimli kadromuzla, size özel hukuki çözümler sunuyoruz. İstanbul avukatı ya da Türkiye genelinde avukat arıyorsanız da, profesyonel hizmetlerimizi geniş bir alanda sunmaktayız.
            Her bir müvekkilimizin özel gereksinimlerine yönelik çözümler geliştirmeye özen gösteriyor, onların beklentilerini aşmayı amaçlıyoruz. Avukatlık hizmetlerimizde daima güven, dürüstlük ve gizliliği ön planda tutarak, müvekkillerimize adaletin en hızlı ve doğru şekilde tecelli etmesini sağlıyoruz.
            Hukuki danışmanlık almak, hukuk davası açmak, boşanma davası gibi işlemler için avukata başvurmak isteyenler, ceza davaları, iş kazası davaları, gayrimenkul alım satımı, haksız fiil davaları, kira sözleşmesi sorunları gibi her türlü hukuki işlem için bizimle iletişime geçebilirler. Hukuki hizmet konusunda uzmanlaşmış Ankara avukatları olarak, iş davaları, ticaret davaları, ceza davaları, miras davaları gibi geniş bir yelpazede hukuki süreçleri en etkili şekilde yönetiyoruz.
            Eğer siz de profesyonel avukatlık hizmeti arıyorsanız, Ankara boşanma avukatı, hukuk danışmanı, aile hukuku avukatı, ticaret hukuku avukatı, ceza hukuku danışmanı, gayrimenkul avukatı, işçi avukatı, vergi avukatı, miras hukuku avukatı, borçlar hukuku avukatı gibi alanlarda destek almak için bizimle iletişime geçebilirsiniz. Ankara'da avukat arayışı içindeyseniz, uzman kadromuz size en iyi hizmeti sunmak için hazır. 
            Daha fazla bilgi için bizimle iletişime geçin ve ihtiyaçlarınıza yönelik en doğru hukuki çözümleri bulalım. Unutmayın, Konar Hukuk Ankara avukatları olarak tüm hukuk süreçlerinizi profesyonel bir yaklaşımla yönetiyoruz. Hukuki haklarınız için doğru adres biziz!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutusDetail;
