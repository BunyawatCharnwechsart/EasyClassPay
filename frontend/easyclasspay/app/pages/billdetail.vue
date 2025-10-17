<template>
    <div class="font-Bai-Jamjuree select-none">

        <navbar />

        <div class="flex flex-col m-10 p-2">
            <!-- ส่วนหัวเรียงในบรรทัดเดียว -->
                <div class="flex items-center gap-4 mb-6">
                    <!-- ปุ่มย้อนกลับ -->
                    <router-link
                        to="/allBill"
                            class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                            <div class="flex items-center justify-center w-7 h-7">
                                <img src="/back-btn.png" alt="ย้อนกลับ" class="w-4 h-4" />
                            </div>
                            <span class="text-sm font-medium text-gray-700">ย้อนกลับ</span>
                    </router-link>

                    <div class="flex items-baseline gap-3">
                    <h2 class="text-2xl font-bold">รายละเอียดบิล</h2>
                    <p class="text-gray-500 text-sm">ที่นี่จะแสดงข้อมูลและรายละเอียดทั้งหมด</p>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow p-8 pr-10 pl-10">
                    
                        <div class="flex flex-col gap-4 mt-2 text-sm">
                        <span class="flex items-center gap-1 text-green-600">
                            <span class="w-3 h-3 rounded-full bg-green-600 inline-block"></span> จ่ายแล้ว
                        </span>
                        <span class="flex items-center gap-1 text-gray-400">
                            <span class="w-3 h-3 rounded-full bg-gray-300 inline-block"></span> ยังไม่ได้จ่าย
                        </span>
                    
                        </div>
                        
                        
                        <div class="flex flex-col items-center">

                            <h1 class="text-2xl font-bold mb-8 flex flex-col items-center">ค่าอาหาร</h1>

                            <div class="relative w-32 h-32 mx-auto">
                                <div class="w-32 h-32 rounded-full border-8 border-gray-100">

                                </div>

                                <div
                                    class="absolute top-0 left-0 w-32 h-32 rounded-full border-8 border-green-600"
                                    style="clip: rect(0px, 128px, 128px, 64px); transform: rotate(45deg)">
                                </div>

                            </div>
                        </div>

                    
                    <div class="grid grid-cols-2 gap-8 mt-10 border-t-2 border-b-2 border-gray-200 p-4 pt-6 pb-6">
                        <div class="p-2 pl-5">
                            <h3 class="font-bold mb-2">รายละเอียด</h3>
                            <p class="font-bold">สร้างโดย: <span class="font-medium">@mon007</span></p>
                            <p class="font-bold">วันที่สร้างบิล: <span class="text-green-600">01/01/2024</span></p>
                            <p class="font-bold">จำนวนเงินที่ต้องจ่ายต่อคน: <span class="text-green-600">300 ฿</span></p>
                        </div>

                        <div class="p-2 pl-5">
                            <h3 class="font-bold mb-4">รายละเอียดการชำระ</h3>
                            <p class="font-bold">ชื่อบัญชี: <span class="font-medium text-gray-500">นายบุณยวัจน์ ชาญเวชศาสตร์</span></p>
                            <p class="font-bold">เลขบัญชีผู้รับเงิน: <span class="font-medium text-gray-500">5555XXXXXX</span></p>
                        </div>
                    </div>

                        <h1 class="font-bold mb-2 mt-8 flex flex-col items-center text-2xl">รายชื่อผู้ใช้ที่ต้องชำระ</h1>
                    
                    <!--รายการสมาชิก-->
                    <div class="grid grid-cols-2 mt-8 px-8 mb-4">
                        <!-- ยังไม่ได้จ่าย -->
                        <div class="p-6 pr-10 border-r-1 border-gray-200">
                            <h1 class="font-bold mb-6 text-2xl">ยังไม่ได้จ่าย</h1>
                            <div class="space-y-3">
                            <div v-for="i in 4" :key="'notPaid' + i" class="flex items-center justify-between border-b pb-2">
                                <div class="flex items-center gap-10">
                                <img src="/wrong.png" class="w-7 h-7 flex items-center justify-center rounded-full"/>
                                <img src="/profile.png" alt="profile" class="w-10 h-10 rounded-full object-cover border border-gray-300"/>
                                <div class="flex flex-col">
                                    <span>พี่หมี</span>
                                    <span class="text-gray-400 text-sm">พี่หมี@gmail.com</span>
                                </div>
                                </div>
                                <span class="text-red-600 font-bold">300 ฿</span>
                            </div>
                            </div>
                        </div>

                        <!-- จ่ายแล้ว -->
                        <div class="p-6 pl-10 border-l-1 border-gray-200">
                            <h1 class="font-bold mb-6 text-2xl">จ่ายแล้ว</h1>
                            <div class="space-y-3">
                            <div v-for="i in 4" :key="'paid' + i" class="flex items-center justify-between border-b pb-2">
                                <div class="flex items-center gap-10">
                                <img src="/correct.png" class="w-8 h-8 flex items-center justify-center rounded-full"/>
                                <img src="/profile.png" alt="profile" class="w-10 h-10 rounded-full object-cover border border-gray-300"/>
                                <div class="flex flex-col">
                                    <span>พีหมี</span>
                                    <span class="text-gray-400 text-sm">พี่หมี@gmail.com</span>
                                </div>
                                </div>
                                <span class="text-green-600 font-bold">300 ฿</span>
                            </div>
                            </div>
                        </div>
                    </div>   

                </div>

            </div>

        

        <about />

    </div>

</template>
<script>
import navbar from '../components/navbar.vue';
import about from '~/components/about.vue'
</script>