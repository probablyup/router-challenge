import React from 'react';
import Search from './Search.js';
import Albums from './Albums.js';
import Tracks from './Tracks.js';
import Info from './Info.js';

const Catalog = ({albums, search, album, side, stateNavigator}) => (
    <div id="catalog">
        <Search search={search} stateNavigator={stateNavigator} />
        <Albums
            albums={albums}
            search={search}
            slug={album ? album.slug : null}
        />
        {album ? <Tracks
            album={album}
            side={side}
            oldSlug={stateNavigator.stateContext.oldData.slug}
        /> : <Info />}
    </div>
)
export default Catalog;
