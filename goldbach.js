function isPrime(n) {
  if (n < 2) return false;
  var q = Math.floor(Math.sqrt(n));
  for (var i = 2; i <= q; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function isGoldbach(n) {
	var limit = Math.floor( Math.sqrt(n/2) );
	for (var i = 1; i <= limit; i++) {
		if (isPrime(n - 2*i*i)) return true;
	}
	return false;
}

function findSmallest() {
	var i = 1;
	while (isPrime(2*i + 1) || isGoldbach(2*i + 1)) {
		i++;
	}
	return (2*i + 1);
}

console.log( findSmallest() );
