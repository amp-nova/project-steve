import React, {useEffect, useState} from 'react'
import { fetchContent } from '../../lib/content-api/fetchContent'
import Banner from '../Banner'
import Card from '../Card'
import CardList from '../CardList'
import Container from '../Container'
import LandingPage from '../LandingPage'
import Image from '../Image'
import Video from '../Video'
import TextBlock from '../TextBlock'
import SplitBlock from '../SplitBlock'
import ContainerSlot from '../ContainerSlot'
import LandingPageSlot from '../LandingPageSlot'
import QuestionSet from '../QuestionSet'

const ContentBlock = ({content, request}) => {
    const [publishedContent,setPublishedContent] = useState(undefined)

    const fetchData = async (request) => {
        let response
        response = await fetchContent([request]);
        setPublishedContent(response.responses[0].content);
    }

    useEffect(() => {
        if (request) fetchData(request);
    }, [])

    const componentsMapping = {
        'https://project-steve.amprsa.net/simple-banner.json': Banner,
        'https://project-steve.amprsa.net/card.json': Card,
        'https://project-steve.amprsa.net/cardList.json': CardList,
        'https://project-steve.amprsa.net/video.json': Video,
        'https://project-steve.amprsa.net/text.json': TextBlock,
        'https://project-steve.amprsa.net/image.json': Image,
        'https://project-steve.amprsa.net/splitBlock.json': SplitBlock,
        'https://project-steve.amprsa.net/landing-page.json': LandingPage,
        'https://project-steve.amprsa.net/landingpage-slot.json': LandingPageSlot,
        'https://project-steve.amprsa.net/questionSet.json': QuestionSet,
        'https://project-steve.amprsa.net/container-slot.json': ContainerSlot,
        'https://project-steve.amprsa.net/container.json': Container

    }
    
    const passedContent = publishedContent || content;
    const Component = componentsMapping[passedContent?._meta?.schema];
    const children = Component ? <Component {...passedContent} /> : <>{JSON.stringify(passedContent)}</>;

    return children;
}

ContentBlock.displayName = 'Amplience Content Block'

export default ContentBlock
