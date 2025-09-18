export interface CountryFeature {
  type: "Feature";
  properties: {
    NAME: string;
    [key: string]: unknown;
  };
  geometry: {
    type: string;
    coordinates: unknown[];
  };
}

export interface ThreeGeometry {
  uuid: string;
  type: string;
  radiusTop?: number;
  radiusBottom?: number;
  height?: number;
  radialSegments?: number;
  heightSegments?: number;
  openEnded?: boolean;
  thetaStart?: number;
  thetaLength?: number;
  radius?: number;
  segmentCount?: number;
}

export interface ThreeMaterial {
  uuid: string;
  type: string;
  color: number;
  envMapRotation?: [number, number, number, string];
  reflectivity?: number;
  refractionRatio?: number;
  blendColor?: number;
}

export interface ThreeObjectNode {
  uuid: string;
  type: string;
  visible?: boolean;
  layers: number;
  matrix: number[];
  up: [number, number, number];
  geometry?: string;
  material?: string;
  children?: ThreeObjectNode[];
}

export interface ThreeObject {
  metadata: {
    version: number;
    type: string;
    generator: string;
  };
  geometries?: ThreeGeometry[];
  materials?: ThreeMaterial[];
  object: ThreeObjectNode;
}

export interface Location {
  id: number;
  name: string;
  country: string;
  continent: string;
  lat: number;
  lng: number;
  subtitle?: string;
  items?: string[];
  direction: [number, number, number];
  length: number;
  xOffset: number;
  yOffset?: number;
  zOffset?: number;
  __threeObjPoint?: ThreeObject;
  __threeObjRing?: ThreeObject;
  __threeObjCustom?: ThreeObject;
}
