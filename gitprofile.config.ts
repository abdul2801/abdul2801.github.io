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
        limit: 10, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
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
          title: 'Capture The Flag WebSite',
          description:
            'A website for hosting CTFs and solving challenges with a intuitive UI and smooth animations. \n\n Tech Stack: React.js, MySQL, Docker, Nginx, TailwindCSS, Express.js and more.',
          imageUrl:
            'https://csyclub.iiitkottayam.ac.in/CSC_Logo.png',
          link: 'https://ctf.iiitkottayam.ac.in/',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ariful Alam',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'abdul-2398a1272',
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
      'https://docs.google.com/document/d/1Q8sqQeHeRDysYVNi16PrKlc3nXgKO0mUq2YNylnUswU/edit?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  // 20 only
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'MySQL',
    'Docker',
    'Nginx',
    'TailwindCSS',
    'Bootstrap',
    'Material-UI',
    'Git',
    'GitHub',
    'GitLab',
    'Jira',
    'Rust',
    'Django',
    'Python',
    'Linux',
   
  ],
  experiences: [
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
