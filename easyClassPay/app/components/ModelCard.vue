<template>
    <div class="font-Bai-Jamjuree select-none grid grid-cols-3 gap-4 justify-between p-6">
     <!--bill 1-->
     <!-- card -->
        <div class="w-full sm:w-80 h-90 bg-[url('/bill1.png')] rounded-3xl shadow-2xl overflow-hidden flex flex-col bg-center bg-no-repeat bg-cover">

            <div class="bg-white rounded-3xl p-2 flex flex-col justify-between relative mt-auto">

                <div class="flex items-center justify-between">
                    <h1 class="card-title">ค่าเช่าสนามฟุตบอล</h1>
                    <span class="text-green-600 font-bold text-lg">2500 ฿</span>
                </div>
                <p class="text-[#4A4A4A]">จำนวนคนที่อยู่ในบิล 14 คน</p>

                <div class="text-[#4a4a4a]">
                    <div class="flex gap-1.5">
                    <span>สถานะ</span>
                    <span class="ml-2 bg-[#FB1010] text-white rounded-xl px-1 py-0.5 text-sm">ยังไม่จ่าย</span>
                    </div>
 
                </div>

                <button class="btn border border-green-500 bg-green-500 text-white hover:bg-green-600 rounded-xl px-4 py-2 self-end">จ่ายเงิน</button> 

            </div>
        </div>
        
    </div>

</template>

