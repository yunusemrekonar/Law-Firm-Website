import React, { useState } from 'react';
import './Contactus.css';
import emailjs from 'emailjs-com';

const Contactus = () => {
  // Form verilerini tutmak için useState kullanıyoruz
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    message: ''
  });

  // Form verilerini güncelleyen fonksiyon
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_id', 'template_id', e.target, 'user_id')
    .then((result) => {
      console.log(result.text);
      alert('Form başarıyla gönderildi!');
    }, (error) => {
      console.log(error.text);
      alert('Form gönderilemedi. Lütfen tekrar deneyin.');
    });

    // Form verilerini gönderme işlemi
    // EmailJS gibi bir servisi kullanabilirsiniz.
    // Aşağıda sadece basit bir konsola yazdırma işlemi yapılmaktadır.
    console.log("Form submitted:", formData);

    // Burada bir e-posta gönderebilirsiniz.
    // Örneğin, EmailJS veya başka bir API entegrasyonu yapılabilir.

    // Formu sıfırlıyoruz
    setFormData({
      name: '',
      surname: '',
      phone: '',
      email: '',
      message: ''
    });

    alert('Form başarıyla gönderildi!');
  };

  return (
    <section id="contactus" className="contactus">
      <h2>İletişim</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Ad</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="surname">Soyad</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Telefon</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">E-posta</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Mesaj</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Gönder</button>
      </form>
    </section>
  );
};

export default Contactus;
