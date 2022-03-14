# hls

## How to create [files](./public/files) using [ffmpeg](https://ffmpeg.org/) (see [docs](https://ffmpeg.org/ffmpeg-formats.html))

> Heads-up: if audio source is encoded using `aac`, replace `mp3` with `aac`.

```console
$ ffmpeg -i video.mp4 -c:a mp3 -c:v libx264 -s 3840x2160 -aspect 16:9 -f hls -hls_list_size 0 -hls_time 2 -hls_segment_filename 'public/files/video-2160-%d.ts' public/files/video-2160.m3u8

$ ffmpeg -i video.mp4 -c:a mp3 -c:v libx264 -s 1920x1080 -aspect 16:9 -f hls -hls_list_size 0 -hls_time 2 -hls_segment_filename 'public/files/video-1080-%d.ts' public/files/video-1080.m3u8

$ ffmpeg -i video.mp4 -c:a mp3 -c:v libx264 -s 1280x720 -aspect 16:9 -f hls -hls_list_size 0 -hls_time 2 -hls_segment_filename 'public/files/video-720-%d.ts' public/files/video-720.m3u8

$ ffmpeg -i video.mp4 -c:a mp3 -c:v libx264 -s 854x480 -aspect 16:9 -f hls -hls_list_size 0 -hls_time 2 -hls_segment_filename 'public/files/video-480-%d.ts' public/files/video-480.m3u8
```

## How to create [playlist.m3u8](./public/playlist.m3u8)

```shell
cat << "EOF" > public/playlist.m3u8
#EXTM3U
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=895435,RESOLUTION=854x480
files/video-480.m3u8
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=1547024,RESOLUTION=1280x720
files/video-720.m3u8
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2461733,RESOLUTION=1920x1080
files/video-1080.m3u8
#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=3639562,RESOLUTION=3840x2160
files/video-2160.m3u8
EOF
```

## How to create player using [hls.js](https://github.com/video-dev/hls.js/) (see [docs](https://github.com/video-dev/hls.js/blob/master/docs/API.md))

See [index.html](./public/index.html)
