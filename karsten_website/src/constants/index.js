import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star, githubWhite, karsten, placeholderVid, placeholderAudio, play, pause  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  // {
  //   id: "experience",
  //   title: "Expereince",
  // },
  {
    id: "projects",
    title: "Projects",
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

  export const KirbEqualizerConts = [ //need to change here so that each element has the same number of feilds
    {
        id: "KirbEqualizer",
        vid: placeholderVid, //note: this video is a placeholder
        description: "An audio equalizer with customizable highpass, lowpass, and peak filters, allowing precise control over cutoff frequencies, Q values, and gain for personalized audio output.",
        link: "https://github.com/Karsten-Uy/KirbEqualizer"
    }
  ]

  export const AIVocalModelsConsts = [
    {
      id: "AI Vocal Model Creation", 
      audio1: placeholderAudio, //note: this video is a placeholder
      audio2: placeholderAudio, //note: this video is a placeholder
      label1: "Original vocal sample",
      label2: "Post AI vocal model audio", 
      labelTop: "AI Vocal Model Samples",       
      description: "An audio equalizer with customizable highpass, lowpass, and peak filters, allowing precise control over cutoff frequencies, Q values, and gain for personalized audio output."
    }
  ]

  export const play_button_components = [
    {
      play: play,
      pause: pause     
    }
  ]

