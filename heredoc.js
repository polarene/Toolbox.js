/**
 * 	here-doc function for using multiline strings in javascript
 *	( http://stackoverflow.com/questions/805107/multiline-strings-in-javascript/5571069#5571069 )
 *
 	usage:
 	var tennysonQuote = hereDoc(function() {/*!
 	  Theirs not to make reply,
 	  Theirs not to reason why,
 	  Theirs but to do and die
 	*/
//	}); 
// */

function hereDoc(f) {
  return f.toString().
      replace(/^[^\/]+\/\*!?/, '').
      replace(/\*\/[^\/]+$/, '');
}

