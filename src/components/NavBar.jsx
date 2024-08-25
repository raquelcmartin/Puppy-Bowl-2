import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav>
        <header>
            <h1>Puppy Bowl 2024</h1>
            <div className='navSearch'>
            <Link to="/">Home</Link>
            <Link to="/form">Add New Player</Link>
            </div>
        </header>
    </nav>
    );
}