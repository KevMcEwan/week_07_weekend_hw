const TvShows = require('./models/tv_shows.js');
const TvShowListView = require('./views/tv_show_list_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('Ready to rock');
  const listContainer = document.querySelector('#show-list');
  const tvShowListView = new TvShowListView(listContainer);
  tvShowListView.bindEvents();

  const shows = new TvShows;
  shows.getData();
});
