Package.describe({
  name: 'rbabayoff:bootstrap-daterangepicker',
  version: '2.0.6_1',
  summary: 'Date range picker component for Bootstrap',
  git: 'https://github.com/rbabayoff/bootstrap-daterangepicker',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3');

  //api.use('twbs:bootstrap@3.3.4', ["client"]);
  //api.use('momentjs:moment@2.10.3', ["client"]);
  api.use(['jquery', 'twbs:bootstrap', 'momentjs:moment'], ["client"]);

  api.imply([
    'jquery',
    'twbs:bootstrap',
    'momentjs:moment'
  ], 'client');

  api.addFiles('daterangepicker.js', ["client"]);
  api.addFiles('daterangepicker.css', ["client"]);
});
