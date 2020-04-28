export const cleanState = () => ({
  name: "",
  nameErr: "",
  email: "",
  emailErr: "",
  phone: "",
  phoneErr: "",
  position: "",
  positionErr: "",
  photo: null,
  photoErr: "",
});

const validator = (userCredentials) => {
  const { name, email, phone, position, photo } = userCredentials;

  // regex
  const emailRe = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  const phoneRe = /^[\+]{0,1}380([0-9]{9})$/;

  // state
  let failed = false;
  const errors = {
    nameErr: "",
    emailErr: "",
    phoneErr: "",
    positionErr: "",
    photoErr: "",
  };

  // name must be 2-60 characters
  if (name.length < 2 || name.length > 60) {
    failed = true;
    errors.nameErr = "Name must be 2-60 chars long.";
  }

  // email must match pattern
  if (!emailRe.test(email.toLowerCase())) {
    failed = true;
    errors.emailErr = "Email must match required format.";
  }

  if (email.length < 2 || email.length > 100) {
    failed = true;
    errors.emailErr = "Email must be 2-100 chars long.";
  }

  // phone must match pattern
  if (!phoneRe.test(phone.toLowerCase())) {
    failed = true;
    errors.phoneErr = "Phone must match required format.";
  }

  // position must be chosen
  if (position.length === 0) {
    failed = true;
    errors.positionErr = "Please, choose desired job.";
  }

  // user photo must exist
  if (photo) {
    //  user photo should be jpeg format
    if (photo.size / 1024 / 1024 > 5) {
      failed = true;
      errors.photoErr = "Photo must be 5MB at max.";
    }

    // user photo must not exceed 5MB
    if (!photo.type.endsWith("/jpeg")) {
      failed = true;
      errors.photoErr = "Photo must be jpeg format.";
    }

    // user photo must be at least 70x70px
    if (photo.height < 70 || photo.width < 70) {
      failed = true;
      errors.photoErr = "Photo must be at lest 70x70 px.";
    }
  } else {
    failed = true;
    errors.photoErr = "Please, upload your photo..";
  }

  /*

  const reader = new FileReader();

  // read content of file
  reader.readAsDataURL(photo);

  reader.onload = (e) => {
    // initiate the JavaScript Image object
    const image = new Image();

    // set the Base64 string return from FileReader as source
    image.src = e.target.result;

    // validate the File Height and Width
    image.onload = () => {
      const height = image.height;
      const width = image.width;
      console.log(height, width);
    };
  };

  */

  return {
    failed,
    errors,
  };
};

export default validator;
