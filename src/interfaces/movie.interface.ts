export interface Movie {
  title: string;
  id: string;
  image: string;
  class: "drama" | "terror" | "suspenso" | "animación";
  year: number;
  description: string;
  director: string,
  casting: string[],
  available: boolean;
  likes: number;
}
