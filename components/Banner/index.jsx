import React from 'react'
import {Button, Img} from '@chakra-ui/react'

const Banner = ({image, bannerText, ctaSettings}) => {

    const isOverlayVisible = bannerText?.header || bannerText?.subheader || bannerText?.description || ctaSettings?.buttonText;

    return (
        <div style={{position: "relative"}}>
            {
                image?.img?.image?.image ? (
                <div>
                    <Img width="100%" alt={image.imageAltText} src={`https://${image.img.image.image.defaultHost}/i/${image.img.image.image.endpoint}/${image.img.image.image.name}`}/>
                    {
                        isOverlayVisible &&
                        <div style={{marginBottom: 50, position: "absolute", left: '50%', bottom: 0, transform: 'translateX(-50%)'}}>
                            <Button>{ctaSettings?.buttonText}</Button>
                        </div>
                    }
                </div> ) : null
            }
        </div>
    )
}

Banner.displayName = 'Amplience Hero'

export default Banner
