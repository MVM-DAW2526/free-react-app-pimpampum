const Footer = () => {
      return (
        <footer className="footer">
          <p>© 2024 - Proyecto React Libros | Equipo: TuNombre, Compañero1, Compañero2</p>
        </footer>
      );
    };
    export default Footer;
    ```

3.  **Crea `src/pages/Home.jsx`:**
    
```jsx
    const Home = () => {
      return (
        <section>
          <h1>Catálogo de Libros</h1>
          <p>Aquí aparecerán las tarjetas de los libros pronto...</p>
        </section>
      );
    };
    export default Home;
    ```

---

### 💡 Tip para el "Excelente" en la Rúbrica:

Cuando el profesor vea tu `App.jsx`, verá que has separado el **Layout** del **Contenido**. Esto se llama **Separación de Responsabilidades**. 

Si más adelante queréis añadir una página de "Favoritos" o "Detalle del Libro", solo tendréis que instalar `react-router-dom` y envolver el contenido de `<main>` en rutas, pero la estructura de `App.jsx` ya será la correcta.

**Siguiente paso recomendado:** ¿Quieres que te ayude a crear el componente `BookCard.jsx` para que ya empieces a ver libros de verdad en la pantalla?