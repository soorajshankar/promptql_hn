import axios from 'axios';
import * as cheerio from 'cheerio';

// Modified type to allow null values
export type ScrapedMetadata = {
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: string | null;
  author: string | null;
  wordCount: number | null;
  imageUrls: string[];
  mainText: string | null;
}

/**
 * @readonly Scrapes content from a given URL and returns structured data
 * @param url The URL to scrape
 * @returns Promise<ScrapedMetadata> A typed object containing the scraped content or null values
 */
export async function scrapeUrl(url: string): Promise<ScrapedMetadata> {
  // Default response with null values
  const defaultResponse: ScrapedMetadata = {
    title: null,
    description: null,
    url: null,
    timestamp: null,
    author: null,
    wordCount: null,
    imageUrls: [],
    mainText: null
  };

  try {
    // Validate URL
    new URL(url);

    // Fetch the page content
    const response = await axios.get(url, {
      timeout: 5000, // 5 second timeout
      maxRedirects: 5
    });
    
    const html = response.data;
    const $ = cheerio.load(html);

    // Safely extract metadata and content with null fallbacks
    const title = $('title').text().trim() || null;
    const description = $('meta[name="description"]').attr('content') || null;
    const author = $('meta[name="author"]').attr('content') || null;
    const mainText = $('p').text().trim() || null;
    
    // Safely collect image URLs
    const imageUrls: string[] = [];
    try {
      $('img').each((_, element) => {
        const imgUrl = $(element).attr('src');
        if (imgUrl) imageUrls.push(imgUrl);
      });
    } catch {
      // If image extraction fails, keep empty array
    }

    // Calculate word count safely
    const wordCount = mainText ? mainText.split(/\s+/).length : null;

    // Create the structured response
    return {
      title,
      description,
      url,
      timestamp: new Date().toISOString(),
      author,
      wordCount,
      imageUrls,
      mainText,
    };

  } catch (error) {
    // Log the error for debugging but return the default response
    console.error(`Scraping error for URL ${url}:`, error);
    return defaultResponse;
  }
}