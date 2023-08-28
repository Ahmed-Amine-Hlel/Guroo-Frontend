import { useState, useRef, useEffect } from "react";
import { HiChatAlt } from "react-icons/hi";
import { FaRobot } from "react-icons/fa";
import { PulseLoader } from "react-spinners";
import axios from "axios";
import BotResponseBox from "./BotResponseBox";

export type ChatMessage = {
    id: number
    message: string;
    type: "user" | "bot";
    displayed: boolean;
};

const ChatBot = () => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const chatBotRef = useRef<HTMLDivElement>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [categories] = useState<string[]>([
        "Impôt",
        "ACRE",
        "Chiffre d'affaires",
        "TVA",
        "Activités"
    ]);
    const [questions, setQuestions] = useState<string[]>([])
    const [chat, setChat] = useState<ChatMessage[]>([]);

    const toggleChat = () => {
        setIsOpened((prevState) => !prevState);
    };

    const selectCategory = (category: string) => {
        setSelectedCategory(category);
        getQuestions(category)
    }
    const addNewMessage = async (message: string) => {
        setChat((prev) => [
            ...prev,
            {
                id: Date.now(),
                message,
                type: "user",
                displayed: false,
            },
        ]);
        setLoading(true);
        const res = await axios.post('https://fundr-ia.onrender.com/chatbot', {
            question: message
        })
        const response = res.data.response
        setChat((prev) => [
            ...prev,
            {
                id: Date.now(),
                message: response,
                type: "bot",
                displayed: false,
            },
        ]);
        setLoading(false)
    };

    const setDisplayedBotMessage = (id: number) => {
        setChat((prev) =>
            prev.map((message) => {
                if (message.id === id) {
                    return {
                        ...message,
                        displayed: true,
                    };
                }
                return message;
            })
        );
    }

    const getQuestions = async (category: string) => {
        try {
            const res = await axios.get(`https://fundr-ia.onrender.com/get_questions/${category}`);
            setQuestions(res.data.questions)
        } catch (error) {
            console.log('error', error)
        }
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (event.target instanceof Node) {
                if (
                    isOpened &&
                    chatBotRef.current &&
                    !chatBotRef.current.contains(event.target)
                ) {
                    setIsOpened(false);
                }
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpened]);

    useEffect(() => {
        if (isOpened && chatContainerRef.current) {
            const container = chatContainerRef.current;
            container.scrollTop = container.scrollHeight;
        }
    }, [isOpened, loading]);

    return (
        <div
            ref={chatBotRef}
            className={`z-50 fixed right-2 sm:right-8 bottom-10 w-[350px] font-text-xs-medium ${!isOpened ? "h-max" : "h-[600px] "
                }`}
        >
            <div className="z-50 relative h-full">
                <div
                    role="button"
                    className="z-50 flex items-center justify-center absolute bottom-0 right-0 w-[45px] h-[45px] min-[1864px]:w-[55px] min-[1864px]:h-[55px] rounded-full bg-[#914FD2] hover:bg-[#946CBB] hover:cursor-pointer"
                    onClick={toggleChat}
                >
                    <HiChatAlt className="text-white text-[20px] min-[1864px]:text-[25px]" />
                </div>
                {isOpened && (
                    <div
                        className={`absolute bottom-0 right-6 w-full h-full bg-transparent pb-[50px] min-[1864px]:pb-[60px] transition-transform duration-300 ${isOpened ? "ping-enter" : ""
                            }`}
                    >
                        <div className="z-50 bg-white flex flex-col h-full w-full rounded-[16px] overflow-hidden border-[2px] border-gray-200/50">
                            <div className="overflow-y-scroll no-thumb h-[230px] mb-4 p-2  border-b border-b-[2px] border-gray-200/50 bg-gray-100">
                                <div className="text-[14px] mb-2">
                                    {
                                        selectedCategory === '' ?
                                            <div className="text-center px-1">
                                                Les catégories de questions
                                            </div> :
                                            <div className="flex items-center gap-4">
                                                <button
                                                    className="px-2 py-1 border border-gray-300 w-max rounded-[8px] hover:bg-gray-300"
                                                    onClick={() => setSelectedCategory('')}>
                                                    Retour
                                                </button>
                                                <div
                                                    className="text-[#F1F2F6] px-2 py-1 bg-[#7A2048] w-max rounded-[8px]"
                                                >
                                                    {selectedCategory}
                                                </div>
                                            </div>
                                    }
                                </div>
                                <div className={`grid gap-2 w-full ${selectedCategory === '' ? 'grid-cols-2' : 'grid-cols-1'}`}>
                                    {
                                        selectedCategory === '' ?
                                            categories.map((category: string, index: number) => (
                                                <div
                                                    key={index}
                                                    className={`text-center bg-gray-300/50 hover:bg-gray-300 hover:cursor-pointer text-xs min-[1864px]:text-[14px] p-2 rounded-[8px] h-max`}
                                                    onClick={() => selectCategory(category)}
                                                >
                                                    {category}
                                                </div>
                                            )) :
                                            questions.length === 0 ?
                                                <div className="text-[14px] text-center">
                                                    chargement ...
                                                </div> :
                                                questions.map((question: string, index: number) => (
                                                    <div
                                                        key={index}
                                                        className={`bg-gray-300/50 hover:cursor-pointer text-xs min-[1864px]:text-[14px] p-2 rounded-[8px] h-max`}
                                                        onClick={() => addNewMessage(question)}
                                                    >
                                                        {question}
                                                    </div>
                                                ))
                                    }
                                </div>
                            </div>
                            <div
                                ref={chatContainerRef}
                                className="overflow-y-scroll no-thumb h-full w-full px-2"
                            >
                                {chat.map((data: ChatMessage, index: number) => (
                                    <div key={index} className="mb-3">
                                        {data.type === "user" ? (
                                            <div className="flex justify-end">
                                                <div className="bg-purple-200 rounded-[8px] p-2 max-w-[80%] text-[13px] min-[1864px]:text-[14px]">
                                                    {data.message}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex justify-start gap-1">
                                                <div className="flex items-center justify-center w-[26px] h-[26px] bg-gray-200/50 rounded-full">
                                                    <FaRobot className="text-[16px] min-[1864px]:text-[18px] text-gray-600" />
                                                </div>
                                                <BotResponseBox
                                                    data={data}
                                                    chatContainerRef={chatContainerRef}
                                                    setDisplayedBotMessage={setDisplayedBotMessage}
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}
                                {loading && (
                                    <div className="flex justify-start gap-1 mb-3">
                                        <div className="flex items-center justify-center w-[26px] h-[26px] bg-gray-200/50 rounded-full">
                                            <FaRobot className="text-[16px] min-[1864px]:text-[18px] text-gray-600" />
                                        </div>
                                        <div className="flex items-center bg-gray-200/50 rounded-[16px] px-2 py-1 max-w-[70%]  text-xs min-[1864px]:text-[14px]">
                                            <PulseLoader
                                                color={"#c3c3c3"}
                                                loading={true}
                                                size={6}
                                                aria-label="Loading Spinner"
                                                data-testid="loader"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatBot;
