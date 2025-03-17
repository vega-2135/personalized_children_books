import React from 'react';
import { Card, ResourceList, ResourceItem, Text, Button, BlockStack } from '@shopify/polaris';
import type { StoryTemplate } from '../types';

interface StorySelectorProps {
  stories: StoryTemplate[];
  selectedStory?: StoryTemplate;
  onSelect: (story: StoryTemplate) => void;
}

export const STORY_THEMES: StoryTemplate[] = [
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
        sceneDescription: "bedroom with toys scattered around, {{child_name}} playing alone",
        characterPosition: "center",
        characterMood: "happy",
        backgroundType: "bedroom"
      },
      {
        pageNumber: 2,
        text: "One day, {{child_name}}'s friend came to play.",
        sceneDescription: "bedroom with friend at the door, {{child_name}} looking surprised",
        characterPosition: "center",
        characterMood: "excited",
        backgroundType: "bedroom"
      },
      {
        pageNumber: 3,
        text: "{{child_name}} didn't want to share {{possessive_pronoun}} favorite toy.",
        sceneDescription: "bedroom with {{child_name}} holding toy tightly, friend looking sad",
        characterPosition: "center",
        characterMood: "thoughtful",
        backgroundType: "bedroom"
      },
      {
        pageNumber: 4,
        text: "But when {{child_name}} saw how sad {{possessive_pronoun}} friend was, {{pronoun}} decided to share.",
        sceneDescription: "bedroom with {{child_name}} offering toy to friend, both smiling",
        characterPosition: "center",
        characterMood: "happy",
        backgroundType: "bedroom"
      },
      {
        pageNumber: 5,
        text: "{{child_name}} learned that sharing makes everyone happy!",
        sceneDescription: "bedroom with {{child_name}} and friend playing together, sharing toys",
        characterPosition: "center",
        characterMood: "excited",
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
    title: 'Learning to Use the Potty',
    description: 'An encouraging story about learning to use the potty',
    ageRange: { min: 2, max: 3 },
    theme: 'potty-training',
    pages: [
      {
        pageNumber: 1,
        text: "Once upon a time, there was a little {{gender}} named {{child_name}}. {{child_name}} loved playing with {{possessive_pronoun}} toys and running around the house. But sometimes, {{child_name}} had an accident. {{pronoun}} would wet {{possessive_pronoun}} pants and {{possessive_pronoun}} mom would say, 'Oh dear, let's get you cleaned up!'",
        sceneDescription: "{{child_name}} playing with toys, looking happy and carefree",
        characterPosition: "center",
        characterMood: "happy",
        backgroundType: "bedroom"
      },
      {
        pageNumber: 2,
        text: "One day, {{child_name}}'s mom said, '{{child_name}}, it's time to buy you a potty so you can learn how to use one like a big {{gender}}!'",
        sceneDescription: "store with mom, dad, and {{child_name}}. Mom is smiling and holding a small, colorful potty",
        characterPosition: "center",
        characterMood: "excited",
        backgroundType: "store"
      },
      {
        pageNumber: 3,
        text: "At home, {{child_name}} looked at the potty and said, 'What is this, Mommy?'",
        sceneDescription: "{{child_name}} looking curious and pointing at the potty with a puzzled expression",
        characterPosition: "center",
        characterMood: "thoughtful",
        backgroundType: "bathroom"
      },
      {
        pageNumber: 4,
        text: "'This is your potty, {{child_name}},' {{possessive_pronoun}} mom explained. 'It's where you can go when you need to pee or poop.'",
        sceneDescription: "{{child_name}}'s mom showing {{pronoun}} how to sit on the potty, with {{child_name}} watching intently",
        characterPosition: "center",
        characterMood: "thoughtful",
        backgroundType: "bathroom"
      },
      {
        pageNumber: 5,
        text: "{{child_name}} tried to sit on the potty, but {{pronoun}} slipped off! 'Oops!' {{pronoun}} said.",
        sceneDescription: "{{child_name}} trying to sit on the potty and falling off, with a surprised look on {{possessive_pronoun}} face",
        characterPosition: "center",
        characterMood: "thoughtful",
        backgroundType: "bathroom"
      },
      {
        pageNumber: 6,
        text: "'That's okay, {{child_name}},' {{possessive_pronoun}} mom said. 'Let's try again.'",
        sceneDescription: "{{child_name}}'s mom helping {{pronoun}} sit on the potty, with a reassuring smile",
        characterPosition: "center",
        characterMood: "thoughtful",
        backgroundType: "bathroom"
      },
      {
        pageNumber: 7,
        text: "This time, {{child_name}} sat on the potty and said, 'I did it, Mommy!'",
        sceneDescription: "{{child_name}} sitting on the potty, looking proud and excited",
        characterPosition: "center",
        characterMood: "excited",
        backgroundType: "bathroom"
      },
      {
        pageNumber: 8,
        text: "'Great job, {{child_name}}!' {{possessive_pronoun}} mom cheered. 'Now, let's try to pee in the potty.'",
        sceneDescription: "{{child_name}}'s mom encouraging {{pronoun}} with a thumbs-up and a big smile",
        characterPosition: "center",
        characterMood: "excited",
        backgroundType: "bathroom"
      },
      {
        pageNumber: 9,
        text: "{{child_name}} tried and tried, but nothing happened. 'I can't do it, Mommy,' {{pronoun}} said.",
        sceneDescription: "{{child_name}} looking frustrated, with {{possessive_pronoun}} shoulders slumped",
        characterPosition: "center",
        characterMood: "sad",
        backgroundType: "bathroom"
      },
      {
        pageNumber: 10,
        text: "'It's okay, {{child_name}},' {{possessive_pronoun}} mom said. 'Let's try again tomorrow.'",
        sceneDescription: "{{child_name}}'s mom giving {{pronoun}} a comforting hug",
        characterPosition: "center",
        characterMood: "thoughtful",
        backgroundType: "bathroom"
      },
      {
        pageNumber: 11,
        text: "The next day, {{child_name}} tried again. {{pronoun}} sat on the potty and said, 'I think I need to go!'",
        sceneDescription: "{{child_name}} sitting on the potty, looking determined and focused",
        characterPosition: "center",
        characterMood: "thoughtful",
        backgroundType: "bathroom"
      },
      {
        pageNumber: 12,
        text: "'Good job, {{child_name}}!' {{possessive_pronoun}} mom cheered. 'You did it!'",
        sceneDescription: "{{child_name}}'s mom clapping {{possessive_pronoun}} hands enthusiastically",
        characterPosition: "center",
        characterMood: "excited",
        backgroundType: "bathroom"
      },
      {
        pageNumber: 13,
        text: "{{child_name}} was so happy! {{pronoun}} had used the potty like a big {{gender}}.",
        sceneDescription: "{{child_name}} smiling and giving a thumbs up, with a proud expression",
        characterPosition: "center",
        characterMood: "excited",
        backgroundType: "bathroom"
      },
      {
        pageNumber: 14,
        text: "{{child_name}}'s mom said, 'Now, let's try to poop in the potty too.'",
        sceneDescription: "{{child_name}}'s mom showing {{pronoun}} the potty, with a gentle and encouraging smile",
        characterPosition: "center",
        characterMood: "thoughtful",
        backgroundType: "bathroom"
      },
      {
        pageNumber: 15,
        text: "{{child_name}} tried and tried, but {{pronoun}} was scared. 'I don't want to, Mommy,' {{pronoun}} said.",
        sceneDescription: "{{child_name}} looking scared, with wide eyes and a worried expression",
        characterPosition: "center",
        characterMood: "sad",
        backgroundType: "bathroom"
      },
      {
        pageNumber: 16,
        text: "'It's okay, {{child_name}},' {{possessive_pronoun}} mom said. 'Let's try again tomorrow.'",
        sceneDescription: "{{child_name}}'s mom giving {{pronoun}} a reassuring hug",
        characterPosition: "center",
        characterMood: "thoughtful",
        backgroundType: "bathroom"
      },
      {
        pageNumber: 17,
        text: "The next day, {{child_name}} tried again. {{pronoun}} sat on the potty and said, 'I think I need to go!'",
        sceneDescription: "{{child_name}} sitting on the potty, looking determined and focused",
        characterPosition: "center",
        characterMood: "thoughtful",
        backgroundType: "bathroom"
      },
      {
        pageNumber: 18,
        text: "'Good job, {{child_name}}!' {{possessive_pronoun}} mom cheered. 'You did it!'",
        sceneDescription: "{{child_name}}'s mom clapping {{possessive_pronoun}} hands enthusiastically",
        characterPosition: "center",
        characterMood: "excited",
        backgroundType: "bathroom"
      },
      {
        pageNumber: 19,
        text: "{{child_name}} was so happy! {{pronoun}} had used the potty like a big {{gender}}.",
        sceneDescription: "{{child_name}} smiling and giving a thumbs up, with a proud expression",
        characterPosition: "center",
        characterMood: "excited",
        backgroundType: "bathroom"
      },
      {
        pageNumber: 20,
        text: "At first, {{child_name}} found it difficult to remember to use the potty chair. {{pronoun}} was so busy playing and exploring that {{pronoun}} would sometimes forget. But {{possessive_pronoun}} mom was patient and understanding.",
        sceneDescription: "{{child_name}} playing and then realizing {{possessive_pronoun}} pants are wet. Then mom putting the pants into the washing machine, with a supportive smile",
        characterPosition: "center",
        characterMood: "thoughtful",
        backgroundType: "bedroom"
      },
      {
        pageNumber: 21,
        text: "Now {{child_name}} listens to {{possessive_pronoun}} body. When {{pronoun}} feels a wiggle, {{pronoun}} runs to the potty! {{child_name}} is a big {{gender}}!",
        sceneDescription: "{{child_name}} stopping what {{pronoun}}'s doing and touching {{possessive_pronoun}} tummy, remembering the feeling. Then running towards the potty with a determined look",
        characterPosition: "center",
        characterMood: "excited",
        backgroundType: "bedroom"
      },
      {
        pageNumber: 22,
        text: "Slowly but surely, {{child_name}} started to get the hang of it. {{pronoun}} felt so proud when {{pronoun}} successfully used the potty chair, and {{possessive_pronoun}} mom would cheer and give {{pronoun}} a big hug.",
        sceneDescription: "{{child_name}} and {{possessive_pronoun}} mom in the bathroom hugging after {{child_name}} used the potty and after {{pronoun}} puts {{possessive_pronoun}} pants on again, with big smiles on their faces",
        characterPosition: "center",
        characterMood: "excited",
        backgroundType: "bathroom"
      },
      {
        pageNumber: 23,
        text: "One day, {{child_name}}'s mom said, 'You're doing so well with the potty chair! Now it's time to try the big toilet.' {{child_name}} was a little nervous, but {{pronoun}} knew {{pronoun}} could do it with {{possessive_pronoun}} mom's help.",
        sceneDescription: "{{child_name}} looking at the big toilet with a mix of excitement and nervousness",
        characterPosition: "center",
        characterMood: "thoughtful",
        backgroundType: "bathroom"
      },
      {
        pageNumber: 24,
        text: "They went to the bathroom, and mom showed {{child_name}} how to use the step stool to reach the toilet. She explained how to pull down {{possessive_pronoun}} pants and sit on the big seat.",
        sceneDescription: "{{child_name}}'s mom demonstrating how to use the step stool and the big toilet, with {{child_name}} watching carefully",
        characterPosition: "center",
        characterMood: "thoughtful",
        backgroundType: "bathroom"
      },
      {
        pageNumber: 25,
        text: "{{child_name}} took a deep breath and gave it a try. It felt strange at first, but {{pronoun}} was so proud when {{pronoun}} successfully used the toilet! {{possessive_pronoun}} mom gave {{pronoun}} a high-five and a special sticker for {{possessive_pronoun}} potty chart.",
        sceneDescription: "{{child_name}} giving a high-five to {{possessive_pronoun}} mom, with a big smile and a sticker on {{possessive_pronoun}} chart",
        characterPosition: "center",
        characterMood: "excited",
        backgroundType: "bathroom"
      },
      {
        pageNumber: 26,
        text: "{{child_name}} pulls up {{possessive_pronoun}} pants. {{pronoun}} feels proud. 'I did it, Mommy! I used the toilet like a big {{gender}}!'",
        sceneDescription: "{{child_name}} pulling up {{possessive_pronoun}} pants, with a proud and happy expression",
        characterPosition: "center",
        characterMood: "excited",
        backgroundType: "bathroom"
      },
      {
        pageNumber: 27,
        text: "Mommy gives {{child_name}} a big hug. 'I'm so proud of you, {{child_name}}! You are growing up so fast.'",
        sceneDescription: "{{child_name}}'s mom giving {{pronoun}} a big, warm hug",
        characterPosition: "center",
        characterMood: "happy",
        backgroundType: "bathroom"
      },
      {
        pageNumber: 28,
        text: "{{child_name}} and Mommy wash their hands together. {{child_name}} loves the feel of the soap bubbles. They sing a song while they wash.",
        sceneDescription: "{{child_name}} and {{possessive_pronoun}} mom washing their hands together, with soap bubbles and a happy song",
        characterPosition: "center",
        characterMood: "happy",
        backgroundType: "bathroom"
      },
      {
        pageNumber: 29,
        text: "{{child_name}} wants to show everyone what {{pronoun}} did. {{pronoun}} runs to find {{possessive_pronoun}} daddy. 'Daddy, I used the toilet!' {{pronoun}} says.",
        sceneDescription: "{{child_name}} running to {{possessive_pronoun}} dad, with excitement and pride",
        characterPosition: "center",
        characterMood: "excited",
        backgroundType: "house"
      },
      {
        pageNumber: 30,
        text: "Daddy smiles and gives {{child_name}} a high-five. 'That's wonderful, {{child_name}}! You are a big {{gender}} now!'",
        sceneDescription: "{{child_name}}'s dad giving {{pronoun}} a high-five, with a proud smile",
        characterPosition: "center",
        characterMood: "excited",
        backgroundType: "house"
      },
      {
        pageNumber: 31,
        text: "Over the next few weeks, {{child_name}} practiced using the toilet more and more. {{pronoun}} even learned how to flush all by {{pronoun}}self, which made {{pronoun}} feel like a big kid. Whoosh! The water swirls and disappears.",
        sceneDescription: "{{child_name}} flushing the toilet, with a big smile and a sense of accomplishment",
        characterPosition: "center",
        characterMood: "excited",
        backgroundType: "bathroom"
      },
      {
        pageNumber: 32,
        text: "{{child_name}} feels happy and proud. {{pronoun}} knows {{pronoun}} can do anything if {{pronoun}} tries. Using the toilet was just the beginning. {{child_name}} is ready for more adventures!",
        sceneDescription: "{{child_name}} standing tall, with a confident and excited expression, ready for new adventures",
        characterPosition: "center",
        characterMood: "excited",
        backgroundType: "house"
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