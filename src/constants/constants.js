import { Suspense } from "react";
import { AiFillInstagram } from "react-icons/ai";

// NIGHTLIFE CARD DATA
export const projects = [
  {
    title: "National on 10th",
    description: "National is a true destination for fun with friends, best-in-class craft beer, handcrafted cocktails and a thoughtfully curated food menu. The lower level of National 10 features a trendy 8-lane bowling alley complete with arcade games, music, drinks and a full menu.",
    image: "/images/website-national.png",
    tags: ["", "", "", ""],
    // INSTAGRAM
    source: "https://www.instagram.com/ntnlcalgary/",
    // WEBPAGE LINK URL
    visit: "https://www.ntnl.ca/10th-avenue",
    id: 0,
  },
  {
    title: "Craft",
    description: "Craft is a premium casual restaurant and bar with a passion for fresh local food and great craft beer. Launched in Calgary in 2011, the CRAFT movement has been spreading across Canada ever since.",
    image: "/images/website-craft.png",
    tags: ["", ""],
    // INSTAGRAM
    source: "https://www.instagram.com/craftbeermarket/",
    // WEBPAGE LINK URL
    visit: "https://www.craftbeermarket.ca/",
    id: 1,
  },
  {
    title: "Greta Bar",
    description: "It's all fun and games at your favourite arcade bar. Join us at GRETA in YYC or YEG for good times, great food, and the best games.",
    image: "/images/website-greta.png",
    tags: ["", ""],
    // INSTAGRAM
    source: "https://www.instagram.com/gretabaryyc/",
    // WEBPAGE LINK URL
    visit: "https://www.gretabar.com/",
    id: 2,
  },
  {
    title: "Honky-Tonk",
    description: "A new country saloon-style bar, just opened on 10th Avenue, making it an ideal location to dance the night away.",
    image: "/images/honkyTonkBar.svg",
    tags: ["", "", ""],
    // INSTAGRAM
    source: "https://www.instagram.com/honkytonkcalgary/",
    // WEBPAGE LINK URL
    visit: "",
    id: 3,
  },
  {
    title: "Whiskey Rose",
    description: "Whiskey Rose Saloon is a bar to come together, listen to all kinds of music, and knock back a bourbon (or six).",
    image: "/images/website-whiskeyroserebrand.png",
    tags: ["", "", ""],
    // INSTAGRAM
    source: "https://www.instagram.com/whiskeyroseyyc/",
    // WEBPAGE LINK URL
    visit: "https://whiskeyrosesaloon.com/",
    id: 4,
  },
  {
    title: "Cowboys",
    description:
      "The World Famous Cowboys Dance Hall. Calgary's biggest nightclub featuring country and top 40 music, weekly events and live music. The most fun you can have with your boots on!",
    image: "/images/website-cowboys.png",
    tags: ["", "", ""],
    // INSTAGRAM
    source: "https://www.instagram.com/cowboyscalgary/",
    // WEBPAGE LINK URL
    visit: "https://www.cowboysmusicfestival.com/",
    id: 5,
  },
  // {
  //   title: "Trolley5",
  //   description:
  //     "Industrial-style space with outdoor seating serving house-brewed beers, burgers, pizza & BBQ.",
  //   image: "/images/website-trolley5.png",
  //   tags: ["", "", ""],
  //   // INSTAGRAM
  //   source: "https://www.instagram.com/trolley_5/",
  //   // WEBPAGE LINK URL
  //   visit: "https://trolley5.com/",
  //   id: 6,
  // },
  {
    title: "One Night Stan's",
    description: "One Night Stan's is the kind of place where you can feel comfortable in a three piece suit, yoga pants, or anything in between.",
    image: "/images/website-onenightstans.png",
    tags: ['', '', ''],
    // INSTAGRAM
    source: 'https://www.instagram.com/1nightstans/',
    // WEBPAGE LINK URL
    visit: 'https://www.onenightstans.ca/',
    id: 7,
  },
  {
    title: 'Ship and Anchor',
    description: "Low-key watering hole offering casual bar fare, sports on TV & occasional live music, plus a patio.",
    image: '/images/website-shipandanchor.png',
    tags: ['', '', ''],
    // INSTAGRAM
    source: 'https://www.instagram.com/shipandanchorpub/',
    // WEBPAGE LINK URL
    visit: 'https://shipandanchor.com/',
    id: 8,
  },
  {
    title: 'The Palace',
    description: "This multi-function venue will be home to everything from concerts, musical performances, seminars, symposiums & corporate events. All with our state-of-the art cinema sound system!",
    image: '/images/website-palace.png',
    tags: ['', '', ''],
    // INSTAGRAM
    source: 'https://www.instagram.com/palacetheatreyyc/',
    // WEBPAGE LINK URL
    visit: 'https://www.thepalacetheatre.ca/',
    id: 9,
  },
  {
    title: "Hudson's",
    description: "Canada's pub is your go-to for great deals and happy hour specials!",
    image: '/images/website-hudsons.png',
    tags: ['', '', ''],
    // INSTAGRAM
    source: 'https://www.instagram.com/hudsonsyyc/',
    // WEBPAGE LINK URL
    visit: 'https://hudsonscanadaspub.com/',
    id: 10,
  },
  {
    title: 'The Back Alley',
    description: "The Back Alley Nightclub is over 12000 feet and harbours 4 themed bars which include Bacardi, Jack, Red Bull and Jamesons.",
    image: '/images/website-backalley.png',
    tags: ['', '', ''],
    // INSTAGRAM
    source: 'https://www.instagram.com/backalleycalgary/',
    // WEBPAGE LINK URL
    visit: 'https://backalleycalgary.com/',
    id: 11,
  },
  {
    title: 'Commonwealth',
    description: "Rustic-chic nightclub with DJ shows & dance floors on 2 floors, plus a menu of upscale bar bites.",
    image: '/images/website-commonwealth.png',
    tags: ['', '', ''],
    // INSTAGRAM
    source: 'https://www.instagram.com/commonwealthyyc/',
    // WEBPAGE LINK URL
    visit: 'https://www.commonwealthbar.ca/',
    id: 12,
  },
  {
    title: "Ranchman's",
    description: "Western bar with a dance floor, stage & mechanical bull, plus a pub menu of burgers, ribs & wings.",
    image: '/images/website-ranchmans.png',
    tags: ['', '', ''],
    // INSTAGRAM
    source: 'https://www.instagram.com/ranchmans.ca/',
    // WEBPAGE LINK URL
    visit: 'https://www.ranchmans.ca/',
    id: 13,
  },
  {
    title: 'The Banquet',
    description: "Premium Bar, a bowling alley, patio, games & more in Calgary's University district!",
    image: '/images/website-banquet.png',
    tags: ['', '', ''],
    // INSTAGRAM
    source: 'https://www.instagram.com/thebanquetbaryyc/',
    // WEBPAGE LINK URL
    visit: 'https://thebanquetbar.com/',
    id: 14,
  },
  {
    title: 'Papi',
    description: "Papi is a one-of-a-kind House of Tequila & Margarita Dance Club that comes together to offer guests a unique and unprecedented experience.",
    image: '/images/website-papi.png',
    tags: ['', '', ''],
    // INSTAGRAM
    source: 'https://www.instagram.com/papicalgary/',
    // WEBPAGE LINK URL
    visit: 'https://papicalgary.ca/',
    id: 15,
  },
  {
    title: 'PDT',
    description: "Please Don’t Tell [PDT] is Calgary’s newest bar/nightclub located in the heart of downtown right underneath first street S.W. Our goal is to offer our guests an upscale and unique nightlife experience. We strongly recommend our guests to dress up & reserve a table to get the ultimate experience.",
    image: '/images/website-pleasedonttell.png',
    tags: ['', '', ''],
    // INSTAGRAM
    source: 'https://www.instagram.com/pdtcalgary/',
    // WEBPAGE LINK URL
    visit: 'https://pdtcalgary.ca/',
    id: 16,
  },
  {
    title: 'Rosé',
    description: "Rosé offers an unbeatable unique experience for our guests. Our aim is to create an incomparable nightlife experience.",
    image: '/images/website-roselounge.png',
    tags: ['', '', ''],
    // INSTAGRAM
    source: 'https://www.instagram.com/roseloungeyyc/',
    // WEBPAGE LINK URL
    visit: 'https://www.roseyyc.com/',
    id: 17,
  },

];

// CAROUSEL TIMELINE
export const TimeLineData = [
  { year: 2017, text: "Started our journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];

// STAMPEDE CARDS
export const stampede = [
  {
    title: "Badlands",
    description: "The Badlands Festival is a series of electronic and hip-hop shows downtown during the famous Calgary Stampede.",
    concerts: "Concert listings",
    Thurs:"Thurs, July 6 - GARETH EMERY",
    Fri:"Fri, July 7 - DOM DOLLA | ALUNA",
    Sat:"Sat, July 8 - LOUD LUXURY", 
    Sun:"Sun, July 9 - FISHER", 
    Mon:"Mon, July 10 - LEE BRICE", 
    Tues:"Tues, July 11 - EXCISION", 
    Wed:"Wed, July 12 - RHINESTONE RODEO | TWO FRIENDS", 
    Thurs2:"Thurs, July 13 - SKRILLEX", 
    Fri2:"Fri, July 14 - RICK ROSS | TYGA", 
    Sat2:"Sat, July 15 - DEADMAU5", 
    Sun2:"Sun, July 16 - REWIND",
    image: "/images/website-badlands.png",
    tags: ["", "", "", ""],
    // TICKETS/GLIST
    source: "",
    // WEBPAGE LINK URL
    visit: "https://www.badlandsmusicfest.com/",
    id: 0,
  },
  {
    title: "Cowboys",
    description: "Cowboys Music Festival is a world famous event that hosts guests from around the world during the Calgary Stampede.",
    concerts: "Concert listings",
    Thurs:"Thurs, July 6 - DUSTIN LYNCH",
    Fri:"Fri, July 7 - JOSH ROSS",
    Sat:"Sat, July 8 - ", 
    Sun:"Sun, July 9 - THOMAS WESLEY | THE KID LAROI", 
    Mon:"Mon, July 10 - WIZ KHALIFA | METRO BOOMIN", 
    Tues:"Tues, July 11 - SAM HUNT", 
    Wed:"Wed, July 12 - JACK HARLOW", 
    Thurs2:"Thurs, July 13 - NELLY FURTADO", 
    Fri2:"Fri, July 14 - TLC & SHAGGY", 
    Sat2:"Sat, July 15 - DRAG ME TO BRUNCH", 
    Sun2:"Sun, July 16 - ICE CUBE | STEVE AOKI | 24kGOLDN",
    image: "/images/website-cowboysstampede.png",
    tags: ["", "", "", ""],
    // TICKETS/GLIST
    source: "",
    // WEBPAGE LINK URL
    visit: "https://www.cowboysmusicfestival.com/",
    id: 1,
  },
  {
    title: "NTNL Saloon",
    description: "Located behind National 10th in the heart of Calgary's beltline is the newest tent experience. Live music, great food and the good times you know and love.",
    concerts: "Concert listings",
    Thurs:"Thurs, July 6 - PINK SWEATS",
    Fri:"Fri, July 7 - COLE BRADLEY",
    Sat:"Sat, July 8 - CONNOR PRICE", 
    Sun:"Sun, July 9 - ", 
    Mon:"Mon, July 10 - LIL TECCA", 
    Tues:"Tues, July 11 - ", 
    Wed:"Wed, July 12 - ", 
    Thurs2:"Thurs, July 13 - ASHANTI", 
    Fri2:"Fri, July 14 - DISCOLINES", 
    Sat2:"Sat, July 15 - ARIZONA ZERVAS", 
    Sun2:"Sun, July 16 - ",
    image: "/images/website-ntnlsaloon.png",
    tags: ["", "", "", ""],
    // TICKETS/GLIST
    source: "",
    // WEBPAGE LINK URL
    visit: "https://www.ntnlsaloon.ca/",
    id: 2,
  },
  {
    title: "Wildhorse",
    description: "The Wildhorse Saloon is your destination for the greatest Stampede Party and events in Calgary.",
    concerts: "Concert listings",
    Thurs:"Thurs, July 6 - THE ROYAL ALBERTA ADVANTAGE",
    Fri:"Fri, July 7 - ",
    Sat:"Sat, July 8 - ", 
    Sun:"Sun, July 9 - MARIANAS TRENCH", 
    Mon:"Mon, July 10 - TOKYO POLICE CLUB", 
    Tues:"Tues, July 11 - DEAN BRODY", 
    Wed:"Wed, July 12 - THE SHEEPDOGS", 
    Thurs2:"Thurs, July 13 - CHAD BROWNLEE", 
    Fri2:"Fri, July 14 - OXFORD STOMP", 
    Sat2:"Sat, July 15 - MAYFIELD", 
    Sun2:"Sun, July 16 - ",
    image: "/images/website-wildhorse.png",
    tags: ["", "", "", ""],
    // TICKETS/GLIST
    source: "",
    // WEBPAGE LINK URL
    visit: "https://www.wildhorsesaloon.ca/",
    id: 3,
  },
  {
    title: "Whiskey Rose",
    description: "Nashville-inspired saloon in the heart of Calgary along 17th Avenue. Live music and dancing, Southern-inspired comfort foods, and no-nonsense.",
    concerts: "Concert listings",
    Thurs:"Thurs, July 6 - ",
    Fri:"Fri, July 7 - ",
    Sat:"Sat, July 8 - DRAG BRUNCH", 
    Sun:"Sun, July 9 - DENIM N' DIAMONDS", 
    Mon:"Mon, July 10 - JAYCEEOH", 
    Tues:"Tues, July 11 - TALIB KWELI", 
    Wed:"Wed, July 12 - THE FRONTIERS", 
    Thurs2:"Thurs, July 13 - BEN CHASE", 
    Fri2:"Fri, July 14 - NOLAN COMPTON & GREG RIDER", 
    Sat2:"Sat, July 15 - NEON RANCH", 
    Sun2:"Sun, July 16 - ",
    image: "/images/website-whiskeyrose.png",
    tags: ["", "", "", ""],
    // TICKETS/GLIST
    source: "",
    // WEBPAGE LINK URL
    visit: "https://whiskeyrosesaloon.com/",
    id: 4,
  },
  {
    title: "Coca-Cola Stage",
    description: "Enjoy the ultimate outdoor live music experience of the summer, free with Park Admission. From Rock to Hip-Hop, to Pop and EDM.",
    concerts: "Concert listings",
    Thurs:"Thurs, July 6 - RUSS",
    Fri:"Fri, July 7 - VANCE JOY",
    Sat:"Sat, July 8 - CORDAE", 
    Sun:"Sun, July 9 - JESSIE REYEZ", 
    Mon:"Mon, July 10 - CHARLEY CROCKETT", 
    Tues:"Tues, July 11 - TEGAN AND SARA", 
    Wed:"Wed, July 12 - BROKEN SOCIAL SCENE | MANCHESTER ORCHESTRA | JIMMY EAT WORLD", 
    Thurs2:"Thurs, July 13 - AJR", 
    Fri2:"Fri, July 14 - MT. JOY", 
    Sat2:"Sat, July 15 - ZEDS DEAD", 
    Sun2:"Sun, July 16 - MOTHER MOTHER",
    image: "/images/website-cocacolastage.png",
    tags: ["", "", "", ""],
    // TICKETS/GLIST
    source: "",
    // WEBPAGE LINK URL
    visit: "https://www.calgarystampede.com/coca-cola-stage",
    id: 5,
  },
  {
    title: "Nashville North",
    description: "The best Country music venue in the city!",
    concerts: "Concert listings",
    Thurs:"Thurs, July 6 - JESS MOSKALUKE",
    Fri:"Fri, July 7 - MACKENZIE PORTER",
    Sat:"Sat, July 8 - JOJO MASON", 
    Sun:"Sun, July 9 - BILLY CURRINGTON", 
    Mon:"Mon, July 10 - DALLAS SMITH", 
    Tues:"Tues, July 11 - ELLE KING", 
    Wed:"Wed, July 12 - HIGH VALLEY", 
    Thurs2:"Thurs, July 13 - JADE EAGLESON", 
    Fri2:"Fri, July 14 - ELI YOUNG BAND", 
    Sat2:"Sat, July 15 - JAMES BARKER BAND", 
    Sun2:"Sun, July 16 - TENILLE ARTS",
    image: "/images/website-nashvillenorth.png",
    tags: ["", "", "", ""],
    // TICKETS/GLIST
    source: "",
    // WEBPAGE LINK URL
    visit: "https://www.calgarystampede.com/nashville-north",
    id: 6,
  },
  {
    title: "Back Alley Tent",
    description: "The Back Alley Nightclub is over 12000 feet and harbours 4 themed bars.",
    concerts: "Concert listings",
    Thurs:"Thurs, July 6 - ILLENIUM",
    Fri:"Fri, July 7 - OUR LADY PEACE",
    Sat:"Sat, July 8 - NAV", 
    Sun:"Sun, July 9 - ", 
    Mon:"Mon, July 10 - HEADSTONES", 
    Tues:"Tues, July 11 - SEAN PAUL", 
    Wed:"Wed, July 12 - BROKENTOYZ", 
    Thurs2:"Thurs, July 13 - BUSH", 
    Fri2:"Fri, July 14 - FARRUKO", 
    Sat2:"Sat, July 15 - YUNG GRAVY & BBNO$", 
    Sun2:"Sun, July 16 - TOM COCHRANE | LUDACRIS",
    image: "/images/backAlleyTent.png",
    tags: ["", "", "", ""],
    // TICKETS/GLIST
    source: "",
    // WEBPAGE LINK URL
    visit: "https://backalleycalgary.com/summer-music-festival/",
    id: 7,
  },
  {
    title: "Saddledome",
    description: "Scotiabank Saddledome is a multi-use indoor arena in Calgary, Alberta, Canada. Located in Stampede Park in the southeast end of downtown Calgary.",
    concerts: "Concert listings",
    Thurs:"Thurs, July 6 - ",
    Fri:"Fri, July 7 - PITBULL",
    Sat:"Sat, July 8 - ALABAMA", 
    Sun:"Sun, July 9 - ", 
    Mon:"Mon, July 10 - ", 
    Tues:"Tues, July 11 - ", 
    Wed:"Wed, July 12 - ", 
    Thurs2:"Thurs, July 13 - ", 
    Fri2:"Fri, July 14 - ", 
    Sat2:"Sat, July 15 - ", 
    Sun2:"Sun, July 16 - ",
    image: "/images/website-saddledome.png",
    tags: ["", "", "", ""],
    // TICKETS/GLIST
    source: "",
    // WEBPAGE LINK URL
    visit: "https://www.calgarystampede.com/stampede",
    id: 8,
  },
  {
    title: "Bud Light Stage at the Big Four Roadhouse",
    description: "Enjoy this unique destination on Stampede Park that offers good food, quality drinks, and awesome music - all under one roof!",
    concerts: "Concert listings",
    Thurs:"Thurs, July 6 - DWAYNE GRETZKY",
    Fri:"Fri, July 7 - DJ DIESEL (AKA SHAQUILLE O'NEAL)",
    Sat:"Sat, July 8 - CHEAT CODES", 
    Sun:"Sun, July 9 - LORD HURON", 
    Mon:"Mon, July 10 - BIG BOI", 
    Tues:"Tues, July 11 - LIL YACHTY", 
    Wed:"Wed, July 12 - MURDA BEATZ | FERG", 
    Thurs2:"Thurs, July 13 - X AMBASSADORS", 
    Fri2:"Fri, July 14 - DJ PAULY D", 
    Sat2:"Sat, July 15 - KOFFEE", 
    Sun2:"Sun, July 16 - CYPRESS HILL",
    image: "/images/BudLight-BigFour",
    tags: ["", "", "", ""],
    // TICKETS/GLIST
    source: "",
    // WEBPAGE LINK URL
    visit: "https://www.calgarystampede.com/the-big-four-roadhouse",
    id: 9,
  },

];