// Scroll Animation
const faders = document.querySelectorAll('.fade-in');
const options = {threshold: 0.3};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
entries.forEach(entry=>{
if(!entry.isIntersecting) return;
entry.target.classList.add("appear");
observer.unobserve(entry.target);
});
}, options);

faders.forEach(fader=>{
appearOnScroll.observe(fader);
});

// WhatsApp Agendamento
const form = document.getElementById("formLuxo");
if(form){
form.addEventListener("submit", function(e){
e.preventDefault();

let nome = document.getElementById("nome").value;
let telefone = document.getElementById("telefone").value;
let data = document.getElementById("data").value;
let servico = document.getElementById("servico").value;

let mensagem = `Olá, gostaria de agendar:
Nome: ${nome}
Telefone: ${telefone}
Data: ${data}
Serviço: ${servico}`;

let numero = "5511965519000";
let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

window.open(url, "_blank");
});
}