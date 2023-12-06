export interface Step {
  id: number;
  title: string;
  xp?: number;
  money?: number;
  fatal?: boolean;
  src: string;
  nextStepId?: number;
  leftStepId?: number;
  rightStepId?: number;
  end?: boolean;
  exam?: boolean;
  cups?: number;
}
