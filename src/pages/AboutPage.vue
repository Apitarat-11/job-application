<template>
  <div class="about-page">
    <div class="content">
      <p class="description">
        เรารวมตัวจากคนที่เข้าใจและต้องการพัฒนาผู้ประกอบการไทย <br />
        ให้สามารถแข่งขันในตลาดภายในและต่างประเทศได้ <br /> 
        อย่างทัดเทียมในยุคดิจิทัลนี้
      </p>
      <div class="icon">
        <img src="@/assets/icon/icon-company.png" alt="Building Icon" />
      </div>
      <h1 class="title">เกี่ยวกับเรา</h1>
      <p class="about-description">
        บริษัท แอลเอฟฟินเทค จำกัด เราคือผู้พัฒนาและออกแบบเครื่องมือสำหรับธุรกิจและองค์กรภาครัฐ ตั้งแต่ขนาดเล็ก 
        ไปจนถึง ขนาดใหญ่ โดยทีมงานคนรุ่นใหม่ที่พร้อมช่วยเหลือ และอยู่เคียงข้างธุรกิจคุณด้วยประสบการณ์ และการทำงาน 
        แบบมืออาชีพ เรายังมีพาทเนอร์ทางธุรกิจที่หลากหลายและเป็นที่รู้จักตั้งแต่ ระดับปรึกษาธุรกิจรายบุคลคลจนไปถึงทีม งาน 
        จากบริษัทมหาชน เพื่อการหาโซลูชั่นในการแก้ปัญหาที่ดีที่สุด และเหมาะสมกับธุรกิจด้านเครื่องมือ บริษัทได้วิจัย และ พัฒนา
        ผลิตภัณฑ์และบริการ ในด้านซอฟท์แวร์สำหรับการใช้งานในระดับบุคคล และแบบองค์กรเพื่อการทำงานที่มี ประสิทธิภาพ 
        และยังมีการให้บริการด้านที่ ปรึกษาเพื่อให้ธุรกิจเติบโตอย่างก้าวกระโดด
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  text-align: center;
  background: linear-gradient(45deg, #32B8B0, #00A79D);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.content {
  background-color: #fff;
  border-radius: 15px;
  padding: 50px;
  width: 80%;
  max-width: 1050px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.icon img {
  width: 300px;
  height: 290px;
  margin: 20px 0;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #000000;
}

.description {
  font-size: 1.3rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 20px;
  text-align: center; 
}

.about-description {
  font-size: 1.3rem;
  line-height: 1.8;
  color: #555;
  text-align: center; 
}

.contact-link {
  background-color: #32b8b0;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.contact-link:hover {
  background-color: #005f57;
}

@media (max-width: 768px) {
  .content {
    width: 90%;
    padding: 30px;
  }
  
  .title {
    font-size: 2rem;
  }

  .description,
  .about-description {
    font-size: 1.1rem;
  }

  .icon img {
    width: 250px;
    height: 240px;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.8rem;
  }

  .description,
  .about-description {
    font-size: 1rem;
  }

  .icon img {
    width: 200px;
    height: 190px;
  }

  .content {
    width: 95%;
    padding: 20px;
  }
}
</style>
