const PubSub = require('../helpers/pub_sub.js');
const TvShowDetailView = require('./tv_show_detail_view.js');
const SortArrayByName = require('../helpers/sort.js');

const TvShowListView = function (container) {
  this.container = container;
};

TvShowListView.prototype.bindEvents = function () {
  PubSub.subscribe('TvShows:list-of-shows-ready', (event) => {
    const data = new SortArrayByName(event.detail);
    this.renderTvShowDetailViews(data);
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
