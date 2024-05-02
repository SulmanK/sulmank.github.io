/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sulman Khan",
  title: "Hello, I'm Sulman",
  subTitle: emoji("A passionate AI/ML enthusiast 📈 eager in applying analytics to business problems."),
  resumeLink:
   "https://www.linkedin.com/in/sulman-khan/overlay/1707866406176/single-media-viewer/?profileId=ACoAABfGR24BTiI8nwL7Wn5E-MJEiW1gfDErbDc", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SulmanK",
  linkedin: "https://www.linkedin.com/in/sulman-khan/",
  gmail: "sulman@vt.edu",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "Through rigorous coursework, I have deepened my understanding of Statistics, Experimental Design, Machine Learning, and Data Analysis. Furthermore, I have applied my expertise in these domains to solve business problems as demonstrated by my work experience and projects. ",
  skills: [
    emoji("⚡ Leveraged my data analysis, cleaning, database management, and predictive modeling skills for providing business solutions."),
  emoji("⚡ Utilize end-to-end machine learning design methodologies."),
    emoji("⚡ Deployment of applications using third-party services such as Docker, AWS, and Heroku.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  
  {
      skillName: "r-project",
      fontAwesomeClassname: "fab fa-r-project"
    },

    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
  
  {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
  
  {
      skillName: "gcp",
      fontAwesomeClassname: "fab fa-google"
    },

  {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
  

    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },


  
  {
      skillName: "flask",
      fontAwesomeClassname: "fa fa-flask"
    }
  
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Stony Brook University",
      logo: require("./assets/images/sbuLogo.png"),
      subHeader: "Master of Science in Electrical Engineering",
      duration: "August 2016 - May 2018",
      desc: "",
      descBullets: [
      ]
    },
    {
      schoolName: "Virginia Tech",
      logo: require("./assets/images/vtLogo.png"),
      subHeader: "Bachelor of Science in Materials Science and Engineering",
      duration: "August 2012 - May 2016",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Scientist",  
      company: "Fingercramp",
      companylogo: require("./assets/images/fingercrampLogo.webp"),
      date: "May 2018 – January 2024",
      desc: "",
      descBullets: [
    "Developed a character balancing model based on historical statistic performance and matchup characteristics.",
    "Setup and managed a PostgreSQL database to store match statistics for extensive querying involving multiple joins between tables and schemas.",
    "Designed viewership feedback surveys adhering to A/B testing design methodologies.",
    "Produced data visualization dashboard assets for the streaming platform.",
      ]
    },

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Work-related Projects",
  subtitle: "Projects sponsored by organizations.",
  projects: [
    {
      image: require("./assets/images/capcom-pt-logo.webp"),
      projectName: "Capcom Pro Tour",
      projectDesc: "Premier league for competitive fighting games",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.fingercramp.com/portfolio/capcom-pro-tour-2018/"
        }
        //  you can add extra buttons here.
      ]
    },

  ],
  display: true// Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Project Showcase"),
  subtitle: "",
  achievementsCards: [
  {
      title: "Ekstra Bladet RecSys Challenge 2024",
      subtitle: "The Ekstra Bladet RecSys Challenge aims to predict which article a user will click on from a list of articles that were seen during a specific impression. Utilizing the user's click history, session details (like time and device used), and personal metadata (including gender and age), along with a list of candidate news articles listed in an impression log, the challenge's objective is to rank the candidate articles based on the user's personal preferences.   ",
      image: require("./assets/images/ekstraLogo.webp"),
      footerLink: [
    { name: "Github", url: "https://github.com/SulmanK/2024-Recsys-Challenge" },
        { name: "Blog", url: "https://sulmank.github.io/Blog/writing/category/recsys-challenge-2024/#recsys-challenge-2024-exploratory-data-analysis" },
        
      ]
    },
    {
      title: "eBay: Scraping Phone Auctions",
      subtitle: "With the abundance in the number of phones listed on online marketplaces, it overwhelms the user in selecting satisfactory auctions. My approach includes building a web-scraping tool to collect data on phone auctions and calculating various metrics to aid in auction selection.   ",
      image: require("./assets/images/ebayLogo.webp"),
      footerLink: [
    { name: "Github", url: "https://github.com/SulmanK/eBay-web-crawler-phone-auctions" },
        { name: "Code", url: "https://github.com/SulmanK/eBay-web-crawler-phone-auctions/tree/main/Dashboard" },
        { name: "Application", url: "http://ebay-phone-aide-app.us-east-1.elasticbeanstalk.com/" },
      ]
    },
  {
      title: "Video Game Recommendation Engine",
      subtitle: "With the number of products increasing exponentially, it burdens the consumer in which products to purchase. A novel solution is the use of recommender systems (engines) to 'recommend' relevant products to the consumers based on their preferences. Applications of recommender systems include areas such as playlist generators for video and music services like Netflix, YouTube, and Spotify. Additionally, product recommendations for services such as Amazon.  Our goal is to build a video game recommendation engine, which utilizes a content-based approached to identify relevant titles using various similarity methods.  ",
      image: require("./assets/images/gb_logo.webp"),
      footerLink: [
    { name: "Github", url: "https://github.com/SulmanK/Video-Game-Recommendation-Engine" },
        { name: "Code", url: "https://github.com/SulmanK/Video-Game-Recommendation-Engine/blob/master/Video%20Game%20Recommendation%20Engine.ipynb" },
        { name: "Application", url: "http://vgre-app.us-east-1.elasticbeanstalk.com/" },
      ]
    },

  {
      title: "Predicting Customer Churn in World of Warcraft",
    subtitle: "World of Warcraft (WoW) is a massively multiplayer online video game released on November 23, 2004, by Blizzard Entertainment. WoW utilizes a subscription-based financial model. Therefore, customer churn is an essential indicator in optimizing financial returns. We implemented a model to predict whether a user will churn across a six-month period.",
      image: require("./assets/images/World_of_Warcraft_logo.webp"),
      footerLink: [
    { name: "Github", url: "https://github.com/SulmanK/Customer-Churn-in-World-of-Warcraft" },
        { name: "Publication", url: "https://arxiv.org/abs/2006.15735" },
        { name: "Code", url: "https://github.com/SulmanK/Customer-Churn-in-World-of-Warcraft/blob/master/Customer%20Churn%20in%20World%20of%20Warcraft.ipynb" },
        { name: "Application", url: "http://customer-churn-in-wow-app.us-east-1.elasticbeanstalk.com/" }
      ]
    },


    {
      title: "Clustering Player Behavior in PlayerUnknown's Battlegrounds for Hackers",
    subtitle: "Playerunknown's Battleground (PUBG) is a video game, which set the standard for preceding games in the Battle Royale genre. With the massive popularity comes with a high influx of players using third-party programs to gain an unfair advantage. Our goal is to apply customer segmentation techniques such as clustering to identify illicit behavior. ",
      image: require("./assets/images/PUBG_logo.webp"),
      footerLink: [
    { name: "Github", url: "https://github.com/SulmanK/PUBG_clustering-player-behavior-for-cheaters" },
        { name: "Code", url: "https://github.com/SulmanK/PUBG_clustering-player-behavior-for-cheaters" },
        { name: "Application", url: "http://pubg-hd-app.us-east-1.elasticbeanstalk.com/" }
      ]
    },


        {
      title: "Modelling Hard Drive Reliability",
    subtitle: "Data is an integral component of our society. From the simple caloric deficits collected in your apple watch to the user history in your Netflix account, data is used in a myriad of applications. With such an abundance of data stored daily, how is it stored? The solution is computer backup or cloud storage services such as Backblaze, which is a world leader in computer backup and storage. Our objective is to improve upon Backblaze's baseline model in predicting hard drive failure by investigating additional S.M.A.R.T attributes (features). ",
      image: require("./assets/images/backblaze_logo.webp"),
      footerLink: [
    { name: "Github", url: "https://github.com/SulmanK/Predicting-Hard-Drive-Failure" },
        { name: "Report", url: "https://github.com/SulmanK/Predicting-Hard-Drive-Failure/blob/master/Predicting%20Hard%20Drive%20Failure_Report.pdf" },
        { name: "Code", url: "https://github.com/SulmanK/Predicting-Hard-Drive-Failure/blob/master/Backblaze.ipynb" },
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I'll be showcasing my latest projects here.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://sulmank.github.io/Blog/writing/2024/04/25/recsys-challenge-2024-eda/",
      title: "RecSys Challenge 2024: Exploratory Data Analysis",
      description:
        "This article will cover the exploratory data analysis of the RecSys 2024 Challenge dataset."
    },
  ],
  display: true // Set false to hide this section, defaults to true
};
/* Change this file to get your personal Portfolio */
// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "",
  number: "",
  email_address: "sulman@vt.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};