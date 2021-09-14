import React from 'react'
import {Text, Heading, Link} from '@chakra-ui/react'
import ReactMarkdown from 'markdown-to-jsx'

const TextBlock = ({text, align}) => {
    const options = {
        overrides: {
            h1: {component: Heading, props: {as: 'h1', size: '2xl'}},
            h2: {component: Heading, props: {as: 'h2', size: 'xl'}},
            h3: {component: Heading, props: {as: 'h3', size: 'lg'}},
            h4: {component: Heading, props: {as: 'h4', size: 'md'}},
            h5: {component: Heading, props: {as: 'h5', size: 'sm'}},
            h6: {component: Heading, props: {as: 'h6', size: 'xs'}},
            p: {component: Text},
            a: {component: Link}
        }
    }

    return (
        <div style={{paddingLeft: '20%', paddingRight: '20%', margin: 50, textAlign: align}}>
            {text && <ReactMarkdown options={options}>{text}</ReactMarkdown>}
        </div>
    )
}

TextBlock.displayName = 'Amplience Text'

export default TextBlock
