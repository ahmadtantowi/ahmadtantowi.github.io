// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ahmadtantowi', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'ahmadtantowi/FetchData',
          'ahmadtantowi/GenericEntity',
          'ahmadtantowi/LiteCache.Tizen',
          'ahmadtantowi/SendMail',
          'ahmadtantowi/At.AzFunctions.HealthChecks',
          'ahmadtantowi/RCSyot',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'FIFO Board Indicator',
          description:
            'A FIFO box indicator board utilizing LED lamps to visually guide users on the order of box usage.',
          imageUrl:
            'https://raw.githubusercontent.com/ahmadtantowi/fifo-board-indicator/refs/heads/main/assets/diagram.png',
          link: 'https://github.com/ahmadtantowi/fifo-board-indicator',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ahmad Tantowi',
    description:
      'Versatile Backend Engineer with extensive expertise across the .NET ecosystem, Golang, and cross-platform mobile development. Skilled in translating complex PRDs into scalable features and optimizing developer workflows through automated deployment processes. Demonstrated success in full-lifecycle application development, from cloud resource configuration to enhancing user engagement through notification systems.',
    imageURL: '',
  },
  social: {
    linkedin: 'ahmadtantowi',
    x: 'amdttw',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'ahmadtantowi@outlook.com',
  },
  resume: {
    fileUrl:
      'https://1drv.ms/b/c/2c05b74ecec7a66d/IQCLdjqtBOM4QY5X9Xdgj3nHAZvslGBBDEY6VZw3ygvXQrI?e=piAptq', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Go',
    'C#',
    'JavaScript',
    'Java',
    '.NET Core',
    'Xamarin',
    'WPF',
    'Node.js',
    'PostgreSQL',
    'MySQL',
    'RabbitMQ',
  ],
  experiences: [
    {
      company: 'Sobatbisnis',
      position: 'Product Engineer',
      from: 'April 2025',
      to: 'June 2025',
      companyLink: 'https://sobatbisnis.com',
    },
    {
      company: 'eFishery',
      position: 'Backend Engineer',
      from: 'January 2023',
      to: 'February 2025',
      companyLink: 'https://efishery.com',
    },
    {
      company: 'Roketin',
      position: 'Dotnet Developer',
      from: 'September 2022',
      to: 'December 2022',
      companyLink: 'https://roketin.com',
    },
    {
      company: 'Radya Labs',
      position: 'Backend Developer',
      from: 'January 2020',
      to: 'September 2022',
      companyLink: 'https://radyalabs.com',
    },
    {
      company: 'Radya Labs',
      position: 'Xamarin Developer',
      from: 'March 2018',
      to: 'December 2020',
      companyLink: 'https://radyalabs.com',
    },
  ],
  certifications: [
    {
      name: 'Learn Intermediate Go Course',
      body: 'Learn to handle files and errors effectively and master web programming in Go in this intermediate course. Ideal for aspiring Go experts.',
      year: 'March 2025',
      link: 'https://www.codecademy.com/profiles/ahmadtantowi/certificates/42ee48b10e8644f0b3131a933c02cd00',
    },
    {
      name: 'Learn Express Course',
      body: 'Learn how to make back-end apps and APIs using the popular Express.js framework.',
      year: 'March 2025',
      link: 'https://www.codecademy.com/profiles/ahmadtantowi/certificates/85396dd6e2e850ab34e904243aa464c6',
    },
    {
      name: 'Learn Node-SQLite Course',
      body: 'Learn how to interact with a SQL database from within your JavaScript programs!',
      year: 'March 2025',
      link: 'https://www.codecademy.com/profiles/ahmadtantowi/certificates/f0257b235b081aca2766010aad2df800',
    },
  ],
  educations: [
    {
      institution: 'UIN Sunan Gunung Djati Bandung',
      degree: "Bachelor's Degree of Computer Science",
      from: '2015',
      to: '2019',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'ahmadtntwi', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-2BVWPD3BHJ', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'emerald',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
