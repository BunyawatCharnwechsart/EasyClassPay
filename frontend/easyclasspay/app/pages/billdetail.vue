<template>
    <div class="font-Bai-Jamjuree select-none">

        <navbar/>
        
        <div class="max-w-6xl mx-auto mt-6 p-6 bg-white rounded-2xl shadow-xl border border-blue-200">
        <!-- ส่วนหัวเรียงในบรรทัดเดียว -->
            <div class="flex items-center gap-4 mb-6">
                <!-- ปุ่มย้อนกลับ -->
                <button class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                    <div class="flex items-center justify-center w-7 h-7">
                        <img src="/back-btn.png" alt="ย้อนกลับ" class="w-4 h-4" />
                    </div>
                    <span class="text-sm font-medium text-gray-700">ย้อนกลับ</span>
                </button>

                <div class="flex items-baseline gap-3">
                <h2 class="text-2xl font-bold">รายละเอียดบิล</h2>
                <p class="text-gray-500 text-sm">ที่นี่จะแสดงข้อมูลและรายละเอียดทั้งหมด</p>
                </div>

            </div>

        </div>

    </div>

</template>
<script>
import navbar from '../components/navbar.vue';
</script>