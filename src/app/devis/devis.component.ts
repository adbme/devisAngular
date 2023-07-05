import { Component } from '@angular/core';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent {
  private groupeCounter: number = 1;
  private sousGroupeCounter: number = 1;
  creerGroupeChiffrage() {


    const nomGroupe = prompt('Entrez un nom de groupe :');
    if (nomGroupe) {
      const groupe = document.createElement('table');
      const button = document.createElement('button');
      const buttonDeleteGroupe = document.createElement('button');

      button.innerHTML = "+"
      buttonDeleteGroupe.innerHTML = "-"
      groupe.innerHTML = nomGroupe;

      button.classList.add('sousGroupe' + this.sousGroupeCounter)
      groupe.classList.add( 'groupe' + this.groupeCounter);


      button.addEventListener('click', function() {

        const nomSousGroupe = prompt('Entrez un nom de sous-groupe :')
        if(nomSousGroupe){
          const bouttonLigne = document.createElement('button');
          bouttonLigne.innerHTML = "+"

          bouttonLigne.addEventListener('click', function(){

            const nomLigne = prompt('Entrez un nom de ligne :');

            if(nomLigne){
              let ligneTr = document.createElement('tr')
              let ligneTd = document.createElement('td')

              ligneTr.classList.add('sub')
              ligneTd.innerHTML = "▪️ " + nomLigne;
              sousGroupe.appendChild(ligneTr)
              ligneTr.appendChild(ligneTd)
            }
            else{

            }

          })

          let sousGroupe = document.createElement('table')
          sousGroupe.innerHTML = nomSousGroupe
          sousGroupe.style.backgroundColor ="#ececec"
          sousGroupe.style.marginLeft = "20px"
          groupe.appendChild(sousGroupe)
          sousGroupe.appendChild(bouttonLigne)
        }
        else{
          alert("pas bon")
        }
      });

      buttonDeleteGroupe.addEventListener('click', function (){
        groupe.style.display ="none"
      })

      this.groupeCounter++;
      this.sousGroupeCounter++;



      let devisTable = document.getElementById('tableDevis');
      if (devisTable) {
        devisTable.appendChild(groupe);
        groupe.appendChild(button);
        groupe.appendChild(buttonDeleteGroupe);
      } else {
        alert('Erreur : élément tableDevis introuvable.');
      }
    } else {
      alert('Entrez un nom');
    }

  }

  creerGroupeChiffrage2(){
    alert("Étant en vacances à l'étranger, j'ai malheureusement manqué de temps pour me concentrer sur la structure des tables. J'ai foncé tête baissée dans les fonctionnalités de base sans penser à la structure. J'espère que cela ne va pas me porter préjudice dans la vision que vous avez de moi. Je vais bien sûr finir ce travail, bien qu'il ne soit pas fini dans les temps. ☹️")
  }

  delete(){
    alert("delete")
  }
}
