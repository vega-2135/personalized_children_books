import React from 'react';
import { Card, ResourceList, ResourceItem, Text, Button, BlockStack } from '@shopify/polaris';
import type { StoryTemplate } from '../types';

interface StorySelectorProps {
  stories: StoryTemplate[];
  selectedStory?: StoryTemplate;
  onSelect: (story: StoryTemplate) => void;
}

const STORY_THEMES: StoryTemplate[] = [
  {
    id: 'sharing',
    title: 'Learning to Share',
    description: 'A heartwarming story about sharing toys with friends',
    ageRange: { min: 2, max: 4 },
    theme: 'sharing',
    pages: [
      {
        pageNumber: 1,
        text: "{{child_name}} loved playing with {{possessive_pronoun}} toys.",
        sceneDescription: "bedroom with toys",
        characterPosition: "center",
        characterMood: "happy",
        backgroundType: "bedroom"
      }
    ]
  },
  {
    id: 'writing',
    title: 'My First Letters',
    description: 'An exciting journey of learning to write the alphabet',
    ageRange: { min: 3, max: 5 },
    theme: 'writing',
    pages: [
      {
        pageNumber: 1,
        text: "{{child_name}} was excited to learn how to write!",
        sceneDescription: "classroom with writing materials",
        characterPosition: "center",
        characterMood: "excited",
        backgroundType: "classroom"
      }
    ]
  },
  {
    id: 'potty-training',
    title: 'Potty Training Adventure',
    description: 'An encouraging story about learning to use the potty',
    ageRange: { min: 2, max: 3 },
    theme: 'potty-training',
    pages: [
      {
        pageNumber: 1,
        text: "{{child_name}} was learning to use the potty.",
        sceneDescription: "bathroom with potty",
        characterPosition: "center",
        characterMood: "thoughtful",
        backgroundType: "bathroom"
      }
    ]
  },
  {
    id: 'moving',
    title: 'Moving to a New Home',
    description: 'A comforting story about moving to a new house',
    ageRange: { min: 3, max: 6 },
    theme: 'moving',
    pages: [
      {
        pageNumber: 1,
        text: "{{child_name}} was moving to a new house today.",
        sceneDescription: "moving truck outside house",
        characterPosition: "center",
        characterMood: "thoughtful",
        backgroundType: "house"
      }
    ]
  },
  {
    id: 'friends',
    title: 'Making New Friends',
    description: 'A story about the joy of making new friends',
    ageRange: { min: 3, max: 5 },
    theme: 'friends',
    pages: [
      {
        pageNumber: 1,
        text: "{{child_name}} was excited to make new friends at the playground.",
        sceneDescription: "playground with children",
        characterPosition: "center",
        characterMood: "excited",
        backgroundType: "playground"
      }
    ]
  },
  {
    id: 'park',
    title: 'A Day at the Park',
    description: 'An adventure-filled day at the local park',
    ageRange: { min: 2, max: 5 },
    theme: 'park',
    pages: [
      {
        pageNumber: 1,
        text: "{{child_name}} was having fun at the park!",
        sceneDescription: "park with playground equipment",
        characterPosition: "center",
        characterMood: "happy",
        backgroundType: "park"
      }
    ]
  },
  {
    id: 'zoo',
    title: 'Zoo Adventure',
    description: 'An exciting day exploring the zoo',
    ageRange: { min: 3, max: 6 },
    theme: 'zoo',
    pages: [
      {
        pageNumber: 1,
        text: "{{child_name}} was visiting the zoo for the first time!",
        sceneDescription: "zoo entrance with animals",
        characterPosition: "center",
        characterMood: "excited",
        backgroundType: "zoo"
      }
    ]
  },
  {
    id: 'school',
    title: 'First Day of School',
    description: 'A reassuring story about starting a new school',
    ageRange: { min: 4, max: 6 },
    theme: 'school',
    pages: [
      {
        pageNumber: 1,
        text: "{{child_name}} was starting {{possessive_pronoun}} first day at a new school.",
        sceneDescription: "school entrance",
        characterPosition: "center",
        characterMood: "thoughtful",
        backgroundType: "school"
      }
    ]
  },
  {
    id: 'superhero',
    title: '{{child_name}} the Superhero',
    description: 'An empowering story about being a superhero',
    ageRange: { min: 3, max: 6 },
    theme: 'superhero',
    pages: [
      {
        pageNumber: 1,
        text: "{{child_name}} was ready to save the day!",
        sceneDescription: "city skyline with superhero cape",
        characterPosition: "center",
        characterMood: "excited",
        backgroundType: "city"
      }
    ]
  },
  {
    id: 'dinosaurs',
    title: 'Dinosaur Adventure',
    description: 'A thrilling journey through the world of dinosaurs',
    ageRange: { min: 3, max: 6 },
    theme: 'dinosaurs',
    pages: [
      {
        pageNumber: 1,
        text: "{{child_name}} was exploring the world of dinosaurs!",
        sceneDescription: "prehistoric landscape with dinosaurs",
        characterPosition: "center",
        characterMood: "excited",
        backgroundType: "prehistoric"
      }
    ]
  },
  {
    id: 'bedtime',
    title: 'Sweet Dreams',
    description: 'A calming story about going to bed',
    ageRange: { min: 2, max: 4 },
    theme: 'bedtime',
    pages: [
      {
        pageNumber: 1,
        text: "It was time for {{child_name}} to go to bed.",
        sceneDescription: "bedroom at night",
        characterPosition: "center",
        characterMood: "sleepy",
        backgroundType: "bedroom"
      }
    ]
  }
];

export function StorySelector({ stories, selectedStory, onSelect }: StorySelectorProps) {
  return (
    <Card>
      <BlockStack gap="400">
        <Text variant="headingMd" as="h2">Choose a Story Theme</Text>
        <ResourceList
          items={STORY_THEMES}
          renderItem={(story) => (
            <ResourceItem
              key={story.id}
              id={story.id}
              onClick={() => onSelect(story)}
            >
              <BlockStack gap="200">
                <Text variant="headingSm" as="h3">{story.title}</Text>
                <Text as="p" tone="subdued">{story.description}</Text>
                <Text as="p" variant="bodySm" tone="subdued">
                  Recommended age: {story.ageRange.min}-{story.ageRange.max} years
                </Text>
              </BlockStack>
            </ResourceItem>
          )}
        />
      </BlockStack>
    </Card>
  );
} 