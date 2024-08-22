import { people01, people02, people03, facebook, instagram, linkedin, youtube, twitter, airbnb, binance, coinbase, dropbox, send, shield, star, githubWhite, karsten, placeholderVid, placeholderAudio, play, pause, kirbequalizerDemo, preAIaudio, postAIaudio, rgmVid  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  // {
  //   id: "projects",
  //   title: "Projects",
  // },
  {
    id: "contact",
    title: "Contact",
  },
];

export const expereince = [ // this whole block is a placeholder
    {
        id: "expereince-1",
        logo: linkedin,
        description: "did something here"
    },
  ]


export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/karsten_kirby_uy/",
  },
  {
    id: "social-media-2",
    icon: githubWhite,
    link: "https://github.com/Karsten-Uy",
  },
  {
    id: "social-media-3",
    icon: linkedin,
    link: "https://www.linkedin.com/in/karstenuy/",
  },
  {
    id: "social-media-4",
    icon: youtube,
    link: "https://www.youtube.com/channel/UCpk5lRmQTTeHq7ISLFpiwzA",
  }
];

export const home_description_block = [
    {
      id: "home_description_block",
      content:
        "UBC computer engineering student with a passion for creating cutting-edge audio programs.",
      img: karsten, //note: this image is a placeholder
    },
  ];

  export const about_block = [
    {
      id: "about_block",
      content:
        "Hello! I'm Karsten, a UBC computer engineering student passionate about pushing technological boundaries. From mastering coding languages to delving into hardware design, I thrive on challenges. My sweet spot lies in the fusion of creativity and functionality, particularly in audio programming. Thanks for visiting!",
      img: karsten, //note: this image is a placeholder
    },
  ];

  export const KirbEqualizerConts = [ 
    {
        id: "KirbEqualizer",
        vid: kirbequalizerDemo,
        description: "An audio equalizer with customizable highpass, lowpass, and peak filters, allowing precise control over cutoff frequencies, Q values, and gain for personalized audio output.",
        link: "https://github.com/Karsten-Uy/KirbEqualizer"
    }
  ]

  export const RGMConsts = [ 
    {
        id: "Rhythmic Groove Master",
        vid: rgmVid,
        description: "A MIDI controller, powered by Arduino Pro Micro, designed for bass or guitar, enabling simultaneous drum and bass performance, with code written in C++.",
        link: "https://github.com/Karsten-Uy/rhythmicgroovemaster"
    }
  ]

  export const AIVocalModelsConsts = [
    {
      id: "AI Vocal Model Creation", 
      audio1: preAIaudio,
      audio2: postAIaudio,
      label1: "Original vocal sample",
      label2: "Post AI vocal model audio", 
      labelTop: "AI Vocal Model Samples",       
      description: "Combined sound engineering and programming skills to create and utilize AI vocal models tailored for musical applications."
    }
  ]

  export const play_button_components = [
    {
      play: play,
      pause: pause     
    }
  ]

