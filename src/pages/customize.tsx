import React, { useState } from 'react';
import { Page, Layout, Card } from '@shopify/polaris';
import { CharacterCustomizationForm } from '../components/CharacterCustomizationForm';
import { StorySelector } from '../components/StorySelector';
import type { ChildCharacter, StoryTemplate } from '../types';

export default function CustomizePage() {
  const [character, setCharacter] = useState<ChildCharacter | null>(null);
  const [selectedStory, setSelectedStory] = useState<StoryTemplate | undefined>(undefined);

  const handleCharacterSubmit = (newCharacter: ChildCharacter) => {
    setCharacter(newCharacter);
  };

  const handleStorySelect = (story: StoryTemplate) => {
    setSelectedStory(story);
  };

  return (
    <Page title="Create Your Personalized Story">
      <Layout>
        <Layout.Section>
          <Card>
            <CharacterCustomizationForm onSubmit={handleCharacterSubmit} />
          </Card>
        </Layout.Section>
        <Layout.Section>
          <StorySelector
            stories={[]} // We'll load this from an API later
            selectedStory={selectedStory}
            onSelect={handleStorySelect}
          />
        </Layout.Section>
      </Layout>
    </Page>
  );
} 