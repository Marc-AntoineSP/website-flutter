export default function MessageBarOnline(props:{avatar:string, name:string}){
    return (
        <section id="">
            <div className="avatar">
                <div className="rounded-full w-24">
                    <img src={`/assets/${props.avatar}.png`} />
                </div>
            </div>
        </section>
    );
}