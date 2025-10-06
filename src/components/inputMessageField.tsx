export default function InputMessageField(){
    return (
        <div className="flex">
            <input type="text" name="messageField" id="messageField" placeholder="Send message..." />
            <img src="/assets/send-horizontal.png" />
        </div>
    )
}