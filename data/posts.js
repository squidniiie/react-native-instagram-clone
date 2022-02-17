import { USERS } from './users'

export const POSTS = [
    {
        imageUrl: "https://media.istockphoto.com/photos/aerial-view-of-impressive-na-pali-coast-with-turquoise-water-in-kauai-picture-id1325628101?b=1&k=20&m=1325628101&s=170667a&w=0&h=-IujrcOHxQ2UvAZJmdH5Uk_VRzFJ1anWnKLqBdrrNOM=",
        user: USERS[0].user,
        likes: 6074,
        caption: "Can't believe what's at my fingertips 😵 🏞 #paradise #mothernature",
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'frankocean',
                comment: "So I'm crashing at your place next week 😝 "
            },
            {
                user: 'nationalgeo',
                comment: "Can't wait to shoot next months cover with you! 🙊 "
            },

        ],
    },
    {
        imageUrl: "http://s3.amazonaws.com/quietus_production/images/articles/20803/frank-ocean-blond-compressed-0933daea-f052-40e5-85a4-35e07dac73df_1472114912_crop_550x550.jpg",
        user: USERS[1].user,
        likes: 6074,
        caption: "Just the usual...🙃 ",
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'alanablanchard',
                comment: "Love yuh brotha 🌺"
            },
            {
                user: 'badgalriri',
                comment: "YAS King 👸🏿 "
            },

        ],

    },
]