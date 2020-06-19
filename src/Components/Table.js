import React,{useState, useEffect} from 'react';
import docs from '../Db/docs'
import {
    Link
    } from "react-router-dom";

const Table = () => {
    const [input, setInput] = useState("")
    const [currentDocs, setCurrentDocs] = useState([])

    useEffect(() => {
        const filterMembers = () => {
            if (input !== ""){
                const res = docs.filter(({name}) => name.includes(input.toLowerCase()))
                setCurrentDocs(res)
            }else{
                setCurrentDocs(docs)
            }
        }
        filterMembers()
    },[input])


    return (
        <div className="commandement_list">
            <div className="presentation_list">
                <h1>LES 10 COMMANDEMENTS</h1>
                <p>
                    Ce site internet à été crée dans le but de répertorier les 10 commandements sous différents thématiques.<br/>
                    Les commandements de chaque thème sont voués à être un guide de vie mais aussi de bonne conduite. <br/>
                    Bonne lecture.
                </p>
            </div>
            <div className="search_list">
                <p>Rechercher parmi les articles : </p>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            </div> 
            <div className="table_list">
                <p>Liste des 10 commandement par thème</p>
                <table border="1">
                <thead>
                    <tr>
                        <th>
                        #
                        </th>
                        <th>
                        Nom
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                        currentDocs.map(
                            (doc, index) => {
                                return (
                                    
                                        <tr key={index}>
                                                <td>{index}</td>
                                                <td><Link to={"/" + index}>{doc.name}</Link></td>
                                        </tr>
                                    
                                )
                            }
                        )
                }
                </tbody>   
                </table>
            </div>
        </div>
    )
}

export default Table