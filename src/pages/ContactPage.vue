<template>
  <div class="contact-page">
    <h1 class="title">ข้อมูลการติดต่อ</h1>
    <div class="contact-container">
      <div class="contact-details">
        <p>
          <img src="@/assets/icon/icon-address.png" class="icon-address">
          <b>บริษัท แอลเอฟฟินเทค จำกัด (สำนักงานใหญ่)</b>
        </p>
        <div class="address">
          <p>
            เลขที่ 181/276 หมู่ 3 <br />
            ถนน โพธาราม <br />
            ตำบล ช้างเผือก <br />
            อำเภอ เมือง <br />
            จังหวัด เชียงใหม่ <br />
            50300
          </p>
        </div>
        <p>
          <img src="@/assets/icon/icon-facebook.png" class="icon">
          <strong>Facebook:</strong>
          <a href="https://facebook.com/lffintech" target="_blank" rel="noopener noreferrer">
            facebook.com/lffintech
          </a>
        </p>
        <p>
          <img src="@/assets/icon/icon-telephone.png" class="icon">
          <strong>โทร:</strong> (+66) 63-535-1193
        </p>
        <p>
          <img src="@/assets/icon/icon-email.png" class="icon">
          <strong>อีเมล:</strong>
          <a href="mailto:info@lffintech.co.th">info@lffintech.co.th</a>
        </p>
      </div>
    </div>
    
    <div class="map-container">
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7553.41248780505!2d98.97360486025417!3d18.81124027433431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3b88a3c4384b%3A0x27948c945ac8d884!2z4Lia4Lij4Li04Lip4Lix4LiXIOC5geC4reC4peC5gOC4reC4n-C4n-C4tOC4meC5gOC4l-C4hCDguIjguLPguIHguLHguJQ!5e0!3m2!1sth!2sth!4v1734512358590!5m2!1sth!2sth"         width="100%"
        height="400"
        style="border:0;"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  min-height: 100vh;
  text-align: center;
  background: linear-gradient(45deg, #32B8B0, #00A79D);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  color: #ffffff;
}

.contact-container {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  color: #333;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1050px;
  margin: 0 auto;
}

.contact-details {
  padding: 10px;
  font-size: 1.5rem;
  line-height: 1.8;
  text-align: left;
}

.contact-details p {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.address p {
  margin-bottom: 10px;
  margin-left: 50px;
}

.icon-address, .icon {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  vertical-align: middle;
}

.map-container {
  margin-top: 20px;
  width: 100%;
  max-width: 1050px;
  border: 2px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

a {
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #0056b3;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .contact-details {
    font-size: 1rem;
    line-height: 1.5;
  }

  .icon-address, .icon {
    width: 30px;
    height: 30px;
  }

  .contact-container {
    padding: 10px;
    flex-direction: column;
  }

  .map-container {
    margin-top: 10px;
  }
}
</style>
