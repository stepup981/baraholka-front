export const validateEmail = (email: string): boolean => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

export const validatePassword = (password: string): boolean => {
  if (password.length < 8) return false;

  const hasLetters = /[a-zA-Z]/.test(password);
  const hasDigits = /\d/.test(password);
  return hasLetters && hasDigits;
};
