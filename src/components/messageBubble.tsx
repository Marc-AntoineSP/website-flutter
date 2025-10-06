interface MessageProp {
    message:String;
    create_at:Date;
    is_user1:Boolean;
}

export default function MessageBubble(props:MessageProp){
    return (
        <div className={`chat ${props.is_user1 ? "chat-start" : "chat-end"} flex gap-6 items-center`}>
            <p className="chat-bubble bg-accent">{props.message}</p>
        </div>
    );
}