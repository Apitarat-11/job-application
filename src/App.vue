<template>
  <div>
    <div class="tabs bg-base-200 p-4 shadow">
      <router-link to="/" class="btn btn-ghost text-3xl mr-6">หน้าหลัก</router-link>
      <router-link to="/about" class="btn btn-ghost text-3xl mr-6">เกี่ยวกับ</router-link>
      <router-link to="/contact" class="company-btn btn btn-ghost text-3xl mr-6">ติดต่อเรา</router-link>
      <img src="@/assets/image/logo.png" alt="Company Logo" class="logo" />
    </div>
    <router-view />
    </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.tabs {
  display: flex;
  justify-content: flex-end;
  align-items: center; 
  margin-bottom: 1px;  
}

.btn {
  font-size: 1.2rem; 
  margin-right: 1.5rem; 
}


.logo {
  float: left;
  width: 50px;
  height: auto;
}

.company-btn {
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

.company-btn:hover {
  color: #ffffff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  background: linear-gradient(45deg, #016299, #00A79D );
  transform: scale(1.05); 
}

.company-btn:active {
  transform: scale(1.05);
  filter: brightness(90%);
};

.company-btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
}
</style>
