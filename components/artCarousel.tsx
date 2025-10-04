import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardFooter } from "./ui/card"

const artCarousel = () => {
    const collection = [
        {
            image: "/ui-images/built.png",
            name: "Built",
        },
        {
            image: "/ui-images/urban-jungle.png",
            name: "Urban Jungle",
        },
        {
            image: "/ui-images/audiophile.png",
            name: "Audiophile",
        },
        {
            image: "/ui-images/top-oil.png",
            name: "Top Oil",
        },
        {
            image: "/ui-images/slurppies.png",
            name: "Slurppies Smoothies",
        },
    ]
    return (
        <div>
            <Carousel opts={{
                align: "start",
            }}
                className="w-full">
                <CarouselContent>
                    {collection.map((item) => (
                        <CarouselItem key={item.name} className="md:basis-1/2">
                            <div className="p-1">
                                <Card
                                    className="flex items-end bg-center bg-no-repeat bg-contain border-none rounded-lg aspect-[12/9]"
                                    style={{ backgroundImage: `url(${item.image ? item.image : '/placeholder.svg'})` }}
                                >
                                    {/* <CardFooter className="flex flex-col items-start justify-start p-6 space-y-2">
                                        <span className="text-3xl font-semibold text-white">{item.name}</span>
                                    </CardFooter> */}
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default artCarousel