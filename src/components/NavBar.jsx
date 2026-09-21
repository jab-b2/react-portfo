import './navbar.css'
import Button from './subcomponents/Button'

const PAGES = ['Home','About']

function NavBar({ currentPage, setCurrentPage }) {
    return (
        <nav className='navbar'>
            <ul>
                {PAGES.map((page) => (
                    <li key={page}>
                        <Button
                            active={currentPage === page}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </Button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar