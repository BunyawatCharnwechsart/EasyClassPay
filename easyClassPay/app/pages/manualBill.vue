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
                            <input type="number" class="h-15 w-60 rounded-xl border-2 border-solid border-[#159448] placeholder:text-center text-center" placeholder="กรุณาใส่ยอดเงิน">
                        </div>

                        <div>
                            
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


</script>