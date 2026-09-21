export interface BrandContact {
  name: string;
  tagline: string;
  creativeSlogan: string;
  address: {
    building: string;
    street: string;
    sector: string;
    city: string;
    postalCode: string;
    country: string;
    fullFormatted: string;
  };
  phone: {
    display: string;
    raw: string;
    international: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    sundayVerified: boolean;
    note: string;
  };
  mapsUrl: string;
}

export const brandData: BrandContact = {
  name: "Feel Cafe | Pure & Simple",
  tagline: "Pure & Simple",
  creativeSlogan: "Coffee, made with intention.",
  address: {
    building: "1st Floor, IHCBA",
    street: "Constitution Ave",
    sector: "G-5/1 G-5",
    city: "Islamabad",
    postalCode: "44000",
    country: "Pakistan",
    fullFormatted: "1st Floor, IHCBA, Constitution Ave, G-5/1 G-5, Islamabad, 44000, Pakistan",
  },
  phone: {
    display: "+92 319 9788136",
    raw: "03199788136",
    international: "+923199788136",
  },
  hours: {
    weekdays: "8:00 AM – 5:00 PM",
    saturday: "8:00 AM – 5:00 PM",
    sunday: "Not verified",
    sundayVerified: false,
    note: "Please contact the cafe directly to confirm Sunday hours and holiday schedules.",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Feel%20Cafe%20%7C%20Pure%20%26%20Simple%2C%201st%20Floor%2C%20IHCBA%2C%20Constitution%20Ave%2C%20G-5%2F1%20G-5%2C%20Islamabad%2C%2044000",
};
