
let select_country1 = document.querySelector("#select-pays1");
let select_country2 = document.querySelector("#select-pays2");
let select_country3 = document.querySelector("#select-pays3");

let select_ville1= document.querySelector("#select-ville1")
let select_ville2= document.querySelector("#select-ville2")

function getCountries(select_country){

    fetch("https://countriesnow.space/api/v0.1/countries")
    .then(res=>{
        if(!res.ok){
            throw new Error("Error getting Data")
        }
        return res.json()
    })
    .then(data=>{
        for(let country of data.data){
            var opt = document.createElement('option')
            opt.value= country.country;
            opt.innerHTML = country.country
            if(country.country=="Morocco")
                opt.selected=true;

            select_country.appendChild(opt);

            // if(country.country=="Afghanistan"){
            // console.log(country);
            // console.log(country.cities);
        // }
        }
    })
}

function getCities_physique(selected_Country){
    fetch("https://countriesnow.space/api/v0.1/countries")
    .then(res=>{
        if(!res.ok){
            throw new Error("Error getting Data")
        }
        return res.json()
    })
    .then(data=>{
        // console.log(data);
        while(select_ville1.firstChild){
            select_ville1.removeChild(select_ville1.firstChild)
        }
        console.log( select_ville1.childElementCount ); 
        for(let country of data.data){
            if(country.country==selected_Country){
                for(let city of country.cities){
                    var opt = document.createElement('option')
                    opt.value= city;
                    opt.innerHTML = city
                    if(city=="Casablanca")
                    opt.selected=true;
                    select_ville1.appendChild(opt)


                }
            }
        }
    })
}
function getCities_morale(selected_Country){
    fetch("https://countriesnow.space/api/v0.1/countries")
    .then(res=>{
        if(!res.ok){
            throw new Error("Error getting Data")
        }
        return res.json()
    })
    .then(data=>{
        // console.log(data);
        while(select_ville2.firstChild){
            select_ville2.removeChild(select_ville2.firstChild)
        }
        console.log( select_ville2.childElementCount ); 
        for(let country of data.data){
            if(country.country==selected_Country){
                for(let city of country.cities){
                    var opt = document.createElement('option')
                    opt.value= city;
                    opt.innerHTML = city
                    if(city=="Casablanca")
                    opt.selected=true;
                    select_ville2.appendChild(opt)


                }
            }
        }
    })
}

function getCitiesOfCountry_Personne_physique(){
    console.log(select_country2.value);
    getCities_physique(select_country2.value);
}
function getCitiesOfCountry_Personne_morale(){
    console.log(select_country3.value);
    getCities_morale(select_country3.value);
}
getCountries(select_country1);
getCountries(select_country2);
getCountries(select_country3);
getCities_physique("Morocco");
getCities_morale("Morocco");


function onSubmitPersonnePhysique(){
alert("PERSONNE PHYSIQUE ajouté avec Succès")
}
function onSubmitPersonneMorale(){
    alert("PERSONNE MORALE ajouté avec Succès")
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