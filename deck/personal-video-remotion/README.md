# kWh Electric launch film

The active composition is a 94-second, 1920×1080 launch film covering the problem, solution, network, and growth story. It uses deterministic SVG/HTML artwork so type, diagrams, and device states remain crisp at export resolution.

## Outputs

- `out/kwh-launch-video-v5.mp4` — H.264 master render
- `out/kwh-opening-preview-v5.mp4` — opening-only approval cut
- `out/kwh-launch-video-v5-poster.png` — standalone-player poster
- `scripts/make-standalone.mjs` — embeds the master render into the portable Downloads HTML

## Commands

```console
npm run lint
npm run build
npx remotion render build KwhPersonalVideo out/kwh-launch-video-v5.mp4 --codec=h264 --crf=18
node scripts/make-standalone.mjs
```

## Legacy template notes

<p align="center">
  <a href="https://github.com/remotion-dev/logo">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-dark.apng">
      <img alt="Animated Remotion Logo" src="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-light.gif">
    </picture>
  </a>
</p>

Welcome to your Remotion project!

## Commands

**Install Dependencies**

```console
npm i
```

**Start Preview**

```console
npm run dev
```

**Render video**

```console
npx remotion render
```

**Upgrade Remotion**

```console
npx remotion upgrade
```

## Docs

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).

## Help

We provide help on our [Discord server](https://discord.gg/6VzzNDwUwV).

## Issues

Found an issue with Remotion? [File an issue here](https://github.com/remotion-dev/remotion/issues/new).

## License

Note that for some entities a company license is needed. [Read the terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).
