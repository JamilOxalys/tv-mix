// Settings for TV Mix. All of these can also be changed from the Settings button on the TV.
window.TVMIX_CONFIG = {
  // Apple Music playlists, albums or stations to choose from on the TV.
  // In the Music app on your phone or Mac, use Share → Copy Link, and paste each one here.
  musicLinks: [
    "https://music.apple.com/gb/playlist/halloween-party-2026/pl.u-MDAWvVDt4JJEYY",
  ],

  // YouTube videos shown in the background, always muted. Add as many as you like.
  videos: [
    "https://www.youtube.com/watch?v=FqS5i94G_7Y", // Dark Vampire Castle Ambience
    "https://www.youtube.com/watch?v=G2MilVSudGc", // Ghost Masquerade: haunted ballroom
    "https://www.youtube.com/watch?v=F-D3Sbq5DtE", // Dragon Castle: dark fantasy, dragons flying
  ],

  // How many minutes each video plays before moving to the next. Each video carries on from where it left off.
  minutesPerVideo: 15,

  // true = random order, false = the order listed above.
  shuffleVideos: false,

  // Seconds of no activity before the music player and buttons slide away.
  hideControlsAfter: 10,
};
