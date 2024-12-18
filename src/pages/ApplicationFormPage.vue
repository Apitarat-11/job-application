<template>
  <div class="form-page">
    <h1 class="title">
      หากคุณสนใจที่จะสมัครงานกับเรา กรุณากรอกรายละเอียดของคุณ
    </h1>

    <form @submit.prevent="submitApplication">
      <div class="input-group">
        <label for="name">ชื่อ - นามสกุล</label>
        <input type="text" id="name" v-model="formData.fullName" required />
        <span v-if="nameError" class="error-message">{{ nameError }}</span>
      </div>

      <div class="input-group">
        <label for="email">อีเมล</label>
        <input type="email" id="email" v-model="formData.email" required />
        <span v-if="emailError" class="error-message">{{ emailError }}</span>
      </div>

      <div class="input-group">
        <label for="phone">เบอร์โทร</label>
        <input type="tel" id="phone" v-model="formData.phone" required />
        <span v-if="phoneError" class="error-message">{{ phoneError }}</span>
      </div>

      <div class="input-group">
        <label for="idCard" class="custom-upload">
          <i class="icon-plus">+</i> อัปโหลดภาพบัตรประชาชน
        </label>
        <input
          type="file"
          id="idCard"
          class="hidden"
          @change="handleFileChange"
        />
        <div v-if="uploadedImage">
          <p>ไฟล์ที่อัปโหลด: {{ uploadedImage.name }}</p>
          <img
            :src="imagePreviewUrl"
            alt="ID Card Preview"
            v-if="imagePreviewUrl"
            style="max-width: 200px; max-height: 200px; margin-top: 10px"
          />
        </div>
      </div>

      <div class="input-group">
        <label for="comments">ข้อมูลตามบัตรประชาชน</label>
        <textarea id="comments" v-model="extractedText" readonly></textarea>
      </div>

      <div class="input-group">
        <label for="additionalInfo">ข้อมูลเพิ่มเติม</label>
        <textarea
          id="additionalInfo"
          v-model="formData.additionalInfo"
        ></textarea>
      </div>

      <div class="input-group">
        <label for="portfolio" class="custom-upload">
          <i class="icon-plus">+</i> อัปโหลดผลงาน - เอกสารเพิ่มเติม
        </label>
        <input
          type="file"
          id="portfolio"
          class="hidden"
          @change="handlePortfolioChange"
          multiple
          accept="application/pdf, image/*, .docx"
        />
        <div v-if="portfolioFiles.length">
          <p>ไฟล์ผลงานที่อัปโหลด:</p>
          <ul>
            <li v-for="(file, index) in portfolioFiles" :key="index">
              <a :href="getObjectUrl(file)" target="_blank">
                {{ file.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div v-if="errorMessage" class="error-message">
        <p>{{ errorMessage }}</p>
      </div>

      <div class="form-actions">
        <button class="btn" :disabled="isLoading">ส่งข้อมูลสมัครงาน</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        fullName: "",
        email: "",
        phone: "",
        additionalInfo: "",
      },
      uploadedImage: null, // รูปภาพที่อัปโหลด
      portfolioFiles: [], // ไฟล์ผลงานที่อัปโหลด
      extractedText: "", // ข้อความที่ถอดออกมา
      isLoading: false, // สถานะการโหลด
      errorMessage: "", // ข้อความผิดพลาด
      nameError: "", // ข้อความผิดพลาดเกี่ยวกับชื่อ-นามสกุล
      emailError: "", // ข้อความผิดพลาดเกี่ยวกับอีเมล
      phoneError: "", // ข้อความผิดพลาดเกี่ยวกับเบอร์โทร
    };
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith("image/")) {
        this.uploadedImage = file;
        this.imagePreviewUrl = URL.createObjectURL(file); // สร้าง URL สำหรับแสดงภาพตัวอย่าง
        this.extractTextFromImage(file);
      } else {
        this.errorMessage = "กรุณาอัปโหลดไฟล์รูปภาพเท่านั้น";
      }
    },

    handlePortfolioChange(event) {
      const files = event.target.files;
      if (files.length) {
        this.portfolioFiles = Array.from(files); // รับไฟล์ผลงานที่อัปโหลด
      } else {
        this.portfolioFiles = [];
      }
    },

    getObjectUrl(file) {
      return file ? URL.createObjectURL(file) : ""; // สร้าง URL สำหรับแสดงไฟล์ผลงาน
    },
    
    // ถอดข้อความจากรูปภาพ
    extractTextFromImage(file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("libs", "gc-vision");

      this.isLoading = true;
      this.errorMessage = "";
      this.extractedText = "";

      axios
        .post(
          "https://uat.api.ocr.lffintech.co.th/convert/identfication/text",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          // ตรวจสอบว่ามีข้อความถอดออกมาหรือไม่
          if (
            response.data &&
            response.data.texts &&
            Array.isArray(response.data.texts.data)
          ) {
            this.extractedText = response.data.texts.data
              .map((item) => `${item.type}: ${item.value}`)
              .join("\n");
          } else {
            this.errorMessage = "ไม่พบข้อความในรูปภาพ";
          }
          this.isLoading = false;
        })
        .catch((error) => {
          if (error.response) {
            this.errorMessage = `เกิดข้อผิดพลาดจากเซิร์ฟเวอร์: ${
              error.response.data.message || error.message
            }`;
          } else if (error.request) {
            this.errorMessage = "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้";
          } else {
            this.errorMessage = `เกิดข้อผิดพลาด: ${error.message}`;
          }
          this.isLoading = false;
        });
    },

    // ส่งแบบฟอร์มการสมัครงาน
    submitApplication() {
      // ตรวจสอบความถูกต้องของชื่อ-นามสกุล
      if (!this.formData.fullName) {
        this.nameError = "กรุณากรอกชื่อ-นามสกุล";
        return;
      } else {
        this.nameError = "";
      }

      // ตรวจสอบความถูกต้องของอีเมล
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(this.formData.email)) {
        this.emailError = "กรุณากรอกอีเมลที่ถูกต้อง";
        return;
      } else {
        this.emailError = "";
      }

      // ตรวจสอบความถูกต้องของเบอร์โทร
      const phonePattern = /^(0[0-9]{9})$/;
      if (!phonePattern.test(this.formData.phone)) {
        this.phoneError = "กรุณากรอกเบอร์โทรที่ถูกต้อง";
        return;
      } else {
        this.phoneError = "";
      }

      // ตรวจสอบข้อมูลอื่น ๆ ที่ต้องการ
      if (
        !this.formData.fullName ||
        !this.formData.email ||
        !this.formData.phone ||
        !this.uploadedImage
      ) {
        this.errorMessage = "กรุณากรอกข้อมูลให้ครบถ้วนและอัปโหลดบัตรประชาชน";
        return;
      }

      const formData = new FormData();
      formData.append("fullName", this.formData.fullName);
      formData.append("email", this.formData.email);
      formData.append("phone", this.formData.phone);
      formData.append("idCardDetails", this.extractedText);
      formData.append("additionalInfo", this.formData.additionalInfo);

      this.portfolioFiles.forEach((file) => {
        formData.append("workSamples", file);
      });

      this.isLoading = true;

      axios
        .post("http://localhost:5000/submit-application", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            alert("สมัครงานสำเร็จ");
            this.resetForm();
          } else {
            this.errorMessage = "ไม่สามารถสมัครงานได้";
          }
        })
        .catch((error) => {
          this.errorMessage =
            "เกิดข้อผิดพลาดในการสมัครงาน: " +
            (error.response?.data?.message || error.message);
          this.isLoading = false;
        });
    },

    resetForm() {
      this.formData = {
        fullName: "",
        email: "",
        phone: "",
        additionalInfo: "",
      };
      this.uploadedImage = null;
      this.portfolioFiles = [];
      this.extractedText = "";
    },
  },
};
</script>

<style scoped>
.form-page {
  background-color: #32b8b0;
  min-height: 100vh;
  padding: 40px;
  font-family: "Arial", sans-serif;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 2rem;
  color: #fff;
  margin-bottom: 30px;
  text-align: center;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}

.error-message {
  color: red;
  margin-top: 10px;
  font-size: 14px;
  text-align: left;
}

input:invalid,
textarea:invalid {
  border-color: red;
}

input:invalid:focus,
textarea:invalid:focus {
  outline: 2px solid red;
}

form {
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  border: 2px solid #ccc;
}

.input-group {
  margin-bottom: 20px;
  width: 100%;
}

.input-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
}

.input-group input,
.input-group textarea {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input-group input[type="file"] {
  border: none;
}

.input-group textarea {
  height: 120px;
  resize: vertical;
}

.custom-upload {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 15px;
  background-color: #ffffff;
  border: 2px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  color: #555;
  transition: all 0.3s ease;
}

.custom-upload:hover {
  background-color: #f0f0f0;
  border-color: #aaa;
}

.icon-plus {
  font-weight: bold;
  font-size: 1.2rem;
  color: #000;
}

.hidden {
  display: none;
}

.form-actions {
  text-align: center;
  margin-top: 20px;
}

.btn {
  font-size: 1.2rem;
  padding: 12px 24px;
  background: linear-gradient(45deg, #00a79d, #016299);
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
  background: linear-gradient(45deg, #016299, #00a79d);
  transform: scale(1.05);
}
</style>
