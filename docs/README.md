## Inspiration
Store experiences have a distinct advantage of having store staff helping and inspiring shoppers to the right purchase decision.

We wanted to prove that we can bring the knowledge and experience into the digital world to get close to the experience of in store and not lose that connection. Hence and augmented person in an infinite shop.

The goal was to start with a blank site experience which hydrates dynamically based on user inputs. 

![Blank Site](https://raw.githubusercontent.com/amp-nova/project-steve/main/docs/project-steve-screen01.jpg)

These could be simple questions, games or click interactions to drive content and products to the end user to suit their needs. Each interaction would build a user profile and weightings and customers could not only change their answers but see why their experience was showing certain things and how the weighting was made. 

![Asking for Categories inspiration](https://raw.githubusercontent.com/amp-nova/project-steve/main/docs/project-steve-screen02.png)
![Asking for Designer inspiration](https://raw.githubusercontent.com/amp-nova/project-steve/main/docs/project-steve-screen04.png)
![Personalized content based on attributes & interests](https://raw.githubusercontent.com/amp-nova/project-steve/main/docs/project-steve-screen03.png)

Over time certain preferences would also fade so that customers can evolved and not end up ‘stuck’ in a personalised route.

## What it does
Project Steve is a self-evolving application which delivers experiences to the customer based on interactions.

The content displayed is matched with rules, meta data, tags and facets to return the right content.

All the content and experience are managed through Amplience so that questions, content and products can evolve over time.

## How we built it
The application is a simple React Next.js, deployed on Vercel and consuming content from Amplience and Algolia via APIs. Products are coming from CommerceTools and are indexed in Algolia.

There are some simple API connectors to fetch content based on user interactions and a simple component which can draw any components dynamically onto the page when the user profile changes. We are also using the Serverless feature from Next.js to update the user profile using REST endpoints.

![Current Architecture](https://raw.githubusercontent.com/amp-nova/project-steve/main/docs/project-steve-architecture.png)

We implemented some advanced user profile using attributes, interests and scores to give more flexibility to the recommendation engine. Scores are also decreasing over time, keeping the personalization fresh, based on the latest user interactions (questions answered, and potentially categories & products browsed, clicks, time spend on a product detail page, etc.).

```
{
  "email": "davelilly@johndoe.com",
  "name": "Dave Lilly",
  "attributes": [
    {
      "name": "favoriteColor",
      "value": "red",
      "points": 8
    }
  ],
  "interests": [
    {
      "name": "Designer/MoschinoLove",
      "points": 24
    },
    {
      "name": "Designer/Guess",
      "points": 5
    },
    {
      "name": "Category/Bags",
      "points": 36
    },
    {
      "name": "Category/Shirts",
      "points": 6
    }
  ]
}
```

Question Sets along with Answers and Actions (triggering REST endpoints) have been fully modelled in Amplience, for a better business user experience and higher flexibility. All content like images, videos, banners, card lists are coming from Amplience too.

![Question Sets with Answers and Actions in Amplience DC](https://raw.githubusercontent.com/amp-nova/project-steve/main/docs/project-steve-screen05.png)
![All content in Amplience DC](https://raw.githubusercontent.com/amp-nova/project-steve/main/docs/project-steve-screen06.png)

## Challenges we ran into
Resourcing! The MACHathon team were also committed to other customer projects. So, we were extremely limited to time for build. Our ideation phase had some amazing ideas but with only a few hours to execute them we had to pick a minimum path and produce patterns instead of a fully-fledged application and some hard coded pieces to demonstrate the concepts!

## Accomplishments that we're proud of
Producing this demo project in a few hours ready for submission was some great work. 

## What we learned
MACH technologies ensure that we can deliver experiences extremely fast and allow us to pivot quickly.

The Taxonomy and information architecture is vital in order to deliver a personalised experience. All content (products, banners, articles, cards) need to have structured data for systems to be able to deliver the right content in an automated sense.

## What's next for Project Steve
Implement more Algolia features such as analytics, personalisation, boosting rules and recommendations. Basically bringing ‘Steve’ to life!