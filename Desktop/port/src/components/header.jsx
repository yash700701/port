import { useEffect, useState } from "react";
import axios from "axios";

function Header() {
    const [viewCount, setViewCount] = useState();
    useEffect(() => {
        const fetchViewCount = async () => {
            const res = await axios.post("/api/getCount");
            console.log(res.data.viewsCount.viewsCount);
            setViewCount(res.data.viewsCount.viewsCount);
        };
        fetchViewCount();
    }, []);
    return (
        <div className="w-full h-14 text-lg border-b-[2px] flex items-center justify-between">
            <div className="bg-zinc-100  rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white font-poppins px-2 py-1">
                <span className="text-green-500">●</span> Open to Work
            </div>
            <div>
                {viewCount && (
                    <div className="bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white px-2 py-1">
                        visitors: {viewCount}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
