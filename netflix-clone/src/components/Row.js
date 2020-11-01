import React, { useState, useEffect } from 'react'

function Row({ title, fetchUrl}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => { },[])
    return (
        <div>
           Favorite Movies
           Most Popular movies 
        </div>
    )
}

export default Row
