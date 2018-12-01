const TvShowDetailView = function () {};

TvShowDetailView.prototype.createTvShowDetail = function (show){
  const tvShowDetail = document.createElement('div');
  tvShowDetail.classList.add('tv-show-detail');

  const name = document.createElement('h3');
  name.textContent = show.name;
  tvShowDetail.appendChild(name);

  return tvShowDetail;
};

module.exports = TvShowDetailView;
