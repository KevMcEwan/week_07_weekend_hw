const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const TvShows = function (){
  this.tvShowsData = [];
};

TvShows.prototype.getData = function () {

  const requestHelper = new Request ('https://munroapi.herokuapp.com/api/munros');
  requestHelper.get( (data) => {
    this.tvShowsData = data;
    PubSub.publish('TvShows:list-of-shows-ready', this.tvShowsData);
    console.log(data);
  });
};

module.exports = TvShows;

// 'http://api.tvmaze.com/shows'
