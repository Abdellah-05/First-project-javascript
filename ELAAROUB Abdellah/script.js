const myTexts = ["Javascript est un langage de script léger, orienté objet, principalement connu comme le langage de script des pages web.", 
                "Python est un langage de programmation interprété, multi-paradigme et multiplateformes. Il favorise la programmation impérative structurée, fonctionnelle et orientée objet", 
                "R est un langage de programmation et un logiciel libre destiné aux statistiques et à la science des données soutenu par la R Foundation for Statistical Computing.", 
                "C est un langage de programmation impératif généraliste, de bas niveau. Inventé au début des années 1970 pour réécrire UNIX, C est devenu un des langages les plus utilisés.", 
                "Java est un langage de programmation orienté objet créé par James Gosling et Patrick Naughton, employés de Sun Microsystems, avec le soutien de Bill Joy.", 
                "C++ est un langage de programmation compilé permettant la programmation sous de multiples paradigmes. Ses bonnes performances, et sa compatibilité avec le C en font un des langages de programmation les plus utilisés.", 
                "Node.js est une plateforme logicielle libre en JavaScript orientée vers les applications réseau événementielles hautement concurrentes qui doivent pouvoir monter en charge.", 
                "MongoDB est un système de gestion de base de données orienté documents, répartissable sur un nombre quelconque d'ordinateurs et ne nécessitant pas de schéma prédéfini des données.", 
                "HTML est le langage de balisage conçu pour représenter les pages web. C’est un langage permettant d’écrire de l’hypertexte.", 
                "PHP est un langage de programmation libre, principalement utilisé pour produire des pages Web dynamiques via un serveur HTTP."]

var rand = Math.floor(Math.random() * 10)
const controleur = document.querySelector('.control');
const monMsg = document.querySelector('#msg');
const refaireTest = document.querySelector('#refaire');
const monChrono = document.querySelector('.time');
let TPS = [0,0,0,0];
let maClock;
let clockRun = false;
var myTXT = myTexts[rand];
//----------------------------------donne le text choisé
function runTheText(){
    document.querySelector('.random_text').innerHTML = myTXT;
    return myTXT;
}
runTheText();
var monTxt = runTheText();//------------stock text choisé dans un variable pour faire la comparaison

//---------------------------------ajouté un 0 a clck
function addZeroToClock(time){
    if (time <= 9){
        time = "0" + time;
    }
    return time;
}
//-------------------ancrementaion de clck compté le tps
function runTimer(){
    let  newTime = addZeroToClock(TPS[0]) + ":" + addZeroToClock(TPS[1]) + ":" + addZeroToClock(TPS[2]);
    monChrono.innerHTML = newTime;
    TPS[3]++;
    TPS[0] = Math.floor((TPS[3]/100)/60);
    TPS[1] = Math.floor((TPS[3]/100) - (TPS[0] * 60));
    TPS[2] = Math.floor(TPS[3] - (TPS[1]*100) - (TPS[0] * 6000));
}

//--------------------------------- actualisé la page web
function Refaire(){
    clearInterval(maClock);
    location.reload();
    monMsg.value = "";
    clearInterval(maClock);
}
// -------------------------------controle de saisie ...
function textControler(){
    let  typingTXT = monMsg.value;
    let realText = monTxt.substring(0, typingTXT.length);
    if(typingTXT == monTxt){
        controleur.style.borderColor = 'blue';
        clearInterval(maClock);
        monChrono.style.color = 'orangered';
    }else{
        if(typingTXT == realText){
            controleur.style.borderColor = 'green';
        }else{
            controleur.style.borderColor = 'red';
        }
    }
}

//------------------------starting clck
function Play(){
    let L = monMsg.value.length;
    if(L === 0){
        clockRun = true;
        maClock = setInterval(runTimer, 10);
    }
}
monMsg.addEventListener('keypress', Play, false);
monMsg.addEventListener('keyup', textControler, false);
refaireTest.addEventListener('click', Refaire, false);


/*Abdellah ELAAROUB/*
