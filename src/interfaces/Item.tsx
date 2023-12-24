interface Item {
  name: string;
  bought_at: string;
  updated_at: string;
  description: string;
  capacity: number;
  color:
    | "RED"
    | "ORANGE"
    | "YELLOW"
    | "GREEN"
    | "BLUE"
    | "INDIGO"
    | "VIOLET"
    | "WHITE"
    | "BLACK";
  is_sailing: boolean;
}

export default Item;
