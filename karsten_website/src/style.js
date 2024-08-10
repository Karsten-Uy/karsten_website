const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-10 py-6",
  padding: "sm:px-10 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  homepageLink: {
    color: '#ffcc00', /* Bright color for the link */
    fontWeight: 'bold', /* Make the text bold */
    fontSize: '1.25rem', /* Slightly larger font size */
    textDecoration: 'none', /* Remove underline */
    backgroundColor: '#333', /* Background color to make it pop */
    padding: '10px 20px', /* Padding around the text */
    borderRadius: '5px', /* Rounded corners for the button */
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', /* Shadow for a 3D effect */
    marginRight: '7px', /* Space to the right of the button */
  },

  homepageLinkHover: {
    backgroundColor: '#555', /* Darker background on hover */
    color: '#fff', /* Change text color on hover */
    textDecoration: 'none', /* Ensure no underline on hover */
  },

  flicker: 'flicker',
  backgroundMove: 'backgroundMove',

  flickerAnimation: `
    @keyframes flicker {
      0%, 100% { opacity: 1.1; }
      50% { opacity: 0.9; }
    }
    .flicker {
      animation: flicker 20s infinite;
    }
  `,

  backgroundMoveAnimation: `
  @keyframes backgroundMove {
    0% { background-position: 0 0; }
    25% { background-position: 3% 0; }
    50% { background-position: 0 3%; }
    75% { background-position: -3% 0; }
    90% { background-position: 0 -2%; }
    100% { background-position: 0 0%; }
  }
  .backgroundMove {
    animation: backgroundMove 20s ease-in-out infinite;
  }
`,

};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
