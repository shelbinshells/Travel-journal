import mountFuji from "./images/Mount-Fuji.png"
import greatWall from "./images/Great-Wall.png"
import operaHouse from "./images/Opera-House.png"
import geirangerfjord from "./images/Geirangerfjord.png"

let props =  [
    {
        id: 1,
        title: "Mount Fuji",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        coverImg: mountFuji,
        dates: {
            from: "12 Jan,2021",
            to: "24 Jan,2021"
        },
        location: "JAPAN",
        onMaps: "https://maps.app.goo.gl/XdXgaFzJjXfd1dAd8"
    },
    {
        id: 2,
        title: "Great Wall of China",
        description: "A series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe.",
        
        coverImg: greatWall,
        dates: {
            from: "14 Mar,2021",
            to: "5 April,2021"
        },
        location: "CHINA",
        onMaps: "https://maps.app.goo.gl/yyoefVXhV5jKQHR49"
    },
    {
        id: 3,
        title: "Sydney Opera House",
        description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
        coverImg: operaHouse,
        dates: {
            from: "27 May,2021",
            to: "8 Jun,2021"
        },
        location: "AUSTRALIA",
        onMaps: "https://maps.app.goo.gl/3KepgYJwWA3tgfby7"
    },
    {
        id: 4,
        title: "Geirangerfjord",
        description: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
        coverImg: geirangerfjord,
        dates: {
            from: "1 Oct,2021",
            to: "18 Nov,2021"
        },
        location: "NORWAY",  
        onMaps: "https://maps.app.goo.gl/9i5LrPj2PREdQgJg8"
    }
]

export default props
/**/