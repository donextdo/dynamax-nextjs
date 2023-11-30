import axios from "axios";

export const eastwestURL =
  "https://dynamax-gallery.s3.ap-southeast-2.amazonaws.com/dynamax-eastwestbed/east_west_bed-3.json";
export const hillsydeURL =
  "https://dynamax-gallery.s3.ap-southeast-2.amazonaws.com/dynamax-hillsyde/hill-syde-3.json";
export const offroadURL =
  "https://dynamax-gallery.s3.ap-southeast-2.amazonaws.com/dynamax-offroad/off-road-family-bunk-3.1.json";
export const familytourerURL =
  "https://dynamax-gallery.s3.ap-southeast-2.amazonaws.com/dynamax-familytourer/family-tourer.json";

export const getImages = async (
  url: string,
  setter: {
    (value: React.SetStateAction<never[]>): void;
    (value: React.SetStateAction<never[]>): void;
    (arg0: any): void;
  }
) => {
  try {
    const response = await axios.get(url);
    // assuming the response is a JSON array of image URLs
    // console.log("response", response);
    setter(response.data);
  } catch (error) {
    console.error(error);
  }
};
