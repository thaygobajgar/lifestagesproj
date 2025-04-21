export interface TreatmentData {
  title: string;
  description: string;
  symptoms: {
    description: string;
    list: {
      id: number;
      name: string;
      description: string;
    }[];
  };
  "sub-title": string;
  "course-of-disease": string;
  treatment: {
    description: string;
    list: {
      id: number;
      name: string;
      description: string;
    }[];
  };
  "patient-advice": string;
}
