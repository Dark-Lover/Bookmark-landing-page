export interface IFeature {
  id: number;
  feature: string;
  title: string;
  desc: string;
  img: string;
}
export interface IExtension {
  id: number;
  name: string;
  version: string;
  img: string;
}

export interface IFaq {
  id: number;
  title: string;
  answer: string;
}

export interface IMobileMenu {
  handleToggle: (toggle: boolean) => void;
}
