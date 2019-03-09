console.log( 'The bot is starting!' );

var Twit = require( 'twit' );

var config = require( './config' );
var T = new Twit( config );

var params = {
  q: 'indiedev',
  count: 2
}

var newTweet = {
  status: '#myfirstTweet From a bot using node.js!'
}

//T.get( 'search/tweets', params, retriveData );
T.post( 'statuses/update', newTweet, retriveData );

function retriveData( err, data, responce ) {
  // var tweets = data.statuses;
  // for ( var i = 0; i < tweets.length; i++ ) {
  //   console.log( tweets[ i ].text );
  //
  // }

  if ( !err ) {
    console.log( "Tweeted: " + data.statuses );
  } else {
    console.log( "Tweet failed" );

  }

}