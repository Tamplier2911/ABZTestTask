const getRequiredContent = (width) => {
  if (width > 425) {
    return {
      header: "Test assignment for frontend developer position",
      paragraph: `We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider 
                    and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale 
                    in the banner area on the different screens`,
      btn: "Sign up now",
    };
  } else {
    return {
      header: "Test assignment for frontend developer position",
      paragraph: `We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository.`,
      btn: "Sign up now",
    };
  }
};

export default getRequiredContent;
