import type { StoryPage } from '../types';

interface IllustrationRequest {
  sceneDescription: string;
  characterPosition: string;
  characterMood: string;
  backgroundType: string;
}

interface IllustrationResponse {
  imageUrl: string;
  error?: string;
}

export class IllustrationService {
  private apiKey: string;
  private apiEndpoint: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.apiEndpoint = 'https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image';
  }

  private async generatePrompt(page: StoryPage): Promise<string> {
    const { sceneDescription, characterPosition, characterMood, backgroundType } = page;
    
    // Construct a detailed prompt for Stable Diffusion
    return `Create a children's book illustration: ${sceneDescription}. 
    The character should be positioned ${characterPosition} in the frame.
    The character's mood should be ${characterMood}.
    The background should be a ${backgroundType} setting.
    Style: Cute, child-friendly, colorful, simple shapes, soft lighting, suitable for children's books.
    No text or words in the image.`;
  }

  async generateIllustration(page: StoryPage): Promise<IllustrationResponse> {
    try {
      const prompt = await this.generatePrompt(page);
      
      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          text_prompts: [
            {
              text: prompt,
              weight: 1
            },
            {
              text: "blurry, low quality, distorted, inappropriate content, text, words, watermark",
              weight: -1
            }
          ],
          cfg_scale: 7,
          height: 1024,
          width: 1024,
          samples: 1,
          steps: 30,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }

      const data = await response.json();
      
      // The actual response structure will depend on the Stable Diffusion API
      // This is a placeholder for the actual implementation
      return {
        imageUrl: data.artifacts[0].base64, // The API returns base64 encoded images
      };
    } catch (error) {
      console.error('Error generating illustration:', error);
      return {
        imageUrl: '',
        error: error instanceof Error ? error.message : 'Failed to generate illustration'
      };
    }
  }

  async generateAllIllustrations(pages: StoryPage[]): Promise<Map<number, IllustrationResponse>> {
    const results = new Map<number, IllustrationResponse>();
    
    for (const page of pages) {
      const result = await this.generateIllustration(page);
      results.set(page.pageNumber, result);
    }
    
    return results;
  }
} 