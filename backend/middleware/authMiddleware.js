const checkAuth = (req, res, next) => {
  console.log("Desde mi middelewaare");
  next();
};

export default checkAuth;
