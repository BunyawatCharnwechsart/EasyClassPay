<template>
    <div class="select-none grid grid-cols-3 gap-6 justify-between p-6">
        <!-- bill 1-->
        <div
            class="relative w-full sm:w-80 h-96 rounded-3xl shadow-2xl overflow-hidden bg-[url('/bill1.png')] group bg-cover bg-center">
            <!-- กล่องที่ขยาย -->
            <div class="absolute bottom-0 w-full bg-white rounded-t-3xl p-4 
                h-[160px] group-hover:h-90
                transition-all duration-500 ease-in-out 
                flex flex-col">
                <!-- ส่วนหัว -->
                <div>
                    <div class="flex items-center justify-between z-10">
                        <h1 class="text-lg font-bold">ค่าเช่าสนามฟุตบอล</h1>
                        <span class="text-green-600 font-bold text-lg">2500 ฿</span>
                    </div>
                    <div class="group flex flex-col gap-1">
                        <div class="order-1 transition-all duration-200 ease-in-out group-hover:order-2 text-[#4a4a4a]">
                            จำนวนสมาชิก 14 คน
                        </div>
                        <div class="order-2 group-hover:order-1 transition-all duration-700 ease-in-out">
                            <div class="flex items-center gap-2 transition-all duration-700 ease-in-out ">
                                <span
                                    class="text-[#4a4a4a] transition-opacity duration-700 ease-in-out group-hover:opacity-0">
                                    สถานะ
                                </span>
                                <span class="bg-red-500 text-white text-xs px-2 py-0.5 rounded-xl
                        transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:-ml-14">
                                    ยังไม่ได้จ่าย
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- เนื้อหาที่โชว์เพิ่มตอน hover -->
                <div
                    class="opacity-0 group-hover:opacity-100 transition-all duration-1000 mt-1 flex-grow overflow-y-auto">
                    <!-- รายการผู้เข้าร่วม -->
                    <div class="flex justify-between items-center border-b py-2">
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 rounded-full border flex items-center justify-center overflow-hidden">
                                <img src="/profile.png" alt="Profile" class="w-full h-full object-cover" />
                            </div>
                            <div class="flex flex-col text-sm">
                                <span>พี่หมี<span class="text-green-500 text-xl"> ●</span></span>
                                <span class="text-gray-400">พี่หมี@gmail.com</span>
                            </div>
                        </div>
                        <span class="text-green-600">150 ฿</span>
                    </div>
                    <div class="flex justify-between items-center border-b py-2">
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 rounded-full border flex items-center justify-center overflow-hidden">
                                <img src="/profile.png" alt="Profile" class="w-full h-full object-cover" />
                            </div>
                            <div class="flex flex-col text-sm">
                                <span>พี่หมี<span class="text-red-500 text-xl"> ●</span></span>
                                <span class="text-gray-400">พี่หมี@gmail.com</span>
                            </div>
                        </div>
                        <span class="text-green-600">150 ฿</span>
                    </div>
                    <div class="flex justify-between items-center border-b py-2">
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 rounded-full border flex items-center justify-center overflow-hidden">
                                <img src="/profile.png" alt="Profile" class="w-full h-full object-cover" />
                            </div>
                            <div class="flex flex-col text-sm">
                                <span>พี่หมี <span class="text-red-500 text-xl"> ●</span></span>
                                <span class="text-gray-400">พี่หมี@gmail.com</span>
                            </div>
                        </div>
                        <span class="text-green-600">150 ฿</span>
                    </div>
                </div>
                <!-- ปุ่มจ่ายเงิน -->
                <button class="btn border border-green-500 bg-green-500 text-white hover:bg-green-600 rounded-xl 
                px-4 py-2 mt-0 
                w-24 group-hover:w-40 
                transition-all duration-500 ease-in-out self-end"
                >
                    จ่ายเงิน
                </button>
            </div>
        </div>
    </div>
</template>