import React from 'react';
import { Text, BlockStack } from '@shopify/polaris';
import { StoryPreview } from '../components/StoryPreview';
import { STORY_THEMES } from '../components/StorySelector';
import type { StoryTemplate } from '../types';
import { AppLayout } from '../components/AppLayout';

export default function PreviewPage() {
  // For testing, we'll use the potty training story
  const pottyStory = STORY_THEMES.find((story: StoryTemplate) => story.id === 'potty-training');
  
  // Test character details
  const characterDetails = {
    name: 'Alex',
    gender: 'boy' as const
  };

  if (!pottyStory) {
    return (
      <AppLayout>
        <BlockStack gap="400" align="center">
          <Text as="p" tone="critical">Story not found</Text>
        </BlockStack>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <StoryPreview 
        story={pottyStory}
        characterDetails={characterDetails}
      />
    </AppLayout>
  );
}