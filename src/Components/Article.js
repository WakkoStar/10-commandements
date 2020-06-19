import React from 'react';
import docs from '../Db/docs'
import { Link } from 'react-router-dom';


const Article = ({name}) => {

    const getImagebyName = (name) => {
        const doc = docs.find((doc) => doc.name === name)
        return doc.image
    }


    return (
        <div className="commandement_article">  
            <Link to="/">Retour aux liste</Link>
            <h1>{name}</h1>
            <img src={"/../../Images/" + getImagebyName(name)} alt={name} />
        </div>
        
    )
}

export default Article