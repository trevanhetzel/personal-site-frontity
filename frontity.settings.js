const settings = {
  "name": "frontity",
  "state": {
    "frontity": {
      "url": "https://trevan.co",
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
          "api": "https://trevan.co/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
