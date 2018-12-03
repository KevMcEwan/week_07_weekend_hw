const TvShowDetailView = function () {};

TvShowDetailView.prototype.createTvShowDetail = function (show){
  const tvShowDetail = document.createElement('div');
  tvShowDetail.classList.add('tv-show-detail');

  const name = document.createElement('h3');
  name.textContent = show.name;
  tvShowDetail.appendChild(name);

  const tvShowDetailsList = document.createElement('ul');

  function stripHtml(html){
    // Create a new div element
    const temporalDivElement = document.createElement("div");
    // Set the HTML content with the provided
    temporalDivElement.innerHTML = html;
    // Retrieve the text property of the element (cross-browser support)
    return temporalDivElement.textContent || temporalDivElement.innerText || "";
  }

  const summaryText = (stripHtml(show.summary));


  const image = document.createElement('img');
  image.src = show.image.medium;
  tvShowDetailsList.appendChild(image);

  const summary = this.createDetailListItem('Summary: ', summaryText);
  tvShowDetailsList.appendChild(summary);

  


  tvShowDetail.appendChild(tvShowDetailsList);

  return tvShowDetail;
};


TvShowDetailView.prototype.createDetailListItem = function (label, property) {
  const element = document.createElement('li');
  element.textContent = `${label}${property}`;
  return element;
};

module.exports = TvShowDetailView;
