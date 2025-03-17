export interface ChildCharacter {
  name: string;
  age: number;
  gender: 'boy' | 'girl' | 'other';
  physicalTraits: {
    skinTone: string;
    hairColor: string;
    hairLength: 'short' | 'medium' | 'long';
    eyeColor: string;
    hasGlasses: boolean;
  };
}

export interface StoryTemplate {
  id: string;
  title: string;
  description: string;
  ageRange: {
    min: number;
    max: number;
  };
  theme: string;
  pages: StoryPage[];
}

export interface StoryPage {
  pageNumber: number;
  text: string;
  sceneDescription: string;
  characterPosition: 'left' | 'center' | 'right';
  characterMood: 'happy' | 'sad' | 'excited' | 'thoughtful' | 'sleepy';
  backgroundType: string;
}

export interface BookPreview {
  id: string;
  character: ChildCharacter;
  template: StoryTemplate;
  generatedPages: {
    pageNumber: number;
    imageUrl: string;
    text: string;
  }[];
}

export interface BookOrder {
  id: string;
  customerId: string;
  bookPreviewId: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  shippingAddress: {
    name: string;
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  createdAt: Date;
  updatedAt: Date;
} 