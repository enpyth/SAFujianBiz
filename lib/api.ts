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

export async function getUpcomingEvents() {
  // 返回占位符活动数据
  return [
    {
      title: '占位符活动 1',
      date: '2024-01-01',
      description: '这是一个占位符活动描述。',
      image: '/placeholder.svg?height=200&width=400'
    },
    {
      title: '占位符活动 2',
      date: '2024-02-01',
      description: '这是另一个占位符活动描述。',
      image: '/placeholder.svg?height=200&width=400'
    }
  ];
}

export async function getDirectors() {
  // 返回占位符理事数据
  return [
    {
      name: '占位符理事 1',
      company: '占位符公司 1',
      description: '这是一个占位符理事描述。',
      image: '/placeholder.svg?height=300&width=300'
    },
    {
      name: '占位符理事 2',
      company: '占位符公司 2',
      description: '这是另一个占位符理事描述。',
      image: '/placeholder.svg?height=300&width=300'
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