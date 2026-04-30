const authorizeRole = (...roles) => {
  return (req, res, next) => {
    try {
      // req.user comes from authMiddleware
      if (!req.user || !req.user.role) {
        return res.status(401).json({ msg: "Unauthorized" });
      }

      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ msg: "Access denied" });
      }

      next();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
};

export default authorizeRole;