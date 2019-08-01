const sharp = require(`sharp`);
const glob = require(`glob`);
const fs = require(`fs-extra`);

const matches = glob.sync(`src/**/*.{png,jpg,jpeg}`);
const MAX_WIDTH = 2304;
const QUALITY = 70;
Promise.all(
  matches.map(async match => {
    const stream = sharp(match);
    const info = await stream.metadata();
    if (info.width < MAX_WIDTH) {
      return;
    }
    const optimizedName = match.replace(
      /(\..+)$/,
      (_, ext) => `-optimized${ext}`
    );

    await stream
      .resize(MAX_WIDTH)
      .jpeg({ quality: QUALITY })
      .toFile(optimizedName);

    // eslint-disable-next-line consistent-return
    return fs.rename(optimizedName, match);
  })
);
