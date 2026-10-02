import { test as base, expect } from '@playwright/test';

/**
 * Punto central de fixtures personalizados del proyecto.
 *
 * Los specs deben importar `test` y `expect` desde este archivo para
 * poder reutilizar los fixtures que se agreguen aquí.
 *
 * TODO: agregar el fixture reutilizable de login (por ejemplo, una página
 * con sesión iniciada) apoyándose en helpers/auth.ts y test-data/users.ts.
 */
export const test = base;

export { expect };
