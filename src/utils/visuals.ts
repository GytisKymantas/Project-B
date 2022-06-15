import students from "assets/images/image.png";
import gatsbyImg from "assets/images/icon.png";

export type Visuals = keyof typeof visuals;

export const visuals: Record<string, string> = {
  // turi buti ir key ir value vienodi
  students,
  gatsbyImg,
};
