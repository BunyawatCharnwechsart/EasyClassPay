<template>
    <div class="font-Bai-Jamjuree select-none">
        <navbar/>

        <form class="flex flex-col bg-white m-10 p-9 rounded-2xl ring ring-yellow-200 col-auto">
            <div class="mt-2">

                <div class="flex gap-3 items-baseline mb-6">

                    <router-link
                    to="/createBill"
                        class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                        <div class="flex items-center justify-center w-7 h-7">
                            <img src="/back-btn.png" alt="ย้อนกลับ" class="w-4 h-4" />
                        </div>
                        <span class="text-sm font-medium text-gray-700">ย้อนกลับ</span>
                    </router-link>

                        <h1 class="text-3xl font-bold">สร้างบิลเก็บตังค์</h1>
                        <p class="text-xl">ไม่ต้องคิดเยอะเดี๋ยวพี่หมีช่วยเก็บในนะค้าบบ </p>

                </div>

                <div class="flex justify-between mt-5 gap-4">
                    <div class="flex flex-col gap-4 w-2/3">

                        <!-- ที่กรอกชื่อกับยอดบิล -->
                        <div class="bg-white shadow-xl rounded-b-2xl">
                            <div class="bg-[#FFC93F] h-12 rounded-b-full"></div>
                            <div class="flex justify-between p-10">

                                <div class="flex gap-5 items-center">
                                    <label class="text-2xl font-black" for="name">ชื่อบิล</label>
                                    <input 
                                        class="h-15 w-60 rounded-xl border-2 border-solid border-[#159448] text-start text-xl pl-3" 
                                        type="text" 
                                        value="พี่หมีเก็บตังค์"
                                    >
                                </div>

                                <div class="flex gap-5 items-center">
                                    <label class="text-2xl font-bold" for="total">ยอดบิล</label>
                                    <input class="h-15 w-60 rounded-xl border-2 border-solid border-[#159448] placeholder:text-center text-center" 
                                        type="number" 
                                        placeholder="กรุณาใส่ยอดเงิน">
                                </div>

                            </div>
                        </div>

                        <!-- list ชื่อเพื่อนที่อยู่ในบิล -->
                        <div class="bg-white shadow-2xl p-5 rounded-xl h-200">   
                            <!-- หัวข้อ -->
                            <div class="flex justify-between items-center">
                                <h1 class="text-2xl font-semibold">รายชื่อคนที่อยู่ในบิล</h1>
                                <button class=" flex items-center cursor-pointer bg-[#FFBC12] w-30 h-10 justify-center rounded-xl" onclick="my_modal_3.showModal()"><img class="w-5 h-5 mr-1" src="/plus.png">เพิ่มเพื่อน</button>

                                    <!-- Model ของเพิ่มเพื่อนลงในบิล -->
                                    <dialog id="my_modal_3" class="modal">
                                        <div class="modal-box bg-white select-none rounded-2xl font-Bai-Jamjuree">
                                            <form method="dialog">
                                            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                            <div class="flex flex-col gap-4">
                                                <div class="flex items-baseline-last gap-2">
                                                    <h3 class="text-xl font-bold">เพิ่มเพื่อนลงในบิล</h3>
                                                    <h2>ใครต้องจ่ายบ้าง</h2>
                                                </div>
                                                
                                                <!-- ค้นหา -->
                                                <ModelSearch/>

                                                <!-- รายชื่อเพื่อนของฉันที่เพิ่มได้ -->
                                                <div class="flex justify-center items-center h-50">
                                                    <p>ยังไม่มี</p>
                                                </div>
                                            </div>
                                        </div>
                                    </dialog>
                            </div>

                            <!-- แสดงชื่อ -->
                            <div class="h-150">
                                <div class="mt-4 p-4 rounded-t-lg bg-[#EBEBEB]">
                                    <label for="list-name" class="ml-1 text-xl">ชื่อ / อีเมล</label>
                                </div>

                                <!-- ใส่รายชื่อ -->
                                <div class="bg-white rounded-xl shadow-md p-4">
                                    <!-- รายชื่อ 1 -->
                                    <div class="flex items-center justify-between border-b border-gray-200 py-3">
                                        <div class="flex items-center gap-3">
                                            <!-- รูปโปรไฟล์ -->
                                            <img src="/profile.png" alt="profile" class="w-10 h-10 rounded-full object-cover border border-gray-300" />
                                            <!-- ชื่อและอีเมล -->
                                            <div class="flex flex-col leading-tight">
                                                <span class="font-bold text-gray-900">พี่หมี</span>
                                                <span class="text-sm text-gray-500">พี่หมี@gmail.com</span>
                                            </div>
                                        </div>

                                            <button class="hover:text-red-500 transition">
                                            <img src="/bin.png" alt="delete" class="w-5 h-5" />
                                            </button>
                                    </div>

                                    <!-- รายชื่อ 2 -->
                                    <div class="flex items-center justify-between border-b border-gray-200 py-3">
                                        <div class="flex items-center gap-3">
                                            <img src="/profile.png" alt="profile" class="w-10 h-10 rounded-full object-cover border border-gray-300" />
                                            <div class="flex flex-col leading-tight">
                                                <span class="font-bold text-gray-900">พี่หมี</span>
                                                <span class="text-sm text-gray-500">พี่หมี@gmail.com</span>
                                            </div>
                                        </div>

                                            <button class="hover:text-red-500 transition">
                                            <img src="/bin.png" alt="delete" class="w-5 h-5" />

                                            </button>
                                    </div>

                                    <!-- รายชื่อ 3 -->
                                    <div class="flex items-center justify-between border-b border-gray-200 py-3">
                                        <div class="flex items-center gap-3">
                                            <img src="/profile.png" alt="profile" class="w-10 h-10 rounded-full object-cover border border-gray-300" />
                                            <div class="flex flex-col leading-tight">
                                                <span class="font-bold text-gray-900">พี่หมี</span>
                                                <span class="text-sm text-gray-500">พี่หมี@gmail.com</span>
                                            </div>
                                        </div>

                                            <button class="hover:text-red-500 transition">
                                            <img src="/bin.png" alt="delete" class="w-5 h-5" />
                                            
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- จ่ายตัง -->
                    <div class="flex flex-col gap-4 w-1/3">
                        <div class="bg-white shadow-2xl rounded-2xl flex flex-col h-220">
                        <!-- หัวข้อ -->
                            <div class="flex text-3xl font-bold justify-center p-9 bg-[#FFC93F] rounded-2xl">
                            วิธีชำระเงิน
                            </div>

                            <div class="mt-8">
                                <div class="flex items-center justify-center h-full gap-3 mx-6 my-4 px-4 py-3 rounded-2xl bg-white border border-gray-200 shadow-sm">
                                    <img src="/kasikon.png" alt="bank icon" class="w-10 h-10 rounded-full border border-red-300 object-cover object-center">
                                    <span class="text-2xl text-gray-800 font-medium">ธนาคารกสิกรไทย</span>
                                </div>
                            </div>
                            
                        </div>

                        

                        <div class="flex mt-auto justify-center">
                            <router-link
                            to=""
                                type="submit"
                                class="bg-[#159448] hover:bg-[#11783a] py-4 rounded-xl text-white text-2xl font-bold flex justify-center items-center gap-3 shadow-lg transition w-[100%]">
                                เสร็จสิ้น
                            </router-link>
                        </div>

                    </div>
                </div>

            </div>
            

        </form>

        <about /> 
    </div>
</template>
<script>
import navbar from '~/components/navbar.vue';
import about from '~/components/about.vue';
import ModelSearch from '~/components/ModelSearch.vue';
</script>