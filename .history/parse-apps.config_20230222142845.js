module.exports = {
    apps : [{
      name        : "My App 1",
      script      : "index.js",
      watch       : true,
      merge_logs  : true,
      cwd         : "/var/www/parse-apps/app1/",
     },{
      name        : "My App 2",
      script      : "index.js",
      watch       : true,
      merge_logs  : true,
      cwd         : "/var/www/parse-apps/app2/",
    }]
  }