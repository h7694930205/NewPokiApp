export interface Move {
    id: number;
    url: string;
    name: string;
    accuracy: number;
    effect_chance: number;
    priority: number;
    background :number
    fontColor:number
    power: number;
    contest_combos: ContestType[]
    contest_effect: ContestEffect[]
    damage_class: MoveDamageClass[]
    past_values: PastMoveStatValues[]
    stat_changes: MoveStatChange[]
}
export interface BattleStyleSheet {
  id: number;
  name: string;
  names: {
    name: string;
    language: {
      name: string;
      url: string;
    };
  }[];
}

export interface MoveDamageClass {
  id: number;
  name: string;
}

export interface ContestEffect {
  id: number;
  appeal: number;
  jam: number;
  
}


export interface IMoveStatChange {
  change: number;

}
export interface ContestType {
  id: number;
  name: string;
}

export interface MoveStatChange {
    change: number;
}
export interface ImagePokemon {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    name: string;
    url: string;
    id: number;
  }

  export interface PastMoveStatValues {
    accuracy: number;
    effect_chance: number;
    power: number;
    pp: number;
  }
export interface MoveList {
    list:Move[]
    id: number
    name: string
    limit: number;
    offset: number;
    total: number;
    isLoading: boolean;
    imagePokemonList: ImagePokemon;
    AilmentsList : ParalysisInfo
    battleStyle: BattleStyleSheet
    CategoriesList:MoveCategories
    DamageClassList:DamageClass
    MoveLearnMethods:LearnMethods
    MoveTargetsList:TargetsMove
  }

  interface TargetsMove {
    id: number;
    name: string;
    descriptions: {
      description: string;
      language: {
        name: string;
        url: string;
      };
    }[];
    moves: {
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
  




  interface LearnMethods {
    id: number;
    name: string;
    names: {
      name: string;
      language: {
        name: string;
        url: string;
      };
    }[];
    descriptions: {
      description: string;
      language: {
        name: string;
        url: string;
      };
    }[];
    version_groups: {
      name: string;
      url: string;
    }[];
  }




  export interface Language {
    name: string;
    url: string;
  }

  interface ParalysisInfo {
    id: number;
    name: string;
    moves: {
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

  interface MoveCategories {
    id: number;
    name: string;
    descriptions: {
      description: string;
      language: {
        name: string;
        url: string;
      };
    }[];
    moves: {
      name: string;
      url: string;
    }[];
  }
  

  interface DamageClass {
    id: number;
    name: string;
    descriptions: {
      description: string;
      language: {
        name: string;
        url: string;
      };
    }[];
    moves: {
      name: string;
      url: string;
    }[];
  }