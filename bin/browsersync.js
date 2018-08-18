var bs = require('browser-sync').create()

bs.init({
    server: './public'
});

bs.watch('public/*.html').on('change', bs.reload);
bs.watch('public/css/*.css').on('change', bs.reload);
bs.watch('public/js/*.js').on('change', bs.reload);