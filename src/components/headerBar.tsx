import MessageBar from "./messageBarOnline";

export default function HeaderBar(props:{avatar:string, name:string}){
    return (
        <nav className="flex justify-between items-center">
            <MessageBar name={props.name} avatar={props.avatar} is_online={true}/>
            <div id="inputSearchHead">
                <label className="input">
                    <input type="search" className="input input-2xl" placeholder="..." />
                </label>
            </div>
        </nav>
    )
}