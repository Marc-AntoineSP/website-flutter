interface MessageProp {
    message:String;
    create_at:Date;
    is_user1:Boolean;
}

export default function MessageBubble(props:MessageProp){
    return (
        <div className={`chat ${props.is_user1 ? "chat-start" : "chat-end"} flex gap-6 items-center`}>
            {props.is_user1 ? (
            <>
            <img src="/assets/pic.png" className="rounded-full" width={50}/>
            <p className="chat-bubble bg-accent">{props.message}</p></>
            ) : <>
            <p className="chat-bubble bg-accent">{props.message}</p>
            <img src="/assets/pic.png" className="rounded-full" width={50}/>
            </>}
        </div>
    );
}