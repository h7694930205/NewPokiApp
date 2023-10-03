export interface BerrysList {
  name: string;
  id: number;
  background :number
  capitalizedText:number
  fontColor:number
  color:number
  url: string;
  game_index: number;
  is_hidden: boolean;
  height: number;
}

export interface ImagePokemon {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  name: string;
  url: string;
  id: number;
  weight: number;
  order: number;
  height: number;
}


export interface Language {
  name: string;
  url: string;
}

export interface names {
  name: string;
}

interface Berry {
  id: number;
  name: string;
  growth_time: number;
  max_harvest: number;
  natural_gift_power: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
  firmness: {
    name: string;
    url: string;
  };
  flavors: {
    potency: number;
    flavor: {
      name: string;
      url: string;
    };
  }[];
  item: {
    name: string;
    url: string;
  };
  natural_gift_type: {
    name: string;
    url: string;
  };
}
export interface BerriesProps {
  potency: number;
  berry: {
    name: string;
    url: string;
  }
}
export interface FlavorList {
id: number;
name: string;
berries: {
  potency: number;
  berry: {
    name: string;
    url: string;
  };
}[];
contest_type: {
  name: string;
  url: string;
};
names: {
  name: string;
  language: {
    name: string;
    url: string;
  };
}
}



export interface BerryList {
  imagePokemonList: any;
  total: any;
  list: BerrysList[];
  berryList: Berry;
  isLoading: boolean;
  isFlavorLoading:boolean;
  isFirmnessesLoading:boolean;
  id: number;
  limit: number
  name: string;
  growth_time: number;
  max_harvest: number;
  natural_gift_power: number;
  size: number;
  smoothness: number;
  offset: number;
  soil_dryness: number;
  firmness: {
    name: string;
    url: string;
  };
  flavors: {
    id: number;
    name: string;
    berries: {
      potency: number;
      berry: {
        name: string;
        url: string;
      };
    }[];
    contest_type: {
      name: string;
      url: string;
    };
    names: {
      name: string;
      language: {
        name: string;
        url: string;
      };
    }[];
  }
  item: {
    name: string;
    url: string;
  };
  natural_gift_type: {
    name: string;
    url: string;
  };
}

interface BerryFirmness {
  id: number;
  name: string;
  berries: {
    name: string;
    url: string;
  }[];
  names: {
    name: string;
    language: {
      name: string;
      url: string;
    };
  }[];
}

interface BerryFlavor {
  isFlalvorLoading:false
  id: number;
  name: string;
  berries: {
    potency: number;
    berry: {
      name: string;
      url: string;
    };
  }[];
  contest_type: {
    name: string;
    url: string;
  };
  names: {
    name: string;
    language: {
      name: string;
      url: string;
    };
  }[];
}




