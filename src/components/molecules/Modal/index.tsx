import React from "react";
import cross from "../../images/cross-white.svg";

interface IProps {
    children: React.ReactNode,
    setModalVisible: (arg: boolean) => void
}


export const Modal:React.FC<IProps> = ({children, setModalVisible}) => {


    const closeModal = () => {
        setModalVisible(false)
    }

    const renderContent = () => {

        return (
            <div className="relative flex flex-col justify-between items-center top-[30%] text-3xl z-10">
                {children}
            </div>
        )
    }


    return (
        <div className="fixed w-full h-full top-0 left-0">
            <img src={cross} className="absolute top-[200px] right-[600px] z-10 cursor-pointer" onClick={closeModal} alt={cross}/>
            {renderContent()}
            <div className="fixed bg-black w-full h-full top-0 left-0 opacity-90"></div>

        </div>
    )
}
