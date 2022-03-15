import {useRef, useState} from 'react'
import axios from 'axios'
import {useLocation} from 'react-router-dom'
import { AiOutlineDownload } from 'react-icons/ai'
import { VscError } from 'react-icons/vsc'
import { RiLoader4Line } from 'react-icons/ri'

const Main = () => {

    const urlVideoRed = useRef(null)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const path = useLocation().pathname

    const handleOnClickDownload = () =>{
        setIsLoading(true)
        if (!urlVideoRed.current.value){
            setIsError(true)
            setIsLoading(false)
            setErrorMessage('Tiktok video URL required')
            return
        }
        if (!urlVideoRed.current.value.toLowerCase().match('tiktok.com') || !urlVideoRed.current.value.toLowerCase().match('video')){
            setIsError(true)
            setIsLoading(false)
            setErrorMessage('Invalid URL')

            return
        }
        const config = {
            url: `https://generator.tiktoook.com/getVideo`,
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer 463asdf46sdfjiugbjfwef4653sdf`,
            },
            data: {
                urlVideo : urlVideoRed.current.value
            }
        }
        axios(config).then((response)=>{
            const split = urlVideoRed.current.value.split('/')
            axios.get(`https://cdn01.tiktoook.com/?url=${response.data.video}&idVideo=${split[5]}&user=${split[3]}`).then((response)=>{
                window.location.assign(response.data.link)
                setIsLoading(false)
                urlVideoRed.current.value=null
            }).catch((error)=>{
                setIsLoading(false)
                // console.log(error)
            })
        }).catch((error)=>{
            setIsLoading(false)
            // console.log(error)
        })
    }

    return (
        <>
            <div className={`grid grid-cols-12 gap-8 w-full my-auto my-20`}>
                <div className={`col-span-12 text-center`}>
                    <h2 className={`text-4xl`}>
                        TikTok Downloader
                    </h2>
                </div>
                <div className={`col-span-12`}>
                    <p className={`text-center px-10 md:px-20`}>
                        TikTok Downloader lets you save TikTok videos to your
                        <span className={`text-my-red font-bold`}> computer</span>,
                        <span className={`text-my-red font-bold`}> tablet</span> or
                        <span className={`text-my-red font-bold`}> mobile phone </span>
                        without registration or software.
                    </p>
                </div>

                <div className={`col-span-12`}>
                    <form className={`space-y-2 px-10 lg:px-32`}>
                        <div className={`flex`}>
                            <input onChange={()=>{
                                setIsError(false)
                                setErrorMessage('')
                            }} ref={urlVideoRed} placeholder={`Insert a TikTok link...`} defaultValue={path==='/' ? ``: `https://www.tiktok.com${path}`} className={`w-full border border-black rounded-l-md outline-none px-2 text-sm`} type={`url`}  />
                            {
                                isLoading
                                &&
                                <div className={`px-4 py-2 bg-black text-white text-center rounded-r-md border border-black border-l-0`}>
                                    <RiLoader4Line  className={`animate-spin`} size={25} />
                                </div>
                            }
                            {
                                !isLoading
                                &&
                                <button onClick={handleOnClickDownload} className={`px-4 py-2 bg-black text-white hover:bg-white hover:text-black text-center rounded-r-md border border-black border-l-0`} type={`button`}>
                                    <AiOutlineDownload size={25} />
                                </button>
                            }
                        </div>
                        {
                            isError
                            &&
                            <div className={`flex space-x-2 text-my-red items-center`}>
                                <VscError size={18} />
                                <label className={`text-sm`}> {errorMessage} </label>
                            </div>
                        }
                    </form>
                </div>
            </div>
        </>
    )
}

export default Main