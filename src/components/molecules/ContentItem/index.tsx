import React from "react";
import {Character} from "../../../models";


interface IProps {
    item: Character,
    setModalVisible: (arg: boolean) => void,
    setName: (arg: string) => void
}


export const ContentItem:React.FC<IProps> = ({item, setName, setModalVisible}) => {


    const openModal = () => {
        setModalVisible(true)
        setName(item.name)
    }


      return (
        <div className="bg-sky-900 hover:bg-sky-800 flex flex-col justify-between items-center border text-2xl w-[300px] p-4 cursor-pointer"
        onClick={openModal}>
            <p className="text-lime-200 mb-4">{item.name}</p>
            <p className="text-yellow-500 mb-2">Birth: {item.birth_year}</p>
            <p className="text-yellow-500 mb-2">Height: {item.height}</p>
            <p className="text-yellow-500 ">Mass: {item.mass}</p>
        </div>
    )
}
