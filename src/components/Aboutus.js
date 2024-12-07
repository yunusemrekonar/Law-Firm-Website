import React from 'react';
import './Aboutus.css';
import team1 from '../components/team1.jpg';

const Aboutus = () => {
  return (
    <section id="aboutus" className="aboutus">
      <div className="aboutus-content">
        <div className="team-section">
          <h2>Kurucumuz</h2>
          <div className="team-member">
            <img src={team1} alt="Avukat Ayşenur Konar" />
            <h3>Av.Ayşenur Konar</h3>
            <p>Ankara Barosu - 37181</p>
          </div>
        </div>

        <div className="about-text">
          <h2>Hakkımızda</h2>
          <p>
          Biz, Ankara'da avukatlık ve danışmanlık hizmeti veren, kaliteli hizmet ve müşteri memnuniyetini en ön planda tutan, müşteri odaklı bir şirketiz. Yılların getirdiği tecrübe ve bilgi birikimiyle, her zaman en iyi çözümleri sunmak için titizlikle çalışıyoruz. Ankara'daki avukatlık ve danışmanlık ihtiyaçlarınızı en iyi şekilde anlayarak, size yenilikçi, etkili ve sürdürülebilir hizmetler sağlıyoruz. Her bir müşterimizin özel gereksinimlerine yönelik çözümler geliştirmeye özen gösteriyor, onların beklentilerini aşmayı amaçlıyoruz. Takımımız, her zaman yüksek kalite standartlarına sadık kalarak, Ankara'da sektördeki lider konumumuzu korumak ve daha da güçlendirmek için sürekli olarak kendini geliştiriyor.
          Amacımız, Ankara'da sektördeki en güvenilir ve saygın marka haline gelmek, müşteri memnuniyetini sürekli olarak artırarak uzun vadeli iş ilişkileri kurmaktır. Her projede mükemmeliyetin peşinden gidiyor ve Ankara'daki müşterilerimize değer katmayı hedefliyoruz. Bu hedefe ulaşabilmek için, müşteri geri bildirimlerine büyük önem veriyor, her bir görüş ve öneriyi iş süreçlerimizi iyileştirmek için bir fırsat olarak değerlendiriyoruz. Müşterilerimizin taleplerine hızlı ve etkin çözümler üreterek, onların zamanına ve kaynaklarına değer katıyoruz. Bizim için her müşteri, yalnızca bir iş ilişkisi değil, aynı zamanda uzun süreli bir ortaklıktır. Bu nedenle, her projede yalnızca sonuç odaklı değil, aynı zamanda sürecin her aşamasında kaliteli bir deneyim sunmayı hedefliyoruz. Sürekli gelişim ve inovasyon kültürümüz, bizi Ankara'da sektördeki en güvenilir ve saygın firma olma yolunda ileriye taşıyor. Bu değerlerimizle, müşteri odaklı çalışma prensiplerimizi daha da güçlendirerek, sektördeki liderliğimizi pekiştirmeyi sürdüreceğiz.</p>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
