# HackerNews Insights Engine with PromptQL

https://console.hasura.io/project/integral-python-3702/build/57d43a0f81/promptql-playground 

## Overview

This project focus on analyzing HackerNews posts with enhanced context through web scraping. It showcases how to bridge structured data (HN posts) with unstructured web content to enable deeper insights and analysis.

## Core Features

- Connects to HackerNews posts database
- Custom web scraping function for URL content extraction
- Relationship mapping between posts and scraped metadata
- Rich metadata extraction including titles, descriptions, word counts, and images

## Extending PromptQL with Custom Tools
This project serves as a template for extending PromptQL's capabilities through custom functions. Similar approaches can be used for:

### Market Analysis Tools

- Real-time stock price integration
- Competitor pricing scrapers
- Social media sentiment analysis


### SEO & Analytics

- Domain authority checking
- Backlink analysis
- Page speed insights
- SERP position tracking


### Content Analysis

- Readability scoring
- Keyword density analysis
- Content similarity matching
- Image recognition

(Can also link datasets from other sources like ProductHunt)

### Sample Questions & Use Cases

#### Content Analysis
- "Analyze the most successful HN posts from the last month. What patterns do you see in their titles and content structure?"

- "Find posts with over 100 points and extract their main themes and writing styles using the scraped content."

#### Product Launch Strategy
- "Based on successful HN launches in the SaaS category, suggest a title format for my new developer productivity tool."

- "What day of the week and time have the highest engagement rates for product launches on HN?"

#### Trend Analysis
- "Identify emerging technology trends by analyzing both HN post titles and their linked article content from the past 3 months."

- "Compare the engagement rates of technical posts versus non-technical posts using both title analysis and article content length."

#### Content Recommendations
- "Find similar posts to [URL] based on both HN metadata and scraped content similarity."

- "Generate a reading list of the most insightful technical articles based on comment count and article depth (using word count and content structure)."

#### Market Research
- "What types of AI products launched on HN in 2023 received the most positive attention? Analyze both post metrics and article content."

- "Help me understand the common characteristics of successful Show HN posts in my domain, including their landing page structure and content approach."


### Why This Matters
This integration enables:

- Deeper context for AI analysis
- Better pattern recognition across both metadata and content
- More accurate trend analysis
- Enhanced recommendation capabilities
- Data-driven decision making for product launches

By combining structured HN data with scraped content (query time scraping for latest context), we create a richer dataset that allows for more nuanced and accurate insights than would be possible with either source alone.