import { ValidateType } from './const';

import { validateLogin } from './validate-login';
import { validatePassword } from './validate-password';
import { validateName } from './validate-name';
import { validateEmail } from './validate-email';
import { validatePhone } from './validate-phone';

type ValidateRules = {
  type: ValidateType;
  value: string;
};

export const validateForm = (rules: ValidateRules): string => {
  let error = ``;

  const { type, value } = rules;

  switch (type) {
    case ValidateType.Login:
    case ValidateType.DisplayName:
      error = validateLogin(value);
      return error;
    case ValidateType.Password:
    case ValidateType.PasswordRepeat:
      error = validatePassword(value);
      return error;
    case ValidateType.FirstName:
    case ValidateType.SecondName:
      error = validateName(value);
      return error;
    case ValidateType.Email:
      error = validateEmail(value);
      return error;
    case ValidateType.Phone:
      error = validatePhone(value);
      return error;
    default:
      return error;
  }
};
