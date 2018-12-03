import FirebaseAdapter from 'emberfire/adapters/firebase';
import Ember from 'ember';
const { inject } = Ember;

export default FirebaseAdapter.extend({  
  firebase: inject.service(),
});

// id:string title:string author:string year:string edition:sting publisher:string
// pages:string language:string topic:string googlebookid:string openlibraryid:string
// md5:string coverurl:string extension:string

// id : "poucher-s-perfumes-cosmetics-and-soaps-djvu",
//     "title" : "Poucher's Perfumes, Cosmetics and Soaps",
//     "author" : "Hilda Butler, H. Butler",
//     "year" : "2000",
//     "edition" : "10th ed.",
//     "publisher" : "Springer",
//     "pages" : "820",
//     "language" : "English",
//     "topic" : "Medicine\\\\Natural Medicine",
//     "googlebookid" : "",
//     "openlibraryid" : "OL3321478M",
//     "md5" : "D0D1B36D6561F74CAE2A359E8BC24777",
//     "coverurl" : "0/d0d1b36d6561f74cae2a359e8bc24777-d.jpg",
//     "extension" : "djvu"
