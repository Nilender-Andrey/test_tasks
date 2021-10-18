export type ImageType = {
  id?:number
  url: string;
  width?: number;
  height?: number;
};

export function addId(imageData:ImageType[]) {
  return imageData.map((item, index) => {
    const id = Date.now() + index;
    return { ...item, id };
  });
}
