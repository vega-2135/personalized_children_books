import React, { useState, useEffect } from 'react';
import { Card, Page, Layout, Button, Spinner, Text, BlockStack, InlineStack } from '@shopify/polaris';
import type { StoryTemplate } from '../types';
import { IllustrationService } from '../services/illustrationService';

interface StoryPreviewProps {
  story: StoryTemplate;
  characterDetails: {
    name: string;
    gender: 'boy' | 'girl';
  };
}

export function StoryPreview({ story, characterDetails }: StoryPreviewProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [illustrations, setIllustrations] = useState<Map<number, string>>(new Map());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const illustrationService = new IllustrationService(process.env.STABILITY_API_KEY || '');

  const generateIllustrations = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const results = await illustrationService.generateAllIllustrations(story.pages);
      const newIllustrations = new Map<number, string>();
      
      results.forEach((result, pageNumber) => {
        if (result.imageUrl) {
          newIllustrations.set(pageNumber, result.imageUrl);
        }
      });
      
      setIllustrations(newIllustrations);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate illustrations');
    } finally {
      setLoading(false);
    }
  };

  const replacePlaceholders = (text: string): string => {
    return text
      .replace(/{{child_name}}/g, characterDetails.name)
      .replace(/{{gender}}/g, characterDetails.gender)
      .replace(/{{pronoun}}/g, characterDetails.gender === 'boy' ? 'he' : 'she')
      .replace(/{{possessive_pronoun}}/g, characterDetails.gender === 'boy' ? 'his' : 'her');
  };

  const currentPageData = story.pages.find(page => page.pageNumber === currentPage);
  const totalPages = story.pages.length;

  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="400">
              <Text variant="headingMd" as="h2">{story.title}</Text>
              
              {loading ? (
                <BlockStack gap="400" align="center">
                  <Spinner size="large" />
                  <Text as="p">Generating illustrations...</Text>
                </BlockStack>
              ) : error ? (
                <BlockStack gap="400">
                  <Text as="p" tone="critical">{error}</Text>
                  <Button onClick={generateIllustrations}>Try Again</Button>
                </BlockStack>
              ) : (
                <>
                  <div style={{ 
                    width: '100%', 
                    height: '500px', 
                    backgroundColor: '#f4f4f4',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    {illustrations.has(currentPage) ? (
                      <img 
                        src={illustrations.get(currentPage)} 
                        alt={`Page ${currentPage}`}
                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                      />
                    ) : (
                      <Text as="p">No illustration generated yet</Text>
                    )}
                  </div>

                  <BlockStack gap="200">
                    <Text as="p" variant="bodyLg">
                      {currentPageData && replacePlaceholders(currentPageData.text)}
                    </Text>
                    
                    <InlineStack gap="400" align="center">
                      <Button 
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                      >
                        Previous
                      </Button>
                      <Text as="p">Page {currentPage} of {totalPages}</Text>
                      <Button 
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                      >
                        Next
                      </Button>
                    </InlineStack>
                  </BlockStack>
                </>
              )}
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
} 