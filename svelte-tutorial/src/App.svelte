<script>
    import Layout from "./lib/layouts/Layout.svelte";
    import Summary from "./lib/Summary.svelte";
    import Hero from "./lib/Hero.svelte";
    import Clocks from "./lib/Clocks.svelte";
    import Calendar from "./lib/Calendar.svelte";
</script>

<Layout>
    {#snippet headache({ 
        data, 
        birthDate, 
        name, 
        percentage, 
        lifeExpectancy 
        })}
        <Hero {name} {percentage} {data}/>
        <Clocks {data}/>
        <Calendar {data} {lifeExpectancy}/>
        <Summary {birthDate} {lifeExpectancy}/>
    {/snippet}
 </Layout>