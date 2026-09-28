import {Composition} from "remotion";
import {LaunchFilm} from "./video/LaunchFilm";

export const MyComposition = () => (
  <Composition
    id="KwhPersonalVideo"
    component={LaunchFilm}
    durationInFrames={2820}
    fps={30}
    width={1920}
    height={1080}
  />
);
