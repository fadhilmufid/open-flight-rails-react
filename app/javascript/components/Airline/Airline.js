import React, {useEffect, useState} from "react";
import axios from "axios";
import Header from "./Header";
import { useParams } from 'react-router-dom'; // importing the hook

const Airline = () => {
    const [airline, setAirline] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false) 

    let params = useParams()
    useEffect(() => {
        const slug = params.slug
        const url = `/api/v1/airlines/${slug}`

        axios.get(url)
        .then (resp => {
            setAirline(resp.data)
            setLoaded(true)
        })
        .catch()
    
    }, [])
    
    return (
        <div className="wrapper">
            <div className="column">
                {
                loaded &&
                <Header
                     attributes = {airline.data.attributes}
                     reviews = {airline.included}
                 />
                }
                <div className="reviews"></div>
            </div>
            <div className="column">
                <div className="review-form">[Review goes here]</div>
            </div>   
        </div>
    )
}

export default Airline