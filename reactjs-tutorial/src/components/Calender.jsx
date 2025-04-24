export default function Calender() {
    const { lifeExpectancy, data } = props
    const yearsArr = [...Array(lifeExpectancy).keys()]
    const weeksArr = [...Array(52).keys()]
    const weekNum = lifeExpectancy * 52 - parseInt(data['weeks'])
    const finalWeek = lifeExpectancy * 52

    return (
        <div></div>
    )
}