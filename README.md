# vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Git custom commands

#### Push to Pages
```
git subtree push --prefix dist origin gh-pages
```

#### Branch with Dist

```
git checkout pg-pages
```

#### Main Branch
```
git checkout development
```


## When changing videos
1 - Download ffmpeg build
2 - run the following command:
```
ffmpeg -i original.mp4 -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
```