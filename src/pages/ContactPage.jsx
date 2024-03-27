import React from "react";
import BtnPrimary from "../components/BtnPrimary";

const ContactPage = () => {
  return (
    <section className="contact_section">
      <div className="container">
        <form action="#" class="contact_form">
          <div class="heading">
            <div class="title">Müraciət formu</div>
            <div class="design">
              <div class="line"></div>
              <img src="/image/design-4.svg" width="32" height="40" alt="" />
              <div class="line"></div>
            </div>
          </div>
          <div class="form__elements">
            <div class="form__element">
              <label for="">Ad *</label>
              <input type="text" placeholder="Adınız" name="" />
            </div>
            <div class="form__element">
              <label for="">Soyad *</label>
              <input type="text" placeholder="Soyadınız" name="" />
            </div>
            <div class="form__element">
              <label for="">Telefon nömrəniz *</label>
              <input type="text" placeholder="+994 50 999 99 99" name="" />
            </div>
            <div class="form__element">
              <label for="">E-mail *</label>
              <input
                type="text"
                placeholder="E-mail ünvanınızı daxil edin"
                name=""
              />
            </div>
            <div class="form__element full">
              <label for="">Müraciətiniz</label>
              <textarea name="" placeholder="Mesajınız"></textarea>
            </div>
          </div>
          <BtnPrimary type="submit" title="Göndər" className="btn_primary" />
        </form>
        <div className="map">
          <img src="/image/map.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
