const axios = require("axios").default;

axios.get("https://api.genshin.dev/artifacts").then((res) => {
  console.log(res.data);
});
