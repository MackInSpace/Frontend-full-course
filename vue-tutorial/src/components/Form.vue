<script setup>
    import { ref } from 'vue'

    const { handleUpdateData, handleCloseModal } = defineProps({
        handleUpdateData: Function,
        handleCloseModal: Function
    })

    const name = ref('')
    const currYear = new Date().getFullYear()
    const day = ref(1)
    const month = ref(1)
    const year = ref(currYear)
    const lifeExpectancy = ref(80)

    //Options
    const days = Array.from({ length: 31 }, (_, i) => i + 1)
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]
    const years = Array.from({ length: 100 }, (_, i) => currYear + i)

    function handleSave() {
        handleUpdateData(name.value, `${year.value}-${month.value}-${day.value}`, lifeExpectancy.value)
    }
</script>

<template>
    <section id="form">
        <div>
            <h4 class="text-gradient">Your Details</h4>
            <button @click="handleCloseModal" class="link-button">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" v-model="name" required />
        </div>
        <div>
            <div>Birthday</div>
            <div class="bday">
                <section>
                    <option v-for="d in days" :value="d" :key="d">
                        {{ d }}
                    </option>
                </section>
                <select v-model="month">
                    <option v-for="(m, index) in months" :key="index" :value="index + 1">
                        {{ m }}
                    </option>
                </select>
                <select v-model="year">
                    <option v-for="y in years" :key="y" :value="y">
                        {{ y }}
                    </option>
                </select>
            </div>
        </div>
        <div>
            <label for="lifeExpectancy">Life Expectancy (years)</label>
            <input type="number" id="lifeExpectancy" v-model="lifeExpectancy" max="120" required />
        </div>
        <button @click="handleSave">Save</button>
    </section>
</template>

<style scoped></style>