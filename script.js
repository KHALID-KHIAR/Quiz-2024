
function onSubmitPersonnePhysique(){
alert("Personne Physique ajouté avec Succès")
}
function onSubmitPersonneMorale(){
    alert("Personne Morale ajouté avec Succès")
}



let pers_ph = document.querySelector(".personne_physique_container");
let pers_mr = document.querySelector(".personne_morale_container");

function showPersonnePhysique(){

        pers_mr.classList.add("animate__fadeOutDown")
        pers_ph.classList.add("animate__fadeInUp")
        
        pers_ph.style.display="block";
        pers_mr.style.display="none";

        pers_ph.classList.remove("animate__fadeOutDown")
        pers_mr.classList.remove("animate__fadeInUp")


}

function showPersonneMorale(){
    pers_ph.classList.add("animate__fadeOutDown")
    pers_mr.classList.add("animate__fadeInUp")
    pers_ph.style.display="none";
    pers_mr.style.display="block";

    pers_mr.classList.remove("animate__fadeOutDown")
    pers_ph.classList.remove("animate__fadeInUp")
    // pers_mr.style.display = "block"
}