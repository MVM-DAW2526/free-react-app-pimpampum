# 📚 Llibrets — Catàleg de Llibres

Una SPA (Single Page Application) construïda amb React i Vite que permet cercar llibres utilitzant l'API pública d'Open Library.

## 🚀 Desplegament

🔗 **[https://free-react-app-pimpampum.vercel.app/](https://free-react-app-pimpampum.vercel.app/)**

## 📋 Descripció

Llibrets és una aplicació web que permet als usuaris cercar qualsevol llibre i veure'n els detalls (títol, autor, any de publicació, portada i nombre d'edicions). Les dades provenen de l'API gratuïta d'Open Library, sense necessitat de cap clau d'API.

## 🛠️ Stack Tecnològic

| Eina | Ús |
|------|----|
| React 19 | Framework principal |
| Vite | Bundler i servidor de desenvolupament |
| npm | Gestor de paquets |
| GitHub | Control de versions i col·laboració |
| Vercel | Desplegament a producció |
| CSS | Estils |

## 📁 Estructura de Carpetes

```
src/
├── components/
│   ├── ui/
│   │   └── bookCard.jsx       # Targeta de llibre
│   ├── NavBar.jsx             # Barra de navegació
│   └── Footer.jsx             # Peu de pàgina
├── pages/
│   ├── SearchPage.jsx         # Pàgina principal de cerca
│   └── DetailPage.jsx         # Pàgina de detall d'un llibre
├── hooks/
│   └── useFetch.js            # Hook personalitzat per fer fetch
├── services/
│   └── bookService.js         # Construcció de la URL de l'API
├── App.jsx
└── main.jsx
```

## 👥 Organització del Grup

| Membre | Rol | Contribucions |
|--------|-----|---------------|
| **Marija** (mmili24) | API i Desplegament | `bookService.js`, `useFetch.js`, `SearchPage.jsx`, `DetailPage.jsx`, navegació entre pàgines, desplegament a Vercel |
| **Luca** (Rucla16) | Components i React | `NavBar.jsx`, `Footer.jsx`, `BookCard.jsx`, estructura de carpetes |
| **Aliyah** (AliyahGE) | Disseny i CSS | `index.css`, `global.css`, disseny responsive, estils de tots els components |

## ⚙️ Com executar el projecte en local

```bash
# 1. Clona el repositori
git clone https://github.com/MVM-DAW2526/free-react-app-pimpampum.git

# 2. Entra a la carpeta
cd free-react-app-pimpampum

# 3. Instal·la les dependències
npm install

# 4. Arrenca el servidor de desenvolupament
npm run dev
```

L'app estarà disponible a `http://localhost:5173`

## 🔌 API Utilitzada

**Open Library Search API** — Gratuïta, sense API key.

- **URL de cerca:** `https://openlibrary.org/search.json?q={query}&limit=8`
- **URL de portades:** `https://covers.openlibrary.org/b/id/{cover_i}-M.jpg`

## ✅ Funcionalitats Implementades

- 🔍 Cerca de llibres en temps real
- 📖 Llista de resultats amb portada, títol i autor
- 📄 Pàgina de detall amb informació completa del llibre
- ⏳ Estat de càrrega mentre es busquen dades
- ❌ Gestió d'errors si l'API falla
- 📱 Disseny responsive (mòbil + escriptori)
- 🔄 Navegació entre pàgines amb `useState`

## 🧩 Decisions Tècniques

- **Hook personalitzat `useFetch`**: extreu la lògica de fetch, loading i error en un hook reutilitzable, seguint el patró dels apunts de classe.
- **`bookService.js`**: separa la construcció de la URL de la lògica de fetch, per tenir cada fitxer amb una sola responsabilitat.
- **Navegació sense React Router**: s'usa `useState` a `App.jsx` per alternar entre `SearchPage` i `DetailPage`, mantenint la simplicitat.
