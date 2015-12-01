Package.describe({
  name: 'praneybehl:reactjs-disqus-comments',
  version: '0.3.1',
  summary: 'Reactjs Disqus comments component packaged for Meteor',
  git: 'https://github.com/praneybehl/meteor-react-disqus-comments',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('react@0.1.13');
  api.use('cosmos:browserify@0.8.3', 'client');
  api.addFiles('package.browserify.js', 'client');
  api.addFiles('package.browserify.options.json', 'client');
  api.export('ReactDisqusThread');
});


Npm.depends({
  "react-disqus-thread":"0.3.1",
  "exposify": "0.5.0"
});
