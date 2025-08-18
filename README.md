# Simulateur de Prix – Mon Bureau Tout Propre

## Contexte du projet

Ce projet a été réalisé dans le cadre d’un **exercice de formation développeur web et web mobile**, avec pour objectif de **revoir les fondamentaux du HTML, du CSS (via Bootstrap) et surtout de JavaScript**.

Le cas fictif est le suivant :

> L’entreprise fictive **"Mon Bureau Tout Propre"**, spécialisée dans le nettoyage de bureaux,  
> souhaite mettre à disposition de ses clients un **simulateur de prix interactif** directement intégré à son site internet.  
> Ce simulateur permettra aux visiteurs d’obtenir une **estimation claire et rapide** du coût des prestations hebdomadaires en fonction de plusieurs critères.

---

## Technologies utilisées

- **HTML5** – Structure du formulaire et de la page
- **Bootstrap 5** – Mise en forme responsive rapide (grilles, navbar, boutons, etc.)
- **JavaScript vanilla** – Calcul automatique du prix et affichage dynamique des résultats

---

## Comment tester le simulateur

1. **Ouvrir le fichier HTML** dans un navigateur web (double-clic ou via un serveur local).
2. Remplir les champs du formulaire :
   - **Surface** : Entrez une surface en m² (exemple : `100`) 
   
   Prix du m² : **1,50€**
   - **Fréquence de nettoyage** :
     - `1` fois par semaine
     - `2` fois par semaine
     - `Tous les jours (5 fois par semaine)`

Le prix de base est multiplié par le nombre de jours (fréquence) sélectionnée
   - **Option vitres** : Cochez `Oui` ou `Non`

Si le 'Oui' est choisi, le prix jusqu'ici calculé sera majoré de **+10%**

3. Cliquez sur **"Calculer le prix"**
4. Le simulateur affichera :
   - Le **montant HT**
   - Le **montant de la TVA (20%)**
   - Le **montant TTC**

### Exemple de test

| Champ                          | Valeur              |
|-------------------------------|---------------------|
| Surface                       | `100` m²            |
| Fréquence                     | `2 fois / semaine`  |
| Vitres incluses               | `Oui`               |

**Résultat attendu :**

- **Montant HT** : `330.00 €`
- **TVA (20%)** : `66.00 €`
- **Montant TTC** : `396.00 €`

---

## Fichiers inclus

- `index.html` – Page principale avec le formulaire, le script de calcul, le header et le footer
- `script.js` – Page de script, contient la fonction `calculerPrix()`
- `README.md` – Ce fichier d’explication

---

## Objectif pédagogique

Ce projet vise à :

- Manipuler des formulaires HTML avec validation simple
- Travailler la logique de calcul en **JavaScript**
- Générer dynamiquement du contenu dans le DOM
- Utiliser **Bootstrap** pour une mise en page rapide et responsive

---

