
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Home Page' });
};

exports.single = function(req, res) {
  res.render('single', {title: 'Single Page'});
}