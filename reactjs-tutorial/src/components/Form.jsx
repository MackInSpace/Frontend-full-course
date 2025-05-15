import React, { useState } from 'react'

export default function Form(props) {
    const { handleCloseModal, handleUpdateData } = props
    const [name, setName] = useState('Adam')
    const [lifeExpectancy, setLifeExpectancy] = useState(80)
    const [month, setMonth] = useState(1)
    const [day, setDay] = useState(1)
    const [year, setYear] = useState(new Date().getFullYear())

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
    const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i)

    return (
        <div></div>
    )
}