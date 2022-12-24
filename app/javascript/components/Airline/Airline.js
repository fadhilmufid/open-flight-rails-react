import React, {useEffect, useState} from "react";
import axios from "axios";
import Header from "./Header";
import { useParams } from 'react-router-dom'; // importing the hook
import styled from "styled-components";

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

const Column = styled.div`
    background: #fff;
    height: 100vh;
    overflow: scroll;

    &:last-child{
        background: #000;
    }
`

const Main =  styled.div`
   padding-left: 50px;
`

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
       
        <Wrapper>
            <Column>
                <Main>
                    {
                    loaded &&
                    <Header
                        attributes = {airline.data.attributes}
                        reviews = {airline.included}
                    />
                    }
                    <div className="reviews"></div>
                    </Main>
            </Column>
            <Column>
                <div className="review-form">[Review goes here]</div>
            </Column>      
        </Wrapper>

    )
}

export default Airline