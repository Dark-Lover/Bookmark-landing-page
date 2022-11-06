export interface IFeature {
  id: number;
  feature: string;
  title: string;
  desc: string;
  img: string;
}

export interface IMobileMenu {
  handleToggle: (toggle: boolean) => void;
}
