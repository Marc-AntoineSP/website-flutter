export default function SearchBar(props:{message:string}){
    return (
        <nav className="
            flex gap-2.5 p-2.5 bg-neutral justify-center items-center
        ">
            <button>
                <svg
                    className="swap-off fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512">
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
            </button>
            <input type="text" name="searchBar" id="searchBar" className="input-primary input-xl bg-white rounded-lg h-full"/>
        </nav>
    )
}