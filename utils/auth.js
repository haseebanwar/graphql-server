const authenticateReq = (next) => {
  return (root, args, context, info) => {
    if (!context.isAuthenticated) {
      throw new Error('You are not authorized');
    }
    return next(root, args, context, info);
  };
};

exports.authenticateReq = authenticateReq;
