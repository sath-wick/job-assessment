export default function Header() {
    return(
        <div className="flex justify-between items-center h-[100%] w-full px-4">
            <span className="ms-8">Logo</span>
            <div className="w-[25%] flex justify-around">
            <button>report</button>
            <button>Notif</button>
            <button>Prof</button>
            </div>

        </div>
    )
}