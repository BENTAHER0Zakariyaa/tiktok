import {Link} from 'react-router-dom'
import { FaGooglePlay } from 'react-icons/fa'

const Header = () => {
    return (
        <>
            <nav className={`bg-white z-10 py-3 px-10 border-b border-my-gray-color`}>
                <div className={`flex justify-between items-center`} >
                    <div>
                        <Link to={`/`} >
                            <h1 className={`group font-bold text-2xl flex`}>
                                <div>
                                    TIKT
                                </div>
                                <div className={`flex relative mx-2.5 group-hover:mx-5`}>
                                    <span className={`text-my-red absolute group-hover:left-[19px] left-[10px]`}>O</span>
                                    <span className={`text-my-turqoise absolute group-hover:right-[19px] right-[10px]`}>O</span>
                                    <span className={`z-10`}>O</span>
                                </div>
                                <div>
                                    K
                                </div>
                            </h1>
                        </Link>
                    </div>
                    <div>
                        <button onClick={()=>{
                            alert('COMING SOON :)')
                        }} disabled={false} className={`group relative flex items-center`} target={`_blank`}>
                            <FaGooglePlay size={`20`} className={`top-0 group-hover:left-[5px] text-my-red left-[3px] absolute`} />
                            <FaGooglePlay size={`20`} className={`top-0 group-hover:-left-[5px] text-my-turqoise -left-[3px] absolute`} />
                            <FaGooglePlay size={`20`} className={`relative`} />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;