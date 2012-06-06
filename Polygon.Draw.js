L.Polygon.Draw = L.Polyline.Draw.extend({
	Poly: L.Polygon,

	_updateMarkerHandler: function () {
		// The first marker shold have a click handler to close the polygon
		if (this._markers.length === 1) {
			this._markers[0].on('click', this.disable, this);
		}
	},

	_getLabelText: function (markerCount) {
		var text;
		if (markerCount === 0) {
			text = 'Click to start drawing shape.';
		} else if (markerCount < 3) {
			text = 'Click to continue drawing shape.';
		} else {
			text = 'Click first point to close this shape.';
		}
		return {
			text: text
		};
	},

	_vertexAdded: function (latlng) {
		//calc area here
	},

	_cleanUpShape: function () {
		if (this._markers.length > 0) {
			this._markers[0].off('click', this.disable);
		}
	}
});

L.Map.addInitHook('addHandler', 'polygonDraw', L.Polygon.Draw);