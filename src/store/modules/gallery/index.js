import mutations from './mutations';
import actions from './actions';
import getters from './getters'

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      gallery: [
        {
          id: 'c1',
          imageUrl: 'flowers.jpg',
          title: 'Flowers in Bloom',
          price: 2000,
          width: 30,
          height: 50,
          theme: 'still_life',
          techniques: ['acrylic'],
          year: 2017,
          uploadDate: 1663286375040,
          description: "This was made just for fun!",
        },
        {
          id: 'c2',
          imageUrl: 'around.png',
          title: 'Around the World',
          price: 3000,
          width: 120,
          height: 80,
          theme: 'landscape',
          techniques: ['watercolor'],
          year: 2018,
          uploadDate: 1663286375041,
          description: "What can I say, I just love to travel!",
        },
        {
          id: 'c3',
          imageUrl: 'circles.jpg',
          title: 'Circles in the Sand',
          price: 1500,
          width: 20,
          height: 20,
          theme: 'abstract',
          techniques: ['mixed_media'],
          year: 2019,
          uploadDate: 1663286375042,
          description: "I didn't think that something as simple as " +
            "the sand on the city beach could end up being " +
            "my biggest inspiration this year!",
        },
        {
          id: 'c4',
          imageUrl: 'sunny.png',
          title: 'Sunny Day in Skopje',
          price: 12000,
          width: 160,
          height: 100,
          theme: 'sketch',
          techniques: ['pencil'],
          year: 2019,
          uploadDate: 1663286375043,
          description: "My home town is full of surprises!",
        },
        {
          id: 'c5',
          imageUrl: 'random.jpeg',
          title: 'Random Random Random',
          price: 5000,
          width: 100,
          height: 100,
          theme: 'act',
          techniques: ['charcoal'],
          year: 2020,
          uploadDate: 1663286375044,
          description: "Random things bring out the best in me!",
        },
        {
          id: 'c6',
          imageUrl: 'fall.jpg',
          title: 'The Final Fall',
          price: 4500,
          width: 80,
          height: 100,
          theme: 'portrait',
          techniques: ['other'],
          year: 2021,
          uploadDate: 1663286375045,
          description: "It's ok to be angry sometimes... " +
            "as long as you come back calmer next time!",
        },
        {
          id: 'c7',
          imageUrl: 'experimenting.jpg',
          title: 'Experimenting',
          price: 6800,
          width: 120,
          height: 200,
          theme: 'other',
          techniques: ['pastel'],
          year: 2022,
          uploadDate: 1663286375046,
          description: "I've been fascinated with everyday materials " +
            "that are not quite associated with art. What can I make " +
            "with one cup of sugar? It turns out... many things! " +
            "It might sound silly at first, but isn't that what art " +
            "is really all about?",
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};