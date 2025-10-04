export interface Station {
  _id: string;        // station code or generated id
  code: string;       // e.g. "NDLS", "BCT"
  name: string;       // “New Delhi Railway Station”
  city: string;
  state: string;
  latitude?: number;
  longitude?: number;
}

export interface TrainStop {
  stationCode: string;     // links to Station.code
  arrivalTime: string;     // “HH:mm” or “YYYY-MM-DDTHH:mm:ss” string
  departureTime: string;
  stopNumber: number;      // order of stop in route
}

export interface Train {
  _id: string;              // train number or generated id
  number: string;           // e.g. "12951"
  name: string;              // “Mumbai Rajdhani Express”
  source: string;            // station code for origin
  destination: string;       // station code for end
  stops: TrainStop[];        // route stops in order
  classes: string[];         // e.g. ["SL", "3AC", "2AC", "1AC"]
  totalTime: string;         // total travel time e.g. “15:30”
  daysRunning?: string[];    // e.g. ["Mon", "Wed", "Fri"]
}

export interface Fare {
  _id?: string;
  trainNumber: string;
  classType: string;        // e.g. "3AC"
  price: number;
  date: string;             // “YYYY-MM-DD”
}
