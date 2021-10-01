import axios from "axios";

export const key = 'a0e996249d6c5c2ef5c77c12ec0e857223c9ef27';

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${key}`
  }
});

export default {
  shorten: {
    new: (url) => {
      return api.post('shorten', {
        long_url: url
      });
    }
  }
};

/* fetch('https://api-ssl.bitly.com/v4/shorten', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer {TOKEN}',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "long_url": "https://dev.bitly.com", "domain": "bit.ly", "group_guid": "Ba1bc23dE4F" })
}); */