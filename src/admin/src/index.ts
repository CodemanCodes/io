import "module-alias/register";
import { Admin } from './admin';

const admin: Admin = new Admin();

admin.start();
