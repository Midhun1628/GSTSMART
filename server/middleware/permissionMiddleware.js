import { RoleModel } from "../models/roleModel.js";

export const checkPermission = (requiredPermission) => {
  return async (req, res, next) => {
    
      const userRole = req.user?.role_id;
      console.log("User object in middleware:", req.user);
    if (!userRole) {
      return res.status(403).json({ message: "Role ID is missing or invalid" });
    }
    
    if (!userRole) {
      return res.status(403).json({ message: "Role not assigned" });
    }

    const userPermissions = await RoleModel.getPermissionsByRole(userRole);

    if (!userPermissions.includes(requiredPermission)) {
      return res.status(403).json({ message: "Access Denied: Insufficient permissions" });
    }

    next();
  };
};
