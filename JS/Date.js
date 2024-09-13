// Turn your strings into dates, and then subtract them
// to get a value that is either negative, positive, or zero.

array.sort(function(a,b){
  return new Date(a) - new Date(a);			// Asc
});

array.sort(function(a,b){
  return new Date(b) - new Date(a);			// Desc
});
