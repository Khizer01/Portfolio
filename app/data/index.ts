
export interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element; 
}

export const navItems: NavItem[] = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" }, 
  { name: "Projects", link: "#projects" },
  { name: "Certifications", link: "#certifications" },
  { name: "Contact", link: "#contact" },
];

  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently working on my skills",
      description: "Learning Full Stack Development",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      name: "FilmyFrenzy",
      title: "Search for any movie and get more info about it",
      des: "FilmyFrenzy is a movie review app where you can search for movies and find out info related to those movies",
      img: "/FilmyFrenzy.png",
      iconLists: ["/re.svg", "/tail.svg"],
      link: "https://filmyfrenzy-app.netlify.app/",
    },
    {
      id: 2,
      name: "DineDelight",
      title: "Get delicious food at your door steps",
      des: "DineDelight is a restaurant website from where your can order food for yourself",
      img: "/DineDelight.png",
      iconLists: ["/re.svg"],
      link: "https://dinedelight.netlify.app/",
    },
    {
      id: 3,
      name: "PulseToday",
      title: "A weather app which could also tell forecasted weather",
      des: "A weather app to stay updated about current & future weather condition",
      img: "/PulseToday.png",
      iconLists: ["/re.svg", "/tail.svg"],
      link: "https://pulsetoday.netlify.app/",
    },
    {
      id: 4,
      name: "TrendyCart",
      title: "An ecommerce store made using React.js, Node.js, Express & MongoDB",
      des: "A Ecommerce store with payment method and adding to wishlist option with search functionality.",
      img: "/trendycart.png",
      iconLists: ["/re.svg", "/tail.svg"],
      link: "https://trendycart-ecom.netlify.app/",
    },
  ];
  
  export const certification = [
      {
        name: "Create and manage automated processes by using Power Automate",
        organization: "Microsoft",
        image: "/microsoft.png"
      },
      {
        name: "Create and manage model-driven apps with Power Apps and Dataverse",
        organization: "Microsoft",
        image: "/microsoft.png"
      },
      {
        name: "Microsoft Power Up Program",
        organization: "Microsoft",
        image: "/microsoft.png"
      },
      {
        name: "Licensing Specialist: Power Platform",
        organization: "Microsoft",
        image: "/microsoft.png"
      },
      {
        name: "Create and manage canvas app with Power Apps",
        organization: "Microsoft",
        image: "/microsoft.png"
      },
      {
        name: "React.js Essential Training",
        organization: "LinkedIn",
        image: "/linkedin.png"
      },
      {
        name: "Building Modern UIs with React Router v6",
        organization: "LinkedIn",
        image: "/linkedin.png"
      },
      {
        name: "Learning REST APIs",
        organization: "LinkedIn",
        image: "/linkedin.png"
      },
      {
        name: "Intro To Web APIs",
        organization: "LinkedIn",
        image: "/linkedin.png"
      },
      {
        name: "Learning Redux Toolkit",
        organization: "LinkedIn",
        image: "/linkedin.png"
      },
      {
        name: "Introduction To Microsoft Azure Cloud Service",
        organization: "Coursera",
        image: "/coursera.jpg"
      },
      {
        name: "Power Platform Global AI Hackathon",
        organization: "Microsoft",
        image: "/microsoft.png"
      },
      {
        name: "Introduction To Backend Development",
        organization: "Coursera",
        image: "/coursera.jpg"
      },
      {
        name: "Power Platform Fundamentals Challenge",
        organization: "Microsoft",
        image: "/microsoft.png"
      },
      {
        name: "Microsoft Certified: Azure AI Fundamentals",
        organization: "Microsoft",
        image: "/microsoft.png"
      },
      {
        name: "JavaScript Essentials",
        organization: "LinkedIn",
        image: "/linkedin.png"
      },
      {
        name: "Microsoft Power App Maker Challenge",
        organization: "Microsoft",
        image: "/microsoft.png"
      },
      {
        name: "Microsoft Learn AI Skill Challenge",
        organization: "Microsoft",
        image: "/microsoft.png"
      },
      {
        name: "Career Essentials in Software Development",
        organization: "Microsoft and LinkedIn",
        image: "/microsoft.png"
      },
      {
        name: "Microsoft Certified: Power Platform Developer Associate",
        organization: "Microsoft",
        image: "/microsoft.png"
      }
  ];
  
  export const companies = [
    {
      id: 1,
      name: "Microsoft",
      img: "/microsoft.png",
    },
    {
      id: 2,
      name: "LinkedIn",
      img: "/linkedin.png",
    },
    {
      id: 3,
      name: "Coursera",
      img: "/coursera.jpg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "ReactJs Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    }
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/Khizer01",
    },
    {
      id: 2,
      img: "/twit.svg",
      link: "https://twitter.com/",
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/khizer-malik-57a862222",
    },
  ];