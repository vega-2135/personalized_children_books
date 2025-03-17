import React, { useState } from 'react';
import { Card, FormLayout, TextField, Select, Checkbox } from '@shopify/polaris';
import type { ChildCharacter } from '../types';

interface CharacterCustomizationFormProps {
  onSubmit: (character: ChildCharacter) => void;
}

const SKIN_TONES = [
  { label: 'Light', value: 'light' },
  { label: 'Medium', value: 'medium' },
  { label: 'Dark', value: 'dark' },
];

const HAIR_COLORS = [
  { label: 'Black', value: 'black' },
  { label: 'Brown', value: 'brown' },
  { label: 'Blonde', value: 'blonde' },
  { label: 'Red', value: 'red' },
];

const EYE_COLORS = [
  { label: 'Brown', value: 'brown' },
  { label: 'Blue', value: 'blue' },
  { label: 'Green', value: 'green' },
  { label: 'Hazel', value: 'hazel' },
];

export function CharacterCustomizationForm({ onSubmit }: CharacterCustomizationFormProps) {
  const [character, setCharacter] = useState<ChildCharacter>({
    name: '',
    age: 3,
    gender: 'other',
    physicalTraits: {
      skinTone: 'medium',
      hairColor: 'brown',
      hairLength: 'medium',
      eyeColor: 'brown',
      hasGlasses: false,
    },
  });

  const handleChange = (field: string, value: string | number | boolean) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setCharacter((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof ChildCharacter],
          [child]: value,
        },
      }));
    } else {
      setCharacter((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(character);
  };

  return (
    <Card>
      <Card.Section>
        <form onSubmit={handleSubmit}>
          <FormLayout>
            <TextField
              label="Child's Name"
              value={character.name}
              onChange={(value) => handleChange('name', value)}
              autoComplete="off"
              required
            />

            <TextField
              label="Age"
              type="number"
              value={character.age.toString()}
              onChange={(value) => handleChange('age', parseInt(value, 10))}
              min={2}
              max={10}
              required
            />

            <Select
              label="Gender"
              options={[
                { label: 'Boy', value: 'boy' },
                { label: 'Girl', value: 'girl' },
                { label: 'Other', value: 'other' },
              ]}
              value={character.gender}
              onChange={(value) => handleChange('gender', value)}
            />

            <Select
              label="Skin Tone"
              options={SKIN_TONES}
              value={character.physicalTraits.skinTone}
              onChange={(value) => handleChange('physicalTraits.skinTone', value)}
            />

            <Select
              label="Hair Color"
              options={HAIR_COLORS}
              value={character.physicalTraits.hairColor}
              onChange={(value) => handleChange('physicalTraits.hairColor', value)}
            />

            <Select
              label="Hair Length"
              options={[
                { label: 'Short', value: 'short' },
                { label: 'Medium', value: 'medium' },
                { label: 'Long', value: 'long' },
              ]}
              value={character.physicalTraits.hairLength}
              onChange={(value) => handleChange('physicalTraits.hairLength', value)}
            />

            <Select
              label="Eye Color"
              options={EYE_COLORS}
              value={character.physicalTraits.eyeColor}
              onChange={(value) => handleChange('physicalTraits.eyeColor', value)}
            />

            <Checkbox
              label="Wears Glasses"
              checked={character.physicalTraits.hasGlasses}
              onChange={(value) => handleChange('physicalTraits.hasGlasses', value)}
            />

            <button type="submit" className="Polaris-Button Polaris-Button--primary">
              <span className="Polaris-Button__Content">Create Character</span>
            </button>
          </FormLayout>
        </form>
      </Card.Section>
    </Card>
  );
} 