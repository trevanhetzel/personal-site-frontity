const settings = {
  "name": "frontity",
  "state": {
    "frontity": {
      "url": "https://trevan.local",
      "title": "Trevan Hetzel",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "trevan-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Articles",
              "/"
            ],
            [
              "About",
              "/about/"
            ],
            [
              "Consulting",
              "https://hetzelcreative.com/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://trevan.local/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
