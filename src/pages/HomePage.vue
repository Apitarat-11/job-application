<template>
  <div class="HomePage">
    <h1 class="title">
      "ก้าวไปด้วยกันกับเรา" <br />
      ที่ บริษัทแอลเอฟฟินเทค เราพร้อมที่จะสร้างสรรค์อนาคตด้วยทีมงานที่มุ่งมั่น
      สมัครงานกับเรา และร่วมเป็นส่วนหนึ่งของความสำเร็จกับเราได้เลยที่นี่
    </h1>
    <h2 class="subtitle">
      "กรอกข้อมูลสมัครงานได้เลยที่นี่"
    </h2>
    <router-link 
      to="/applicationform" class="btn">
      กรอกข้อมูลสมัครงาน
    </router-link>
    <img src="@/assets/image/assemble.png" class="image-center" />
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>

.HomePage {
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  min-height: 100vh; 
  text-align: center; 
  background: linear-gradient(45deg, #32B8B0, #00A79D);
  padding: 20px; 
  position: relative; 
  overflow: hidden; 
}

.title {
  max-width: 1000px;
  font-size: 2rem; 
  color: #ffffff; 
  line-height: 1.3;
  margin-bottom: 1.2px; 
  text-align: center; 
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); 
}

.subtitle {
  color: #ffffff; 
  font-size: 2rem; 
  line-height: 1.3;
  text-align: center; 
  margin-bottom: 50px; 
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); 
}

.btn {
  font-size: 1.2rem; 
  padding: 12px 24px; 
  background: linear-gradient(45deg, #00A79D, #016299 );
  color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  border: none; 
  border-radius: 12px; 
  text-decoration: none; 
  text-align: center; 
  font-weight: bold; 
  cursor: pointer; 
  transition: all 0.3s ease;
}

.btn:hover {
  color: #ffffff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  background: linear-gradient(45deg, #016299, #00A79D );
  transform: scale(1.05); 
}

.image-center {
  margin-top: 50px; 
  width: 650px; 
  max-width: 80%; 
  height: auto; 
  z-index: 0; 
}

@media screen and (min-width: 768px) {
  .image-center {
    width: 400px; 
  }

  .title {
    font-size: 2rem; 
  }

  .subtitle {
    font-size: 2rem; 
  }

  .btn {
    font-size: 1.5rem; 
  }
}
</style>
