import { useState, useRef, useEffect } from 'react'
import { HiChatAlt } from 'react-icons/hi'
import { LiaTimesSolid } from 'react-icons/lia'
import { FaRobot } from 'react-icons/fa'

const ChatBot = () => {
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const chatBotRef = useRef<HTMLDivElement>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState<boolean>(false)
    const [suggests] = useState<string[]>([
        "How can I help you?",
        "Why are you here?",
        "What do you want to buy?",
        "What do you want to sell?",
        "What do you want to do?",
    ])

    const [chat, setChat] = useState<object[]>([
        {
            message: "Hello",
            type: "user"
        },
        {
            message: "Hi, How can I help you?",
            type: "bot"
        },
        {
            message: "I want to buy a car",
            type: "user"
        },
        {
            message: "What kind of car do you want to buy?",
            type: "bot"
        },
        {
            message: "I want to buy a BMW",
            type: "user"
        },
        {
            message: "What model do you want to buy?",
            type: "bot"
        },
        {
            message: "I want to buy a BMW X5",
            type: "user"
        }

    ])

    const toggleChat = () => {
        setIsOpened(prevState => !prevState);
    };


    const addNewMessage = (message: string) => {
        setChat(prev => [...prev, {
            message,
            type: 'user'
        }])
        setLoading(true)
        setTimeout(() => {
            const sugg = suggests[Math.floor(Math.random() * suggests.length)]
            setChat(prev => [...prev, {
                message: sugg,
                type: 'bot'
            }])
            setLoading(false)
        }, 2000)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (event.target instanceof Node) {
                if (isOpened && chatBotRef.current && !chatBotRef.current.contains(event.target)) {
                    setIsOpened(false);
                }
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [isOpened]);

    useEffect(() => {
        if (isOpened && chatContainerRef.current) {
            const container = chatContainerRef.current;
            container.scrollTop = container.scrollHeight;
        }
    }, [isOpened, loading]);


    return (
        <div ref={chatBotRef} className={`z-50 fixed xl:right-16 sm:bottom-20 right-2 bottom-10 w-[350px] font-plus-jakarta-sans ${!isOpened ? 'h-max' : 'h-[600px] '}`}>
            <div className='z-50 relative h-full'>
                <div
                    role="button"
                    aria-label="Toggle Chat"
                    className='z-50 flex items-center justify-center absolute bottom-0 right-0 w-[45px] h-[45px] min-[1864px]:w-[55px] min-[1864px]:h-[55px] rounded-full bg-[#914FD2] hover:bg-[#946CBB] hover:cursor-pointer'
                    onClick={toggleChat}
                >
                    {
                        isOpened ?
                            <LiaTimesSolid className="text-white text-[20px] min-[1864px]:text-[25px]" /> :
                            <HiChatAlt className="text-white text-[20px] min-[1864px]:text-[25px]" />

                    }
                </div>
                {
                    isOpened && (
                        <div className={`absolute bottom-0 right-0 w-full h-full bg-transparent pb-[50px] min-[1864px]:pb-[60px] transition-transform duration-300 ${isOpened ? 'ping-enter' : ''}`}>
                            <div className='z-50 bg-white flex flex-col h-full w-full rounded-[16px] overflow-hidden border-[2px] border-gray-200/50'>
                                <div className='grid grid-cols-2 gap-1 w-full h-[200px] mb-1 p-2 overflow-y-scroll no-thumb border-b border-b-[2px] border-gray-200/50'>
                                    {
                                        suggests.map((suggest: string, index: number) => (
                                            <div
                                                key={index}
                                                className={`bg-gray-100 hover:cursor-pointer text-xs min-[1864px]:text-[14px] p-2 rounded-[16px] h-max ${index === 4 ? 'col-span-2' : ''}`}
                                                onClick={() => addNewMessage(suggest)}>
                                                {suggest}
                                            </div>
                                        ))
                                    }
                                </div>
                                <div ref={chatContainerRef} className='overflow-y-scroll no-thumb h-full w-full px-2'>
                                    {
                                        chat.map((data: any, index: number) => (
                                            <div key={index} className='mb-3'>
                                                {
                                                    data.type === 'user' ?
                                                        <div className='flex justify-end'>
                                                            <div className='bg-purple-200 rounded-[16px] px-2 py-1 max-w-[80%] text-xs min-[1864px]:text-[14px]'>
                                                                {data.message}
                                                            </div>
                                                        </div> :
                                                        <div className='flex justify-start gap-1'>
                                                            <div className='flex items-center justify-center w-[26px] h-[26px] bg-gray-200/50 rounded-full'>
                                                                <FaRobot
                                                                    className='text-[16px] min-[1864px]:text-[18px] text-gray-600'
                                                                />
                                                            </div>
                                                            <div className='bg-gray-200/50 rounded-[16px] px-2 py-1 max-w-[70%]  text-xs min-[1864px]:text-[14px]'>
                                                                {data.message}
                                                            </div>
                                                        </div>
                                                }
                                            </div>
                                        ))
                                    }
                                    {
                                        loading && (
                                            <div className='flex justify-start gap-1 mb-3'>
                                                <div className='flex items-center justify-center w-[26px] h-[26px] bg-gray-200/50 rounded-full'>
                                                    <FaRobot
                                                        className='text-[16px] min-[1864px]:text-[18px] text-gray-600'
                                                    />
                                                </div>
                                                <div className='bg-gray-200/50 rounded-[16px] px-2 py-1 max-w-[70%]  text-xs min-[1864px]:text-[14px]'>
                                                    Wait a moment...
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ChatBot