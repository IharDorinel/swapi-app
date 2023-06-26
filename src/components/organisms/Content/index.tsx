import React, {useState, useEffect} from "react";
import {ContentItem} from "../../molecules/ContentItem";
import {FetchMoreButton} from "../../atoms/FetchMoreButton";
import {Response} from "../../../models";
import {Modal} from "../../molecules/Modal";


export const Content = ({}) => {

    const [data, setData] = useState<Response>({count: 0,
        next: '',
        previous: '',
        results: []})

    const [url, setUrl] = useState<string>('https://swapi.dev/api/people/?page=1')
    const [stop, setStop] = useState<number>(0)
    const [name, setName] = useState<string>('')

    const [modalVisible, setModalVisible] = useState<boolean>(false)


    let fetching = data.results?.length < stop || stop === 0

    let foundCharacter = data.results?.find(el => el.name === name)

    const getData = () => {

        if(fetching) {
            fetch(url)
                .then(res => res.json())
                .then(res => {
                    setStop(res.count)
                    setData({...data, results: [...data.results, ...res.results]})
                    setUrl(res.next)
                })
                .catch(err => console.log(err))

        }

            }

    const contentRender = () => {
        return (
            <div className="flex flex-col justify-between items-center px-24">
                <div className="flex justify-center items-center flex-wrap gap-5">
                    {data.results?.map(el => (
                        <ContentItem key={el.name} item={el} setName={setName} setModalVisible={setModalVisible}/>
                    ))}
                </div>

                {fetching &&
                <FetchMoreButton getData={getData}/>
                }

            </div>
        )
    }

    useEffect(() => {
        getData()
    }, [])




    return (
        <div className={" " +
        (modalVisible ? "fixed" : "")}>
            {contentRender()}

            {modalVisible &&
                <Modal setModalVisible={setModalVisible}>
                    <p className="text-lime-200 mb-6">{foundCharacter?.name}</p>
                    <p className="text-yellow-500 mb-3">Birth: {foundCharacter?.birth_year}</p>
                    <p className="text-yellow-500 mb-3">Height: {foundCharacter?.height}</p>
                    <p className="text-yellow-500 mb-3">Mass: {foundCharacter?.mass}</p>
                    <p className="text-yellow-500 mb-3">Eye Color: {foundCharacter?.eye_color}</p>
                    <p className="text-yellow-500 mb-3">Gender: {foundCharacter?.gender}</p>
                    <p className="text-yellow-500 mb-3">Hair Color: {foundCharacter?.hair_color}</p>
                    <p className="text-yellow-500 mb-3">Skin Color: {foundCharacter?.skin_color}</p>
                </Modal>
            }
        </div>
    )
}

