<script>
    let { handleUpdateData, handleCloseModal } = $props();

    let name = $state("");

    let currYear = new Date().getFullYear();
    let day = $state(1);
    let month = $state(1);
    let year = $state(currYear);

    let lifeExpectancy = $state(80);

    // Generate numeric options
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
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
    ];
    const years = Array.from({ length: 100 }, (_, i) => currYear - i);
</script>