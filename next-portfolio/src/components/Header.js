import { useContext } from 'react';
import { AppContext } from './Layout';
import Link from 'next/link'




const Header = () => {
    const appCommonData = useContext(AppContext)
    
    const headerMenus = appCommonData.data.headerMenus.edges
    
    return (
        <div>
            <ul className="np-header-menu">
                {
                    headerMenus && headerMenus.map( (menuItem) => {
                        return(
                            <li key={menuItem.node.id}>
                                <Link href={menuItem.node.path}>
                                    <a>
                                        <i className={`fas fa-${menuItem.node.menuIcon.icon}`}></i>{menuItem.node.label}
                                    </a>
                                </Link> 
                            </li>
                        )
                    } )
                }
            </ul>
        </div>
    );
};

export default Header;