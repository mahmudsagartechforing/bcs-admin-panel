let packageChart = document.getElementById("package-chart").getContext("2d");

let revenuePieChart = new Chart(packageChart, {
    type: "pie",
    data: {
        labels: ["MAXIMUM", "BASIC", "PREMIUM", "MEDIUM"],
        datasets: [{
            label: "Subscribed client",
            backgroundColor: ['#182F59','#5BBC2E','#FFD500', '#DC143C'],
            data: [45, 25, 10, 20],
        },  ],
    },
      
    options: {
        responsive: true,
        legend: {
            display: true,
            labels: {
                fontColor: "black",
                boxWidth:15,
            },
            // maxWidth: 30,
            position: "left",
        },        
    },
});


$(document).ready(function () {
    $("#subscription-list").DataTable({
        scrollCollapse: true,
        info: false,
        columnDefs: [{
            orderable: false,
            targets: -1
        }],
        sorting: false,
        oLanguage: {
            sSearch: `_INPUT_ <i class="bi bi-search"></i>`,
            sSearchPlaceholder: "Search...",
        },
        "paging": false,
    });


});

const plugAndPlayBtn = document.querySelector(".plugAndPlayBtn")
const managedBtn = document.querySelector(".manageBtn")
const plugAndPlay = document.querySelector(".plugAndPlay")
const manage = document.querySelector(".managed")

plugAndPlayBtn.addEventListener("click", ()=>{
    manage.classList.add("d-none")
    plugAndPlayBtn.classList.add("btn-primary")
    plugAndPlay.classList.remove("d-none")
    managedBtn.classList.remove("btn-primary")
})
managedBtn.addEventListener("click", ()=>{
    manage.classList.remove("d-none")
    plugAndPlayBtn.classList.remove("btn-primary")
    plugAndPlay.classList.add("d-none")
    managedBtn.classList.add("btn-primary")
})

const addFeature = document.querySelector(".add-feature")
const featureInput = document.querySelector(".feature-input")
const featureContainer = document.querySelector(".featureInputContainer")

addFeature.addEventListener("click", (e)=>{
    e.preventDefault()
    const desabledInput = document.createElement("input")
    desabledInput.setAttribute("disabled", "true")
    desabledInput.setAttribute("name", "feature")
    desabledInput.classList.add("featureInputDesabled")
    desabledInput.setAttribute("type", "text")
    desabledInput.setAttribute("value", featureInput.value)
    featureInput.value = ""
    featureContainer.appendChild(desabledInput)
})