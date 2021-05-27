
export const isPhoto = fileName => typeof fileName === 'string' ? !!fileName.match(/[.](jpg|jpeg|png)/ig) : false

export const isVideo = fileName => typeof fileName === 'string' ? !!fileName.match(/[.](mov|mp4|avi)/ig) : false

export const isAudio = fileName => typeof fileName === 'string' ? !!fileName.match(/[.](ogg|mp3)/ig) : false