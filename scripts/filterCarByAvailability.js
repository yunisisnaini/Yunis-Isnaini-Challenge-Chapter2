function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  for (let index = 0; index < cars.length; index++) {
    if (cars[index].available) {
      result.push(cars[index]);
    }
  }
  console.log(result);

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
