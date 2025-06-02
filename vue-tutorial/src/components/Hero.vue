<script setup>
    const { name, data, handleToggleModal, resetData, percentage } = defineProps({
        name: String,
        data: Object,
        handleToggleModal: Function,
        resetData: Function,
        percentage: Object
    })
    console.log(name)

    function copyLink() {
        navigator.clipboard.writeText('https://github.com/MackInSpace')
    }
</script>

<template>
    <section id="hero">
        <h3 class="text-large">
            {{ name }}, you have {{ data['weeks'] }} weeks left. Make them count!
        </h3>
        <div class="btns-container">
            <button @click="handleToggleModal">Not {{ name }}?</button>
            <button @click="copyLink" class="link-button">Copy Link</button>
            <button @click="resetData" class="link-button">Reset data</button>
        </div>
        <div class="progress-bar">
            <div :style="{ width: percentage }">
                <div>
                    <i class="fa-solid fa-baby"></i>
                    <h6 class="bar-label">Birth</h6>
                </div>
                <h6>{{ percentage }}</h6>
            </div>
            <div>
                <h6 class="bar-label">Death</h6>
                <i class="fa-solid fa-skull"></i>
            </div>
        </div>
    </section>
</template>

<style scoped></style>