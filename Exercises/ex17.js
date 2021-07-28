const dayOfProgrammer = (year) => {
    let solution;
    const months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let sum = 0;
    let day;
    let month;

    if (year > 1918) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            months.splice(2, 1, 29);
            for (let i=1; i<months.length; i++) {
                if (sum + months[i] < 256) {
                    sum += months[i];
                } else {
                    day = 256 - sum;
                    month = i;
                    if (day < 10) {
                        day = `0${day}`;
                    }
                    if (month < 10) {
                        month = `0${month}`;
                    }
                    solution = `${day}.${month}.${year}`;
                    break;
                }
            }
        } else {
            for (let i=1; i<months.length; i++) {
                if (sum + months[i] < 256) {
                    sum += months[i];
                } else {
                    day = 256 - sum;
                    month = i;
                    if (day < 10) {
                        day = `0${day}`;
                    }
                    if (month < 10) {
                        month = `0${month}`;
                    }
                    solution = `${day}.${month}.${year}`;
                    break;
                }
            }
        }
    } else if (year < 1918) {
        if (year % 4 === 0) {
            months.splice(2, 1, 29);
            for (let i=1; i<months.length; i++) {
                if (sum + months[i] < 256) {
                    sum += months[i];
                } else {
                    day = 256 - sum;
                    month = i;
                    if (day < 10) {
                        day = `0${day}`;
                    }
                    if (month < 10) {
                        month = `0${month}`;
                    }
                    solution = `${day}.${month}.${year}`;
                    break;
                }
            }
        } else {
            for (let i=1; i<months.length; i++) {
                if (sum + months[i] < 256) {
                    sum += months[i];
                } else {
                    day = 256 - sum;
                    month = i;
                    if (day < 10) {
                        day = `0${day}`;
                    }
                    if (month < 10) {
                        month = `0${month}`;
                    }
                    solution = `${day}.${month}.${year}`;
                    break;
                }
            }
        }
    } else {
        months.splice(2, 1, 15);
        for (let i=1; i<months.length; i++) {
            if (sum + months[i] < 256) {
                sum += months[i];
            } else {
                day = 256 - sum;
                month = i;
                if (day < 10) {
                    day = `0${day}`;
                }
                if (month < 10) {
                    month = `0${month}`;
                }
                solution = `${day}.${month}.${year}`;
                break;
            }
        }
    }

    return solution;
}

console.log(dayOfProgrammer(2016));