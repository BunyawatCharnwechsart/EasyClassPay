<template>
                <!-- จ่ายเงิน -->
                <div class="bg-white shadow-2xl w-1/3 rounded-2xl flex flex-col">
                    <!-- หัวข้อ -->
                    <div class="flex bg-[#FFBC12] p-8 justify-center shadow-xl rounded-2xl mb-5">
                        <h1 class="text-2xl font-bold">เลือกวิธีชำระเงิน</h1>
                    </div>
                    <!-- เลือก tab-->
                    <div class="flex w-full">
                        <!-- ธนาคาร -->
                        <button @click="activeTab = 'bank'" 
                            :class="[
                                'flex-1 p-4 font-Bai-Jamjuree font-bold text-2xl cursor-pointer hover:text-green-600', 
                                activeTab === 'bank' ? ' text-green-600' : ' text-gray-700'
                            ]"
                        >ธนาคาร
                        </button>
                        <!-- พร้อมเพย์ -->
                        <button @click="activeTab = 'prompay'"
                            :class="[
                                'flex-1 p-4 font-Bai-Jamjuree font-bold text-2xl cursor-pointer hover:text-green-600',
                                activeTab === 'prompay' ? ' text-green-600' : 'text-gray-700'
                            ]"
                        >พร้อมเพย์
                        </button>
                    </div>
                    <!-- Tab bank -->
                    <section v-if="activeTab === 'bank'" class="w-full flex justify-center">
                        <!-- drop down -->
                        <div>

                        </div>
                        <!-- Input bank -->
                        <form action="" class="flex flex-col">
                            <span>ชื่อบัญชี</span>
                            <input type="text" placeholder="dsada">
                            <span>เลขบัญชี</span>
                            in
                        </form>
                    </section>
                    <!-- Tab prompay -->
                    <section v-if="activeTab === 'prompay'" class="w-full">
                        <h1>prompay</h1>
                    </section>
                </div>

</template>

<script setup>
import { ref } from "vue";

const activeTab = ref("bank","prompay");
</script>