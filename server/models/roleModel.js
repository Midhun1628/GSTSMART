import db from "../config/db.js";


export class RoleModel {
    static async getPermissionsByRole(role_id) {
      const [rows] = await db.query(
        `SELECT p.permission_name FROM permissions p 
        JOIN role_permissions rp ON p.permission_id = rp.permission_id 
        WHERE rp.role_id = ?`, 
        [role_id]
      );
      return rows.map(row => row.permission_name);
    }
  }
  