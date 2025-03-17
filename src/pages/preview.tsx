import React from 'react';
import { Page, Layout } from '@shopify/polaris';
import { StoryPreview } from '../components/StoryPreview';
import { STORY_THEMES } from '../components/StorySelector';
import type { StoryTemplate } from '../types';

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
      <Page>
        <Layout>
          <Layout.Section>
            <p>Story not found</p>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }

  return (
    <Page>
      <Layout>
        <Layout.Section>
          <StoryPreview 
            story={pottyStory}
            characterDetails={characterDetails}
          />
        </Layout.Section>
      </Layout>
    </Page>
  );
}