const settings = {
  "name": "illkata",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "mytheme",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://hajiic.wordpress.com/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
