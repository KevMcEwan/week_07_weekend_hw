const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

//constructor
const headlines = function () {
  this.beerData = [];
};

Beers.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:SelectView:beers-selected', event => {
    const selectedBeers =  event.detail;
    const nameInChosenBeer = this.getListOfBeers(selectedBeers)
    PubSub.publish('Beers:names-ready', nameInChosenBeer);
  };
};

Beers.prototype.getBeers = function () {
  const requestHelper = new requestHelper('https://api.punkapi.com/v2/beers');
//console.log(requestHelper);
  requestHelper.get().then(beers) => {
    this.beerData = beers;
    const name = this.getListofNames();

     console.log(name);
    PubSub.publish('Beers:beers-ready', name);
    PubSub.publish('Beers:names-ready', this.beerData);
  });
};

Beers.prototype.getListofNames = function () {
  return this.beerData
  .map(brew => brew.name)
  .filter((beer, index, beers) => beers.indexOf(beer) === index;
};

Beers.prototype.getListOfBeers = function (name) {
  return this.beerData.filter(brew => brew.name === name);
};

module.exports = Beers;
