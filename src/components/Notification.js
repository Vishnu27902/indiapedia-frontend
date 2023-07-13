import { useSelector } from "react-redux"

function Notification() {
    const success = useSelector((state) => state.notification.success)
    const error = useSelector((state) => state.notification.error)
    const message = useSelector((state) => state.notification.message)

    return (
        <div
            className={`fixed flex items-center justify-center top-24 left-1/3 w-1/3 p-2 z-30 border-x-4 text-sm ${success ? "bg-green-950  border-green-500" : ""} ${error ? "bg-red-950  border-red-500" : ""}`}
            style={
                success ? { "backgroundColor": "rgba(92,184,92)" } :
                    error ? { "backgroundColor": "rgba(255,148,148)" } : null
            }
        >
            <p>
                {message}
            </p>
        </div>
    )
}

export default Notification