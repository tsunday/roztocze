var bs = require('browser-sync').create()

bs.init({
    server: './roztocze'
});

bs.watch('roztocze/*.html').on('change', bs.reload);
bs.watch('roztocze/css/*.css').on('change', bs.reload);
bs.watch('roztocze/js/*.js').on('change', bs.reload);