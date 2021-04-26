const axios = require("axios").default;

const getArtifactData = async (scope = "") => {
  const response = await axios.get(
    `https://api.genshin.dev/artifacts/${scope}`
  );

  return response.data;
};

let oldData = [
  "adventurer",
  "archaic-petra",
  "berserker",
  "blizzard-strayer",
  "bloodstained-chivalry",
  "brave-heart",
  "crimson-witch-of-flames",
  "defender-s-will",
  "gambler",
  "gladiator-s-finale",
  "heart-of-depth",
  "instructor",
  "lavawalker",
  "lucky-dog",
  "maiden-beloved",
  "martial-artist",
  "noblesse-oblige",
  "resolution-of-sojourner",
  "retracing-bolide",
  "scholar",
  "the-exile",
  "thundering-fury",
  "thundersoother",
  "tiny-miracle",
  "traveling-doctor",
  "viridescent-venerer",
  "wanderer-s-troupe",
];
let capitalizedData = [
  "Adventurer",
  "Archaic-petra",
  "Berserker",
  "Blizzard-strayer",
  "Bloodstained-chivalry",
  "Brave-heart",
  "Crimson-witch-of-flames",
  "Defender-s-will",
  "Gambler",
  "Gladiator-s-finale",
  "Heart-of-depth",
  "Instructor",
  "Lavawalker",
  "Lucky-dog",
  "Maiden-beloved",
  "Martial-artist",
  "Noblesse-oblige",
  "Resolution-of-sojourner",
  "Retracing-bolide",
  "Scholar",
  "The-exile",
  "Thundering-fury",
  "Thundersoother",
  "Tiny-miracle",
  "Traveling-doctor",
  "Viridescent-venerer",
  "Wanderer-s-troupe",
];

module.exports = { getArtifactData };
