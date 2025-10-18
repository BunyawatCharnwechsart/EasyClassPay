<template>
    <div class="select-none grid grid-cols-3 gap-6 justify-between p-6">
        <!-- bill card -->
        <div
            v-for="(bill) in billData"
            :key="bill.billid"
            class="relative w-full sm:w-80 h-96 rounded-3xl shadow-2xl overflow-hidden bg-[url('/bill1.png')] group bg-cover bg-center"
        >
            <div
                class="absolute bottom-0 w-full bg-white rounded-t-3xl p-4 
                h-[160px] group-hover:h-90
                transition-all duration-500 ease-in-out 
                flex flex-col"
            >
                <!-- ส่วนหัว -->
                <div>
                    <div class="flex items-center justify-between z-10">
                        <h1 class="text-lg font-bold">{{ bill.title }}</h1>
                        <span class="text-green-600 font-bold text-lg">{{ bill.amount }} ฿</span>
                    </div>

                    <div class="group flex flex-col gap-1">
                        <div
                            class="order-1 transition-all duration-200 ease-in-out group-hover:order-2 text-[#4a4a4a]"
                        >
                            จำนวนสมาชิก {{ userData?.length || 0 }}
                        </div>

                        <div
                            class="order-2 group-hover:order-1 transition-all duration-700 ease-in-out"
                        >
                            <div
                                class="flex items-center gap-2 transition-all duration-700 ease-in-out"
                            >
                                <span
                                    class="text-[#4a4a4a] transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                                >
                                    สถานะ
                                </span>
                                <span
                                    class="bg-red-500 text-white text-xs px-2 py-0.5 rounded-xl
                                    transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:-ml-14"
                                >
                                    {{ bill.pstatus }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="opacity-0 group-hover:opacity-100 transition-all duration-1000 mt-1 flex-grow overflow-y-auto"
                >
                    <div
                        v-for="(users, index) in userData"
                        :key="index"
                        class="flex justify-between items-center border-b py-2"
                    >
                        <div class="flex items-center gap-2">
                            <div
                                class="w-8 h-8 rounded-full border flex items-center justify-center overflow-hidden"
                            >
                                <img src="/profile.png" alt="Profile" class="w-full h-full object-cover" />
                            </div>
                            <div class="flex flex-col text-sm">
                                <span
                                    >{{ users.username
                                    }}<span class="text-green-500 text-xl"> ●</span></span
                                >
                                <span class="text-gray-400">{{ users.email }}</span>
                            </div>
                        </div>
                        <span class="text-green-600"
                            >{{ (bill.amount / (userData?.length || 1)).toFixed(2) }} ฿</span
                        >
                    </div>
                </div>

                <div class="flex justify-end gap-2 mt-2">
                    <button
                        @click="deleteBill(bill.billid)"
                        class="btn border border-red-500 bg-red-500 text-white hover:bg-red-800 rounded-xl 
                        px-4 py-2 
                        w-24 group-hover:w-28 
                        transition-all duration-500 ease-in-out"
                    >
                        ลบ
                    </button>

                    <button
                        class="btn border border-green-500 bg-green-500 text-white hover:bg-green-600 rounded-xl 
                        px-4 py-2 
                        w-24 group-hover:w-28 
                        transition-all duration-500 ease-in-out"
                    >
                        จ่ายเงิน
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useFetch } from '#app' 

const props = defineProps({
    endpoint: {
        type: String,
        required: true,
    },
})

const { data: billData, error: billErr, status: billStatus, refresh } = await useFetch(
    `http://localhost:3005${props.endpoint}`
)
const { data: userData, error: usersErr } = await useFetch('http://localhost:3005/api/users')

const deleteBill = async (billid) => {
    if (!confirm('แน่ใจนะว่าจะลบบิลนี้?')) return

    try {
        const res = await fetch(`http://localhost:3005/api/bill/${billid}`, {
            method: 'DELETE',
        })
        const data = await res.json()

        if (res.ok) {
            alert(data.message)
            refresh()
        } else {
            alert(data.message || 'เกิดข้อผิดพลาดในการลบ')
        }
    } catch (err) {
        console.error(err)
        alert('เกิดข้อผิดพลาดฝั่งเซิร์ฟเวอร์')
    }
}
</script>
