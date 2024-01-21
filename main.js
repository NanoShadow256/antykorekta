var val = '';
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',  'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lettersPL = ['ą', 'ę', 'ż', 'ź', 'ń', 'ś', 'ć', 'ó', 'ł'];

function re(f, t) {
	val = val.replace(f, t);
}

function convert(typos) {
	val = document.getElementById('inp').value;
	
	// zamiany liter
	re(/w ogóle/ig, 'wogóle'); // niestandardowe sekwencje
	re(/głup/ig, 'gup'); //
	re(/ów/ig, 'óf'); //
	re(/esz/ig, 'erz'); //
	re(/ od/ig, ' ot'); //
	re(/dług(?=a|i|o)/ig, 'dug');
	re(/,/ig, ''); // usunięcie przecinków
	re(/u/ig, '↓'); // „ó” i „u”
	re(/ó/ig, 'u'); //
	re(/↓/ig, 'ó'); //
	re(/ch/ig, 'ć’'); // „h” i „ch”
	re(/h/ig, 'ch'); //
	re(/ć’/ig, 'h'); //
	re(/prz/ig, 'psz'); // „ż” i „rz”
	re(/rz/ig, '©'); //
	re(/ż/ig, 'rz'); //
	re(/©/ig, 'ż'); //
	re(/ę(?=[a-ząężźńśćół])/ig, 'en'); // „ą” i „ę”
	re(/ę(?=[ \.!\?…\)])|ę$/ig, 'em'); //
	re(/ęł/ig, 'eł'); //
	re(/ą(?=[a-ząężźńśćół])/ig, 'on'); //
	re(/ą(?=[ \.!\?…\)])|ą$/ig, 'om'); //
	re(/ął/ig, 'oł'); //
	re(/ nie(?=[a-ząężźńśćół])/ig, '→'); // „nie”
	re(/ nie /ig, ' nie'); //
	re(/→/ig, ' nie '); //
	re(/z(?=[ \.!\?…\)])|z$/ig, 's') // „z” na „s”
	//////

	if (typos) {
		for (let n = 0; n < val.length; n++) {
			if (Math.floor(Math.random() * Number(document.getElementById('t_chance').value)) == 0) {
				if (val[n] in lettersPL) {
					indx = Math.floor(Math.random() * 9);
					// val[n] = lettersPL[indx];
					val = val.substring(0, n) + lettersPL[indx] + val.substring(n + 1);
					console.log(lettersPL[indx]);
				} else {
					// val[n] = letters[Math.floor(Math.random() * 26)];
					indx = Math.floor(Math.random() * 26)
					val = val.substring(0, n) + letters[indx] + val.substring(n + 1);
					console.log(letters[indx]);
				}
				console.log(n + ' ' + val);
			}
		}
	}
	if (val.replace(/ /g, '') != '') {
		document.getElementById('box').innerHTML = val;
	} else {
		document.getElementById('box').innerHTML = '<span id="err">Nic nie zostało wpisane!</span>';
	}
}