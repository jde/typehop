

var typehop = (function () {


	var absolutely = function (els) {

		for (var i = 0, l = els.length; i < l; i++) {

			//console.log(els[i].e);

			$(els[i].e[0]).css({
				position: 'absolute',
				top: els[i].top + 'px',
				left: els[i].left + 'px'
			});

			//$(els[i].e[0]).hide();
		}

	};

	return {
		absolutely: absolutely
	};


}());