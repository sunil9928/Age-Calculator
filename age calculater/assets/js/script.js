function compareAges() {

    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;

    const dob1 = document.getElementById("dob1").value;
    const dob2 = document.getElementById("dob2").value;

    const result = document.getElementById("result");

    if (name1 === "" || name2 === "" || dob1 === "" || dob2 === "") {
        result.innerHTML = "Please enter both names and dates of birth.";
        return;
    }

    const date1 = new Date(dob1);
    const date2 = new Date(dob2);
    const today = new Date();

    function calculateAge(birthDate) {

        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;

            const previousMonth = new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            );

            days += previousMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        return {
            years,
            months,
            days
        };
    }

    function calculateDifference(date1, date2) {

        let olderDate;
        let youngerDate;

        if (date1 < date2) {
            olderDate = date1;
            youngerDate = date2;
        } else {
            olderDate = date2;
            youngerDate = date1;
        }

        let years = youngerDate.getFullYear() - olderDate.getFullYear();
        let months = youngerDate.getMonth() - olderDate.getMonth();
        let days = youngerDate.getDate() - olderDate.getDate();

        if (days < 0) {
            months--;

            const previousMonth = new Date(
                youngerDate.getFullYear(),
                youngerDate.getMonth(),
                0
            );

            days += previousMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        return {
            years,
            months,
            days
        };
    }

    const age1 = calculateAge(date1);
    const age2 = calculateAge(date2);
    const difference = calculateDifference(date1, date2);

    let older;

    if (date1 < date2) {
        older = `${name1} is older`;
    } else if (date2 < date1) {
        older = `${name2} is older`;
    } else {
        older = `${name1} and ${name2} have the same date of birth`;
    }

    result.innerHTML = `
        <h3>${name1}'s Age</h3>
        <p>${age1.years} Years, ${age1.months} Months, ${age1.days} Days</p>

        <h3>${name2}'s Age</h3>
        <p>${age2.years} Years, ${age2.months} Months, ${age2.days} Days</p>

        <h3>Age Difference</h3>
        <p>${difference.years} Years, ${difference.months} Months, ${difference.days} Days</p>

        <h3>${older}</h3>
    `;
}