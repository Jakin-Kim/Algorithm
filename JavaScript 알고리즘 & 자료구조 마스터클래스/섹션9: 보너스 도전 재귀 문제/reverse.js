function reverse(str){
  
  let first = str.slice(str.length-1); // 'e'

  // base case
  if(!str.length) return '';
  
  // recursive case
  return first + reverse(str.slice(0, str.length-1))
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
