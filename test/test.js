/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var detectGeneratorSupport = require( '@stdlib/assert-has-generator-support' );
var noop = require( '@stdlib/utils-noop' );
var isGeneratorObject = require( './../lib' );


// VARIABLES //

var hasGeneratorsSupport = detectGeneratorSupport();


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof isGeneratorObject, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `false` if not provided a generator object-like value', function test( t ) {
	var values;
	var i;
	values = [
		'5',
		5,
		true,
		void 0,
		null,
		NaN,
		[],
		function noop() {},
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isGeneratorObject( values[i] ), false, 'returns false' );
	}
	t.end();
});

tape( 'the function returns `true` if provided a generator object-like value', function test( t ) {
	var gen = {
		'next': noop,
		'return': noop,
		'throw': noop
	};
	t.equal( isGeneratorObject( gen ), true, 'returns true' );
	t.end();
});

// Run generator function tests if environment supports `function*()`...

if ( hasGeneratorsSupport ) {
	require( './es2015-generator' ); // eslint-disable-line stdlib/no-unassigned-require
}
