const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} BookLibrary Project</p>
        <ul className="team-list">
          <li><strong>Luca</strong> - Componentes y React</li>
          <li><strong>Aliyah</strong> - Diseño y CSS</li>
          <li><strong>Marija</strong> - API y Despliegue</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
