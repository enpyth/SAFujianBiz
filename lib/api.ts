import { SunMedium } from "lucide-react";
import { title } from "process";

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

async function fetchAPI(endpoint: string) {
  try {
    const response = await fetch(`${STRAPI_API_URL}/api${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    return { data: [] };
  }
}

export async function getCarouselImages() {
  return [
    {
      src: '/placeholder.svg?height=400&width=800',
      alt: '占位符图片'
    },
    {
      src: '/placeholder.svg?height=400&width=800',
      alt: '占位符图片'
    },
    {
      src: '/placeholder.svg?height=400&width=800',
      alt: '占位符图片'
    }
  ];
}

export async function getNews() {
  return [
    {
      src: '/placeholder.svg',
      id: '1',
      title: 'News Title 1',
      summary: 'Summary of news 1Summary of news 1Summary of news 1Summary of news 1Summary of news 1',
      content: 'Full content of news 1 goes here.',
      date: '2024-01-01',
      showOnHomepage: true
    },
    {
      src: '/placeholder.svg',
      id: '2',
      title: 'News Title 2',
      summary: 'Summary of news 2',
      content: 'Full content of news 2 goes here.',
      date: '2024-01-02',
      showOnHomepage: false
    },
    {
      src: '/placeholder.svg',
      id: '3',
      title: 'title1',
      summary: 'summary1',
      showOnHomepage: true
    },
    {
      src: '/placeholder.svg',
      id: '4',
      title: 'title1',
      summary: 'summary1',
      showOnHomepage: true
    }
  ];
}



export async function getCoreMembers() {
  // 返回占位符理事数据
  return [
    {
      name: '理事 1',
      description: '这是一个占位符理事描述这是一个占位符理事描述这是一个占位符理事描述这是一个占位符理事描述这是一个占位符理事描述这是一个占位符理事描述这是一个占位符理事描述。',
      image: '/placeholder.svg'
    },
    {
      name: '理事 2',
      description: '这是另一个占位符理事描述。这是另一个占位符理事描述。这是另一个占位符理事描述。这是另一个占位符理事描述。这是另一个占位符理事描述。这是另一个占位符理事描述。',
      image: '/placeholder.svg'
    },
    {
      name: '理事 3',
      description: '这是另一个占位符理事描述。这是另一个占位符理事描述。这是另一个占位符理事描述。这是另一个占位符理事描述。这是另一个占位符理事描述。这是另一个占位符理事描述。',
      image: '/placeholder.svg'
    },
    {
      name: '理事 4',
      description: '这是另一个占位符理事描述。这是另一个占位符理事描述。这是另一个占位符理事描述。这是另一个占位符理事描述。这是另一个占位符理事描述。这是另一个占位符理事描述。',
      image: '/placeholder.svg'
    }
  ];
}

export async function getSponsors() {
  // 返回占位符赞助商数据
  return [
    {
      name: '占位符赞助商 1',
      logo: '/placeholder.svg?height=50&width=100',
      url: 'https://example.com'
    },
    {
      name: '占位符赞助商 2',
      logo: '/placeholder.svg?height=50&width=100',
      url: 'https://example.com'
    }
  ];
}
