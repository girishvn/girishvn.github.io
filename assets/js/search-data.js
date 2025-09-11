// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "The below is a brief overview of my experience. Click the icon on the right to access my entire CV.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-lsm-is-featured-on-the-google-research-blog",
          title: 'LSM is featured on the Google Research Blog.',
          description: "",
          section: "News",},{id: "news-presenting-lsm-at-iclr-25-excited-to-explore-singapore",
          title: 'Presenting LSM at ICLR ‘25. Excited to explore Singapore!',
          description: "",
          section: "News",},{id: "news-google-open-sourced-my-on-device-respiratory-sensing-models-find-them-on-github-and-hugging-face",
          title: 'Google open sourced my on-device respiratory sensing models! Find them on Github and...',
          description: "",
          section: "News",},{id: "news-our-workshop-ts4h-time-series-for-health-was-accepted-to-neurips-25",
          title: 'Our workshop, TS4H (Time-Series for Health), was accepted to NeurIPS ‘25!',
          description: "",
          section: "News",},{id: "news-lsm-2-is-featured-on-the-google-research-blog",
          title: 'LSM-2 is featured on the Google Research Blog.',
          description: "",
          section: "News",},{id: "projects-artwork",
          title: 'Artwork',
          description: "Some of my doodles...",
          section: "Projects",handler: () => {
              window.location.href = "/projects/artwork.html";
            },},{id: "projects-audio-based-respiratory-sensing",
          title: 'Audio-Based Respiratory Sensing',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/audio_respiratory_sensing.html";
            },},{id: "projects-non-contact-vital-sensing",
          title: 'Non-Contact Vital Sensing',
          description: "Making health ubiquitous",
          section: "Projects",handler: () => {
              window.location.href = "/projects/non_contact_vitals_sensing.html";
            },},{id: "projects-photography",
          title: 'Photography',
          description: "Things I&#39;ve seen...",
          section: "Projects",handler: () => {
              window.location.href = "/projects/photography.html";
            },},{id: "projects-sensor-foundation-models",
          title: 'Sensor Foundation Models',
          description: "Making the most of wearable sensor signals",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wearable_foundation_models.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%69%72%69%73%68%76%6E@%75%77.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=uNbzzSgAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/gnarayanswamy", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/girishvn", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/gvn_photos", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
