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
  try {
    const data = await fetchAPI('/fjsh-carousels?populate=*');
    if (!data?.data) {
      console.log('No carousel data found');
      return [];
    }
    const images = data.data.map((item: any) => {
      const attributes = item.attributes || item;
      // Handle case where image is an array
      const imageData = Array.isArray(attributes.image)
        ? attributes.image[0]
        : attributes.image?.data;
      // Get the URL from the image data
      const imageUrl = imageData?.url ||
        imageData?.attributes?.url ||
        '/placeholder.svg?height=400&width=800';
      return {
        src: imageUrl.startsWith('/uploads') ? `${STRAPI_API_URL}${imageUrl}` : imageUrl,
        alt: attributes.alt || '商会活动图片'
      };
    });
    return images;
  } catch (error) {
    console.error('Error fetching carousel images:', error);
    return [];
  }
}

export async function getUpcomingEvents() {
  try {
    const data = await fetchAPI('/fjsh-events?populate=*');
    if (!data?.data) {
      console.log('No events data found');
      return [];
    }
    return data.data.map((item: any) => {
      if (!item?.title) {
        console.log('Invalid event item:', item);
        return null;
      }
      return {
        title: item.title || '未命名活动',
        date: item.date || '日期待定',
        description: item.description || '暂无描述',
        image: item.image?.url
          ? `${STRAPI_API_URL}${item.image.url}`
          : '/placeholder.svg?height=200&width=400'
      };
    }).filter(Boolean);
  } catch (error) {
    console.error('Error fetching upcoming events:', error);
    return [];
  }
}

export async function getDirectors() {
  const data = await fetchAPI('/fjsh-directors?populate=*');
  if (!data?.data) return [];

  return data.data.map((item: any) => {
    return {
      name: item.name,
      company: item.company,
      description: item.description,
      image: item.image?.url
        ? `${STRAPI_API_URL}${item.image.url}`
        : '/placeholder.svg?height=300&width=300'
    };
  });
}

export async function getSponsors() {
  const data = await fetchAPI('/fjsh-sponsors?populate=*');
  if (!data?.data) return [];

  return data.data.map((item: any) => {
    const logoData = item.logo?.[0];
    return {
      name: item.name,
      logo: logoData?.url
        ? `${STRAPI_API_URL}${logoData.url}`
        : '/placeholder.svg?height=50&width=100',
      url: item.url || undefined
    };
  });
} 