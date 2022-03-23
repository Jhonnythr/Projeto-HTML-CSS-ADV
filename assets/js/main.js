
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Aqui fica ativado a parte do menu a qual o usuario está
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  let selectTopbar = select('#topbar')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled')
        }
      } else {
        selectHeader.classList.remove('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled')
        }
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

 /**
   * Video 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });
  /**
   * Passar imagens  
   */
  const galelryLightbox = GLightbox({
    selector: '.galelry-lightbox'
  });


})();

function cadastrar(){
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let telefone = document.getElementById('telefone').value;
  let dataEntrada = document.getElementById('dataEntrada').value;
  let dataSaida = document.getElementById('dataSaida').value;
  let qtd = document.getElementById('qtdHosp').value;
  

  localStorage.setItem("nome", nome);
  localStorage.setItem("email", email);
  localStorage.setItem("telefone", telefone);
  localStorage.setItem("DataEntrada", dataEntrada);
  localStorage.setItem("DataSaida", dataSaida);
  localStorage.setItem("QuantidadePessoas", qtd);
  
  document.getElementById('mostrarNome').innerHTML = localStorage.getItem("nome");
  
}

function limparStorage(){
  localStorage.clear();
}

function mostrarConteudo(){
  document.getElementById("mostrarNome").innerHTML = localStorage.getItem("nome");
  document.getElementById("mostrarEmail").innerHTML = localStorage.getItem("email");
  document.getElementById("mostrarTelefone").innerHTML = localStorage.getItem("telefone");
  document.getElementById("mostrarEntrada").innerHTML = localStorage.getItem("DataEntrada");
  document.getElementById("mostrarSaida").innerHTML = localStorage.getItem("DataSaida");
  document.getElementById("mostrarQtd").innerHTML = localStorage.getItem("QuantidadePessoas");
}

