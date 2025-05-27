<script>
  import { calculateTimeLeft, getLifePercentageLived } from "../../utils";
  import Form from "../Form.svelte";
  import Portal from "../Portal.svelte";

    const { headache } = $props();

    let showModal = $state(true);
    function handleToggleModal() {
        showModal = !showModal;
    }

    let defaultBD = '1988-01-18';
    let defaultLE = 80;
    let birthDate = $state(defaultBD);
    let lifeExpectancy = $state(defaultLE);
    let name = $state('adam');
    let data = $state(calculateTimeLeft(defaultBD, defaultLE));

    let percentage = $derived(getLifePercentageLived(birthDate, lifeExpectancy));

    function handleUpdateData(n, b, e) {
        if (!n || !b || !e) {
            return;
        }

        // save to local storage
        localStorage.setItem(  
            "formData", 
            JSON.stringify({
                name: n,
                birthDate: b,
                lifeExpectancy: e
            }),
        );

        name = n;
        birthDate = b;
        lifeExpectancy = parseInt(e);
        data = calculateTimeLeft(b, parseInt(e));
        showModal = false;
    }

    function resetData() {
        name = 'adam';
        birthDate = defaultBD;
        lifeExpectancy = defaultLE;
        data = calculateTimeLeft(defaultBD, defaultLE);
        localStorage.clear();
    }

    $effect(() => {
        const interval = setInterval(() => {
            data = calculateTimeLeft(birthDate, lifeExpectancy);
        }, 1000);
        return () => clearInterval(interval);
    });

    $effect(() => {
        if (!localStorage) {
            // exits function if no local storage available
            return;
        }
        if (localStorage.getItem('formData')){
            // that means we found data under the key formData
            const {
                name: n, 
                birthDate: b, 
                lifeExpectancy: e,
            } = JSON.parse(localStorage.getItem('formData'));
            name = n;
            birthDate = b;
            lifeExpectancy = e;
            data = calculateTimeLeft(b, parseInt(e));
        }
    })
</script>

{#if showModal}
    <Portal handleCloseModal={handleToggleModal}>
        {#snippet form()}
            <Form {handleUpdateData}/>
        {/snippet}
    </Portal>
{/if}

<header>
    <h1 class="text-medium text-gradient">Unalive</h1>
</header>

<main>
    {@render headache({ 
        data, 
        birthDate, 
        name, 
        percentage, 
        lifeExpectancy, 
        handleToggleModal,
        resetData
    })}
</main>
<footer>
    <small>Created By:</small>
    <a target="black" href="/">
        <img src="https://media.licdn.com/dms/image/v2/C5603AQGHwknAYchapw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1631635420449?e=1753920000&v=beta&t=SsHBoJOOMAModgIHYf7fTAO9vVaE2d4pC-shBl89PAg" alt="pfp" />
        <p>@Adam-Mackey</p>
        <i class="fa-brands fa-linkedin-in"></i>
    </a>
</footer>

<style></style>