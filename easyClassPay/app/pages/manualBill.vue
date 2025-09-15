<template>
    <div class="font-Bai-Jamjuree select-none">

        <navbar />

        <div class="m-10">
            <div class="flex gap-3 items-baseline">
                <h1 class="text-3xl font-bold">สร้างบิลเก็บตังค์</h1>
                <p class="text-xl">ไม่ต้องคิดเยอะเดี๋ยวพี่หมีช่วยเก็บในนะค้าบบ </p>
            </div>

            <div class="flex justify-between mt-5 gap-4">
                <div class="flex flex-col gap-4 w-2/3">

                    <!-- ที่กรอกชื่อกับยอดบิล -->
                    <div class="bg-white shadow-xl">
                        <div class="bg-[#FFC93F] h-12 rounded-b-full"></div>
                        <div class="flex justify-between p-10">

                            <div class="flex gap-5 items-center">
                                <label class="text-2xl font-black" for="name">ชื่อบิล</label>
                                <input class="h-15 w-60 rounded-xl border-2 border-solid border-[#159448] placeholder:text-center text-center" type="text" placeholder="ตั้งชื่อบิลให้พี่หมีหน่อยย">
                            </div>

                        </div>
                    </div>

                     <!-- รายการที่ต้องการเก็บ -->
                    <div class="flex flex-col bg-white shadow-2xl p-9 rounded-xl gap-5 h-160">
                        <h1 class="text-3xl font-bold">รายการที่ต้องการเก็บ</h1>

                        <!-- ยอดบิล -->
                        <div class="flex gap-5 items-center"> 
                            <h1 class="text-xl font-bold">ยอดบิล</h1>
                            <!-- ผลรวมของยอดบิลทั้งหมด -->
                            <div  class="h-15 w-60 rounded-xl border-2 border-solid border-[#159448] placeholder:text-center text-center"></div>
                        </div>

                        <!-- รับข้อมูลจากบิลที่สร้าง -->
                        <div>
                            
                        </div>

                        <!-- เพิ่มบิล -->
                        <div class="flex justify-center">
                            <!-- ปุ่มเพิ่มรายการ -->
                            <button 
                                class="flex items-center justify-center cursor-pointer bg-white border-2 border-[#ffb700] text-[#ffb700] h-15 w-full hover:bg-[#ffb700] hover:text-white transition-colors duration-300" 
                                onclick="my_modal_3.showModal()">เพิ่มรายการ
                            </button>
                            <!-- เนื้อหาข้างใน -->
                            <dialog id="my_modal_3" class="modal">
                                <div class="modal-box bg-white select-none rounded-2xl p-0 h-auto w-100">

                                    <div class="flex bg-[#FFC93F] h-15">
                                        <!-- ปุ่มปิด -->
                                        <form method="dialog" class="flex ml-5">
                                            <p class="flex items-center text-2xl font-bold">เพิ่มรายการ</p>
                                            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-3">✕</button>
                                        </form>
                                        
                                    </div>

                                    <div class="flex flex-col m-5 gap-4">
                                        <!-- กรอกชื่อ -->
                                        <div class="flex flex-col w-full gap-2">
                                            <p class="text-xl">ชื่อรายการ</p>
                                            <input type="text" class="p-1 w-full h-8 border-3 border-[#FFC93F]">
                                        </div>

                                        <!-- กรอกจำนวนเงิน -->
                                        <div class="flex flex-col w-full gap-2">
                                            <div class="flex">
                                                <p class="text-xl">จำนวนที่ต้องการเก็บ</p>
                                                <p class="text-xl text-red-600">(ต่อคน)</p>
                                            </div>
                                            <input type="number" class="p-1 w-full h-8 border-3 border-[#FFC93F]">
                                        </div>

                                        <div class="flex flex-col gap-2">
                                            <p class="text-xl">เลือกเพื่อนที่ต้องการเก็บ</p>
                                            <!-- ค้นหา -->
                                            <ModelSearch/>

                                            <!-- รายชื่อเพื่อน -->
                                            <div class="flex items-center justify-center h-50">
                                                <p>ยังไม่มี</p>
                                            </div>
                                        </div>

                                        <p>รวมทั้งหมด : .... บาท</p>

                                        <!-- ปุ่มบันทึก -->
                                        <div class="flex justify-center">
                                            <button type="submit" 
                                                class="flex justify-center items-center cursor-pointer text-white bg-[#159448] p-2 w-25 h-12 rounded-sm">
                                                บันทึก
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                    
                </div>

                <!-- จ่ายตัง -->
                <payMent/>

            </div>
        </div>

        <!-- footer -->
        <about />
        
    </div>
</template>


<script setup>
import navbar from '~/components/navbar.vue';
import about from '~/components/about.vue';
import payMent from '~/components/payMent.vue';
import ModelSearch from '~/components/ModelSearch.vue';


</script>