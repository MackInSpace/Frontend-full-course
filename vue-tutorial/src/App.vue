<script setup>
  import { computed, onMounted, ref, watchEffect } from 'vue'
  import Calendar from './components/Calendar.vue';
  import Clocks from './components/Clocks.vue';
  import Hero from './components/Hero.vue';
  import Layout from './components/Layout.vue';
  import Summary from './components/Summary.vue';
  import Form from './components/Form.vue';

  import { calculateTimeLeft, getLifePercentageLived } from './utils';
  import Portal from './components/Portal.vue';

  const defaultBD = '1988-01-18';
  const defaultLE = 80;
  const birthDate = ref(defaultBD);
  const lifeExpectancy = ref(defaultLE);
  const name = ref('adam');
  const data = ref(calculateTimeLeft(defaultBD, defaultLE));
  console.log(data);
  let percentage = computed(() => getLifePercentageLived(birthDate.value, lifeExpectancy.value))

  const showModal = ref(false)
  function handleToggleModal() {
    showModal.value = !showModal.value
  }

  function handleUpdateData(n, b, e) {
    if (!n || !b || !e) {
      return;
    }

    //save new data to local storage browser database
    localStorage.setItem('formData', JSON.stringify({
      name: n,
      birthDate: b,
      lifeExpectancy: e
    }))

    name.value = n
    birthDate.value = b
    lifeExpectancy.value = parseInt(e)
    data.value = calculateTimeLeft(b, parseInt(e))
    showModal.value = false
  }

</script>

<template>
  
</template>

<style scoped>

</style>
