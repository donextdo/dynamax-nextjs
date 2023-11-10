import { GetStaticProps } from "next";
import { cloudinary } from "../../cloudinary.config";

export interface HotDealsProps {
  eastwestbedimages: {
    public_id: string;
    url: string;
  }[];
  hillsydeimages?: {
    public_id: string;
    url: string;
  }[];
  familytourer?: {
    public_id: string;
    url: string;
  }[];
}


export const getHotDealsProps: GetStaticProps<HotDealsProps> =async () => {
  console.log('Fetching data for HotDeals...');
  const { resources: eastwestbedResources } = await cloudinary.search
    .expression('folder:Dynamax-EastWestBed') // Replace 'hot4-folder' with your actual folder name for hot4
    .sort_by('public_id', 'desc')
    .execute();

  const eastwestbedimages = eastwestbedResources.map((resource: { public_id: string; url: string; })=>({
    public_id: resource.public_id,
    url: resource.url,
  }));
  
  return{
    props: {
      eastwestbedimages
    },
  };
};