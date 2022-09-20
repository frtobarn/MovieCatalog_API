export interface Movie {
  name: string;
  id: string;
  image: string;
  class: "drama" | "terror" | "suspenso" | "animación";
  year: number;
  description: string;
  available: boolean;
  likes: string[];
}
