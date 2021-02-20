/* eslint-disable no-unused-vars */
const { SPANISH_TO_ENGLISH, TRACK_LIST } = require('./constants.js')

const newSingle = (single) => {
  // insert code
  return `New single ${single} is dropping soon!`;
};

const eresBadBunny = (name) => {
  // insert code
  const str = name.toLowerCase();
  const artistName = "Bad Bunny";
  
  return str == artistName.toLowerCase();
};

const areYouLil = (name) => {
  // insert code
  const artist = name.toLowerCase();
  
  return artist.startsWith("lil ");
};

const mostViewsThreeVideos = (videoOneViews, videoTwoViews, videoThreeViews) => {
  // insert code
  return Math.max(videoOneViews, videoTwoViews, videoThreeViews);
};

const mostViews = (videoViews) => {
  // insert code
  return Math.max(...videoViews);
};

const validateEmail = (email) => {
  // insert code
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let out = false;

  let flag = false;
  const endings = [".com", ".net", ".edu", ".org"];
  for(let i = 0; i < endings.length; i++){
    email.endsWith(endings[i]) ? flag = true : undefined;
  }

  if(regex.test(email)){
    if(flag){
      out = true;
    }
  }

  return out;
};

const validateEmailWithMessage = (email) => {
  // insert code
};

const getInitials = (name) => {
  // insert code
  const splitName = name.split(' ');
  return splitName[0][0].toUpperCase() + splitName[1][0].toUpperCase();
};

const getInitialsOneName = (name) => {
  // insert code
  let out = "";
  out += name.charAt(0).toUpperCase();
  out += name.charAt(1).toUpperCase();

  return out;
};

const getInitialsLongName = (name) => {
  // insert code
  const splitName = name.split(" ");
  let out = "";

  splitName.forEach(el => {
    out += el.charAt(0);
  })

  return out;
};

const howRepetitiveAreYou = (lyrics, word) => {
  // insert code
};

const translateThis = (titles) => {
  const spanishToEnglish = SPANISH_TO_ENGLISH;
  // insert code
};

const getSingles = (trackList = TRACK_LIST) => {
  // insert code
};

const getUniqueArtists = (trackList = TRACK_LIST) => {
  // insert code
};

const getMostStreamedTrack = (trackList = TRACK_LIST) => {
  // insert code
};

module.exports = {
  newSingle,
  eresBadBunny,
  areYouLil,
  mostViewsThreeVideos,
  mostViews,
  validateEmail,
  validateEmailWithMessage,
  getInitials,
  getInitialsOneName,
  getInitialsLongName,
  howRepetitiveAreYou,
  translateThis,
  getSingles,
  getUniqueArtists,
  getMostStreamedTrack
};
