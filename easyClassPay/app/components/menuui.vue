<template>
  <div class="menu-ui">
    <div class="menu-item" v-for="(item, index) in menuItems" :key="index" :style="{ backgroundColor: item.bgColor }">
        <div class="items">
            <img :src="item.img" :alt="item.title">
            <div class="title">
                <h1>{{ item.title }}</h1>
                <p v-html="item.desc"></p>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
const menuItems = [
  {
    img: '/kaptang.png',
    title: 'สร้างบิลเก็บตังค์',
    desc: 'ไม่ต้องคิดเยอะเดี๋ยวพี่หมี <br> ช่วยเก็บในนะค้าบบ',
    bgColor: '#FFC93F'
  },
  {
    img: '/createbill.png',
    title: 'พิมพ์รายการเอง',
    desc: 'จะเก็บเท่าไหร่ <br> ใส่เองได้หมดเลยค้าบบ <br> พี่หมีเก่งอยู่แล้ว',
    bgColor: '#FFBC12'
  },
  {
    img: '/billM.png',
    title: 'บิลแบบรายเดือน',
    desc: 'ตั้งครั้งเดียวพี่หมีแจ้งเองตรง <br> เวลาเป๊ะๆ',
    bgColor: '#FFC93F'
  }
]
</script>

<style>
.menu-ui {
  display: flex;
  cursor: pointer;
  height: 60vh;
}

.menu-item {
  flex: 1;
}

.items {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  text-align: center;
}

.items img {
  width: 120px;
  height: 120px;
  object-fit: contain;
}

.items .title h1 {
  font-size: 36px;
  margin: 0;
}

.items .title p {
  font-size: 24px;
  color: #333;
  padding-top: 10px;
  margin: 0;
}
</style>
