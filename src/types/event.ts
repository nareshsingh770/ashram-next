export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string | File | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface EventFormData {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: File | null;
}

export interface EventState {
  eventList: Event[];
  isLoading: boolean;
  error: string | null;
}
