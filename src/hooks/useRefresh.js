import axios from "../api/axios";

function useRefresh() {
    const refresh = async () => {
        const res = await axios.get("/auth/refresh")
        return res.data.ACCESS_TOKEN
    }
    
    return refresh
}

export default useRefresh