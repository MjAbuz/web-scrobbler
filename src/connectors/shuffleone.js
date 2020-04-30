'use strict';

const playButtonSelector = '.bottom button:nth-child(3) > svg > path';
const playingPath = 'M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zm6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2z';

Connector.playerSelector = '#root';

Connector.artistSelector = '.actions .artists';

Connector.trackSelector = '.actions .title';

Connector.trackArtSelector = '.cover > svg';

Connector.isPlaying = () => {
	return Util.getAttrFromSelectors(playButtonSelector, 'd') === playingPath;
};
