const nayok = {
  name: 'shakib khan',
  id: 123,
  address: 'movie cinema',
  isSingle: true,
  friends: ['apu', 'buli', 'sabila-nur', 'nabila', 'srabonti'],
  movies: [{ name: 'no-1', year: 2015 }, { name: 'tufan', year: 2024 }, { name: 'borbad', year: 2025 }, { name: 'priyo-toma', year: 2023 }],
  act: function () {
    console.log('You watch movie every Eid festivle');
  },
  car: {
    brand: 'tesla',
    price: 5000000,
    made: 2025,
    manufaturer: {
      name: 'tesla101',
      ceo: 'elon-mask',
      country: 'usa'
    }
  }
}
// console.log(student.movies);
nayok.act();