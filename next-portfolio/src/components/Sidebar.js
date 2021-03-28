import { useContext } from 'react';
import { AppContext } from './Layout';
import Link from 'next/link'

const Sidebar = () => {

    const appCommonData = useContext(AppContext);

    const sidebar = appCommonData.data.themeSidebarSettings.sidebar

    return (
        <div className="np-sidebar">
            <div className="np-sidebar-top">
                <div className="profile-pic">
                    <img src={sidebar.profilePicture.sourceUrl} alt=""/>
                </div>
                <h2 className="profile-name">{sidebar.name}</h2>
                <p className="profile-sub-title">{sidebar.subTitle}</p>
                <div className="social-networks">
                    {
                        sidebar.socialNetwork && sidebar.socialNetwork.map( (socialItem, index) => {
                            return(
                                <Link key={index} href={socialItem.socialUrl}>
                                    <a>
                                        <i className={`fab fa-${socialItem.socialIconName}`}></i>
                                    </a>
                                </Link>
                            )
                        } )
                    }
                </div>
            </div>
            <div className="np-sidebar-bottom">
                <div className="sidebar-buttons">
                    {sidebar.buttonOne &&
                        <Link href={sidebar.buttonOne.buttonUrl}><a>{sidebar.buttonOne.buttonText}<i className={`fas fa-${sidebar.buttonOne.buttonIconName}`}></i></a></Link>
                    }
                    {sidebar.buttonTwo &&
                        <Link href={sidebar.buttonTwo.buttonUrl}><a>{sidebar.buttonTwo.buttonText}<i className={`fas fa-${sidebar.buttonTwo.buttonIconName}`}></i></a></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Sidebar;