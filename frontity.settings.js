const settings = {
  "name": "frontity",
  "state": {
    "frontity": {
      "url": "https://trevan.co",
      "title": "Trevan Hetzel",
      "description": "Trevan Hetzel's personal blog on front-end development, CSS, JavaScript, React, WordPress and more"
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
    "@frontity/html2react",
    {
      name: "@frontity/google-analytics",
      state: {
        googleAnalytics: {
          trackingId: "UA-32067301-1",
        },
      },
    },
  ]
};

export default settings;
