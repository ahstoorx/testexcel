// tableau à utiliser pour le filtrage
nomListe = [];
idActive = '';



// cette fonction en relation avec le champ de filtrage permet de trier la liste des check box
function FiltreCheckBox(identifiant, ClassList, dataType) {

    let vealeurRecherche = document.getElementById(identifiant).value.toUpperCase();
    let table = document.getElementsByClassName(ClassList)

    for (let i = 0; i < table.length; i++) {
        let data = table[i].getAttribute(dataType).toUpperCase()
        let elementParent = table[i].parentNode;

        if (data.indexOf(vealeurRecherche) > -1) {
            elementParent.classList.contains("d-none") ? elementParent.classList.remove("d-none") : '';
        }
        else {
            elementParent.classList.contains("d-none") ? '' : elementParent.classList.add("d-none");
        }
    }
}


function closeAll() {
    // document.getElementById(identifiant).classList.contains('show')?UncheckAll(classList)?:'';
    let list = document.getElementsByClassName('dropdown-content')

    for (let i = 0; i < list.length; i++) {

        list[i].classList.contains("show") ? list[i].classList.remove("show") : '';
    }
}

// cette fonction controle toggle de popup
function myFunction(identifiant) {
    closeAll();
    document.getElementById(identifiant).classList.toggle("show");
//    document.getElementById(identifiant).classList.contains("show") ? document.getElementById(identifiant).setAttribute('onclick','closeAll()') : '';

    // document.getElementById(identifiant).classList.contains('show')?UncheckAll('nom_checkbox'):'';
}


// Cette fonction permet de filtrer le tableau en utilisant les checkbox
// element c'est en faite le type de données genre data-element
// array c'est le type de tableau à utiliser pour le filtrage 
function SearchWord(element, array) {

    let tableau = document.getElementsByClassName('lignesFiltre');

    for (let i = 0; i < tableau.length; i++) {

        let data = tableau[i].getAttribute('data-' + element).toUpperCase();

        if (array.indexOf(data) > -1) {
            tableau[i].classList.contains("d-none") ? tableau[i].classList.remove("d-none") : '';
        }
        else {
            tableau[i].classList.contains("d-none") ? '' : tableau[i].classList.add("d-none");
        }
    }

}


// control l'action check du checkbox
function checkChecked(event, identifiant) {
    event.target.checked === true ? document.getElementById(identifiant).setAttribute('value', 'SELECT') : document.getElementById(identifiant).setAttribute('value', '')
}

// Cette fonction permet de creer un tableau
function CreateCheckedListe(classElement, idDrop, TypeData = 'nom') {
    let tableClass = document.getElementsByClassName(classElement);

    for (let i = 0; i < tableClass.length; i++) {
        let data = tableClass[i].getAttribute('value');

        if (data === 'SELECT') {
            if (nomListe.indexOf(tableClass[i].getAttribute('name')) == -1) {
                nomListe.push(tableClass[i].getAttribute('name').toUpperCase())
            }

        }
        else {
            if (nomListe.indexOf(tableClass[i].getAttribute('name').toUpperCase()) > -1) {
                nomListe.splice(nomListe.indexOf(tableClass[i].getAttribute('name').toUpperCase()))
            }
        }
    }
    closeAll();
    SearchWord(TypeData, nomListe)

}


// Fonction pour le check all ou non
function checkOrNot(event, classList) {
    event.target.checked === true ? CheckAll(classList) : UncheckAll(classList);
}


function CheckAll(classList) {

    let tableau = document.getElementsByClassName(classList);

    for (let i = 0; i < tableau.length; i++) {
        // tableau[i].setAttribute('checked', true)
        // tableau[i].setAttribute('value', 'SELECT')
        if (!tableau[i].checked) {
            tableau[i].checked = true;
            tableau[i].setAttribute('value', 'SELECT');
        }
        else {
            tableau[i].setAttribute('value', 'SELECT');
        }


    }
}

function UncheckAll(classList) {

    let tableau = document.getElementsByClassName(classList);

    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i].checked) {
            tableau[i].checked = false;
            tableau[i].setAttribute('value', '');
        }
        else {
            tableau[i].setAttribute('value', '');
        }

        // tableau[i].removeAttribute('checked')


    }


}
