import React from "react"
import { Link, useParams, useLocation } from "react-router-dom"

export default function VanDetail() {
    const params = useParams()
    const location = useLocation()
    console.log(location)
    
    const {currentVan: van} = location.state
    /**
     * Challenge: When a filter is applied, change the text of
     * the button to say "Back to luxury vans" (e.g.) instead of
     * "Back to all vans".
     * 
     * As usual, there's more than one way to solve this, so just
     * give it your best shot
     */
    
    const search = location.state?.search || ""
    
    return (
        <div className="van-detail-container">
            <pre>{JSON.stringify(location.state, null, 4)}</pre>
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>
                        {van.type}
                    </i>
                    <h2>{van.name}</h2>
                    <input />
                    
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>加载中...</h2>}
        </div>
    )
}