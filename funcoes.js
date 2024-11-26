let menulist = document.getElementById("menuList")
const btnWpp = document.querySelector('#btn-Wpp')

menulist.style.maxHeight = "0px";

function toggleMenu() {
    if (menulist.style.maxHeight == "0px") {
        menulist.style.maxHeight = "300px"
    } else {
        menulist.style.maxHeight = "0px"
    }
}


function SendWppMessage() {
    let DestNumber = '5585996604247';
    let mensagem = 'Olá, gostaria de saber mais sobre seus serviços de desenvolvimento web. Estou interessado em criar uma página profissional e gostaria de conversar sobre detalhes e orçamento. Aguardo seu retorno!';
    // let WppUrl = 'https://wa.me/' + DestNumber + '?/text=' + encodeURIComponent(mensagem);
    let WppUrl = 'https://api.whatsapp.com/send?phone=' + DestNumber + '&text=' + encodeURIComponent(mensagem);
    // console.log(WppUrl)
    window.open(WppUrl, '_blank')
}

btnWpp.addEventListener("click", SendWppMessage)