import { useState } from "react";
import { User } from "../types/types"
import HeaderBar from "./headerBar";
import SearchBar from "./searchBar";
import MessageBar from "./messageBarOnline";

interface ConversationColomnProps {
    conversation:Array<User>;
}

export default function ConversationColumn(props:ConversationColomnProps){
    const [search, setSearch] = useState<String | null>(null);
    return (
        <section className="flex flex-col flex-1">
            <SearchBar/>
            <div id="full" className="flex flex-col">
                <MessageBar avatar="pic" name="pwet" is_online={true}/>
                <MessageBar avatar="pic" name="pwet" is_online={true}/>
                <MessageBar avatar="pic" name="pwet" is_online={true}/>
            </div> 
        </section>
    );
}