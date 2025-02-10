import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Carousel from '@/components/Carousel'
import DirectorCard from '@/components/DirectorCard'
import SponsorScroll from '@/components/SponsorScroll'
import { getCarouselImages, getUpcomingEvents, getDirectors, getSponsors } from '@/lib/api'
import { Suspense } from 'react';
import Loading from './loading';

export default async function Home() {
  // Fetch data from Strapi
  const carouselImages = await getCarouselImages();
  const upcomingEvents = await getUpcomingEvents();
  const directors = await getDirectors();
  const sponsors = await getSponsors();

  if (!carouselImages || carouselImages.length === 0) {
    console.log('No carousel images available'); // Debug log
  }

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Suspense fallback={<Loading />}>
        {/* 轮播图 */}
        <div className="w-full relative">
          <Carousel images={carouselImages} fullWidth={true} />
        </div>

        {/* 商会简介 */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6 text-center">商会简介</h2>
            <p className="text-lg text-center max-w-3xl mx-auto">
              我们的商会致力于促进商业合作、推动行业发展、为会员提供全方位服务与支持。通过组织各类活动、提供资源和平台，我们旨在创造一个繁荣的商业生态系统，助力会员企业实现可持续增长。
            </p>
            <div className="text-center mt-8">
              <Button asChild>
                <Link href="/about">了解更多</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 商会活动 */}
        <section className="py-16 bg-gray-50 w-full">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">商会活动</h2>
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">近期活动</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {upcomingEvents.map((event: any, index: any) => (
                  <Card key={index} className="flex flex-col h-full overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image 
                        src={event.image} 
                        alt={event.title} 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription>{event.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{event.description}</p>
                      <div className="mt-4">
                        <Button asChild className="w-full">
                          <Link href="/events">了解更多</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 理事展示 */}
        <section className="py-16 w-full">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">理事展示</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {directors.map((director, index) => (
                <DirectorCard key={index} director={director} />
              ))}
            </div>
          </div>
        </section>

        {/* 赞助商 */}
        <section className="py-16 bg-gray-50 w-full">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">赞助商</h2>
            <SponsorScroll sponsors={sponsors} />
          </div>
        </section>
      </Suspense>
    </div>
  )
}

