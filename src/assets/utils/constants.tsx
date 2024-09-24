import Gleam from "../imgs/gleam.webp";
import SimMarket from "../imgs/simmarket.webp";
import SeaForester from "../imgs/seaforester.webp";
import Cantihodo from "../imgs/cantinhodocoimbra.webp";
import React from "react";
import { NavigationLink, Project, Skill, SocialLink, Tool } from "./types";
import exp from "constants";

enum ProjectColors {
    Blue = '#589BDE',
    Red = '#EC5344',
    Navy = '#3E3D91',
    Yellow = '#F9B25C',
    Black = '#13151C',
    Green = '#1A988B',
    Mint = '#31C4A9',
    DarkGreen = '#025458',
    LightBlue = '#0298BD'
}

export enum ProjectCategories {
    website = 'Websites',
    app = 'Apps',
    lab = 'Lab'
}

export enum PortfolioOwner {
    FirstName = 'Fahad',
    LastName = 'Ibrahim',
    Email = 'fibrahimbutt@gmail.com',
    Number = '+92 339 4080410',
    Upwork = 'https://www.upwork.com/freelancers/leaddeveloper',
    GitHub = 'https://github.com/fahadibrahimdev',
    StackOverflow = 'https://stackoverflow.com/users/22702312/lead-dev',
    LinkedIn = 'https://www.linkedin.com/in/fahad-ibrahim-251a102b2'
}

const sayHelloLinkText: JSX.Element = <>Say Hello <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10.97 14.47a.75.75 0 101.06 1.06l5-5a.75.75 0 000-1.06l-5-5a.75.75 0 10-1.06 1.06l3.72 3.72H4a.75.75 0 000 1.5h10.69l-3.72 3.72z" fill="currentColor"></path>
</svg></>

export const navigationLinks: NavigationLink[] = [
    { label: 'Home', path: '/', title: 'Home', isInternalLink: true },
    { label: 'Projects', path: '/projects', title: 'Projects', isInternalLink: true },
    { label: 'About', path: '/about', title: 'About', isInternalLink: true },
    { label: sayHelloLinkText, path: PortfolioOwner.Upwork, title: 'Say Hello', isInternalLink: false }
]

export const socialLinks: SocialLink[] = [
    { label: 'GitHub', path: PortfolioOwner.GitHub },
    { label: 'Linkedin', path: PortfolioOwner.LinkedIn },
    { label: 'Upwork', path: PortfolioOwner.Upwork },
    { label: 'Stack Overflow', path: PortfolioOwner.StackOverflow }
]

export const projects: Project[] = [
    {
        id: 'renaissant-mobile',
        category: ProjectCategories.website,
        title: 'Renaissant Mobile',
        subtitle: 'Management',
        description: 'The Renaissant solution suite makes organizations more efficient, promotes stakeholder accountability, and weaves safety into all features and functions.',
        coverImage: '/projects/renaissant/cover.png',
        images: [
            '/projects/renaissant/variation-1.png',
            '/projects/renaissant/variation-2.png',
            '/projects/renaissant/variation-3.png',
            '/projects/renaissant/variation-4.png'
        ],
        appStoreLink: 'https://apps.apple.com/us/app/renaissant-mobile/id1498412010',
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.intelaegis.mobile X',
        tools: [],
        color: '#e31892'
    },
    {
        id: 'renaissant-kiosk-v1',
        category: ProjectCategories.website,
        title: 'Renaissant KIOSK (Version 1) ',
        subtitle: 'Management',
        description: 'The Renaissant solution suite makes organizations more efficient, promotes stakeholder accountability, and weaves safety into all features and functions.',
        coverImage: '/projects/renaissant/cover.png',
        images: [
            '/projects/renaissant/variation-1.png',
            '/projects/renaissant/variation-2.png',
            '/projects/renaissant/variation-3.png',
            '/projects/renaissant/variation-4.png'
        ],
        appStoreLink: '',
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.intelaegis.kiosk X',
        tools: [],
        color: ProjectColors.Red
    },
    {
        id: 'renaissant-kiosk-v2',
        category: ProjectCategories.website,
        title: 'Renaissant KIOSK (Version 2) ',
        subtitle: 'Management',
        description: 'The Renaissant solution suite makes organizations more efficient, promotes stakeholder accountability, and weaves safety into all features and functions.',
        coverImage: '/projects/renaissant/cover.png',
        images: [
            '/projects/renaissant/variation-1.png',
            '/projects/renaissant/variation-2.png',
            '/projects/renaissant/variation-3.png',
            '/projects/renaissant/variation-4.png'
        ],
        appStoreLink: '',
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.renaissantkiosk',
        tools: [],
        color: ProjectColors.Red
    },
    {
        id: 'renaissant-carrier',
        category: ProjectCategories.website,
        title: 'Renaissant Carrier',
        subtitle: 'Management',
        description: 'The Renaissant solution suite makes organizations more efficient, promotes stakeholder accountability, and weaves safety into all features and functions.',
        coverImage: '/projects/renaissant/cover.png',
        images: [
            '/projects/renaissant/variation-1.png',
            '/projects/renaissant/variation-2.png',
            '/projects/renaissant/variation-3.png',
            '/projects/renaissant/variation-4.png'
        ],
        appStoreLink: '',
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.renaissant.carrier',
        tools: [],
        color: ProjectColors.Red
    },
    {
        id: 'whatstocks',
        category: ProjectCategories.website,
        title: 'WhatStocks',
        subtitle: 'Stock Market',
        description: 'A place that combines discovering, learning, and asking questions about stocks, to enable you to create your ideal investment portfolio.',
        coverImage: '/projects/whatastocks/cover.png',
        images: [
            '/projects/whatastocks/variation-1.png',
            '/projects/whatastocks/variation-2.png',
            '/projects/whatastocks/variation-3.png',
        ],
        appStoreLink: '',
        playStoreLink: '',
        tools: [],
        color: '#112233'
    },
    {
        id: 'sal',
        category: ProjectCategories.app,
        title: 'SAL- Mobile Modeller',
        subtitle: 'Finance and Insurance',
        description: 'Tap into the cost of life insurance products with the Mobile Modeller. Harnessing the power and flexibility of the Mo.net Financial Modelling Platform the app demonstrates how your existing financial models can be used to service front-office or back-office insurance calculations.',
        coverImage: 'https://play-lh.googleusercontent.com/NDiPkWbaweRwO-bmFB6znEE9M0gwY2yg4Ma1W1RWZOLUHLzdW0xUxWW5SHp8ANTYeRjB=w240-h480-rw',
        images: [
            'https://play-lh.googleusercontent.com/zUy2TKGLowAW5FpR3ZXZU0nTSO5G5gwVnr-OWB6tG-cSzaD860XNJlCfghP259wDMQE=w526-h296-rw',
            'https://play-lh.googleusercontent.com/__8spwjRz7C46zLEcRUGsg1Kfaqo8mI6z-4SzhMaXjrIZ8dVgynGs0NRxEQxEei1Fg=w526-h296-rw',
            'https://play-lh.googleusercontent.com/f-KWcRjjvm6zgMqglXyCJCHOgYXxe3egR8LsX8RHAmPxJSydPBIcgnJrKE4JU7xb_XY=w526-h296-rw',
            'https://play-lh.googleusercontent.com/VRpP2eJ3vM1mey1MMCAkUFO8wUQ76M9BoxtTg7TIk2B1AHkna2ngGekAYwyjpGUzsQ=w526-h296-rw',
            'https://play-lh.googleusercontent.com/EYPpN1Yd1m-KsBcbsB2601PyOh2f8UvKo7Pq4wU9gWinUZnkFb0AVJPgDRWTTMtVVFM=w526-h296-rw'
        ],
        appStoreLink: '',
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.renaissant.carrier',
        tools: [],
        color: ProjectColors.LightBlue
    },
    {
        id: 'venvue-gps',
        category: ProjectCategories.app,
        title: 'VenueGPS',
        subtitle: 'Information & Events',
        description: 'VenueGPS guarantees a simplified and revolutionized new way the entire world will travel, by personalizing all entertainment experiences from fantasy to real-time fun! VenueGPS is a digital promoter, concierge, yellow page directory & marketing managing application to Consumers, Businesses and Entertainers.',
        coverImage: 'https://play-lh.googleusercontent.com/9UUXhN5GMc0epxe_SeMUpz1ZnuL3pPkqdW98KKxNcIShpdGdOOFNnfMWDo0VVqXfHRg=w240-h480-rw',
        images: [
            'https://play-lh.googleusercontent.com/FPnK0x6Nr5BvgymjVWILp8eQZQpNd2tyIf9kJlG7hlcpOcFS8R9_2V5U3hZgRmtBsfKT=w526-h296-rw',
            'https://play-lh.googleusercontent.com/HNOWFi8JZTamwHqbbEJDp-IYYNJ9Nf3psPqysqyLOrbLhIU6B4b3RB_dc2qjJ7oi8sw=w526-h296-rw',
            'https://play-lh.googleusercontent.com/Gq8tkmN1NhazNGf3ye7NbSVVD4i3OHbOpD7rU9Id5Q-tBZqssnCwcEs7fTH_j4NAVLAs=w526-h296-rw',
            'https://play-lh.googleusercontent.com/8yV27331DdZDG_giwyCaYOm1NJ8MwE7Siqoqn5ZWbb8GDP6y1tkpfSO-juZT18JrsEnD=w526-h296-rw',
            'https://play-lh.googleusercontent.com/BT6PwWK9ysD5oKuHsBuWVnqAi60s1VvEKIhBN3vk75jmoazcYWR8eeX3PCYm14xV-0m0=w526-h296-rw'
        ],
        appStoreLink: 'https://apps.apple.com/pk/app/venuegps/id1613059136',
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.thunders.venuegps',
        tools: [],
        color: '#887654'
    },
    {
        id: 'dibbs',
        category: ProjectCategories.website,
        title: 'DIBBS',
        subtitle: 'Ecommerce',
        description: 'A platform for local business to connect with their communities. Find great deals from businesses you’ve shopped with in the past or discover new ones that you may love. From restaurants, to entertainment, to self-care, you’re sure to find something that will be to good to pass up. Pay only a fraction of the price of the deal upfront to claim it and redeem it whenever you’re ready.',
        coverImage: 'https://play-lh.googleusercontent.com/pGfFbAAalDVRzqA2GwE14FS7sjyH5BvsXOeSdaihRvht7dO9Yowm82SInokajSO0XRg=w240-h480-rw',
        images: [
            'https://play-lh.googleusercontent.com/gkOgHqoD4YMYcJEtfWmn7SS_fNm95erTX53MB6A5xucSBL109NoWyEPMK-0_2-iquKk=w526-h296-rw',
            'https://play-lh.googleusercontent.com/6cJklY8e3aRt0nWl9yBMjZde7-ez_w6zbGk7xlDZl0N8jx1OhxSZgpkiZpT-qTv0z1xU=w526-h296-rw',
            'https://play-lh.googleusercontent.com/RStgM8B6z0pyP8PnuVZ0pPk62bJwaXUWAa22UJ12nQfbru5L54p0NFxudWltP7SeqjlY=w526-h296-rw',
            'https://play-lh.googleusercontent.com/KKdAp5fECOdjNBQcuI4YIRCnUT9qNKTFw3am01sKgNlEdNXy0e_iKr842V5LGxSNGJYs=w526-h296-rw'
        ],
        appStoreLink: '',
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.thunder.dibbs',
        tools: [],
        color: ProjectColors.Blue
    },
    {
        id: 'thenx',
        category: ProjectCategories.website,
        title: 'Thenx',
        subtitle: 'Fitness App',
        description: 'Thenx is designed to teach anyone the secret techniques and knowledge of bodyweight training. These programs have been tested and developed over many years by professional instructors and athletes to provide the most direct and simplistic format to excel in calisthenics fitness and ability. In these programs you will face challenges, but the skills and abilities that you will develop through proper guided progression is obtainable by anyone from any age or any fitness level. The content provided is designed in short video format with the purpose to convey the techniques and exercises at your own pace, ensuring proper form to be easily repeated, personalizing your workout experience.',
        coverImage: 'https://play-lh.googleusercontent.com/2SAidba7Exwo6-Wf-NUJMIW3ru2FWREsuDFYWPJyPITtNi5_Gnf2x_s1DWTaAqL1B2s=s48-rw',
        images: [
            'https://play-lh.googleusercontent.com/mfVTid45zoUSatVSDa_H1Cr0tqinwlTZGKFIJd2PTw6L31nM6z5d6-HJWNGn2Anhu2w=w526-h296-rw',
            'https://play-lh.googleusercontent.com/dZWkKDwJP6niJGMZYEKO0okf5onbXcOHiw-PNJlTec4kgYy_iHqa8cjeiTQYbVVI99Eb=w526-h296-rw',
            'https://play-lh.googleusercontent.com/ymzpZd-yE5LGBHkhNOcOjOzEZumnnSV9LCP8JVued5VZVlMtf4ZtOttruoRyl2oZA_s=w526-h296-rw',
            'https://play-lh.googleusercontent.com/9nUaXr_YshTsP_X_W_DkqG1c-4unjRf6oskfX7Wyfh6wtSgBl2irTpiG6d39IeCOxBE=w526-h296-rw'
        ],
        appStoreLink: 'https://apps.apple.com/us/app/thenx/id1192413645',
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.sysops.thenx',
        tools: [],
        color: "#894423"
    },

    {
        id: 'dukan-pk',
        category: ProjectCategories.website,
        title: 'Dukan.pk',
        description: 'Dukan is a complete e-commerce solution for you to take your business online. Dukan App allows you to create your store in just 29 seconds and access a host of services that are critical for a successful e-commerce business. From product and inventory management, khata - bookkeeping, accepting online payments through EasyPaisa, JazzCash OR credit cards, multiple delivery options with Bykea or Pandago for quick 30 mins delivery to Trax and Movex for nationwide fulfillment.',
        subtitle: 'Online Stores',
        coverImage: 'https://play-lh.googleusercontent.com/4_SxmqayQItdQalJqj5laCzQXw7EHczTBaSt61hmuK5ZMps634tcl2Mg1tviuN9Uk6Oc=s48-rw',
        images: [
            'https://play-lh.googleusercontent.com/TbcU9eLbnArFzSms04ggMZ_rd9fh4imhl5VxplX3ZhoQdBjG0j7T9VfdmXGNlPYEFg=w526-h296-rw',
            'https://play-lh.googleusercontent.com/c5h3nmYermr9XbDf28V6WVK7aajJ86ZGTIkgjk1QVqJQYREpZZWX6fKPu9tNWoIacPo=w526-h296-rw',
            'https://play-lh.googleusercontent.com/tm6U289vWjhqyiVH5JatX1P0_qTm7vvhcqGGG-1lOQEmlEKUSOiw9F4dbdMIEEdRt1Ag=w526-h296-rw',
            'https://play-lh.googleusercontent.com/Fyu4xBVMvN_gLia-F0tD7psEdsKDT-JVvRbqMsvQEyOeX7y-gSX1XdV00_DsrnTa0g=w2560-h1440-rw'
        ],
        appStoreLink: 'https://apps.apple.com/pk/app/dukan-pk-digitizing-sellers/id1525721580',
        playStoreLink: 'https://play.google.com/store/apps/details?id=pk.dukan&hl=en&gl=US',
        tools: [],
        color: "#090954"
    },
    {
        id: 'score-board',
        category: ProjectCategories.app,
        title: 'ScoreBoard',
        subtitle: 'for Sports score counting',
        description: 'Whether you\'re a coach, a referee, or just a fan, our app has everything you need to keep track of the score. With our easy-to-use interface and customizable features, you can create the perfect scoreboard for any game.',
        coverImage: 'https://play-lh.googleusercontent.com/IaDRPWwXFt5MIBiera9i1scKY6mtHnX5YjFvLcXwOcAVAj5QkawU_3hxBG9E-dvT1eea=w240-h480-rw',
        images: [
            'https://play-lh.googleusercontent.com/pDzfn0RRIshbMDQrno0Da4CokQnYpdR7zkksrTCtKU8iekGjf1uZ6ZNVNODzV7fz_aQ=w526-h296-rw',
            'https://play-lh.googleusercontent.com/WbOnwaMbzMe5UP6TQ-jbZZ-vCoDp8ltidxC0GSBOolHuM9yiQPAP7L0vLvaTDFdxShc=w526-h296-rw',
            'https://play-lh.googleusercontent.com/u58vF871rISi3TmaKB3YSQbcr0Dn2HAhCCP4u_AE1Fiq7YIN54Rb7eItPYTEoP59YSI=w526-h296-rw',
            'https://play-lh.googleusercontent.com/mROZpphmws6hRyWf35cAjpIVU3tOR_N9wOb_PZf9AzRIuD2oG2q_K0Ze_CeFOJL-U48=w526-h296-rw'
        ],
        appStoreLink: '',
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.vuproductionsmedia.scoreboard&hl=en&gl=US',
        tools: [],
        color: "#674379"
    },
    {
        id: 'dboard',
        category: ProjectCategories.website,
        title: 'Dboard',
        subtitle: 'Attendance Management System',
        description: 'Revolutionize your office management experience with our cutting-edge, all-encompassing platform designed to seamlessly handle both employee administration and attendance tracking. This sophisticated solution empowers you to efficiently navigate through the intricacies of workforce management, offering a centralized hub for all your office-related tasks.',
        coverImage: 'https://play-lh.googleusercontent.com/UbmlJUFal0zxhfkehz0rBIR6GfkTMSG1wNAkTJo79vyLGjADMI1jc-OEiiWaPQdBIg=w240-h480-rw',
        images: [
            'https://play-lh.googleusercontent.com/8123374g5_lOBf5SM3L9EIjFyXFEEDWWn5popcXjBwfvYUscO39YDgOrONV5f4ZNAcE=w526-h296-rw',
            'https://play-lh.googleusercontent.com/v5mxGqODp1pQsqdqauMCkDeStN_LBgBkyVqu3HZkkH8P3iPPvHrfLhasmacldDHUnuE=w526-h296-rw',
            'https://play-lh.googleusercontent.com/GAvGAFaNw8tPhvNDse6vg9YMMjvTQv87MqF_XPQxxgRZMLbJHS29pAxf7hSX2CFdgWo=w526-h296-rw',
            'https://play-lh.googleusercontent.com/XmHlPeh5N02bB-idhj1OlzJew4zhtY7bxdkpkUK1XNPT8sryjHOlTuZq6_tZe7-pINs=w526-h296-rw'
        ],
        appStoreLink: '',
        playStoreLink: 'https://play.google.com/store/apps/details?id=com.devdock.dboard&pli=1',
        tools: [],
        color: ProjectColors.Red
    }
]


export const clientsFeedback = [
    {
        companyName: 'DevDock',
        name: 'Abdul Wahab',
        feedback: 'Fahad exceeded our expectations with his attention to detail and commitment to quality work. Our website is now mobile and SEO optimised. All thanks to him.',
        logo: 'https://devprofiles.thundertechsol.com/devdock/public/reactjsassets/Logos/devdock.svg',
        image: 'https://devprofiles.thundertechsol.com/devdock/public/reactjsassets/Avatars/aw.jpg',
        bgColor: ['#d1f2fd', '#d1f2fd'],
        productLink: 'https://www.devdock.tech/',
        designation: '',
    },
    {
        companyName: 'Dibbs',
        name: 'Emmanuel Arciga',
        feedback: 'Fahad played an important role in the mobile development of Dibbs. He communicated well and provided regular updates and meet the deadlines. HE IS THE BEST!!!',
        logo: 'https://devprofiles.thundertechsol.com/devdock/public/reactjsassets/Logos/dibbs.png',
        image: 'https://devprofiles.thundertechsol.com/devdock/public/reactjsassets/Avatars/avatar-1.jpg',
        bgColor: ['#fff', 'rgba(104,56,112,0.8)'],
        productLink: 'https://softwarealliance.net/',
        designation: '',
    },
    {
        companyName: 'MAB Solutions',
        name: 'Muhammad Abdullah',
        feedback: 'When it comes to technology, it is fair to say that Fahad is a genius. They understood my concept immediately and built an excellent web app which proved to be far better than what I had in mind.',
        logo: 'https://devprofiles.thundertechsol.com/devdock/public/reactjsassets/Logos/mab.webp',
        image: 'https://devprofiles.thundertechsol.com/devdock/public/reactjsassets/Avatars/avatar-2.jpg',
        bgColor: ['#00acbb', '#ccc'],
        productLink: 'https://mabsolutions.com.pk/',
        designation: '',
    },
    {
        companyName: 'Renaissant',
        name: 'Patrick Wilkinson',
        feedback: 'Working with Fahad was a remarkable and pleasant experience! He managed to implement all my app ideas along with great design and intuitive elements. Would definitely recommend!',
        logo: 'https://devprofiles.thundertechsol.com/devdock/public/reactjsassets/Logos/renaissant.webp',
        image: 'https://devprofiles.thundertechsol.com/devdock/public/reactjsassets/Avatars/avatar-3.jpg',
        bgColor: ['#fff', '#CE5028'],
        productLink: 'https://renaissant.com/',
        designation: '',
    },
    {
        companyName: 'SAL',
        name: 'Lino Virgilio Domenico',
        feedback: 'Fahad\'s command over mobile and web development impressed me as he was equally able to handle both. He developed an effective and easy-to-use platform for my business, SAL. Highly Recommended!',
        logo: 'https://devprofiles.thundertechsol.com/devdock/public/reactjsassets/Logos/sal.svg',
        image: 'https://devprofiles.thundertechsol.com/devdock/public/reactjsassets/Avatars/avatar-4.jpg',
        bgColor: ['#1c4f60', '#767479'],
        productLink: 'https://thedibbsapp.com/',
        designation: '',
    },
    {
        companyName: 'Tepia',
        name: 'David Ryan Pabon',
        feedback: 'Fahad Ibrahim is a fantastic coder. He resolved any technical challenges we faced during the development process and was also available for application launch and it\'s maintenance afterwards. He is, no doubt, the best asset of my team',
        logo: 'https://devprofiles.thundertechsol.com/devdock/public/reactjsassets/Logos/tepia.svg',
        image: 'https://devprofiles.thundertechsol.com/devdock/public/reactjsassets/Avatars/avatar-5.jpg',
        bgColor: ['#80C97A', '#80C97A'],
        productLink: 'https://tepia.co/',
        designation: '',
    },
]

export const teamMembers = [
    {
        name: 'Catarina Coimbra',
        designation: 'Business Developer & Project Manager',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcatarina.cce29745.png&w=3840&q=100',
        quote: 'Planning, coordinating, and reviewing amazing projects.'
    },
    {
        name: 'Diogo Dias',
        designation: 'Frontend Developer',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiogo.d9355407.png&w=3840&q=100',
        quote: ''
    },
    {
        name: 'Francisco Lopes',
        designation: 'Lead Developer',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffrancisco.df5459ae.png&w=3840&q=100',
        quote: ''
    },
    {
        name: 'Gabriel Oliveira',
        designation: 'Full-Stack Developer',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgabriel.af0e1058.png&w=3840&q=100',
        quote: ''
    },
    {
        name: 'Gonçalo Dias',
        designation: 'UX & UI Designer',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoncalo.29ea63a0.png&w=3840&q=100',
        quote: 'Making the world a better place, one pixel at a time.'
    },
    {
        name: 'João Ribau',
        designation: 'Frontend Developer',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjoao.170b2e58.png&w=3840&q=100',
        quote: 'Turning designs into pixel perfect web applications.'
    },
    {
        name: 'João Saraiva',
        designation: 'Founder & CEO',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjoao-s.e14a5449.png&w=3840&q=100',
        quote: 'Always on the lookout for the next big idea. Maybe yours? Driven by work quality. Trying not to take myself so seriously.'
    },
    {
        name: 'Vitoria Peres',
        designation: 'UX & UI Designer',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvitoria.30678cd9.png&w=3840&q=100',
        quote: 'Design it’s about solving problems into beautiful solutions.'
    }
]


export const dates = [
    {
        title: '2022 Retreat: Ponte de Lima',
        description: 'Daily pool dips, collaborative work, our annual cooking competition tradition, craft beers, the local fair at Ponte de Lima, and yet another successful horror escape room in Guimarães. This retreat was a blast!',
        date: 'September 2022',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fseptember-2022.d7dbb201.jpg&w=3840&q=100'
    },
    {
        title: '2021 Retreat: Alvor',
        description: 'Our 2021 team retreat was filled with amazing views and activities. From working together to conquer an horror escape room to a having a superb boat excursion to the beatiful scenery of the Benagil caves, we had a great time together.',
        date: 'September 2021',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faugust-2021.2e28174e.jpg&w=3840&q=100'
    },
    {
        title: '2020 Retreat: Vilamoura',
        description: 'We had a blast in our 2020 retreat: we tested our physiques in a mega paintball match, sped in a karting race and had an overall great time getting together for the first time since the beginning of the pandemic.',
        date: 'November 2020',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnovember-2020.b5066a88.jpg&w=2048&q=100'
    },
    {
        title: 'Remote Gatherings',
        description: 'Since we couldn’t get together for our quarterly dinners once the pandemic began, we came up with new remote solutions to hang out — one of them was playing some online games, like creating the best themed t-shirt design.',
        date: 'March 2020',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarch-2020.7b8614d3.jpg&w=3840&q=100'
    },
    {
        title: '2019 Retreat: Sines',
        description: 'The 2019 retreat had a new participant: João Ribau joined the team that year and spent a week in Sines with João, Francisco and Zola. The week was spent working, eating and drinking (local craft beer), in a very chill environment.',
        date: 'July 2019',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjuly-2019.c2572a82.jpg&w=3840&q=100'
    },
    {
        title: '2018 Retreat: Thailand',
        description: 'Concealed’s first team retreat was a basic FULL MONTH trip to Thailand, where Francisco and João got to eat amazing food and know some awesome elephants. Zola sat this one out as she isn’t the biggest fan of elephants.',
        date: 'September 2018',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fseptember-2018.eea2caad.jpg&w=3840&q=100'
    },
    {
        title: 'Francisco joins Concealed',
        description: 'Although João’s dog Zola was the first colleague in Concealed’s office, the team was only truly created when Francisco joined as well.',
        date: 'April 2018',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapril-2018.6e60c87b.jpg&w=3840&q=100'
    },
    {
        title: 'Concealed foundation',
        description: 'Concealed was created in João Saraiva’s one-bedroom apartment’s living room in Lisbon in 2017 with the goal of assembling a fully-remote digital agency.',
        date: 'February 2017',
        image: 'https://www.concealed.pt/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffebruary-2017.7c007890.jpg&w=3840&q=100'
    }
]

export const skills: Skill[] = [
    {
        title: 'ReactNative',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/React-native.png',
        rating: 98
    },
    {
        title: 'Kotlin',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/kotlin.png',
        rating: 95
    },
    {
        title: 'Java',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/java.png',
        rating: 95
    },
    {
        title: 'Swift',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/swift.png',
        rating: 95
    },
    {
        title: 'Next.js',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/next-js.png',
        rating: 85
    },
    {
        title: 'React.js',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/skills/reactjs.png',
        rating: 85
    },
    {
        title: 'Vue.js',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/vue.png',
        rating: 80
    },
    {
        title: 'Node.JS',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/nodejs.png',
        rating: 90
    },
    {
        title: 'Express',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/express.js.png',
        rating: 90
    },
    {
        title: 'Javascript',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/javascript.png',
        rating: 90
    },
    {
        title: 'Typescript',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/typescript.png',
        rating: 85
    },
    {
        title: 'Functional Programming',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/functional programming.png',
        rating: 90
    },
    {
        title: 'App Store',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/google play store.png',
        rating: 95
    },
    {
        title: 'Play Store',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/appstore.png',
        rating: 95
    },
    {
        title: 'SQL',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/sql.png',
        rating: 95
    },
    {
        title: 'PostgresSQL',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/postgresql.png',
        rating: 95
    },
    {
        title: 'MongoDB',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/mongo db.png',
        rating: 95
    },
    {
        title: 'AWS',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/aws.png',
        rating: 95
    },
    {
        title: 'Docker',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/docker.png',
        rating: 95
    },
    {
        title: 'Redux',
        description: '',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/redux.png',
        rating: 95
    },
]

export const tools: Tool[] = [
    {
        title: 'Xcode',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/xcode-seeklogo.png'
    },
    {
        title: 'Android Studio',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/Group 1.png'
    },
    {
        title: 'VS Code',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/vs code.png'
    },
    {
        title: 'Postman',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/postman.png'
    },
    {
        title: 'cPanel',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/Vector.png'
    },
    {
        title: 'Docker Hub',
        icon: 'https://devprofiles.thundertechsol.com/devdock/public/png/docker.png'
    },
    {
        title: "GitHub",
        icon:
            "https://devprofiles.thundertechsol.com/devdock/public/tools/github.png",
    },
    {
        title: "Slack",
        icon:
            "https://devprofiles.thundertechsol.com/devdock/public/png/slack.png",
    },
    {
        title: "Notion",
        icon:
            "https://devprofiles.thundertechsol.com/devdock/public/png/notion.png",
    },
    {
        title: "Discord",
        icon:
            "https://devprofiles.thundertechsol.com/devdock/public/png/discord.png",
    },
    {
        title: "Chat GPT",
        icon:
            "https://devprofiles.thundertechsol.com/devdock/public/png/chatgpt.png",
    },
    {
        title: "App Store",
        icon:
            "https://devprofiles.thundertechsol.com/devdock/public/png/appstore.png",
    },
    {
        title: "Play Store",
        icon:
            "https://devprofiles.thundertechsol.com/devdock/public/png/google play store.png",
    },

]

export const services: { label: string, text: string, icon: React.ReactNode }[] = [
    {
        label: '8+',
        text: 'Years of Experience',
        icon: <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><g className="clippy"><path fill="#3D43D8" fillOpacity="0.8" stroke="#fff" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" d="M7 7h32v32H7z"></path><path d="M15 7h16l-2.5 6h-11L15 7z" fill="#040B10" stroke="#fff" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"></path><path className="group-hover:[stroke-opacity:0] group-hover:[stroke-dashoffset:0] svg-transition" d="M15 23h8M15 29h4" stroke="#fff" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
    },
    {
        label: '55+',
        text: 'Completed Projects',
        icon: <svg overflow="visible" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><g className="pencil"><path fill="none" d="M0 0h46v46H0z"></path><g filter="url(#filter0_d_12_623)"><path fillRule="evenodd" clipRule="evenodd" d="M-.128 31.462a.5.5 0 01.344-.48l22.641-7.457a.5.5 0 01.315 0l22.613 7.544a.5.5 0 01-.011.952l-22.64 6.957a.5.5 0 01-.296 0L.223 31.935a.5.5 0 01-.35-.473zm2.139-.018l20.976 6.533 21.001-6.454-20.975-6.996L2.01 31.444z" fill="#FCFCFA" fillOpacity="0.6" shapeRendering="crispEdges"></path></g><g className="group-hover:[transform:matrix(1,0,0,1,8,0)] svg-transition" stroke="#F9F6F1" strokeOpacity="0.6" strokeLinecap="round" data-svg-origin="19.392000198364258 5.679998397827148" transform="matrix(1,0,0,1,0,0)"><path d="M36.546 5.682l8.126 8.126-17.62 17.155h-7.66V23.3l17.154-17.62z" fill="#3238B0"></path><path d="M36.546 5.682l8.126 8.126-3.18 2.934-4.228-4.35-3.611-3.53 2.893-3.18z" fill="#3238B0"></path><path d="M33.714 8.965l7.661 7.661M20.581 22.098l7.661 7.661" strokeLinejoin="round"></path></g></g><defs><clipPath id="clip0_12_623"><path fill="#fff" d="M0 0h46v46H0z"></path></clipPath><filter id="filter0_d_12_623" x="-7.128" y="20.5" width="60.255" height="29.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="3.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12_623"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_12_623" result="shape"></feBlend></filter></defs></svg>
    },
    {
        label: '40+',
        text: 'Achievements',
        icon: <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><g className="development" clipPath="url(#clip0_12_604)"><path fill="none" d="M0 0h46v46H0z"></path><g className="group-hover:[transform:matrix(1,0,0,1,0,-6)] svg-transition" filter="url(#filter0_d_12_604)" shapeRendering="crispEdges" data-svg-origin="0.37299999594688416 24.5" transform="matrix(1,0,0,1,0,0)"><path d="M.373 32L23 24.5 45.627 32 23 39 .373 32z" fill="#3D43D8" fillOpacity="0.8"></path><path d="M.373 32L23 24.5 45.627 32 23 39 .373 32z" stroke="#FCFCFA" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"></path></g><g filter="url(#filter1_d_12_604)" shapeRendering="crispEdges"><path d="M.373 23L23 15.5 45.627 23 23 30 .373 23z" fill="#3D43D8" fillOpacity="0.8"></path><path d="M.373 23L23 15.5 45.627 23 23 30 .373 23z" stroke="#FCFCFA" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"></path></g><g className="group-hover:[transform:matrix(1,0,0,1,0,6)] svg-transition" filter="url(#filter2_d_12_604)" shapeRendering="crispEdges" data-svg-origin="0.37299999594688416 6.5" transform="matrix(1,0,0,1,0,0)"><path d="M.373 14L23 6.5 45.627 14 23 21 .373 14z" fill="#3D43D8" fillOpacity="0.8"></path><path d="M.373 14L23 6.5 45.627 14 23 21 .373 14z" stroke="#FCFCFA" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"></path></g></g><defs><filter id="filter0_d_12_604" x="-7.127" y="21" width="60.255" height="29.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="3.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12_604"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_12_604" result="shape"></feBlend></filter><filter id="filter1_d_12_604" x="-7.127" y="12" width="60.255" height="29.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="3.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12_604"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_12_604" result="shape"></feBlend></filter><filter id="filter2_d_12_604" x="-7.127" y="3" width="60.255" height="29.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="3.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_12_604"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow_12_604" result="shape"></feBlend></filter><clipPath id="clip0_12_604"><path fill="#fff" d="M0 0h46v46H0z"></path></clipPath></defs></svg>
    },
    {
        label: '24',
        text: 'Happy Customers',
        icon: <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-[-30deg] group-hover:rotate-[-180deg] svg-transition"><g data-svg-origin="23 23" transform="matrix(1,0,0,1,0,0)"><path fill="none" d="M0 0h46v46H0z"></path><circle cx="23" cy="23" r="16" fill="#3D43D8" fillOpacity="0.8"></circle><circle cx="23" cy="23" r="15.5" stroke="#FCFCFA" strokeOpacity="0.6"></circle><circle cx="23" cy="23" r="7" fill="#040B10"></circle><path opacity="0.9" d="M42.846 29.994l-4.276-5.649-6.341 3.661M2.155 20.414l5.592 4.35 5.177-5.178" stroke="#FCFCFA" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
    }
]
