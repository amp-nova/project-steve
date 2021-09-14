import React from 'react'

const Video = ({video}) => {
    if (!video) {
        return null;
    }

    return (
        <div>
            <video autoPlay loop muted playsInline width="100%" height="100%" poster={`https://${video.defaultHost}/v/${video.endpoint}/${video.name}?protocol=https`}
                src={`https://${video.defaultHost}/v/${video.endpoint}/${video.name}/mp4_720p?protocol=https`}>
                <source src={`https://${video.defaultHost}/v/${video.endpoint}/${video.name}/mp4_720p?protocol=https`}
                    data-res="High" data-bitrate="2119" data-label="High"
                    type="video/mpeg4" />

                <source src={`https://${video.defaultHost}/v/${video.endpoint}/${video.name}/mp4_480p?protocol=https`}
                    data-res="Medium" data-bitrate="689" data-label="Medium"
                    type="video/mpeg4" />

                <source src={`https://${video.defaultHost}/v/${video.endpoint}/${video.name}/webm_480p?protocol=https`}
                    data-res="Medium" data-bitrate="624" data-label="Medium"
                    type="video/webm" />
            </video>
        </div>
    )
}

Video.displayName = 'Amplience Video'

export default Video
