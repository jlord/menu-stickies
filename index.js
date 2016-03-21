var menubar = require('menubar')

var mb = menubar({
  width: 400,
  height: 400
})

mb.on('ready', function ready () {
  console.log('app is ready')
  // your app code here
})
