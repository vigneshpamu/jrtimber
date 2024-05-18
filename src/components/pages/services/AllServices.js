import Image from 'next/image'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Footer from '@/components/common/Footer'

const cuttingData = [
  {
    title: 'Preparation: Log Selection and Preparation',
    content:
      'High-quality logs are selected based on desired grain pattern, color, and wood species. The selected logs are then debarked and sometimes soaked or steamed to soften the wood for easier cutting.',
  },
  {
    title: 'Cutting: Techniques and Methods',
    content:
      'The logs undergo one of three main cutting techniques. In rotary cutting, the log is mounted and rotated against a stationary knife, peeling off a continuous sheet of veneer. In slicing, the log is sliced into sheets by moving it against a stationary knife. In quarter slicing, the log is quartered before slicing, producing distinctive grain patterns.',
  },
  {
    title: 'Finishing: Drying, Trimming, and Packaging',
    content:
      'The veneer sheets are dried to the appropriate moisture content, either by air drying or using a kiln. After drying, the sheets are trimmed to standard sizes and graded based on quality. Veneers may be backed with a paper or fabric material to increase stability and prevent cracking. Finally, the veneer sheets are stacked, packed, and shipped to customers.',
  },
]

const stichingData = [
  {
    title: 'Selection & Sorting: Choosing Veneer',
    content:
      'During selection and sorting, high-quality veneer sheets are chosen and sorted based on grain, color, and thickness.',
  },
  {
    title: 'Stitching: Joining Veneer Sheets',
    content:
      'In the stitching phase, specialized machines join the veneer sheets using threads, adhesives, or tapes, ensuring the grain pattern matches across the joints.',
  },
  {
    title: 'Finishing: Pressing, Drying, and Preparing',
    content:
      'In the finishing step, the stitched veneer is pressed and dried to ensure a strong bond and flat surface, inspected for defects, trimmed to the desired dimensions, and packaged for shipment.',
  },
]

const pressingData = [
  {
    title: 'Preparation: Aligning & Stacking Veneer',
    content:
      'In the preparation phase, veneer sheets are carefully aligned and stacked to ensure even pressure distribution.',
  },
  {
    title: 'Pressing: Applying Heat and Pressure',
    content:
      'During pressing, the stacked veneers are placed in a hydraulic or vacuum press where heat and pressure are applied, bonding the layers together and eliminating any air pockets.',
  },
  {
    title: 'Post-Pressing Treatment',
    content:
      'In the post-pressing treatment, the pressed veneers are cooled to stabilize the bond, trimmed to precise dimensions, and inspected for quality before being packaged for shipment.',
  },
]

export const AllServices = () => {
  return (
    <div>
      <div className="w-full flex flex-col gap-5 items-center justify-center bg-mondo-100 h-[120px] md:h-[170px]">
        <p className="text-2xl sm:text-3xl md:text-5xl uppercase font-semibold text-mondo-800">
          Services
        </p>
        <div className="h-[3px]  w-[150px] bg-mondo-800"></div>
      </div>
      <div className="bg-mondo-50 py-10   ">
        <div className="max-w-[1300px] mx-auto flex flex-col px-5 md:flex-row gap-5 md:gap-10">
          <Image
            src={'/images/services/cutting.webp'}
            width={500}
            height={500}
            className="w-full md:max-w-[600px] min-h-[240px] object-cover"
          />
          <div className="w-full flex flex-col gap-2 md:gap-6">
            <p className="text-2xl md:text-4xl text-mondo-600 font-bold">
              Cutting
            </p>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-0"
            >
              {cuttingData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="font-medium text-sm md:text-md text-gray-900">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="mt-4 leading-relaxed text-gray-700">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="my-12 h-[3px] max-w-[1300px] mx-auto bg-mondo-200"></div>
        <div className="max-w-[1300px] mx-auto flex flex-col-reverse px-5 md:flex-row gap-5 md:gap-10">
          <div className="w-full flex flex-col gap-6">
            <p className="text-2xl md:text-4xl text-mondo-600 font-bold">
              Stitching
            </p>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-0"
            >
              {stichingData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="font-medium text-sm md:text-md text-gray-900">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="mt-4 leading-relaxed text-gray-700">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <Image
            src={'/images/services/stitching.jpg'}
            width={500}
            height={500}
            className="w-full md:max-w-[600px] min-h-[240px] max-h-[324px]  object-cover"
          />
        </div>
        <div className="my-12 h-[3px] max-w-[1300px] mx-auto bg-mondo-200"></div>
        <div className="max-w-[1300px] mx-auto flex flex-col px-5 md:flex-row gap-5 md:gap-10">
          <Image
            src={'/images/services/pressing.webp'}
            width={500}
            height={500}
            className="w-full md:max-w-[600px] min-h-[240px] max-h-[324px]  object-cover"
          />
          <div className="w-full flex flex-col gap-6">
            <p className="text-2xl md:text-4xl text-mondo-600 font-bold">
              Pressing
            </p>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-0"
            >
              {pressingData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="font-medium text-sm md:text-md text-gray-900">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="mt-4 leading-relaxed text-gray-700">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
