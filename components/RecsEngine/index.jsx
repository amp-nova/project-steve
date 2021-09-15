import React, { useState, useEffect } from 'react'
import ContentBlock from '../ContentBlock'
import fetch from 'cross-fetch'
import {Grid, GridItem} from '@chakra-ui/react'

const RecsEngine = () => {
    const [userProfile, setUserProfile] = useState({
        interests: [],
        attributes: []
    });

    const fetchData = async () => {
        let response;
        response = await fetch(`http://localhost:3000/api/userprofile/login?email=davelilly@johndoe.com`,
            { method: 'GET' });
        const responseJson = await response.json()
        setUserProfile(responseJson);
    }

    useEffect(() => {
        fetchData();
        const interval = setInterval(() => {
          fetchData();
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    const bagsScore = userProfile.interests.find(x=>x.name === 'Category/Bags')
        ? userProfile.interests.find(x=>x.name === 'Category/Bags').points : 0;

    const guessScore = userProfile.interests.find(x=>x.name === 'Designer/Guess')
        ? userProfile.interests.find(x=>x.name === 'Designer/Guess').points : 0;

    const shirtsScore = userProfile.interests.find(x=>x.name === 'Category/Shirts')
        ? userProfile.interests.find(x=>x.name === 'Category/Shirts').points : 0;

    const ruleEngine = {
        banner: {
            limit: 2,
            rules: [
                {
                    validation: () => { return bagsScore > 0 },
                    contentId: "c7ff7ecd-6256-48bb-bbe4-fcc7a5619dd0",
                    priority: 1
                },
                {
                    validation: () => { return shirtsScore > 0 },
                    contentId: "924107a7-dc2b-4d13-90a7-534f4cadfab9",
                    priority: 2
                }
            ]
        },
        body: {
            limit: 5,
            rules: [
                {
                    validation: () => { return guessScore > 0 },
                    contentId: "0746e882-6a53-4e97-a273-f8e659536773",
                    priority: 1
                }
            ]
        }
    }

    return (
        <div>
            <Grid
                templateRows={{base: 'repeat(1, 1fr)', md: 'repeat(auto, 1fr)'}}
                templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)'}}
                columnGap={1}
                rowGap={1}>
                <GridItem rowSpan={1} colSpan={4}>
                    <ContentBlock request={{ id: "cd40e03b-4cd7-4084-a38d-256d297105e0" }} />
                </GridItem>
                <GridItem rowSpan={1} colSpan={4}>
                    <ContentBlock request={{ id: "3034d125-fbf7-4819-9c75-ff6f2ecafe43" }} />
                </GridItem>
                {
                    bagsScore > 0 && ( <GridItem rowSpan={1} colSpan={4}> <ContentBlock request={{ id: "c7ff7ecd-6256-48bb-bbe4-fcc7a5619dd0" }} /> </GridItem> ) 
                }
                {
                    shirtsScore > 0 && ( <GridItem rowSpan={1} colSpan={4}> <ContentBlock request={{ id: "924107a7-dc2b-4d13-90a7-534f4cadfab9" }} /> </GridItem> ) 
                }
                {
                    bagsScore == 0 && shirtsScore == 0 && ( <GridItem rowSpan={1} colSpan={4}> <ContentBlock request={{ id: "20266866-43d8-4678-a4fa-c8841c288dfe" }} /> </GridItem> ) 
                }
                {
                    guessScore > 0  && ( <GridItem rowSpan={1} colSpan={4}> <ContentBlock request={{ id: "0746e882-6a53-4e97-a273-f8e659536773" }} /> </GridItem> ) 
                }
                <GridItem rowSpan={1} colSpan={4}>
                    <ContentBlock request={{ id: "fe96ee67-204f-4a42-9dce-07605eb0cde2" }} />
                </GridItem>
            </Grid>
            <pre>
                {JSON.stringify(userProfile,null,2)}
            </pre>
        </div>
    )
}

RecsEngine.displayName = 'Amplience Recommendations Engine'

export default RecsEngine
