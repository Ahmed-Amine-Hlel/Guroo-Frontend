import { RefObject, useEffect, useState } from 'react'
import { ChatMessage } from './ChatBot';

interface Props {
    data: ChatMessage,
    chatContainerRef: RefObject<HTMLDivElement>,
    setDisplayedBotMessage: (id: number) => void
}

const BotResponseBox = ({
    data,
    chatContainerRef,
    setDisplayedBotMessage
}: Props) => {
    const [displayResponse, setDisplayResponse] = useState<string>("");
    const [completedTyping, setCompletedTyping] = useState<boolean>(true);

    useEffect(() => {
        const animateTyping = () => {
            setCompletedTyping(false);

            let i = 0;

            const intervalId = setInterval(() => {
                setDisplayResponse(data.message.slice(0, i));

                i++;

                if (i > data.message.length) {
                    clearInterval(intervalId);
                    setCompletedTyping(true);
                }
            }, 20);
            setDisplayedBotMessage(data.id)
            return () => clearInterval(intervalId);
        }

        if (data.displayed) {
            setDisplayResponse(data.message);
        } else {
            animateTyping()
        }

    }, [data.message]);

    useEffect(() => {
        if (chatContainerRef.current) {
            const container = chatContainerRef.current;
            container.scrollTop = container.scrollHeight;
        }
    }, [displayResponse])
    return (
        <div className="bg-gray-200/50 rounded-[8px] p-2  max-w-[70%]  text-[13px] min-[1864px]:text-[14px]">
            {displayResponse}
            {!completedTyping && ' |'}
        </div>
    )
}

export default BotResponseBox