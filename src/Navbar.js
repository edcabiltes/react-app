const Navbar = () => {

  return (
    <nav className="navbar">
        <h1>EchoBlog</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/create" style={{
                color: 'white',
                backgroundColor: '#f1356d',
                borderRadius: '8px'
            }}>Echo</a>
        </div>
    </nav>
  )
}

export default Navbar