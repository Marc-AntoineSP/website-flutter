export default function SearchBar(props:{message:string}){
    return (
        <nav>
            <div id="burger" className="btn btn-neutral">{props.message}</div>
        </nav>
    )
}