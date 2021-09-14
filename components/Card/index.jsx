import React from 'react'
import {Img} from '@chakra-ui/react'

const Card = ({image, links}) => {
    return (
        <div>
            {
                image && image.image ? ( 
                        <Img 
                            width="100%"
                            src={`https://${image.image.defaultHost}/i/${image.image.endpoint}/${image.image.name}`}
                            alt={image.imageAltText} /> ) : null
            }
        </div>       
    )
}

Card.displayName = 'Amplience Card'

export default Card
