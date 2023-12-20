"use strict";
// Original JS code
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear
// year.setAttribute("dataTime", thisYear)
// year.textContent = thisYear
// -- First variation:
// let year: HTMLElement | null
// year = document.getElementById("year")
// let thisYear: string
// thisYear = new Date().getFullYear.toString()
// if (year) {           // type guard - if (year)
//     year.setAttribute("dataTime", thisYear)
//     year.textContent = thisYear
// }
// -- Second variation:
const year = document.getElementById("year");
const thisYear = new Date().getFullYear.toString();
year.setAttribute("dataTime", thisYear);
year.textContent = thisYear;
