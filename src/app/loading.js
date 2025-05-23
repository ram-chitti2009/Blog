export default function Loading(){
return(
    <div className="p-28">
            {Array(3).fill(0).map((_, index) => 

                <li key={index}>
                    <div className="w-full h-24 animate-pulse bg-neutral-200 rounded-lg shadow-md mb-4">
                        Loading
                    </div>
                </li>
                
            )}
        </div>
    )
}