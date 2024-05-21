import growthtrackerImg from './assets/Growthtracker.png'
import profileImg from './assets/profile.png'
import storeImg from './assets/store.png'

import growthtrackerHeaderImg from './assets/headerGrowth.png'
import cJourneyGrowth from './assets/customerJourneyGrowthtracker.png'
import flowGrowth from './assets/flowGrowth.png'
import growthMock1 from './assets/GrowthMock1.png'
import growthMock2 from './assets/GrowthMock2.png'
import growthMock3 from './assets/GrowthMock3.png'
import growthMock4 from './assets/GrowthMock4.png'
import growthMock5 from './assets/GrowthMock5.png'
import growthMock6 from './assets/GrowthMock6.png'

import clientHeaderImg from './assets/clientHeader.png'
import clientFlow from './assets/clientFlow.png'
import clientSketch from './assets/clientSketch.png'
import clientMock1 from './assets/clientMock1.png'
import clientMock2 from './assets/clientMock2.png'
import clientMock3 from './assets/clientMock3.png'
import clientMock4 from './assets/clientMock4.png'

import storeHeaderImg from './assets/storeHeader.png'
import cJourneyStore from './assets/cjStore.png'
import storeMock1 from './assets/storeMock1.png'
import storeMock2 from './assets/storeMock2.png'
import storeMock3 from './assets/storeMock3.png'
import storeMock4 from './assets/storeMock4.png'
import storeMock5 from './assets/storeMock5.png'
import storeMock6 from './assets/storeMock6.png'
import storeMock7 from './assets/storeMock7.png'
import storeMock8 from './assets/storeMock8.png'
import storeMock9 from './assets/storeMock9.png'
import storeMock10 from './assets/storeMock10.png'
import storeMock11 from './assets/storeMock11.png'
import storeMock12 from './assets/storeMock12.png'
import storeMock13 from './assets/storeMock13.png'
import storeMock14 from './assets/storeMock14.png'


import emailImg from './assets/email.png'
import linkedinImg from './assets/linkedin.png'
import behanceImg from './assets/behance.png'


export const projectContent = [
    {
        id: 'clientprofile',
        title: "Client Profile: Redesign",
        type: "UX / UI Design",
        image: profileImg,
        details: {
            headerImg: clientHeaderImg,
            overview: [
                {paragraph: "The client profile is a tool created to create, organise, view and add all the information from a client or partner."},
                {paragraph: "With the multiple requests we've received over time and other development requests that have already been made, it has become heavier, and more challenging to navigate and use. Therefore, as we had the opportunity to simplify and enhance the user experience of the Client Profile."},
                {paragraph: "Our goal is to create a more intuitive and streamlined module that meets the needs of our users and that it is capable of maintaining the high quality of our product."},
            ],
            role: {
                name: "Product Designer",
                description: "Product Strategy, User Research, Interaction Design, Visual Design",
                date: "Mai 2023 - Set 2023",
            },
            research: {
                text: "My research initially focused on user feedback. I wanted to understand what their main tasks were and what the pain points were, so I conducted interviews to understand the user journey and discover new opportunities that we could address in this redesign.",
                findings: [
                    {name: "Profile Creation Flow",
                    quotes: [
                        {text: "“When I'm creating a new profile, I'm forced to fill in certain information and I'm also forced to advance steps that don't make sense.”"},
                        {text: "“We waste a lot of time adding client information in Profiles and Excel simultaneously and asking other teams for information.”"},
                        {text: '“At first, the steps confused me. I had to ask to understand."'},
                    ]
                },
                    {name: "Content & Information Architecture",
                    quotes: [
                        {text: "“We should have an area to attach/consult documents, such as contracts, which is visible and accessible to all teams.”"},
                        {text: "“I don't use the communications area, and I don't know how to use it.”"},
                    ]
                },
                    {name: "Interface & Usability Issues",
                    quotes: [
                        {text: "“The search doesn't stick when I go back to the list - I have to go back and search for the same thing, and it's frustrating.”"},
                        {text: '"It should present the units related to the numbers in the financial documentation"'},
                    ]
                },
                ],
            },
            flow: {
                text: [
                    {paragraph: "There are 3 different types of users: The Account Manager, who creates and fills in the information on the profiles; The Operation Team, who edit the information regarding the client logistics; The Finance Team, who edit the information regarding the client financial conditions."},
                    {paragraph: "When creating a profile, the account manager needs information from the operations and finance teams and would usually add the customer information to the profiles and Excel simultaneously, asking the other teams for the information they need."},
                    {paragraph: "In addition, the process of creation had too many steps, and some of these steps were difficult to understand."},
                    {paragraph: "We therefore decided to reduce the number of steps in the creation flows for the most important ones and also to create requests that are sent by e-mail to the other team each time an account manager needs information."},
                ],
                img: clientFlow,
            },
            sketch: {
                text: "After exploring the findings and recommendations from the user interviews and defining the best experience approach. I started to sketch the different screens for the tool. As we have a well-defined design system, I already had some guidelines for some components.",
                img: clientSketch,
            },
            mockups: [
                clientMock1, clientMock2, clientMock3, clientMock4
            ],
            conclusion: [
                {paragraph: "In conclusion, the profiles were challenging for the users and by streamlining and simplifying the steps required to complete a profile, users have a more intuitive and efficient experience, reducing frustration and potential abandonment."},
                {paragraph: "The addition of a way to request information through the tool also reduces user time and increases the efficiency of the experience."},
                {paragraph: "In addition, all of the other findings that emerged from the user interviews were taken into account in the design and development of the product."}, 
                {paragraph: "It was an incredible and challenging project for me. It was difficult to gather all the information for the different teams and understand the touch points between them, but in the end the solution developed had really good feedback from the users."},
            ],
        }
       
    },

    {
        id: 'b2bstore',
        title: "B2B Store: Redesign",
        type: "UX / UI Design",
        image: storeImg,
        details: {
            headerImg: storeHeaderImg,
            overview: [
                {paragraph: "The B2B store was created with the goal to sell items to business clients, providing specific inventory and pricing to each client."},
                {paragraph: "The difference between an e-commerce shop and a b2b store lies mainly in the users. While the average e-commerce user buys 2 to 5 items, the b2b store is aimed at businesses and they can buy more than hundreds of items."},
                {paragraph: "Our goal is to redesign an intuitive and streamlined store that meets the needs of our users."},
            ],
            role: {
                name: "Product Design",
                description: "Product Strategy, User Research, Interaction Design, Visual Design",
                date: "Set 2023 - Jan 2024",
            },
            research: {
                text: "My research initially focused on user feedback. I wanted to understand what their main tasks were and what their pain points were, but I didn't have access to the main users, so I conducted interviews with account managers (people who communicate directly with users).",
                findings: [
                    {name: "There are partners that want to download their wishlist to upload to their website."},
                    {name: "There are uses that have automatic checkout. They don’t use that flow on the store."},
                    {name: "Some usability issues have been identified in the search feature."},
                    {name: "Overall the user experience on the store was already good."},
                ],
            },
            customerJourney: {
                text: [
                    {paragraph: "After exploring the feedback from the user interviews I decided to map the various costumer journeys."},
                    {paragraph: "Most users start by searching for products and adding them to their wishlist. Then they talk to their account manager to negotiate prices, and then some of the partners download their wishlist and integrate it into their website."},
                    {paragraph: "Finally, users add the item they want to buy to their shopping cart and proceed to checkout. Some partners have automatic checkouts."},
                    {paragraph: "The customer journeys helped me to understand the different user flows and to find some features that we could implement in the future to improve usability, as counter-offers to the wishlist."},
                ],
                img: cJourneyStore,
            },
            mockups: [
                storeMock1, storeMock2, storeMock3, storeMock4, storeMock5, storeMock6, storeMock7, storeMock8, storeMock9, storeMock10, storeMock11, storeMock12, storeMock13, storeMock14
            ],
            conclusion: [
                {paragraph: "In conclusion the store already had a good user experience. All the main changes were focused mainly on the user interface and some performance issues."},
                {paragraph: "We also found that there are many opportunities for the store to grow, particularly through new features."},
                {paragraph: "I was happy to realise this project. It was a different business model than what I was used to. I've learnt a lot during this project and in the end the user feedback was really positive."},
            ],
        }
    },
    {
        id: 'growthtracker',
        title: "Growthracker: An investment app ",
        type: "UX / UI Design",
        image: growthtrackerImg,
        details: {
            headerImg: growthtrackerHeaderImg,
            overview: [
                {paragraph: "Growthtracker is an webapp that shows a way of organizing, increasing and visualizing the user’s assets and investments. With the algorithm created, they can find out how much they should sell their assets for, in order to make a profit on the whole or per unit purchased."},
                {paragraph: "It all began when a colleague asked me to help him build a platform for the algorithm he had created. This algorithm was invented to help him control all the investments he was making, because he was already losing money."},
                {paragraph: "My collegue already had a colourful excel created with the algorithm and the goals where to transform that excel into a visually appealing and easy-to-use platform that more people could use."},
            ],
            role: {
                name: "Co-owner & Product Design",
                description: "Product Strategy, User Research, Interaction Design, Visual Design",
                date: "Set 2021 - Jul 2023",
            },
            research: {
                text: "My research first focused on the competitive market. I wanted to understand what was already out there and how other apps were approaching similar problems. Finally, I conducted interviews to understand the user journey and the specific issues the app would need to address.",
                findings: [
                    {name: "There is no direct competition for the algorithm created. However, there are several applications that aim to help new investors."},
                    {name: "Most users were afraid of investing because they didn't have any idea how to keep track of their investments."},
                    {name: "Finding the right programming to invest was an issue for all, but for different reasons."},
                ],
            },
            customerJourney: {
                text: [
                    {paragraph: "I then built a customer journey map with the insights from the user interviews, where I was able to understand that the fact that this tool wasn't integrated with a broker could be a point of friction for our users."},
                    {paragraph: "As it was an MVP, we continued to design the web application without integration, but signalled it as a future improvement."},
                ],
                img: cJourneyGrowth,
            },
            flow: {
                text:[
                    {paragraph: "After exploring the findings from the research I started to define the best flow for the webapp and started to sketch the different screens."},
                    {paragraph: "The flow was simple because it was an MVP solution. There would be a home page where the user would learn about the tool, a login/signup page, a portfolio page allowing users to add their assets, an asset detail page which would allow the user to see everything about that asset, including the algorithm, and finally an account page."},
                ],
                img: flowGrowth,
            },
            mockups: [
                growthMock1, growthMock2, growthMock3, growthMock4, growthMock5, growthMock6
            ],
            conclusion: [
                {paragraph: "In conclusion, I've learnt a lot from this project, not only about design, but also about other disciplines such as business research, business planning, product management and much more."},
                {paragraph: "Although the project won't continue, we have created a solid plan for the MVP and the future."},
            ],
        }
    },

];

export const socialMedia = [
    {
        social: "Email",
        img: emailImg,
        link: "mailto: marianavsgs@gmail.com",
    },
    {
        social: "Linkedin",
        img: linkedinImg,
        link: "https://www.linkedin.com/in/mariana-santos-3a4b2615a/",
    },
    {
        social: "Behance",
        img: behanceImg,
        link: "https://www.behance.net/marianavsgs"
    },
]