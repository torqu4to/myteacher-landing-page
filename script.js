let teacherForms = document.getElementsByClassName("teacher-contract")

for (let teacherForm of teacherForms) {
    teacherForm.addEventListener("submit", (e) =>{
        e.preventDefault();
        
        const price = teacherForm.price.value
        const hours = teacherForm.hours.value
        const result = price * hours

        alert("O valor total do contrato é R$" + result.toFixed(2))
    })
}