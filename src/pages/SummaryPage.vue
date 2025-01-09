<template>
  <div class="summary-page">
    <h1>รายละเอียดทั้งหมดของผู้สมัครทั้งหมดที่ส่งเข้ามา</h1>
    <ul v-if="applications.length">
      <li
        v-for="(application, index) in applications"
        :key="index"
        class="application-card"
      >
        <div class="info-group">
          <p><strong>ชื่อ - นามสกุล :</strong> {{ application.fullName }}</p>
          <p><strong>อีเมล :</strong> {{ application.email }}</p>
          <p><strong>เบอร์โทร :</strong> {{ application.phone }}</p>
          <p><strong>บัตรประชาชน :</strong> {{ application.idCardDetails }}</p>
          <p>
            <strong>ข้อมูลเพิ่มเติม :</strong> {{ application.additionalInfo }}
          </p>
        </div>

        <div class="files-group">
          <p><strong>ไฟล์เอกสารทั้งหมด :</strong></p>
          <ul>
            <li v-for="(file, index) in application.workSamples" :key="index">
              <a
                :href="'http://localhost:5000/' + file"
                target="_blank"
                class="file-link"
              >
                {{ file.split("\\").pop() }}
              </a>
            </li>
          </ul>
        </div>

        <hr />
      </li>
    </ul>
    <p v-else>ขออภัยไม่มีข้อมูลที่ถูกส่งมา</p>
    <router-link to="/" class="btn">กลับไปหน้าแรก</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      applications: [], 
    };
  },
  async created() {
    try {
      const response = await axios.get("http://localhost:5000/applications");
      this.applications = response.data;
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการดึงข้อมูล:", error);
      alert("ไม่สามารถดึงข้อมูลได้ กรุณาลองใหม่อีกครั้ง");
    }
  },
};
</script>

<style scoped>
.summary-page {
  min-height: 100vh;
  text-align: center;
  background: linear-gradient(45deg, #32b8b0, #00a79d);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

h1 {
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.application-card {
  background: #fff;
  padding: 50px;
  margin: 50px 0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 700px;
}

.info-group p {
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 10px 0;
}

.files-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.files-group p {
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 10px 0;
}

.files-group ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
}

.files-group a {
  color: #03a197;
  font-weight: bold;
  display: inline;
}

a:hover {
  text-decoration: underline;
}

.btn {
  font-size: 1.2rem;
  padding: 12px 24px;
  background: linear-gradient(45deg, #00a79d, #016299);
  color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  border: none; 
  border-radius: 10px; 
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

p {
  font-size: 1.2rem;
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 15px;
}


</style>
