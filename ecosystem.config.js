module.exports = {
    apps : [
        {
          name: "story-points-game",
          script: "./src/index.js",
          watch: true,
          env: {
              "PORT": 9300,
              "NODE_ENV": "development",
              "BASE_URL": "/"
          },
          env_production: {
              "PORT": 9300,
              "NODE_ENV": "production",
              "BASE_URL": "/spg/"
          }
        }
    ]
  }