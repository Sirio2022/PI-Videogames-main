import React from "react";


export default function VideoGameCard({name, image, genre}){
    return(
        <div>
            <div>
                <h4>{name}</h4>
            </div>
            <div>
                <img src={image} alt="img" />
            </div>
            <div>
                
            </div>
        </div>
    )


}