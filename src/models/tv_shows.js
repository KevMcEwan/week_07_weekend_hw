const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');


const TvShows = function (){
  this.tvShowsData = [];
};

TvShows.prototype.getData = function () {
  const requestHelper = new Request ('http://api.tvmaze.com/shows');
  requestHelper.get()
  .then(data => {
    this.tvShowsData = data;
    PubSub.publish('TvShows:list-of-shows-ready', this.tvShowsData);
  });
};


module.exports = TvShows;

// 'http://api.tvmaze.com/shows'
