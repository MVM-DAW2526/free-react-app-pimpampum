# 📝 Autoavaluació Individual — Projecte React

> Completa aquest document de forma **honesta i reflexiva**.
> Un document buit o copiat d'un company puntuarà 0 en el criteri d'autoavaluació.

---

## Dades de l'alumne

- **Nom i cognoms: Marija Milicevic**
- **Grup: pimpampum**
- **Rol al projecte: API y Despliegue**
- **Data: 13 / 05 / 2026**

---

## 1. Contribucions al Projecte

### Sessió 1

Descriu detalladament **què has fet tu** durant la primera sessió (no el que ha fet el grup):

**La meva contribució:**

```
- M’he encarregat de la capa de dades de l’aplicació. Primer vaig triar l’API d’Open Library per ser gratuïta i sense necessitat de clau d’API que sortia en els links de sourcers recomenats.
He creat bookService.js que construeix la URL de cerca dinàmicament segons el que escriu l’usuari, usant encodeURIComponent per evitar errors amb espais i caràcters especials.
He implementat el hook personalitzat useFetch.js que encapsula tota la lògica asíncrona: fa el fetch dins d’un useEffect, gestiona l’estat de càrrega amb useState, captura errors amb try/catch i evita crides innecessàries si la URL és buida.
He construït SearchPage.jsx com a pàgina principal, amb un input de cerca controlat per useState que actualitza la URL automàticament i mostra la llista de resultats usant .map().

```

**Commits de la Sessió 1 que identifiquen la meva feina** (copia els hashes o missatges):

- `commit: Creades carpetes `
- `commit: Added bookService to fetch books from Open Library API `
- `commit: Added getSearchUrl helper to bookService `
- `commit: integrate remote changes `
- `commit: Merge branch 'main' of github.com:MVM-DAW2526/free-react-app-pimpampum `
- `commit: Added Fetch url `
- `commit: Added SearchPage with input and book list `
- `commit: Modified SearchPage with component `
- `commit: Merge branch 'main' of github.com:MVM-DAW2526/free-react-app-pimpampum `
- `commit: Added vite files `
- `commit: added lock.json `
- `commit: Added script `
- `commit: Limit changed `

---

### Sessió 2

Descriu detalladament **què has fet tu** durant la segona sessió:

**La meva contribució:**

```
- He creat DetailPage.jsx per mostrar la informació completa d’un llibre seleccionat (portada, autor, any i nombre d’edicions).
Finalment he implementat la navegació entre pàgines mitjançant useState a App.jsx, alternant entre SearchPage i DetailPage sense necessitat de React Router, i he desplegat l’aplicació a Vercel

```

**Commits de la Sessió 2 que identifiquen la meva feina:**

- `commit: Added DetailPage `
- `commit: Added DetailPage on App, modified SearchPage SelectBook `
- `commit: Modified SearchPage to add onSelectBook `
- `commit: Added Detail Page and navigation `
- `commit: Revise README for project details and structure `

---

## 2. Valoració de les Competències Tècniques

Puntua't del 1 al 10 i justifica cada puntuació:

| Competència | Nota (1-10) | Justificació |
|-------------|-------------|--------------|
| Conec i entenc el codi que he escrit | 6 | La majoria del codi utilitzant es referencia directa als apunts proporcionats a clase, excepte query.trim i encodeURIComponent() |
| He usat correctament els hooks de React | 6 | Extret dels apunts |
| El meu codi és net i llegible | 6 | Crec que no hi ha part del codi que no es pugui entendre llegint normal, no vaig veure necesarri afeigir comentaris |
| He gestionat bé els errors i casos límit | 6 | En el cas mencionat abans a conec el codi, quan l'usuari escrivia lentamente, la URL s'enviava amb espais en blanc o 
  carácters especials que trencaven la crida a l'API i donava error de CORS a consola, per aixó vaig buscar com podria arreglar aixó, d'aqui el query.trim i el encodeURIComponent() |
| He contribuït al disseny i l'estil | 0 | No em tocaba fer aquesta part |
| He usat Git correctament (commits, branches) | 8 | En general si, menys dos merge conflicts perque no vaig fer pull abans de fer push |

---

## 3. Reflexió sobre el Treball en Equip

**Què ha funcionat bé al grup?**

```
Comunicació entre nosaltres i organització de les tasques a fer. 
```

**Què milloraries de la dinàmica del grup?**

```
L'interés i potser implicació per a un treball ben executat desde el principi. 
```

**Com valoraries la contribució de cadascun dels teus companys?** (breu i constructiu)

- **Company 1 (Aliyah): Bona organitzadora i proactiva**
- **Company 2 (Luca): Un cop entés el que s'havia de fer, mostrava més interest**

---

## 4. Aprenentatge Personal

**Quines tecnologies o conceptes has après o consolidat en aquest projecte?**

```
Crec que el tema del hook, perque al principi no acababa de entendre molt be el tema del useEffect, pero ara entenc una mica més la funció que fa i com es pot utilitzar.
```

**Quin ha estat el repte tècnic més gran que has superat?**

```
El que deia abans, l'error del CORS que em va donar, em va espentar una mica, perque no entendia que habia fet malament, i els errors que apareixien en consola eran molts tots de cop, 
haber de buscar com arreglar aixo, 
```

**Qué faries diferent si tornessis a començar?**

```
Comparti amb el grup que sap del tema cada persona, i saber quins coneixements compartim i quin no, per a organitzarnos una millor el tema de la repartició de tasques. 
Aixó com a grup, de forma individual doncs he de dedicar una mica mes a entendre els exemples dels apunts i no només traslladar el codi del text a la práctica. 
```

---

## 5. Nota que et poses a tu mateix

**Nota global (0-10): 6.5** 

**Justificació:**

```
No penso que estigui malament, perque son referencies directes als apunts, pero encara que hi ha coses que potser tindria que consolidar millor per entendre del tot que estic escrivint, 
en lloc de només saber on va cada cosa per a que funci i ja esta. Entenc on van les coses, pero necesiatraia encara tenir una referencia al costat per a poder escriure el codi bé. 
Per aixo penso que podria estar millor, pero no está malament del tot tampoc. 
```

---

*Lliura aquest fitxer al professor juntament amb l'URL del repositori i de Vercel.*
