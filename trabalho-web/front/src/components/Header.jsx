const Header = () => {
  return (
    <div className="header-container text-center my-8">
      <h2 className="text-3xl font-bold">Calendario Olimpíadas Paris 2024</h2> {}
      <div className="logo-container mt-4" style={{ display: 'flex', justifyContent: 'center' }}> {}
        <img
          src="/images/2024_Summer_Olympics_logo.svg"
          alt="2024 Summer Olympics Logo"
          className="logo w-48" 
          style={{}}
        />
      </div>
    </div>
  );
};

export default Header;
