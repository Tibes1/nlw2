// procurar botao
document.querySelector("#add-time")
// quado clicar no botao
.addEventListener('click', cloneField)
// executar acao
function cloneField() {
    // duplicar campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //limpar campos
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        field.value = ""
    })

    //colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
