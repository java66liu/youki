exports.apply = function(scope, runtime){
	require('./fundemental').apply(scope, runtime);
	require('./numeric').apply(scope, runtime);
}