import React from 'react'
import { motion } from 'framer-motion'
import StarSVG from '@/components/common/svgIcons/StarSVG'

const testimonials = [
  {
    name: 'Paul Starr',
    image:
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    quote:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!',
  },
  {
    name: 'Paul Starr',
    image:
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    quote:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad mollitia rerum quo unde neque atque molestias quas pariatur! Sint, maxime?',
  },
  {
    name: 'Paul Starr',
    image:
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit esse delectus, maiores fugit, reiciendis culpa inventore sint accusantium libero dolore eos quasi a ex aliquam molestiae. Tenetur hic delectus maxime.',
  },
  {
    name: 'Paul Starr',
    image:
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, fuga?',
  },
  {
    name: 'Paul Starr',
    image:
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    quote:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate officia natus blanditiis rerum incidunt ex autem repudiandae doloribus eveniet quia? Culpa commodi quae atque perspiciatis? Provident, magni beatae saepe porro aspernatur facere neque sunt possimus assumenda perspiciatis aperiam quisquam animi libero voluptatem fuga. Repudiandae, facere? Nemo reprehenderit quas ratione quis.',
  },
  {
    name: 'Paul Starr',
    image:
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, rerum. Nobis laborum praesentium necessitatibus vero.',
  },
  {
    name: 'Paul Starr',
    image:
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    quote:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quaerat quasi ipsa repellendus quam! Beatae pariatur quia distinctio fugit repellendus repudiandae nostrum consectetur quibusdam quo.',
  },
  {
    name: 'Paul Starr',
    image:
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    quote:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, modi!',
  },
  {
    name: 'Paul Starr',
    image:
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquam, unde molestiae commodi temporibus dicta.',
  },
]

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
        type: 'spring',
        stiffness: 70,
      },
    }
  },
  // transition: { type: 'spring', stiffness: 100 },
}

const Testimonial = () => {
  return (
    <section className="bg-mondo-200">
      <div className="mx-auto max-w-screen-xl px-4 py-10">
        <div className="flex flex-col items-center justify-center gap-5 mb-16">
          <p className="uppercase text-4xl w-full  text-center font-bold text-mondo-600">
            Testimonial
          </p>
          <div className="h-[3px] w-[200px] bg-mondo-700"></div>
        </div>
        <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              variants={fadeInAnimationsVariants}
              initial="initial"
              whileInView="animate"
              custom={index}
              key={index}
              className="mb-8 sm:break-inside-avoid"
            >
              <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    src={testimonial.image}
                    className="size-14 rounded-full object-cover"
                  />
                  <div>
                    <StarSVG />
                    <p className="mt-0.5 text-lg font-medium text-gray-900">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">{testimonial.quote}</p>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
