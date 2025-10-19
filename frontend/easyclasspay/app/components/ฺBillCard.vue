<template>
    <div class="select-none grid grid-cols-3 gap-6 justify-between p-6">
        <!-- bill card -->
        <div v-for="(bill) in billData" :key="bill.billid" @click="goToBillDetail(bill.billid)"
            class="relative w-full sm:w-80 h-96 rounded-3xl shadow-2xl overflow-hidden bg-[url('/bill1.png')] group bg-cover bg-center cursor-pointer hover:scale-[1.02] transition-all duration-300">

            <div
                class="absolute bottom-0 w-full bg-white rounded-t-3xl p-4 h-[160px] group-hover:h-90 transition-all duration-500 ease-in-out flex flex-col">

                <!-- ส่วนหัว -->
                <div>
                    <div class="flex items-center justify-between z-10">
                        <h1 class="text-lg font-bold">{{ bill.title }}</h1>
                        <span class="text-green-600 font-bold text-lg">{{ bill.amount }} ฿</span>
                    </div>

                    <div class="group flex flex-col gap-1">
                        <div class="order-1 transition-all duration-200 ease-in-out group-hover:order-2 text-[#4a4a4a]">
                            จำนวนสมาชิก {{ userData?.length || 0 }}
                        </div>

                        <div class="order-2 group-hover:order-1 transition-all duration-700 ease-in-out">
                            <div class="flex items-center gap-2 transition-all duration-700 ease-in-out">
                                <span
                                    class="text-[#4a4a4a] transition-opacity duration-700 ease-in-out group-hover:opacity-0">
                                    สถานะ
                                </span>
                                <span
                                    class="bg-red-500 text-white text-xs px-2 py-0.5 rounded-xl transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:-ml-14">
                                    {{ bill.pstatus }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- สมาชิกบิล -->
                <div
                    class="opacity-0 group-hover:opacity-100 transition-all duration-1000 mt-1 flex-grow overflow-y-auto">
                    <div v-for="(users, index) in userData" :key="index"
                        class="flex justify-between items-center border-b py-2">
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 rounded-full border flex items-center justify-center overflow-hidden">
                                <img src="/profile.png" alt="Profile" class="w-full h-full object-cover" />
                            </div>
                            <div class="flex flex-col text-sm">
                                <span>{{ users.username }}<span class="text-green-500 text-xl"> ●</span></span>
                                <span class="text-gray-400">{{ users.email }}</span>
                            </div>
                        </div>
                        <span class="text-green-600">{{ (bill.amount / (userData?.length || 1)).toFixed(2) }} ฿</span>
                    </div>
                </div>

                <!-- ปุ่มลบ และจ่ายเงิน -->
                <div class="flex justify-end gap-2 mt-2 z-20" @click.stop>
                    <button @click.stop="openDeleteModal(bill)"
                        class="btn border border-red-500 bg-red-500 text-white hover:bg-red-800 rounded-xl px-4 py-2 w-24 group-hover:w-28 transition-all duration-500 ease-in-out">
                        ลบ
                    </button>

                    <button @click.stop="openPaymentModal(bill)"
                        class="btn border border-green-500 bg-green-500 text-white hover:bg-green-600 rounded-xl px-4 py-2 w-24 group-hover:w-28 transition-all duration-500 ease-in-out">
                        จ่ายเงิน
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Delete Modal -->
    <div v-if="showDeleteModal" class="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
        <div class="bg-white rounded-2xl shadow-xl w-[500px] p-6 text-center relative">
            <div class="flex justify-center mb-4">
                <div class="bg-red-500 w-12 h-12 rounded-full flex justify-center items-center">
                    <span class="text-white text-2xl">×</span>
                </div>
            </div>
            <p class="mb-6 text-gray-800 font-medium">
                "ยืนยันการลบบิลนี้จะถูกลบออกจากระบบอย่างถาวร"
            </p>
            <div class="flex justify-center gap-4">
                <button @click="closeDeleteModal"
                    class="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition">
                    ยกเลิก
                </button>
                <button @click="confirmDelete"
                    class="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition">
                    ยืนยัน
                </button>
            </div>
        </div>
    </div>

    <!-- Payment Modal (Money Slip แบบใหม่) -->
    <div v-if="showPaymentModal" class="fixed inset-0 flex justify-center items-center bg-black/30 z-50">
        <!-- หน้าอัปโหลด -->
        <div v-if="!isSuccess" class="bg-white rounded-2xl shadow-xl border border-blue-200 w-[380px] p-12 text-center font-Bai-Jamjuree">
            <h2 class="text-2xl font-bold mb-4">แนบสลิปจ่ายเงิน: {{ selectedBill?.title }}</h2>

            <div class="text-gray-700 text-left space-y-2 mb-6 p-2">
                <p><span class="mb-2 font-semibold">ชื่อบัญชี :</span> นายบุญณรงค์ ชาญเวชศาสตร์</p>
                <p><span class="mt-2 font-semibold">เลขที่บัญชีผู้รับเงิน :</span> 555XXXXXX</p>
                <p><span class="mt-2 font-semibold">จำนวนเงินที่ต้องชำระ :</span> {{ selectedBill?.amount }} บาท</p>
            </div>

            <label for="file-upload" class="cursor-pointer flex flex-col justify-center items-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
                <img src="https://www.svgrepo.com/show/408362/upload.svg" alt="upload" class="w-10 h-10 opacity-60 mb-2" />
                <p class="text-gray-500 text-sm">เลือกไฟล์สลิป<br />เพื่ออัพโหลด</p>
                <input id="file-upload" type="file" class="hidden" @change="onFileChange" />
            </label>

            <div class="flex flex-col space-y-3 mt-6">
                <button class="bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl font-semibold transition" @click="submitSlip">ส่งสลิป</button>
                <button class="text-gray-500 hover:text-gray-700 font-medium" @click="closePaymentModal">ยกเลิก</button>
            </div>
        </div>

        <!-- หน้าสำเร็จ -->
        <div v-if="isSuccess" class="fixed inset-0 flex justify-center items-center bg-black/30 cursor-pointer z-50" @click="isSuccess = false">
            <div class="bg-white rounded-2xl shadow-xl w-[340px] p-10 text-center font-Bai-Jamjuree">
                <div class="flex flex-col items-center">
                    <div class="bg-green-500 rounded-full w-14 h-14 flex justify-center items-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 class="text-lg font-bold text-gray-800 mb-1">ชำระเงินสำเร็จ</h2>
                    <p class="text-gray-400 text-sm">กดที่ไหนก็ได้เพื่อออก</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Success Popup แบบทั่วไป -->
    <Transition name="fade">
        <div v-if="showSuccessPopup" class="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
            @click="closeSuccessPopup">
            <Transition name="scale">
                <div class="bg-white rounded-3xl p-10 flex flex-col items-center gap-5 max-w-md mx-4 shadow-2xl"
                    @click.stop>
                    <div class="relative">
                        <div
                            class="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center animate-bounce-once">
                            <svg class="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                    </div>

                    <div class="text-center">
                        <h2 class="text-3xl font-bold text-gray-800 mb-2">{{ successMessage }}</h2>
                        <p class="text-gray-500">กดที่ไหนก็ได้เพื่อออก</p>
                    </div>
                </div>
            </Transition>
        </div>
    </Transition>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useFetch } from '#app'

const router = useRouter()
const props = defineProps({ endpoint: { type: String, required: true } })

const { data: billData, refresh } = await useFetch(`http://localhost:3005${props.endpoint}`)
const { data: userData } = await useFetch('http://localhost:3005/api/users')

// Payment & Delete
const showPaymentModal = ref(false)
const selectedBill = ref(null)
const file = ref(null)
const isSuccess = ref(false)

const showDeleteModal = ref(false)
const billToDelete = ref(null)

const showSuccessPopup = ref(false)
const successMessage = ref('เสร็จสิ้น')

// ----------------- Delete -----------------
const openDeleteModal = (bill) => { billToDelete.value = bill; showDeleteModal.value = true }
const closeDeleteModal = () => { showDeleteModal.value = false; billToDelete.value = null }
const confirmDelete = async () => {
    if (!billToDelete.value) return
    try {
        const res = await fetch(`http://localhost:3005/api/bill/${billToDelete.value.billid}`, { method: 'DELETE' })
        const data = await res.json()
        if (res.ok) {
            successMessage.value = 'ลบสำเร็จ'
            showSuccessPopup.value = true
            setTimeout(() => showSuccessPopup.value = false, 2000)
            refresh()
        } else alert(data.message || 'เกิดข้อผิดพลาดในการลบ')
    } catch (err) { console.error(err); alert('เกิดข้อผิดพลาดฝั่งเซิร์ฟเวอร์') }
    finally { closeDeleteModal() }
}

// ----------------- Payment -----------------
const openPaymentModal = (bill) => { selectedBill.value = bill; showPaymentModal.value = true; isSuccess.value = false }
const closePaymentModal = () => { showPaymentModal.value = false; file.value = null }
const onFileChange = (e) => { file.value = e.target.files[0] }
const submitSlip = () => {
    if (!file.value) return alert('กรุณาอัพโหลดสลิปก่อนส่ง')
    isSuccess.value = true
    file.value = null
}

const closeSuccessPopup = () => { showSuccessPopup.value = false }
const goToBillDetail = (billid) => { router.push(`/billdetail`) }
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.scale-enter-active {
    transition: all 0.3s ease;
}
.scale-leave-active {
    transition: all 0.2s ease;
}
.scale-enter-from {
    transform: scale(0.8);
    opacity: 0;
}
.scale-leave-to {
    transform: scale(0.9);
    opacity: 0;
}
@keyframes bounce-once {
    0%,100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}
.animate-bounce-once {
    animation: bounce-once 0.5s ease;
}
</style>
