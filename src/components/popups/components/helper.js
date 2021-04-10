import * as Yup from "yup";

export const formatDate = (date) => {
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  const yyyy = date.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }
  return mm + "/" + dd + "/" + yyyy;
};

export const validateRuntime = (value) => {
  const pattern = /^[0-9]+$/;
  let error;

  if (!value) {
    error = "Required";
  } else if (!pattern.test(value)) {
    error = "Length can be only a number";
  }

  return error;
};

export const validateURL = (value) => {
  const pattern = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

  let error;

  if (!value) {
    error = "Required";
  } else if (!pattern.test(value)) {
    error = "Invalid URL address";
  }

  return error;
};

export const validateObject = Yup.object({
  title: Yup.string()
    .max(30, "Must me 20 characters or less")
    .required("Required"),
  overview: Yup.string()
    .max(1000, "Must me 1000 characters or less")
    .required("Required"),
});


