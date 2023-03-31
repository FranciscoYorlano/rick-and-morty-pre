/// REGEX
const REGEX_IS_EMPTY = /^\s*$/; // True if is empty
const REGEX_IS_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // True if is email
const REGEX_PASSWORD = /^(?=.*\d).{6,10}$/; // True if is between 6 and 10 characters in length and contain at least one number

// Function
const validateLogin = (userData) => {
    const { email, password } = userData;
    const errors = { emailError: "", passwordError: "" };

    // Email verifications
    if (REGEX_IS_EMPTY.test(email.trim())) {
        errors.emailError = "Email cannot be empty";
    } else {
        if (!REGEX_IS_EMAIL.test(email)) {
            errors.emailError = "Email must be a valide email";
        }
    }
    if (email.length > 35) {
        errors.emailError = "Email cannot exceed 35 characters";
    }

    // Password verifications
    if (!REGEX_PASSWORD.test(password.trim())) {
        errors.passwordError =
            "Password must be between 6 and 10 characters in length and contain at least one number";
    }

    // Empty
    if (!email) {
        errors.emailError = "";
    }
    if (!password) {
        errors.passwordError = "";
    }

    return errors;
};

export default validateLogin;
