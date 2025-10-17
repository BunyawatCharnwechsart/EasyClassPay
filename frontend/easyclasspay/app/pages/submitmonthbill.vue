<template>
    <div class="font-Bai-Jamjuree select-none">

        <navbar />

        <form class="flex flex-col bg-white m-10 rounded-2xl ring ring-yellow-200 col-auto">

            <div class="m-10">
                <div class="flex gap-3 items-baseline">

                    <router-link
                    to="/monthBill"
                        class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                        <div class="flex items-center justify-center w-7 h-7">
                            <img src="/back-btn.png" alt="ย้อนกลับ" class="w-4 h-4" />
                        </div>
                        <span class="text-sm font-medium text-gray-700">ย้อนกลับ</span>
                    </router-link>

                    <h1 class="text-3xl font-bold">บิลแบบรายเดือน</h1>
                    <p class="text-xl">ตั้งครั้งเดียวพี่หมีแจ้งเองตรงเวลาเป๊ะๆ </p>
                </div>

                <div class="flex justify-between mt-5 gap-4">

                    <div class="flex flex-col gap-4 w-2/3">

                        <div class="flex flex-col gap-4 w-full">
                            <!-- ที่กรอกชื่อกับยอดบิล -->
                            <div class="bg-white shadow-xl rounded-b-2xl">
                                <div class="bg-[#FFC93F] h-12 rounded-b-full"></div>
                                <div class="flex justify-between p-10">

                                    <div class="flex gap-5 items-center">
                                        <label class="text-2xl font-black" for="name">ชื่อบิล</label>
                                        <input
                                            class="h-15 w-60 rounded-xl border-2 border-solid border-[#159448] placeholder:text-center text-center"
                                            type="text" placeholder="ตั้งชื่อบิลให้พี่หมีหน่อยย">
                                    </div>

                                </div>
                            </div>

                            <!-- ส่วนของใส่วันที่และรายชื่อที่อยู่ในบิล -->
                            <div class="flex gap-5">

                                <!-- กรอกวันที่ -->
                                <section class="flex flex-col w-2/5 bg-white shadow-xl p-9 rounded-xl gap-10 h-230">

                                    <modelTime />


                                </section>

                                <!-- รายชื่อที่อยู่ในบิล -->
                                <div class="w-3/5 bg-white shadow-2xl p-6 rounded-xl">
                                    <!-- หัวข้อ + ยอดรวม (คงที่) -->
                                    <div class="mt-3 flex gap-5 items-center">
                                        <h2 class="text-2xl font-bold">ยอดบิล</h2>

                                        <div class="flex items-center p-2 pl-4 pr-4 gap-6 border rounded-xl shadow-sm bg-white border-green-600">
                                            <span class="text-l">3000</span>
                                            <span class="text-lg font-bold text-green-700">฿</span>
                                        </div>
                                    </div>

                                    <div class="grid grid-cols-2 gap-10 mt-8">
                                        <!-- สมาชิก 1 -->
                                        <div class="flex items-center justify-between p-3 border rounded-xl shadow-sm bg-white border-green-600">
                                            <div class="flex items-center gap-3">
                                                <img src="/profile.png" alt="dskik" class="w-10 h-10 rounded-full object-cover"/>
                                                <span class="text-lg font-medium">@dskik</span>
                                            </div>
                                            <div class="flex items-center justify-center w-9 h-9 rounded-md">
                                                <span class="text-xl font-bold text-green-700">฿</span>
                                            </div>
                                        </div>

                                        <!-- สมาชิก 2 -->
                                        <div class="flex items-center justify-between p-3 border rounded-xl shadow-sm bg-white border-green-600">
                                            <div class="flex items-center gap-3">
                                                <img src="/profile.png" alt="oooi" class="w-10 h-10 rounded-full object-cover" />
                                                <span class="text-lg font-medium">@oooi</span>
                                            </div>
                                            <div class="flex items-center justify-center w-9 h-9 rounded-md">
                                                <span class="text-xl font-bold text-green-700">฿</span>
                                            </div>
                                        </div>

                                        <!-- สมาชิก 3 -->
                                        <div class="flex items-center justify-between p-3 border rounded-xl shadow-sm bg-white border-green-600">
                                        <div class="flex items-center gap-3">
                                            <img src="/profile.png" alt="mais" class="w-10 h-10 rounded-full object-cover" />
                                            <span class="text-lg font-medium">@mais</span>
                                        </div>
                                        <div class="flex items-center justify-center w-9 h-9 rounded-md">
                                            <span class="text-xl font-bold text-green-700">฿</span>
                                        </div>
                                        </div>

                                        <!-- สมาชิก 4 -->
                                        <div class="flex items-center justify-between p-3 border rounded-xl shadow-sm bg-white border-green-600">
                                        <div class="flex items-center gap-3">
                                            <img src="/profile.png" alt="oue" class="w-10 h-10 rounded-full object-cover" />
                                            <span class="text-lg font-medium">@oue</span>
                                        </div>
                                        <div class="flex items-center justify-center w-9 h-9 rounded-md">
                                            <span class="text-xl font-bold text-green-700">฿</span>
                                        </div>
                                        </div>

                                        <!-- สมาชิก 5 -->
                                        <div class="flex items-center justify-between p-3 border rounded-xl shadow-sm bg-white border-green-600">
                                        <div class="flex items-center gap-3">
                                            <img src="/profile.png" alt="kkak" class="w-10 h-10 rounded-full object-cover" />
                                            <span class="text-lg font-medium">@kkak</span>
                                        </div>
                                        <div class="flex items-center justify-center w-9 h-9 rounded-md">
                                            <span class="text-xl font-bold text-green-700">฿</span>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- จ่ายตัง -->
                    <div class="flex flex-col gap-4 w-1/3">
                        <div class="bg-white shadow-2xl rounded-2xl flex flex-col h-250">
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

                        <div class="flex mt-auto justify-center w-full">
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

<script setup>
import navbar from '~/components/navbar.vue';
import about from '~/components/about.vue';
</script>