import Image from 'next/image'
import Link from 'next/link'
import { Button, Card, CardContent, CardMedia, LinearProgress, Typography } from '@mui/material'
import { Badge } from "@/components/ui/badge"
import Carousel from '@/components/Carousel'
import DirectorCard from '@/components/DirectorCard'
import SponsorScroll from '@/components/SponsorScroll'
import { getCarouselImages, getCoreMembers, getSponsors, getNews } from '@/lib/api'
import { getUpcomingEvents } from '@/lib/events'
import { Suspense } from 'react';
import Loading from './loading';
import MediaCard from '@/components/ui/media_card';
import { MapPin } from 'lucide-react'

export default async function Home() {
  // Fetch data from Strapi
  const carouselImages = await getCarouselImages();
  const availableEvents = await getUpcomingEvents();
  console.log(availableEvents);
  const directors = await getCoreMembers();
  const sponsors = await getSponsors();
  const newsItems = await getNews();

  // Filter news items to only show those marked for homepage display
  const visibleNewsItems = newsItems.filter(item => item.showOnHomepage);

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
              <Button variant="contained" color="primary" component={Link} href="/about">了解更多</Button>
            </div>
          </div>
        </section>

        {/* 商会活动 */}
        <section className="py-16 bg-gray-50 w-full">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">商会活动</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {availableEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <Link href={`/events/${event.id}`}>
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          width={200}
                          height={100}
                          className="w-full h-full object-cover rounded-t-lg md:rounded-tr-none m-0"
                        />
                      </Link>
                    </div>
                    <CardContent className="flex-1 p-4">
                      <div className="space-y-2">
                        <Link href={`/events/${event.id}`}>
                          <h2 className="text-2xl font-bold">{event.title}</h2>
                        </Link>
                        <p className="text-muted-foreground">Date: {event.date}, {event.time}</p>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.address}</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Registration Progress</span>
                            <span>
                              {event.registeredcount} / {event.maxcapacity}
                            </span>
                          </div>
                          <LinearProgress variant='determinate' value={(event.registeredcount / event.maxcapacity) * 100} />
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="contained" color="primary" href="/events">View All Events</Button>
            </div>
          </div>
        </section>


        {/* 理事展示 */}
        <section className="py-16 w-full">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">理事展示</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {directors.map((director) => (
                <MediaCard
                  // key={director.id}
                  image={director.image}
                  title={director.name}
                  description={director.description}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 w-full bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">新闻资讯</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleNewsItems.map((item) => (
                <div key={item.id} className="flex flex-col rounded-lg shadow-md overflow-hidden">
                  <Link href={`/news/${item.id}`}>
                    <img
                      src={item.src}
                      alt={item.title}
                      className="h-48 w-full object-cover cursor-pointer"
                    />
                  </Link>
                  <div className="p-4 bg-gray-100">
                    <p className="text-gray-600 mb-4">{item.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 赞助商 */}
        <section className="py-16 w-full">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">赞助商</h2>
            <SponsorScroll sponsors={sponsors} />
          </div>
        </section>


      </Suspense>
    </div>
  )
}

