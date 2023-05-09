var videoContainer = document.getElementById('videoContainer'),
    output = document.getElementById('output'),
    nextVideo,
    videoObjects =
    [
        document.createElement('video'),
        document.createElement('video')
    ],
    vidSources =
    [
        "videos/crowd-15818.mp4",
        "videos/dancing-15706.mp4",
        "videos/nightclub-15802.mp4",
        "videos/Girl - 15705.mp4",
        "videos/Girl - 15936.mp4",
        "videos/Girl - 29313.mp4",
        "videos/pexels-denys-gromov-5387493-1920x1080-50fps.mp4",
        "videos/pexels-denys-gromov-7054465-1920x1080-50fps.mp4",
        "videos/pexels-mart-production-7269159-3840x2160-25fps.mp4",
        "videos/pexels-mart-production-7271837-3840x2160-25fps.mp4",
        "videos/pexels-mikhail-nilov-8059634-1920x1080-25fps.mp4",
        "videos/pexels-stefwithanf-4043974-1920x1080-24fps.mp4",
        "videos/pexels-stefwithanf-4043983-1920x1080-24fps.mp4",
        "videos/pexels-stefwithanf-4044009-1920x1080-24fps.mp4",
        "videos/Woman - 124868.mp4"
    ],
    nextActiveVideo = Math.floor((Math.random() * vidSources.length));
    
videoObjects[0].inx = 0; 
videoObjects[1].inx = 1;

initVideoElement(videoObjects[0]);
initVideoElement(videoObjects[1]);

videoObjects[0].autoplay = true;
videoObjects[0].src = vidSources[nextActiveVideo];
videoContainer.appendChild(videoObjects[0]);

videoObjects[1].style.display = 'none';
videoContainer.appendChild(videoObjects[1]);

function initVideoElement(video)
{
    video.playsinline = true;
    video.muted = false;
    video.preload = 'auto';

    video.onplaying = function(e)
    {
        nextActiveVideo = ++nextActiveVideo % vidSources.length;

        if(this.inx == 0)
            nextVideo = videoObjects[1];
        else
            nextVideo = videoObjects[0];

        nextVideo.src = vidSources[nextActiveVideo];
        nextVideo.pause();
    };

    video.onended = function(e)
    {   
        this.style.display = 'none';
        nextVideo.style.display = 'block';
        nextVideo.play();
    };
}