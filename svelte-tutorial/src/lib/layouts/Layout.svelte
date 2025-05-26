<script>
  import { calculateTimeLeft, getLifePercentageLived } from "../../utils";

    const {headache} = $props();

    let birthDate = '1995-06-15';
    let lifeExpectancy = 80
    let name = 'adam'

    let data = calculateTimeLeft(birthDate, lifeExpectancy);
    let percentage = getLifePercentageLived(birthDate, lifeExpectancy);
</script>

<header>
    <h1 class="text-medium text-gradient">Unalive</h1>
</header>

<main>
    {@render headache({ data, birthDate, name, percentage, lifeExpectancy })}
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