export function ModalBtn({setStyle,label}) {
    return(
            <button onClick={setStyle} className="button2">
                {label}
            </button>
    )
}