import {Link} from 'react-router-dom'

const Navbar = () => {

    return (
        <div>
           <nav className="navbar">
                <div>
                    <h1>
                        <Link to="/" className="font:bold uppercase" >Shewa Blog</Link>
                    </h1>
                </div>
                <ul>
                    <li className='text-grey-700 font-bold'>
                        <Link to="/"><span>Home</span></Link>
                    </li>
                </ul>
                <ul>
                    <li className='text-grey-700 font-bold'>
                        <Link to="/create"><span>Create</span></Link>
                    </li>
                </ul>
                <ul>
                    <li className='text-grey-700 font-bold'>
                        <Link to="/"><span>About</span></Link>
                    </li>
                </ul>
            </nav> 
        </div>
        
     );
}
 
export default Navbar;