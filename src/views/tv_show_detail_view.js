const TvShowDetailView = function () {};

TvShowDetailView.prototype.createTvShowDetail = function (show){
  const tvShowDetail = document.createElement('div');
  tvShowDetail.classList.add('tv-show-detail');

  const name = document.createElement('h3');
  name.textContent = show.name;
  tvShowDetail.appendChild(name);

  const tvShowDetailsList = document.createElement('ul');

  const summary = this.createDetailListItem('Summary', show.summary);
  tvShowDetailsList.appendChild(summary);

  const image = document.createElement('img');
  image.src = show.image.medium;
  tvShowDetailsList.appendChild(image);

  tvShowDetail.appendChild(tvShowDetailsList);

  return tvShowDetail;
};

TvShowDetailView.prototype.createDetailListItem = function (label, property) {
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element;
};

module.exports = TvShowDetailView;
