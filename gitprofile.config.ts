// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'abdul2801', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '',
  projects: {
    
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['abdul2801/cpp'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Packet Sniffer',
          description:
            'Developed a packet sniffer in Rust using the C `Pcap` library for capturing raw network packets. Integrated a terminal user interface (TUI) with `Rattui` for real-time interactive packet data inspection.\n\nTech Stack: Rust, C, Pcap, Rattui.',
          imageUrl: 'https://images.squarespace-cdn.com/content/v1/569805af1f4039853c5804f1/1526586326433-ER7GN1K932RALLWJENEC/SentryWire-Packet-Capture-Appliance-230-1.png?format=500w', // Replace with real image if available
          link: 'https://github.com/abdul2801/sniffer',
        },
        {
          title: 'QueueShopper - Distributed Order Processing System',
          description:
            'Developed a distributed order processing system using Apache Kafka for message queuing and MySQL for persistence. Implemented producer-consumer architecture to ensure high throughput and fault tolerance in handling e-commerce transactions.\n\nTech Stack: Kafka, Node.js, MySQL.',
          imageUrl: 'https://raw.githubusercontent.com/abdul2801/queueShopper/main/screenshot.png', // Replace with real image if available
          link: 'https://github.com/abdul2801/queueShopper',
        },
        {
          title: 'Collaborative Code Editor',
          description:
            'Developed a real-time collaborative code editor with VSCode-like features. Utilized CRDT (Conflict-Free Replicated Data Types) with Yjs for distributed data synchronization and WebSockets for low-latency communication.\n\nTech Stack: React, Yjs, WebSockets.',
          imageUrl: 'https://raw.githubusercontent.com/abdul2801/Collaborative-code-editor/main/image.png', // Replace with real image if available
          link: 'https://github.com/abdul2801/Collaborative-code-editor',
        },
        {
          title: 'Capture The Flag (CTF) Platform',
          description:
            'Built an interactive Capture the Flag (CTF) platform with a React frontend and Node.js backend. Integrated an admin interface for creating and managing challenges to enhance platform flexibility.\n\nTech Stack: React, Node.js.',
          imageUrl: 'https://avatars.githubusercontent.com/u/129326094?v=4', // Assuming same image applies
          link: 'https://ctf.iiitkottayam.ac.in/',
        }

      ],
    },
  },
  seo: {
    title: 'Portfolio of Abdul Ahmad',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'abdul-ahmad-2398a1272',
    // twitter: 'arif_szn',
    // mastodon: 'arifszn@mastodon.social',
    // researchGate: '',
    // facebook: '',
    // instagram: '',
    // reddit: '',
    // threads: '',
    // youtube: '', // example: 'pewdiepie'
    // udemy: '',
    // dribbble: '',
    // behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    // stackoverflow: '', // example: '1/jeff-atwood'
    // skype: '',
    // telegram: '',
    // website: 'https://www.arifszn.com',
    leetcode : 'afdul',
    phone: '+91 9344841926',
    email: 'abdul100rafey@gmail.com',
  },
  resume: {
    fileUrl:
      '/resume_new.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  // 20 only
  skills: [
    'Rust',
    'Java',
    'C',
    'C++',
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Express.js',
    'Python',
    'PostgreSQL',
    'MySQL',
    'DB2',
    'Docker',
    'Kubernetes',
    'AWS (EC2, S3, Lambda)',
    'Nginx',
    'Celery',
    'Redis',
    'Linux',
    'Git',
    'GitHub',
    'GitLab'
  ],

  experiences: [
    {
      company: 'Soundverse',
      position: 'Devops And Backend Intern',
      from: 'April 2025',
      to: 'July 2025',
      companyLink: 'https://www.soundverse.ai/',
      
    },
    {
      company: 'IIIT Hyderabad',
      position: 'Research Intern',
      from: 'June 2025',
      to: 'July 2025',
      companyLink: 'https://www.iiit.ac.in/',
      
    },
    {
      company: 'BuildFast',
      position: 'ReactJs Intern',
      from: 'September 2023',
      to: 'November 2023',
      companyLink: 'https://www.buildfast.co.in/',
    },
    {
      company: 'Google Cloud',
      position: 'Study Jam Facilitator',
      from: 'November 2023',
      to: 'January 2024',
      companyLink: 'https://cloud.google.com/',
    },
    {
      company: 'OpenSource Club ',
      position: 'Sublead',
      from: 'December 2023',
      to: 'Present',
      companyLink: '',
    },
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  educations: [
    {
      institution: 'Indian Institute of Information Technology, Kottayam',
      degree: 'Computer Science and Engineering',
      from: '2022',
      to: 'Present',
    },
    {
      institution: 'Chennai Public School, Chennai',
      degree: 'Higher Secondary School',
      from: '2012',
      to: '2019',
    },
  ],
  publications: [
    {
      title: 'Study of the Representational Power of Weighted Randomised Univariate Regression Tree',
      conferenceName: '',
      // journalName: 'Journal Name',
      authors: 'Amir Ahmad, Abdul Rafey, Ajay Kumar',
      link: 'https://www.worldscientific.com/doi/10.1142/S021964922450045X',
      description:
      "Developed a theoretical framework for studying the representational power of infinite-sized weighted ensembles of randomized regression trees. Demonstrated that weighted ensembles can outperform unweighted ones for specific datasets, depending on the weighting scheme. Provided accurate predictions for experimental results in certain cases, enhancing the understanding of regression tree ensembles' properties"
    },
  
  ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      // 'dark',
      // 'cupcake',
      // 'bumblebee',
      // 'emerald',
      // 'corporate',
      // 'synthwave',
      // 'retro',
      // 'cyberpunk',
      // 'valentine',
      // 'halloween',
      // 'garden',
      // 'forest',
      // 'aqua',
      // 'lofi',
      // 'pastel',
      // 'fantasy',
      // 'wireframe',
      // 'black',
      // 'luxury',
      'dracula',
      // 'cmyk',
      // 'autumn',
      // 'business',
      // 'acid',
      // 'lemonade',
      // 'night',
      // 'coffee',
      // 'winter',
      // 'dim',
      // 'nord',
      // 'sunset',
      // 'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
