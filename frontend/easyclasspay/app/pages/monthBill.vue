<template>
<div class="font-Bai-Jamjuree select-none">
    <navbar/>

    <div class="m-10">
            <div class="flex gap-3 items-baseline">
                <h1 class="text-3xl font-bold">สร้างบิลเก็บตังค์</h1>
                <p class="text-xl">ไม่ต้องคิดเยอะเดี๋ยวพี่หมีช่วยเก็บในนะค้าบบ </p>
            </div>

            <div class="flex mt-5">
                <div class="flex flex-col gap-4 w-full">

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

                     <!-- ส่วนของใส่วันที่และรายชื่อที่อยู่ในบิล -->
                    <div class="flex gap-5">

                        <!-- กรอกวันที่ -->
                        <section class="flex flex-col w-2/5 bg-white shadow-xl p-9 rounded-xl gap-10 h-230">

                            <!-- เริ่มเก็บ,เตือนเวลา -->
                            <div class="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] p-9 rounded-xl h-70">
                                
                            </div>

                            <!-- เก็บซ้ำ -->
                            <div class="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] p-9 rounded-xl h-30">
                                
                            </div>

                            <!-- จุดสิ้นสุด -->
                            <div class="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] p-9 rounded-xl h-30">
                                
                            </div>

                            <!-- หมายเหตุ -->
                            <p class="text-red-500">หมายเหตุ : หากเดือนใดไม่มีวันที่เลือกไว้ (เช่น 29,30,31) <br> พี่หมีจะแจ้งเตือนในวันสิ้นเดือนของเดือนนั้นแทน</p>
                            
                            <button class="mt-auto cursor-pointer w-full bg-[#159448] text-white py-3 rounded-xl text-xl font-bold flex justify-center gap-5">ถัดไป <img src="/arrow-r.png"></button>

                        </section>

                        <!-- รายชื่อที่อยู่ในบิล -->
                        <section class="w-3/5 bg-white shadow-xl p-9 rounded-xl gap-5 h-230">
                            
                            <!-- listเพื่อน -->
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
                                <div>

                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>

    <about/>
</div>
</template>

<script setup>
import navbar from '~/components/navber.vue';
import about from '~/components/about.vue';
import ModelSearch from '~/components/ModelSearch.vue';
</script>