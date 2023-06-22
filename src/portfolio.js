/* Change this file to get your personal Porfolio */

// Website related setting
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Abinash's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  image: "../src/assests/images/Abinash.png",
  keywords: [
    "AI Engineer",
    "Data Scientist",
    "Machine Learning Engineer",
    "Deep Learning Engineer",
    "Full Stack Developer",
    "Flutter Developer",
    "Freelancer",
    "Abinash Bordoloi",
    "Abinash",
    "Gauhati Univerity",
    "IITM",
    "Developer",
  ],
  url: " https://abinashbordoloi.github.io/",

  siteUrl: " https://abinashbordoloi.github.io/",
  siteLanguage: "en_US",
  siteLocale: "en_us",
  twitterUsername: "Abinash Bordoloi",
  author: "Abinash Bordoloi",

  og: {
    title: "Abinash Bordoloi's Portfolio",
    type: "website",
    url: "https://abinashbordoloi.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Abinash Bordoloi",
  logo_name: "Abinash Bordoloi",
  // nickname:,
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1FveavQsnsMPtUtSTe8s0FzTlSNeKVMrM/view?usp=drive_link",
  // portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/abinashbordoloi",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/abinashbordoloi",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abinash-bordoloi/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@TechInsightswithAbinash",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto: abinashbordoloi07@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/abinash_47712",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/abinash_bordoloi07/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#150458",
          },
        },

        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficient in front-end technologies (HTML, CSS, JavaScript) for creating user-friendly interfaces.",
        "⚡ Developing mobile applications using Flutter, React Native.",
        "⚡ Skilled in back-end technologies (server-side languages, frameworks) for building robust and scalable server logic.",
        "⚡ Developing mobile applications using Flutter, React Native.",
        "⚡ Creating application backend in Node, Express, Django, FastAPI & Flask",
        "⚡ Managing databases such as MongoDB, Postgres, MySQL, SQLite",
        "⚡ Integrating third party services such as Firebase/ AWS",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },

        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092E20",
          },
        },

        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },

        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#00796B",
          },
        },

        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },

        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },

        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#000000",
          },
        },

        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Proficient in working with leading cloud platforms such as AWS, Azure, or Google Cloud, with a deep understanding of their core services, infrastructure, and deployment models.",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models and machine learning moedels on cloud.",
        "⚡ Cloud Architecture and Scalability: Skilled in designing and implementing scalable and resilient cloud architectures.",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },

        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },

        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
          style: {
            color: "#000000",
          },
        },

        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/Abinash_7/",
    },

    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/abinash_7",
    },

    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/iteratex_pseudo1?hr_r=1",
    },

    {
      siteName: "GeeksforGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#0F9D58",
      },
      profileLink:
        "https://auth.geeksforgeeks.org/user/iteratexpseudocode/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user",
    },

    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@iteratex.pseudocode",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/abinashbordoloi",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Gauahti Univeristy Institute of Science and Technology",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "guist_logo.jpg",
      alt_name: "GUIST Gauhati University",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, Engineering Mathematics, DBMS, OS, CA, AIm ML etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ Also done projects and interships for the course credits.",
      ],
      website_link: "https://gauhati.ac.in/",
    },
    {
      title: "Indian Institute of Technology",
      subtitle: "B.S. in Data Science and Applications",
      logo_path: "iitm_Logo.png",
      alt_name: "IITM",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, Object Oriented Programming, Database Management System, Data Mining, Data Warehousing, Data Analytics, Machine Learning, Deep Learning, Big Data, Cloud Computing, Statistics etc.",
        "⚡ I have taken varity of courses related to Artificial Intelligence and Data Science which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ I have also done courses on Full Stack Development which includes HTML, CSS, JavaScript, React, Node, Express, MongoDB etc.",
        "⚡ I with projetcs and interships for the course credits.",
      ],
      website_link: "https://study.iitm.ac.in/ds/",
    },
    {
      title: "Udacity Nanodegree",
      subtitle: "AI Programming with Python",
      logo_path: "udacity_logo.png",
      alt_name: "Udacity",
      duration: "2021",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, Object Oriented Programming, Database Management System, Data Mining, Data Warehousing, Data Analytics, Machine Learning, Deep Learning, Big Data, Cloud Computing, Statistics etc.",
        "⚡ I have taken varity of courses related to Artificial Intelligence and Data Science which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ I have also done courses on Full Stack Development which includes HTML, CSS, JavaScript, React, Node, Express, MongoDB etc.",
        "⚡ I with projetcs and interships for the course credits.",
      ],
      website_link: "https://graduation.udacity.com/confirm/VR4Y3PUG",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AI Programming with Python Nenodegree",
      subtitle: "Udacity",
      logo_path: "udacity_logo.png",
      certificate_link: "https://graduation.udacity.com/confirm/VR4Y3PUG",
      alt_name: "Udacity",
      color_code: "#ffffff",
    },

    // https://storage.googleapis.com/online-degree-app-production-documents/CERTIFICATE/FOUNDATION_CERTIFICATE/F2_2022/917c7068c2503b4804168f55d05cd1053f50809c5f1c6baff01b7b5b81d7d7d3.pdf?Expires=1686355414&GoogleAccessId=production-document-storage-si%40online-degree-app.iam.gserviceaccount.com&Signature=PECGaaduHMCDy57W1vMpxXgXi8VX%2Bv2HQjV9LvzKTHsIRA5dJzE5Q9ZuRx951GgNxVBP%2FwlD4x%2BgNndp9zzVQ6lqL2a0Omnd4KYUU5IWVQ%2BaFlQLsGvi4Nuzye9nIjoJIUbAOHEBfoqTLx6EAAp0NFF7T8nSQcaxQAWHtkdLwo%2FT0%2BJLPIaM9JOQV5HJYKF8fEu2cQjBBTKYXxg8ImUqz1tZ573TSTck5BhUwtnNnGaXhzuIBfrzN3WEDVbUF5FNCL%2BLLfFdRZXv63yoIFGItOCRGfbAJNVJPw2gZ3jN4GIH8kBnnaEmgPogh2CK5pY1r4KuTvuy1xOny0MvdJAyCw%3D%3D
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// // Experience Page
// const experience = {
//   title: "Experience",
//   subtitle: "Work, Internship and Volunteership",
//   description:
//     "Description of my work, internship and volunteership experience in my student jouney till now. [UPDATED June 2023]",
//   header_image_path: "experience.svg",
//   section: [
//     {
//       title: "Work",
//       experiences: [
//         {
//           title: "Web Developer",
//           company: "HiFi Vision India",
//           company_url: "https://www.hifivisionindia.com/",
//           logo_path: "hifivision_logo.png",
//           duration: "June 2021 - PRESENT",
//           location: "Work From Home",
//           description:
//             "I am working as a web developer for the marketing team in HiFi Vision India. I am responsible for the development and maintenance of the website. I am also working on the SEO of the website.",
//           color: "#ee3c26",
//         },
//       ],
//     },

//     {
//       title: "Internships",
//       experiences: [
//         {
//           title: "Open Source Contributor",
//           company: "GirlScript Summer of Code",
//           company_url: "https://www.gssoc.tech/",
//           logo_path: "gssoc_logo.png",
//           duration: "june 2023 - aug 2023",
//         },

//         {
//           title: "",
//           company: "TikTok Inc.",
//           company_url: "https://www.tiktok.com/en/",
//           logo_path: "tiktok_logo.png",
//           duration: "May 2022 - Aug 2022",
//           location: "San Francisco, USA",
//           description:
//             "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
//           color: "#000000",
//         },
//         {
//           title: "Data Science Research Intern",
//           company: "Delhivery Pvt. Ltd.",
//           company_url: "https://www.delhivery.com/",
//           logo_path: "delhivery_logo.png",
//           duration: "May 2019 - Sept 2019",
//           location: "Gurgaon, Haryana",
//           description:
//             "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
//           color: "#ee3c26",
//         },
//         {
//           title: "Data Science Intern",
//           company: "Yoshops",
//           company_url: "https://yoshops.com/",
//           logo_path: "yoshops_logo.png",
//           duration: "july 2022 - sept 2022",
//           location: "Work From Home",
//           description: "",
//         },
//       ],
//     },
//     {
//       title: "Volunteerships",
//       experiences: [
//         {
//           title: "Google Explore ML Facilitator",
//           company: "Google",
//           company_url: "https://about.google/",
//           logo_path: "google_logo.png",
//           duration: "June 2019 - April 2020",
//           location: "Hyderabad, Telangana",
//           description:
//             "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
//           color: "#4285F4",
//         },
//         {
//           title: "Microsoft Student Partner",
//           company: "Microsoft",
//           company_url: "https://www.microsoft.com/",
//           logo_path: "microsoft_logo.png",
//           duration: "Aug 2019 - May 2020",
//           location: "Hyderabad, Telangana",
//           description:
//             "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
//           color: "#D83B01",
//         },
//         {
//           title: "Mozilla Campus Captain",
//           company: "Mozilla",
//           company_url: "https://www.mozilla.org/",
//           logo_path: "mozilla_logo.png",
//           duration: "Oct 2019 - May 2020",
//           location: "Kurnool, Andhra Pradesh",
//           description:
//             "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
//           color: "#000000",
//         },
//         {
//           title: "Developer Students Club Member",
//           company: "DSC IIITDM Kurnool",
//           company_url:
//             "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
//           logo_path: "dsc_logo.png",
//           duration: "Jan 2018 - May 2020",
//           location: "Kurnool, Andhra Pradesh",
//           description:
//             "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
//           color: "#0C9D58",
//         },
//         {
//           title: "Developer Program Member",
//           company: "Github",
//           company_url: "https://github.com/",
//           logo_path: "github_logo.png",
//           duration: "July 2019 - PRESENT",
//           location: "Work From Home",
//           description:
//             "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
//           color: "#181717",
//         },
//       ],
//     },
//   ],
// };

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "About my work and experience till now as a student. [UPDATED June 2023]",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Web Developer",
          company: "HiFi Vision India",
          // company_url: "https://www.hifivisionindia.com/",
          duration: "June 2021 - PRESENT",
          location: "Work From Home",
          description:
            "I am working as a web developer for the marketing team in HiFi Vision India. I am responsible for the development and maintenance of the website. I am also working on the SEO of the website.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Open Source Contributor",
          company: "GirlScript Summer of Code",
          company_url: "https://www.gssoc.tech/",
          logo_path: "gssoc_logo.png",
          duration: "june 2023 - aug 2023",
          description:
            "I will be contributing to open source projects related to web development and machine learning.",
          color: "#4285F4",
        },
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "GDSC AI/ML Lead",
          company: "Google Developer Student Clubs",
          company_url:
            "https://gdsc.community.dev/gauhati-university-guwahati/-",
          logo_path: "dsc_logo.png",
          duration: "2022/23",
        },
        {
          title: "WDC Member",
          company: "Web Development Club",
          company_url: "https://www.instagram.com/wdc_gauhati_university/",
          logo_path: "wdc_logo.png",
        },

        {
          title: "Nasscent Society",
          company: "Nasscent",
          company_url: "https://www.instagram.com/__nascent__/",
          logo_path: "nasscent_logo.png",
          duration: "active member",
          description:
            "I am an active member of Nasscent Society, Gauhati Univeristy. We discuss about the latest technologies and their applications in the real world. We also organise workshops and seminars on various topics.",
          color: "#4285F4",
        },

        {
          title: "NSS Member",
          company: "National Service Scheme",
          company_url: "https://www.instagram.com/nss.gauhatiuniversitycampus/",
          logo_path: "nss_logo.png",
          duration: "active member",
          description:
            "I am an active member of NSS, Gauhati Univeristy. We discuss about the latest technologies and their applications in the real world. We also organise workshops and seminars on various topics.",
          color: "#4285F4",
        },

        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2022 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, , React, Cloud and Opensource Development.",
  },

  addressSection: {
    title: "Address",
    subtitle: "Srishti Residency, Lankeshwar, Guwahati, ASSAM - 781014",
    locality: "Lankeswar",
    country: "IN",
    region: "Assam",
    postalCode: "781014",
    streetAddress: "Opp0site to NH-37",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Guwahati,+Assam/@26.1432627,91.5377231,11z/data=!3m1!4b1!4m6!3m5!1s0x375a5a287f9133ff:0x2bbd1332436bde32!8m2!3d26.1157917!4d91.7085933!16zL20vMDNmeGZ5?entry=ttu",
  },
  phoneSection: {
    title: "Mobile Number",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
