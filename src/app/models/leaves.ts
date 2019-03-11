export class Leave {
  id: number;
  name: string;
  user: number;
  role: string;
  start_date: Date;
  end_date: Date;
  days: number;
  type: string; //add (allocate) or remove (request)
  leave_type: string; //Legal Leave, Compensation Leave, Sick leave, ...etc
  state:string; //draft, waiting approval, approved
  year: number;
}
