/**
 * NestJS Mock Authentication Middleware
 * 
 * Provides JWT-based authentication and role-based access control for NestJS applications.
 * This is a MOCK implementation for development/testing purposes only.
 * 
 * ⚠️ WARNING: Does not verify JWT signatures. DO NOT use in production without proper verification.
 * 
 * @module @bitovi-corp/auth-middleware
 */

// Guards
export { AuthGuard } from './guards/auth.guard';
export { RequireRolesGuard } from './guards/require-roles.guard';
export { RequireAllRolesGuard } from './guards/require-all-roles.guard';

// Decorators
export { User } from './decorators/user.decorator';
export { Roles } from './decorators/roles.decorator';
export { RequireAllRoles } from './decorators/require-all-roles.decorator';

// Models
export { UserClaims } from './models/user-claims.interface';

// Services
export { JwtParserService } from './services/jwt-parser.service';

// Exceptions
export { InvalidTokenException } from './exceptions/invalid-token.exception';
export { InsufficientPermissionsException } from './exceptions/insufficient-permissions.exception';

// Module
export { AuthModule } from './auth/auth.module';
