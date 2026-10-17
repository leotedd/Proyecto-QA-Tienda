/**
 * Datos de prueba centralizados de usuarios.
 *
 * Reglas:
 * - No versionar contraseñas reales ni secretos en este archivo.
 * - Las cuentas se generan dinámicamente en cada ejecución (correo único)
 *   para evitar conflictos entre ejecuciones y navegadores.
 */

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  password: string;
}

export interface Credentials {
  email: string;
  password: string;
}

/** Contraseña ficticia usada solo para cuentas desechables de prueba. */
export const TEST_PASSWORD = 'QaTienda#2026';

/** Contraseña ficticia usada en el caso de cambio de contraseña. */
export const NEW_TEST_PASSWORD = 'QaTienda#2026b';

/**
 * Genera un usuario con correo único (dominio reservado example.com).
 */
export function buildUniqueUser(prefix = 'qa'): UserData {
  const unique = `${Date.now()}${Math.floor(Math.random() * 10000)}`;
  return {
    firstName: 'Teddy',
    lastName: 'QA',
    email: `${prefix}.${unique}@example.com`,
    telephone: '5551234567',
    password: TEST_PASSWORD,
  };
}

/** Datos para la actualización de perfil. */
export const updatedProfile = {
  firstName: 'TeddyEditado',
  lastName: 'QAEditado',
  telephone: '5559876543',
};

/** Mensajes esperados de OpenCart en autenticación y registro. */
export const authMessages = {
  loginFailed: 'Warning: No match for E-Mail Address and/or Password.',
  privacyPolicy: 'Warning: You must agree to the Privacy Policy!',
  emailAlreadyRegistered: 'Warning: E-Mail Address is already registered!',
  passwordMismatch: 'Password confirmation does not match password!',
  accountCreatedTitle: 'Your Account Has Been Created!',
  accountCreated: 'Congratulations! Your new account has been successfully created!',
  logoutTitle: 'Account Logout',
  loggedOut: 'You have been logged off your account.',
  profileUpdated: 'Success: Your account has been successfully updated.',
  passwordUpdated: 'Success: Your password has been successfully updated.',
};

/** Errores esperados por campo al enviar el registro vacío. */
export const registerRequiredFieldErrors = {
  firstName: 'First Name must be between 1 and 32 characters!',
  lastName: 'Last Name must be between 1 and 32 characters!',
  email: 'E-Mail Address does not appear to be valid!',
  telephone: 'Telephone must be between 3 and 32 characters!',
  password: 'Password must be between 4 and 20 characters!',
};

/** Escenarios de login inválido (prueba parametrizada). */
export const invalidLoginCases: { name: string; credentials: (registered: Credentials) => Credentials }[] = [
  {
    name: 'contraseña incorrecta para un usuario registrado',
    credentials: (registered) => ({ email: registered.email, password: 'ClaveIncorrecta#1' }),
  },
  {
    name: 'correo no registrado',
    credentials: () => ({ email: buildUniqueUser('noexiste').email, password: TEST_PASSWORD }),
  },
  {
    name: 'correo y contraseña vacíos',
    credentials: () => ({ email: '', password: '' }),
  },
];
