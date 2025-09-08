<template>
    <div class="flex pl-8 p-3 gap-8 bg-[#FFC636] items-center">
        <!-- ส่วนโลโก้ -->
        <div class="flex gap-7">
            <img src="/LOGO.png">
            <nuxt-link class="flex items-center text-2xl font-bold" to="/main">EasyClassPay</nuxt-link>
        </div>
        <!--เมนู-->
        <div class="flex gap-10">
            <nuxt-link class="font-bold" to="/createBill">สร้างบิลเก็บตังค์</nuxt-link>
            <nuxt-link class="font-bold" to="/manualBill">พิมพ์รายการเอง</nuxt-link>
            <nuxt-link class="font-bold" to="/monthBill">บิลแบบรายเดือน</nuxt-link>
            <nuxt-link class="font-bold" to="allBill">บิลทั้งหมด</nuxt-link>
        </div>
        <!--กระดิ่งและโปรไฟล์-->
        <div class="flex ml-auto gap-8">
            <img class="flex self-center w-8 h-8" src="/bell.png">
            <img src="/testProfile.png">
        </div>
    </div>
</template>
