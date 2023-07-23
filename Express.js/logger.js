
function logger(req,res,next) {
  console.log(req.method,' ',req.url);
  console.log(new Date().getDay);
  next();
}
module.exports = {logger};