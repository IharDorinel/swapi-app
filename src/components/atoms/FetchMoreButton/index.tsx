import React from "react";

interface IProps {
    getData: () => void
}

export const FetchMoreButton:React.FC<IProps> = ({getData}) => {

    return (
        <div className="flex justify-center items-center bg-purple-500 hover:bg-purple-400 text-sky-800 w-[250px] border mt-10 p-1 cursor-pointer" onClick={getData}>Load More</div>
    )
}
