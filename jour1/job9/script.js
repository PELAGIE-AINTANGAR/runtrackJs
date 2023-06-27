function tri(numbers, order) {
    if (order === "asc") {
      // Tri dans l'ordre ascendant
      numbers.sort(function(a, b) {
        return a - b;
      });
    } else if (order === "desc") {
      // Tri dans l'ordre décroissant
      numbers.sort(function(a, b) {
        return b - a;
      });
    } else {
      // Si le paramètre "order" n'est ni "asc" ni "desc", retourne le tableau sans le trier
      return numbers;
    }
  
    return numbers;
  }
  
  // Exemple d'utilisation :
  let numbers = [5, 2, 8, 1, 9];
  let order = "desc";
  
//   let sortedNumbers = tri(numbers, order);
  console.log(tri(numbers, order));
  