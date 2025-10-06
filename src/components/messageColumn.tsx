import { Message } from "../types/types";
import HeaderBar from "./headerBar";
import InputMessageField from "./inputMessageField";
import MessageBubble from "./messageBubble";


export default function MessageColumn(props:{messages:Array<Message>}){
    return (
        <section className="flex-1 flex flex-col justify-between">
            <HeaderBar avatar="pic" name="pwet"/>
            <div className="flex flex-col gap-2.5">
                <MessageBubble message={"Coucou"} create_at={new Date()} is_user1={true}/>
                <MessageBubble message={"Coucou"} create_at={new Date()} is_user1={false}/>
                <MessageBubble message={"Coucou"} create_at={new Date()} is_user1={true}/>
                <MessageBubble message={"Coucou"} create_at={new Date()} is_user1={true}/>
                <MessageBubble message={"Coucou"} create_at={new Date()} is_user1={false}/>
                <MessageBubble message={"Coucou"} create_at={new Date()} is_user1={true}/>
            </div>
            <InputMessageField/>
        </section>
    );
}