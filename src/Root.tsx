import React from "react";
import { Composition } from "remotion";
import { BridgeShort, BRIDGE_FRAMES } from "./videos/bridge5/Bridge";

export const RemotionRoot: React.FC = () => (
  <Composition
    id="Bridge5"
    component={BridgeShort}
    durationInFrames={BRIDGE_FRAMES}
    fps={30}
    width={1080}
    height={1920}
  />
);
