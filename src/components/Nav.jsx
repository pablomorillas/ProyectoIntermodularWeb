import { Link } from 'react-router-dom'

function Nav() {
    return (
        <header>
            <nav>
                <div>
                    <Link
                        to="/home"
                    >
                        Inicio
                    </Link>
                    <Link
                        to="/catalogue"
                    >
                        Catálogo
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Nav;