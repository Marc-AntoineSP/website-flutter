export default function MessageBarOnline(props:{avatar:string, name:string}){
    return (
        <section id="" className="p-4 bg-white flex justify-start items-start gap-5">
            <div className="avatar">
                <div className="rounded-full w-24">
                    <img src={`/assets/${props.avatar}.png`} />
                </div>
            </div>
            <div className="text-black text-2xl flex flex-col justify-center self-stretch gap-2.5">
                <h3 className="font-bold">{props.name}</h3>
                <p className="font-semibold text-lg"><span>19:53 : </span>Dernier message</p>
            </div>
        </section>
    );
}