import DS from 'ember-data';

export default DS.Model.extend({
  title_id: DS.attr('string'),
  title: DS.attr('string'),
  author: DS.attr('string'),
  year: DS.attr('string'),
  edition: DS.attr('string'),
  publisher: DS.attr('string'),
  pages: DS.attr('string'),
  language: DS.attr('string'),
  topic: DS.attr('string'),
  googlebookid: DS.attr('string'),
  openlibraryid: DS.attr('string'),
  md5: DS.attr('string'),
  coverurl: DS.attr('string'),
  extension: DS.attr('string'),
  download: Ember.computed('md5',function(){
    var url = `${this.get('md5')}`;
    if(url != ""){
      return `http://gen.lib.rus.ec/get.php?md5=${this.get('md5')}`;
    } else {
      return `#`;
    }
  }),
  image_url: Ember.computed('coverurl', function() {
    var url = `${this.get('coverurl')}`;
    if(url != ""){
      return `http://libgen.io/covers/${this.get('coverurl')}`;
    } else {
      return `#`;
    }
   
  })
});
