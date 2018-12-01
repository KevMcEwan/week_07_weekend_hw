const PubSub = require('../helpers/pub_sub.js');
const TvShowDetailView = require('./tv_show_detail_view.js');

const TvShowListView = function (container) {
  this.container = container;
};

TvShowListView.prototype.bindEvents = function () {
  PubSub.subscribe('TvShows:list-of-shows-ready', (event) => {
    this.renderTvShowDetailViews(event.detail);
  });
};

TvShowListView.prototype.renderTvShowDetailViews = function (tvShows) {
  tvShows.forEach( (show) => {
    const showItem = this.createTvShowListItem(show);
    this.container.appendChild(showItem);
  });
};

TvShowListView.prototype.createTvShowListItem = function (show) {
  const tvShowDetailView = new TvShowDetailView();
  const tvShowDetail = tvShowDetailView.createTvShowDetail(show);
  return tvShowDetail;
};

module.exports = TvShowListView;
