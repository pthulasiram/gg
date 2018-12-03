import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        publishBook: function() {
          var newBook = this.store.createRecord('book', {
            title_id : "poucher-s-perfumes-cosmetics-and-soaps-djvu",
            title: this.get('title'),
            author: this.get('author'),
            year: this.get('year'),
            edition : "10th ed.",
            publisher : "Springer",
            pages : "820",
            language : "English",
            topic : "Medicine\\\\Natural Medicine",
            googlebookid : "",
            openlibraryid : "OL3321478M",
            md5 : "D0D1B36D6561F74CAE2A359E8BC24777",
            coverurl : "0/d0d1b36d6561f74cae2a359e8bc24777-d.jpg",
            extension : "djvu"

          });
          newBook.save();
          this.transitionTo('books');
        },
      }
});
