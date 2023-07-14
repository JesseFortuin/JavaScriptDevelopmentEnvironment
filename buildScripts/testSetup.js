//Register babel to transpile before tests are run
require("@babel/register")();

//Disable webpack features that mocha doesn't understand.
require.extensions[".css"] = function() {};
