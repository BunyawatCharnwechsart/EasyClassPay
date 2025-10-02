<template>
    <div class="navbar bg-[#FFC636] px-10 py-3 items-center justify-between select-none">
        <!-- โลโก้ -->
        <div class="flex gap-10">
            <img src="/LOGO.png">
            <nuxt-link class="flex items-center text-2xl  ml-7 font-bold" to="/main">EasyClassPay</nuxt-link>
        </div>

        <!-- เมนู span=hover -->
        <ul class="menu menu-horizontal gap-10 mr-auto ml-30">
            <li>
                <nuxt-link class="font-bold text-xl relative group hover:scale-110 transition-transform duration-300" to="/createBill">
                    สร้างบิลเก็บตังค์
                <span class="absolute left-0 -bottom-1 w-0 h-[4px] bg-black rounded-full transition-all duration-300 group-hover:w-full"></span>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link class="font-bold text-xl relative group hover:scale-110 transition-transform duration-300" to="/manualBill">
                    พิมพ์รายการเอง
                <span class="absolute left-0 -bottom-1 w-0 h-[4px] bg-black rounded-full transition-all duration-300 group-hover:w-full"></span>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link class="font-bold text-xl relative group hover:scale-110 transition-transform duration-300" to="/monthBill">
                    บิลแบบรายเดือน
                <span class="absolute left-0 -bottom-1 w-0 h-[4px] bg-black rounded-full transition-all duration-300 group-hover:w-full"></span>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link class="font-bold text-xl relative group hover:scale-110 transition-transform duration-300" to="/allBill">
                บิลทั้งหมด
                <span class="absolute left-0 -bottom-1 w-0 h-[4px] bg-black rounded-full transition-all duration-300 group-hover:w-full"></span>
                </nuxt-link>
            </li>
        </ul>

        <!-- ไอคอนขวา -->
        <div class="flex gap-10 items-center">

            <!-- การแจ้งเตือน -->
            <div class="dropdown dropdown-end">
            <div tabindex="0"><img class="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-100" src="/bell.png"></div>
                <section tabindex="0" class="dropdown-content menu bg-white rounded-2xl z-auto w-90 h-110 p-5 shadow-xl">
                    <div>
                        <h1 class="flex justify-center text-xl font-bold">การแจ้งเตือนทั้งหมด</h1>
                    </div>
                </section>
            </div>

            <!-- โปรไฟล์ -->
            <div class="dropdown dropdown-end">
                <div tabindex="1"><img class="w-10 h-10 rounded-full cursor-pointer hover:scale-105 transition-transform duration-100" src="/Avatar.png"></div>
                <section tabindex="1" class="dropdown-content menu bg-white rounded-2xl z-auto w-90 h-auto shadow-xl">
                    <div class="flex flex-col"> 

                        <!-- เปลี่ยนโปรไฟล์ -->
                        <div class="flex flex-col items-center gap-2 p-5">
                            <img class="w-10 h-10 hover:scale-150 transition-transform duration-500" src="/Avatar.png">
                            <h1>พี่หมี</h1>
                            <p>บุณยวัจน์ ชาญเวชศาสตร์</p>
                            <p>บุณยวัจน์@gmail.com</p>
                        </div>

                        <div class="bg-gray-400 h-0.5 w-full rounded-full"></div>

                        <!-- เพิ่มเพื่อน -->
                        <div class="flex justify-center p-5">
                            <button class="cursor-pointer flex items-center p-5 pt-2 pb-2 border-1 hover:scale-105 transition-transform duration-100"><img class="w-5 h-5" src="/Addfriend.png">เพิ่มเพื่อน</button>
                        </div>

                        <!-- ออกจากระบบ -->
                        <div class="flex justify-center mb-3">
                            <button class="cursor-pointer p-3 w-60 rounded-2xl border-2 text-red-500 border-red-500 bg-transparent hover:bg-red-500 hover:text-white hover:shadow-xl hover:shadow-red-500/50 transition-all duration-300">ออกจากระบบ</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
