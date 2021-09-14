import React from 'react'
import {Img} from '@chakra-ui/react'

const Image = ({image}) => {
    return <div>
        {
            image && <Img src={`https://${image.defaultHost}/i/${image.endpoint}/${image.name}`} alt={image.imageAltText} />
        }
        </div>
}

Image.displayName = 'Amplience Image'

export default Image
