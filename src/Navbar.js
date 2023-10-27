const Navbar = () => {
    const style = {
        color:"#FAF0E6",
        borderRadius:" 8px",
    }
    return (
        <nav className="navbar">
            <h1>Shewa Blog</h1>
            <div className="links">
                 
                <a href="/"> Home </a>
                <a href="/create" style={style}>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;