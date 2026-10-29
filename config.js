// Settings for TV Mix. The videos and minutes can also be changed from the Settings button on the TV.
window.TVMIX_CONFIG = {
  // YouTube videos to play, always muted. Add as many as you like.
  videos: [
    "https://www.youtube.com/watch?v=FqS5i94G_7Y", // Dark Vampire Castle Ambience
    "https://www.youtube.com/watch?v=G2MilVSudGc", // Ghost Masquerade: haunted ballroom
    "https://www.youtube.com/watch?v=F-D3Sbq5DtE", // Dragon Castle: dark fantasy, dragons flying
  ],

  // How many minutes each video plays before moving to the next. Each video carries on from where it left off.
  minutesPerVideo: 10,

  // Ask YouTube for 4K (2160p) where a video has it. Only videos uploaded in 4K can play in 4K.
  // Set to false on a 1080p TV or a slow device.
  render4k: true,

  // Reload the page every this many hours (between videos), to keep a browser that runs all day fresh.
  // It carries straight on where it was. 0 = never.
  refreshEveryHours: 6,

  // Seconds of no activity before the buttons fade away.
  hideControlsAfter: 10,
};
