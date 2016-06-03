fis.match('*.scss', {
  parser: fis.plugin('node-sass'),
  rExt: '.css',
  userMap: true
})

fis.match('static/js/**/*', {
    useMap: true,
    isMod: true
});
fis.hook('commonjs');