<template>
    <div class="navbar bg-[#FFC636] px-10 py-3 items-center justify-between">
        <!-- โลโก้ -->
        <div class="flex gap-10">
            <img src="/LOGO.png">
            <nuxt-link class="flex items-center text-2xl ml-7 font-semibold" to="/main">EasyClassPay</nuxt-link>
        </div>

        <!-- เมนู -->
        <ul class="menu menu-horizontal gap-10 mr-auto ml-30">
            <li>
                <nuxt-link class="font-bold text-xl relative group" to="/createBill">
                    สร้างบิลเก็บตังค์
                <span class="absolute left-0 -bottom-1 w-0 h-[4px] bg-black rounded-full transition-all duration-300 group-hover:w-full"></span>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link class="font-bold text-xl relative group" to="/manualBill">
                    พิมพ์รายการเอง
                <span class="absolute left-0 -bottom-1 w-0 h-[4px] bg-black rounded-full transition-all duration-300 group-hover:w-full"></span>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link class="font-bold text-xl relative group" to="/monthBill">
                    บิลแบบรายเดือน
                <span class="absolute left-0 -bottom-1 w-0 h-[4px] bg-black rounded-full transition-all duration-300 group-hover:w-full"></span>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link class="font-bold text-xl relative group" to="/allBill">
                บิลทั้งหมด
                <span class="absolute left-0 -bottom-1 w-0 h-[4px] bg-black rounded-full transition-all duration-300 group-hover:w-full"></span>
                </nuxt-link>
            </li>
        </ul>

        <!-- ไอคอนขวา -->
        <div class="flex gap-10 items-center">
            <img class="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-300" src="/bell.png" onclick="my_modal_1.showModal()">
            <img class="w-10 h-10 rounded-full cursor-pointer hover:scale-105 transition-transform duration-300" src="/testProfile.png">
        </div>

        <dialog id="my_modal_1" class="modal">
            <div class="bg-black text-white p-10">
                <h3 class="text-lg font-bold">Hello!</h3>
                <p class="py-4">Press ESC key or click the button below to close</p>
                <div class="modal-action">
                <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn bg-amber-50 text-black">Close</button>
                </form>
                </div>
            </div>
        </dialog>
    </div>
</template>
