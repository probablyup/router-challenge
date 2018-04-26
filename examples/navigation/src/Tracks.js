import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {RefreshLink} from 'navigation-react';

const Tracks = ({album, side, oldSlug}) => {
    const flipped = oldSlug === album.slug;
    return (
        <div id="tracks">
            <h1>{album.title}</h1>
            <h2>{album.band}</h2>
            {['1','2'].map(side =>
                <RefreshLink
                    key={side}
                    navigationData={{side: side}}
                    includeCurrentData={true}
                    historyAction="replace"
                    activeCssClass="selected">
                    Side {side}
                </RefreshLink>
            )}
            <ReactCSSTransitionGroup
                transitionName="flip"
                transitionEnter={flipped}
                transitionLeave={flipped}
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>
                <ol key={side}>
                {album['side' + side].map(track => 
                    <li key={track}>{track}</li>
                )}
                </ol>
            </ReactCSSTransitionGroup>
        </div>
    );
}
export default Tracks;
