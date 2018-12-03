import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('dmca');
  this.route('books', function() {
    this.route('new');
    this.route('show',{path:'/:title_id'});
  });
});

export default Router;
