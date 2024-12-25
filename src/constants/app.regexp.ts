/* most common used regex constant */

export const AppRegex = {
  FULL_NAME: /^[A-Za-z ]{2,}$/,
  EMAIL: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  NUMBER: /^[0-9]+$/gi,
  EMPTY_SPACE: /^\S/,
  NOT_EMPTY_STRING: /^\s*\S.*\S\s*$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,

  EIGHT_CHAR_PASSWORD_VALIDATION: /^(?!\s{8,})\S{8,}$/,
  AT_LEAST_ONE_UPPER_CASE: /(?=.*[A-Z])(?!\s+$)\S+/,
  AT_LEAST_ONE_LOWER_CASE: /(?=.*[a-z])(?!\s+$)\S+/,
  AT_LEAST_ONE_NUMBER: /(?=.*\d)(?!\s+$)\S+/,

  FILE_NAME_WITHOUT_EXT: /([^\\/]+)(?=\.\w+$)/,
};
