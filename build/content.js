// All page content — copied verbatim from wildprojects.ca so existing SEO (titles, meta descriptions,
// H1/H2 headings, body copy, image alt text and URL slugs) is preserved.
const CDN = 'https://images.squarespace-cdn.com/content/v1/684d882bd3ef4156ea5df142/';
const img = (path, alt) => ({ src: CDN + path, alt });

const SITE = {
  name: 'Wild Projects',
  url: 'https://www.wildprojects.ca',
  email: 'info@wildprojects.ca',
  phone: '403 988 9379',
  phoneIntl: '+14039889379',
  instagram: 'https://www.instagram.com/wild__projects/',
  logo: CDN + 'd5104cbb-1a50-4741-83ef-463363dc115d/WP_19770+trailer+graphics_stacked+logo.png',
  ogImage: 'https://static1.squarespace.com/static/684d882bd3ef4156ea5df142/t/68e584985025cc44104fd65d/1759872152234/WP_19770+trailer+graphics_stacked+logo.png?format=1500w',
  hours: [
    ['Monday', '7:30 am - 5:00 pm'], ['Tuesday', '7:30 am - 5:00 pm'], ['Wednesday', '7:30 am - 5:00 pm'],
    ['Thursday', '7:30 am - 5:00 pm'], ['Friday', '7:30 am - 5:00 pm'],
  ],
};

const SERVICES = [
  { slug: 'residential-wood-framing', label: 'Residential Wood Framing' },
  { slug: 'custom-home-framing', label: 'Custom Home Framing' },
  { slug: 'carpentry', label: 'Carpentry' },
  { slug: 'deck-builder', label: 'Deck Builder' },
];
const LOCATIONS = [
  { slug: 'canmore', label: 'Canmore' },
  { slug: 'calgary', label: 'Calgary' },
  { slug: 'cochrane', label: 'Cochrane' },
  { slug: 'banff', label: 'Banff' },
];

const PAGES = [
  // ---------------------------------------------------------------- HOME
  {
    slug: '', type: 'home',
    title: 'Wood Framing Contractors in Canmore - Wild Projects',
    desc: 'Wild Projects is a trusted wood framing company serving Canmore and the Bow Valley. Our skilled wood framing contractors deliver quality construction.',
    h1: 'Wild Projects.',
    h2: 'Residential wood framing specialists in the Bow Valley and Calgary.',
    lead: ['Wild Projects is a Bow Valley–based wood framing contractor with over 20 years of carpentry construction experience. Our focus is on delivering safe, efficient, and dependable framing for real estate projects of every scale. Whether you are planning a custom home, a multi-unit development, or a renovation, our team offers the speed, on-field expertise, and dedication needed to keep your projects on schedule and built right.'],
    images: [
      img('ea15b856-7b69-4ca5-84c2-f5912dbf7d9c/Wild+Projects+%2832+of+39%29.jpg', 'A house under construction with unfinished exterior walls, large window openings, and construction fencing around the property. There is a small patch of snow on the ground and a construction excavator partially visible on the left.'),
      img('d120372b-58fe-4f85-bc5a-d84c5c4d2655/IMG_0342.jpg', 'A person standing on the edge of a wooden roof under construction, holding onto safety ropes, with a clear blue sky overhead and a partially built wooden structure below.'),
      img('9bf42af6-7415-4686-9ec6-8924e324a5e1/IMG_0148.jpg', 'Construction site with a house being built, showing wooden framing and sheathing, under a partly cloudy sky.'),
    ],
    sections: [
      {
        h2: 'Who We Work With', img: 0, img2: 1, cta: 'Request a Quote',
        p: [
          'We work directly with builders, developers, and general contractors who need a framing partner they can rely on. Our role is simple: do our part properly so your job runs smoothly. From site preparation to the last nail, we bring the same attention to detail and professionalism to every project.',
          'Doing this for over two decades, we understand what’s at stake on a job site. Delays in framing can impact every other trade down the line. What separates us from our competitors is that we stay focused on timelines, communicate clearly with site managers (with a solid, practical action plan), and keep our crew coordinated from start to finish.',
          'Builders and developers choose us as their wood framing company because they know we show up ready, stay organized, and follow through until the job is complete.',
        ],
      },
      {
        h2: 'Framing services we offer', layout: 'cards', cta: 'Contact Now',
        p: ['Our wood frame contractor work covers all areas of residential construction:'],
        list: [
          'Custom Homes – Complete framing services designed to support unique layouts and architectural details.',
          'Multi-Unit Builds – Efficient and organized framing for larger developments, keeping timelines and budgets on track.',
          'Renovations and Additions – Structural framing adjustments and rebuilds that integrate seamlessly with existing homes.',
          'Decks and Pergolas – Outdoor framing that increases value and adds function to residential properties.',
        ],
        links: ['/custom-home-framing', '/residential-wood-framing', '/residential-wood-framing', '/deck-builder'],
        after: ['Every project is approached with the same care and attention. Whether it’s a single-family build in Calgary or a multi-unit development in Canmore, we work with precision and respect for the process. We are proud of the quality of our craftsmanship, something that we have perfected over the years. We invite you to check out our work, or better yet, contact us for a one-on-one call.'],
      },
      {
        h2: 'Why you should work with Wild Projects', img: 2, layout: 'split-list', cta: 'Contact Now',
        p: ['Our reputation comes from the way we work on site. We keep things clean, respect other trades, and deliver framing that is precise and dependable. Builders know that when Wild Projects is on the job, they can expect efficiency and professionalism from day one.'],
        list: [
          'Proven Experience – Two decades of hands-on carpentry and framing in Bow Valley and Calgary.',
          'Clean Sites – Organized work environments that support efficiency and safety.',
          'Reliable Teams – Crews that show up prepared and ready to keep projects moving.',
          'Detail-Oriented Work – Framing done right the first time, ensuring stability and accuracy for every build.',
        ],
      },
      {
        h2: 'Get started with Wild Projects', layout: 'contact',
        p: ['If you are a builder, developer, or general contractor looking for a framing partner that values professionalism and craftsmanship, Wild Projects is ready to work with you. We take care of our part so you can focus on the bigger picture. With over two decades of experience, a proven process, and a team committed to detail, Wild Projects continues to set the standard for residential wood framing in Bow Valley and Calgary. If you are searching for “wood framing contractors near me,” feel free to reach out.'],
      },
    ],
  },

  // ---------------------------------------------------------------- SERVICES
  {
    slug: 'residential-wood-framing', type: 'service', eyebrow: 'Services',
    title: 'Residential Wood Framing Services — WILD PROJECTS',
    desc: 'Wild Projects provides expert residential wood framing services for strong, durable, and precise home structures. Trusted construction company for quality builds.',
    h1: 'Wild Projects.', h2: 'Residential wood framing.',
    lead: [
      'At Wild Projects, residential framing is where our reputation is built. For over 20 years, we’ve worked alongside builders, developers, and general contractors across the Bow Valley, Cochrane, and Calgary to deliver residential wood framing that’s foundational, safe, and reliable.',
      'We understand what you need on site: a crew that shows up ready, keeps the schedule on track, and leaves a clean site behind. Our carpenters are skilled, detail-driven, and experienced with a wide range of residential projects, from single-family custom homes to multi-unit builds and complex renovations.',
    ],
    images: [
      img('14a67640-b21f-49aa-82b6-8c1c95c67b1c/IMG_8878+%281%29.jpg', 'Construction site with partially built wooden frames on the structure, surrounded by parked cars, in a mountainous landscape during sunset.'),
      img('1854f487-fc87-44fb-a8c5-fd555f7e359d/Published-2.jpg', 'A construction worker wearing a safety helmet and reflective clothing is working with a power drill on a wooden framework at a building site with mountains in the background.'),
      img('f21040fb-2bf1-499c-9093-d0d12e6782c6/IMG_9032+%281%29.jpg', 'A multi-story building under construction with wooden framing, a crane lifting materials, and a sign for Wild Projects carpentry specialists in front.'),
    ],
    sections: [
      {
        h2: 'Dependable framing for residential builds.', img: 1, layout: 'split-list',
        p: [
          'Our team is equipped to handle projects of any scale. We bring a consistent approach to each build, with a focus on accuracy, speed, safety, and communication. We know how important it is for trades to work together smoothly, and we do our part to keep your project moving.',
          'Framing is the foundation that every trade builds upon. When the lines are straight, measurements exact, and layouts followed precisely, the rest of the project has fewer delays and fewer callbacks. That’s why we take the extra time to double-check dimensions, work closely with site supervisors, and maintain clear communication with other trades on site.',
        ],
        list: [
          'Custom homes: From foundation to finish framing, we ensure every detail is done right. Our team is familiar with architect-designed builds that demand precision and with high-end homes where small framing errors can create costly issues later in the project.',
          'Multi-unit developments: Experienced in larger builds with strict timelines and coordination needs. We understand the challenges of sequencing multiple trades and managing tighter schedules, and we frame in a way that supports smooth progress.',
          'Renovations and additions: Careful planning and execution for projects that tie new framing into existing structures. These projects often require a balance of speed and accuracy, and our carpenters know how to make the transition seamless.',
        ],
      },
      {
        h2: 'Why builders choose Wild Projects.', layout: 'cards',
        p: ['Builders trust us because we take ownership of our work. If something needs adjusting, we handle it quickly. If plans require clarification, we coordinate directly rather than slowing down progress. This attitude helps keep projects moving and reduces unnecessary friction between trades.'],
        list: [
          'Experience: Two decades of framing expertise in residential construction across Bow Valley, Cochrane, and Calgary. Our history means we’ve seen a wide range of build types, design requirements, and site conditions, and we know how to adapt.',
          'Professionalism: A clean, safe site and carpenters who respect your schedule. We keep tools and materials organized, maintain safety standards that protect every crew on site, and work to ensure inspections pass the first time.',
          'Reliability: Clear communication, consistent workmanship, and a crew you can count on. We understand that delays cost money, and we structure our work to stay on track with your critical path.',
        ],
        after: ['We don’t cut corners, and we don’t overcomplicate things. Our role is straightforward, and that is to deliver solid, accurate framing so the rest of the build can proceed without setbacks.'],
      },
      {
        h2: 'Serving the Bow Valley, Cochrane, and Calgary.', img: 2,
        p: [
          'Based in the Bow Valley, we provide residential framing services in Banff, Canmore, Cochrane, and throughout Calgary. Our work ranges from mountain builds with unique design features to suburban developments requiring volume framing. In every case, we adjust our approach to suit the scale, complexity, and schedule of the project.',
          'Cochrane in particular has seen steady growth in residential developments, with a demand for framing crews that can keep pace with expanding communities while maintaining high-quality standards. Wild Projects is positioned to support this demand with a skilled team that delivers both consistency and precision.',
          'We also recognize the demands builders face with client expectations, permitting, and deadlines. Our residential wood framing services support those pressures by being predictable, safe, and efficient. We know what’s at stake when multiple projects run at once, and we make sure that when Wild Projects is on site, the framing is one less thing to worry about.',
        ],
      },
      {
        h2: 'Contact us for residential wood framing.', layout: 'cta',
        p: ['If you are searching for residential wood framing contractors to handle your home project or need a local team, reach out to Wild Projects. We bring carpentry expertise and local knowledge to every house we frame. Let’s set your build on a foundation that delivers stability, beauty, and longevity.'],
      },
    ],
  },
  {
    slug: 'custom-home-framing', type: 'service', eyebrow: 'Services',
    title: 'Custom Home Framing Experts — WILD PROJECTS',
    desc: 'Wild Projects specializes in custom home framing with precision and durability. Trusted construction company delivering quality craftsmanship for every build.',
    h1: 'Custom home framing services in the Bow Valley and Calgary',
    lead: ['Wild Projects provides custom home framing services built on over 20 years of carpentry experience. Our team is known throughout Bow Valley and Calgary for reliable, skilled workmanship that keeps projects on track and built to last. From the first measurement to the final nail, we bring accuracy, efficiency, and professionalism to every custom home build.'],
    images: [
      img('3049d904-4e79-4c10-aecf-cdaa7575fdd4/IMG_9210.jpg', 'Construction site with wooden panels and roofing materials, mountains in the background, and a clear blue sky.'),
      img('0ca05e70-630e-476e-9962-cec0f4500a09/1.jpg', 'A house under construction with wooden framing and plywood sheathing, ladders leaning against it, and a blue sky overhead.'),
      img('8d8df194-e290-4304-84c6-360b8719b28a/6.jpg', 'Construction worker wearing a safety helmet and harness standing on a partially built roof made of plywood, with mountains in the background.'),
      img('4ba2cc5d-9144-4505-b2e2-bdce6ba773f5/3.jpg', 'Construction site with wooden framing for a building, surrounded by parked cars, with mountains and a cloudy sky in the background.'),
    ],
    sections: [
      {
        h2: 'Framing Homes with precision and care', img: 1,
        p: [
          'Every custom home project is unique, which means the framing needs to be exact. Builders, developers, and GCs depend on framing that matches the design perfectly, fits the schedule, and sets the stage for the rest of the construction process, all the while meeting budget limitations.',
          'At Wild Projects, we take that responsibility seriously. Our crews are trained to handle a wide range of layouts, structural requirements, and design details so that the home is framed correctly from the start.',
          'We focus on details because details matter. A custom build requires more than standard measurements and cuts. It demands precision that supports the architect’s vision and ensures a seamless hand-off to the next trades on site. Our framing work gives builders confidence that their custom homes have the strength and accuracy they need.',
        ],
      },
      {
        h2: 'Our approach to custom framing', img: 2,
        p: [
          'The process begins with clear communication. We work with builders and GCs to fully understand the design plans, schedule, and site conditions before starting. Once on site, our crews maintain a steady workflow that aligns with the larger project timeline. We prepare thoroughly, stay organized, and keep sites clean so that work moves forward without unnecessary delays.',
          'Safety is another priority. We follow strict safety standards to protect our crews and everyone else working on site. A safe site is also an efficient site, which means fewer interruptions and consistent progress. By combining preparation, communication, and safety, we deliver custom framing that meets both structural and design expectations. Builders rely on us because they know we do our part properly, and that makes their job easier.',
        ],
      },
      {
        h2: 'Custom home framing services we provide', layout: 'cards',
        p: ['Our custom framing services cover a wide range of residential builds:'],
        list: [
          'Single-Family Homes – Complete framing services tailored to unique layouts, structural demands, and design requirements.',
          'Luxury and Architectural Homes – Precision framing for homes that feature complex designs, vaulted ceilings, or unique layouts.',
          'Multi-Unit Developments – Custom framing for townhomes, duplexes, and other multi-unit projects where efficiency and accuracy are critical.',
          'Additions and Expansions – Seamless framing integration for home additions that tie into existing structures.',
        ],
        after: ['No matter the scale or style of the project, our approach remains the same. Accurate framing, dependable crews, and a commitment to timelines.'],
      },
      {
        h2: 'Why builders choose Wild Projects for custom homes', img: 3,
        p: [
          'Builders and developers across Bow Valley and Calgary turn to us for custom framing because we bring consistency to complex projects. They know we show up ready, keep communication clear, and follow through until the job is finished. Our crews take pride in their craftsmanship, ensuring every wall, beam, and joist is placed with accuracy.',
          'We also understand the value of time. Delays in framing can disrupt entire projects, so we focus on efficiency without compromising quality. By working with Wild Projects, you can trust that framing will be done right and on schedule.',
        ],
      },
      {
        h2: 'Discuss your custom wood framing needs with Wild Projects', layout: 'cta',
        p: ['If you are a builder, developer, or general contractor looking for a partner you can trust with custom home framing, Wild Projects is here to help. With decades of carpentry experience and a proven reputation for quality, we provide the framing foundation that custom homes need to stand strong and look their best. Contact us to learn more about our wood framing services.'],
      },
    ],
  },
  {
    slug: 'carpentry', type: 'service', eyebrow: 'Services',
    title: 'Professional Carpentry Services — WILD PROJECTS',
    desc: 'Looking for expert carpentry services near you? Wild Projects offers custom woodwork, framing, and finishing solutions for homes and businesses. Trust our skilled carpenters for quality craftsmanship and reliable service every time.',
    h1: 'Carpentry services built on experience and reliability.',
    lead: [
      'Wild Projects provides carpentry services that builders, developers, and general contractors can count on. With over 20 years of hands-on experience, our team has worked on everything from large multi-unit developments to custom homes across Calgary, Banff, Canmore, and Cochrane.',
      'We bring precision, efficiency, and professionalism to every project, making sure framing and finishing elements are delivered on schedule and to the highest standard. Alongside large-scale builds, we also work with homeowners on decks and pergolas, bringing the same attention to detail to outdoor living spaces as we do to structural framing. Contact us for a personalized discussion.',
    ],
    images: [
      img('b051ddb8-3e81-48f0-9155-a543faef2566/IMG_9070.jpg', 'Mountains with snow cover under a clear blue sky, seen from a construction site with a partially built roof and construction tools.'),
      img('3503616f-c5fd-4147-8a04-2ce7b544a1a3/IMG_8836.jpg', 'A building under construction with a wooden framework, set against a backdrop of mountains and a cloudy sky.'),
      img('a41a24c4-4dfa-4adb-bc34-73a34455c8cd/IMG_5662.jpg', 'A house with blue siding and white trim has a wooden deck under construction. Vertical wooden posts and horizontal beams form the framework of the deck, with stairs leading up to it. A small storage shed is placed underneath the deck, and a satellite dish is attached to the house wall. The sky is clear and sunny.'),
      img('1d1b8420-e481-43c6-bd43-fb832b97a819/IMG_2974.jpg', 'Backyard with newly installed wooden deck, raised garden beds, a large tree in the background, and a white and brick fence.'),
      img('96f4068a-28ea-4cd0-93ac-bfd8f6daf458/IMG_2378.jpg', 'A backyard with a wooden deck, outdoor seating, a hot tub, and a house with multiple windows. There are stairs leading down from the deck to a grassy yard with a curved flower bed and stepping stones. A large tree is visible on the left side of the image.'),
    ],
    sections: [
      {
        h2: 'Why Builders and Developers trust us.', img: 1, layout: 'split-list',
        p: ['When deadlines are tight and expectations are high, reliable carpentry is a necessity. Our crew is known for:'],
        list: [
          'Clean, accurate work that avoids costly re-dos.',
          'A team-first approach that fits seamlessly with other trades.',
          'Local knowledge of the Bow Valley and Calgary construction needs.',
          'Consistent communication to keep projects running smoothly.',
        ],
        after: ['For GCs and developers, this means confidence that the carpentry side of the build is handled without complication.'],
      },
      {
        h2: 'Wood Framing Expertise', img: 2,
        p: ['Framing is at the heart of our carpentry services. Whether it’s residential builds or multi-unit projects, we make sure every wall, floor, and roof is framed with accuracy. Builders rely on us because we respect the schedule and deliver work that stands up to both inspections and long-term use. Get in touch and discuss your project today.'],
      },
      {
        h2: 'Decks and pergolas for Homeowners', img: 3,
        p: ['While most of our work supports larger builds, we also take on outdoor projects directly for homeowners. Our deck and pergola builds are crafted with the same care as our framing services, offering families durable spaces to gather and enjoy. So, if you are looking for a contactor that can help you custom-build your vision, we are a call away.'],
      },
      {
        h2: 'Carpentry Services near you – A local partner you can depend on.', layout: 'steps',
        p: ['For those searching “carpentry services near me,” Wild Projects offers the benefit of being local and proven. We’ve built our reputation in Calgary and the Bow Valley by showing up, keeping sites clean, and delivering what we promise.'],
        list: [
          'Consultation & Scope – We review your project details and schedule.',
          'Coordination – We align our work with your team and other trades.',
          'Delivery – We complete framing, decks, and carpentry with efficiency and quality.',
        ],
      },
      {
        h2: 'Why choose us?', img: 4, layout: 'split-list',
        p: ['With Wild Projects as your carpentry team, you get:'],
        list: [
          '20+ years in carpentry and framing.',
          'Trusted partner for developers, builders, and GCs.',
          'Local expertise in Calgary, Banff, Canmore, and Cochrane.',
          'Skilled in both large-scale builds and custom outdoor spaces.',
        ],
      },
      {
        h2: 'Let’s build together.', layout: 'cta',
        p: ['Wild Projects is ready to support your next build with professional carpentry services you can rely on. From framing multi-unit projects to crafting decks and pergolas, we bring the skill and dedication your project deserves. Contact us today to discuss your next project.'],
      },
    ],
  },
  {
    slug: 'deck-builder', type: 'service', eyebrow: 'Services',
    title: 'Deck Contractors Near Me | Custom Deck Builders — WILD PROJECTS',
    desc: 'Looking for trusted deck contractors near me? Wild Projects builds custom decks with expert craftsmanship. Contact our experienced deck builders near me today!',
    h1: 'Deck Building Services – Building Outdoor Spaces',
    lead: ['When you think of your home, you don’t just think about the inside. The backyard, the view, and the outdoor spaces are just as important, and your deck is where it all comes together. At Wild Projects, we’ve spent more than 20 years helping homeowners in Banff, Canmore, Cochrane, and Calgary design and build decks that feel solid, look beautiful, and actually last. If you’ve been searching for deck contractors near me or reliable deck builders near me, you’re in the right place. Feel free to reach out to us. Let’s discuss your vision.'],
    images: [
      img('d983c619-792b-41bd-8c7b-12057081215c/IMG_3039.jpg', 'A new wooden deck with stairs attached to a house, surrounded by garden plants and trees on a sunny day.'),
      img('70a14deb-1803-422c-a4d0-cf33ae6db647/15.jpg', 'Backyard with wooden deck, outdoor sofa, and house with multiple windows and sliding glass door, surrounded by trees and wooden fencing.'),
      img('a399df68-700f-4c6d-ab95-5fedc87a4b28/IMG_3033.jpg', 'Wooden staircase outdoors with mountain landscape in the background and clear blue sky.'),
      img('6a259357-4b53-4019-84d9-fa4ac8054842/IMG_3298.jpg', 'A backyard with a set of gray wooden steps leading up to a hot tub covered with a black cover. There are trees, some bare and some with red and yellow leaves, in the background along with a cloudy sky.'),
    ],
    sections: [
      {
        h2: 'Why homeowners trust Wild Projects', img: 1, layout: 'split-list',
        p: ['We know hiring a contractor can feel stressful. Will they show up? Will they cut corners? Will the deck look the way you imagined? Those are real worries, and we take them seriously. Homeowners trust Wild Projects because:'],
        list: [
          'We keep communication open and simple.',
          'We show up when we say we will.',
          'We leave your site clean and safe every day.',
          'We build with the same level of care we’d use on our own homes.',
        ],
        after: ['At Wild Projects, we are all about creating an outdoor space where you’ll spend summers with family, host friends, or simply enjoy a quiet morning coffee.'],
      },
      {
        h2: 'Experience That Shows in Every Deck', img: 2,
        p: [
          'With two decades of carpentry experience, our team knows what it takes to build decks in the Bow Valley. From heavy snow loads to shifting ground, the environment here puts outdoor structures to the test. That’s why we frame every deck with precision and durability in mind.',
          'Whether you want a simple platform deck, a multi-level design, or a custom pergola for shade and style, we handle it all. Our carpenters problem-solve, making sure your deck works with your yard, your home’s architecture, and your lifestyle.',
        ],
      },
      {
        h2: 'Decks that fit your home and your life', layout: 'cards',
        p: ['Every homeowner has a different vision. Some want a large entertainment space with room for a grill, dining table, and seating area. Others want something small and low-maintenance that blends into the landscape. We listen first, then build accordingly. Here’s what you can count on with Wild Projects:'],
        list: [
          'A deck designed to suit your home. We make sure the scale, style, and finish feel like they belong.',
          'Materials that last. From pressure-treated lumber to composite decking, we help you choose what works best for your budget and maintenance needs.',
          'Expert craftsmanship. Our carpenters focus on the details, including railings, stairs, and pergolas, so the final product is both safe and beautiful.',
        ],
      },
      {
        h2: 'Serving homeowners across the Bow Valley', img: 3,
        p: ['We’re proud to provide deck building services throughout Banff, Canmore, Cochrane, and Calgary. Homeowners across the region know us as dependable, detail-oriented builders who care about getting it right the first time. If you’ve been typing “deck builders near me” into your search bar, you don’t have to search anymore. Wild Projects is your local team. Contact us to start today!'],
      },
      {
        h2: 'Ready to start your deck project?', layout: 'cta',
        p: ['A deck is where memories are made. With Wild Projects, you’ll get a team that understands what matters most, and that is a space that feels solid, looks great, and works for your lifestyle. Reach out today to book a consultation. Let’s design and build a deck you’ll be proud to call part of your home.'],
      },
    ],
  },

  // ---------------------------------------------------------------- LOCATIONS
  {
    slug: 'canmore', type: 'location', eyebrow: 'Locations · Canmore, AB',
    title: 'Wood Frame & Deck Contractors Canmore — WILD PROJECTS',
    desc: 'Wild Projects are expert wood frame and deck contractors in Canmore. We build durable, high-quality decks and framing with precision and modern design.',
    h1: 'Wood Frame Contractor Canmore – Building with Precision',
    lead: [
      'In the Bow Valley, projects move forward only when every trade does its part, and framing is the backbone of it all. At Wild Projects, we bring over two decades of experience as a trusted wood frame contractor in Canmore, working alongside builders, developers, and general contractors to keep jobs on schedule and up to standard. We provide clean, efficient, and reliable framing so your build doesn’t stall.',
      'From custom homes to multi-unit developments, our carpentry crew is known for attention to detail, safe practices, and open communication. We understand what’s at stake on site, and we deliver framing work that supports the bigger picture of your project. Contact us to discuss your upcoming project in Canmore.',
    ],
    images: [
      img('35541725-31d7-444d-8590-bfd1e35ae7f8/IMG_9070.jpg', 'Construction site on a roof with a mountainous landscape in the background, snow-covered peaks and a blue sky.'),
      img('25f72212-cdac-4417-a278-6c54af6f7e10/22.jpg', 'Construction worker kneeling on a wooden roof under construction, with mountains and a cloudy sky in the background.'),
      img('df7db943-764d-491b-98ca-e653742f08fa/IMG_3337.jpg', 'A wooden deck with gray stairs leading up to a hot tub, outdoors in a yard with leafless and evergreen trees, overcast sky.'),
      img('d0dd39e2-b6f1-4303-bbce-a742a00b03c0/23.jpg', 'A construction worker wearing safety gear is working on a wooden roof framing in a mountainous area with snow-covered peaks and a blue sky in the background.'),
    ],
    sections: [
      {
        h2: 'Framing services that meet project demands.', layout: 'cards',
        p: ['Our framing work extends across a wide range of builds:'],
        list: [
          'Multi-unit residential projects – Framing for townhomes, apartments, and condos where timelines and precision matter.',
          'Custom homes – Complex layouts, specialty designs, and premium finishes handled with care.',
          'Renovations and additions – Structural changes, expansions, and upgrades with minimal disruption.',
          'Commercial projects – Wood framing that adapts to both function and design requirements.',
        ],
        after: ['As a wood frame contractor in Canmore, we provide a team that’s reliable, adaptable, and serious about site safety. Whether you’re managing a large development or a one-off custom build, we show up prepared and ready to work.'],
      },
      {
        h2: 'Our approach to your project.', img: 1, layout: 'split-list',
        p: ['Framing is about trust. Our crews are recognized throughout Canmore and the Bow Valley for:'],
        list: [
          'Clean worksites – Organized, safe, and efficient from start to finish.',
          'Clear communication – Keeping builders and GCs updated so there are no surprises.',
          'Skilled craftsmanship – Every cut and connection measured with accuracy.',
          'Accountability – We take responsibility for our role and deliver what we promise.',
        ],
        after: ['That’s why builders keep calling us back. We don’t cut corners, and we don’t hold up progress.'],
      },
      {
        h2: 'Decks and pergolas for Homeowners in Canmore.', img: 2,
        p: [
          'While our main focus is large-scale framing for builders and developers, we also take on select outdoor living projects for homeowners. As experienced deck contractors in Canmore, we build decks and pergolas that are sturdy, functional, and suited to mountain living.',
          'Our outdoor work reflects the same craftsmanship we bring to framing. Clean lines, durable builds, and attention to detail. For homeowners, it means a deck or pergola that lasts through harsh winters and long summers, providing a practical extension of your living space. If you are a homeowner looking for deck builders in Canmore, feel free to reach out to us.',
        ],
      },
      {
        h2: 'Why builders choose Wild Projects in Canmore.', img: 3, layout: 'split-list',
        p: ['When you hire a framing crew, you need a partner who understands construction schedules, respects budgets, and knows how to collaborate with other trades. That’s what we bring to every Canmore project.'],
        list: [
          '20+ years of framing experience across Bow Valley and Calgary.',
          'Dedicated carpentry teams who specialize in wood frame structures.',
          'On-time delivery that helps keep your project moving.',
          'Flexibility to take on both large developments and unique builds.',
        ],
        after: ['We’re here to make your job easier by doing ours properly.'],
      },
      {
        h2: 'Let’s build together in Canmore.', layout: 'cta',
        p: [
          'From framing large residential developments to crafting custom homes, Wild Projects is the dependable choice for builders, developers, and general contractors in Canmore. And for homeowners, we are the deck contractors in Canmore that provide high-quality outdoor spaces that enhance everyday living.',
          'We’ve built our reputation on reliability, craftsmanship, and professionalism, and we bring that same standard to every project, no matter the size. Looking for a wood frame contractor in Canmore? Get in touch with us at Wild Projects today, and let’s get your build moving.',
        ],
      },
    ],
  },
  {
    slug: 'calgary', type: 'location', eyebrow: 'Locations · Calgary, AB',
    title: 'Carpentry Services & Deck Builders Calgary — WILD PROJECTS',
    desc: 'Wild Projects offers expert carpentry services and deck building in Calgary. Trusted construction company for custom woodwork, framing, and outdoor decks.',
    h1: 'Expert Wood Frame & Carpentry Services in Calgary.',
    lead: ['When it comes to framing wood with precision, you want a team that understands both structure and style. At Wild Projects, we specialize in delivering exceptional carpentry services in Calgary, working closely with builders, developers, and general contractors who demand reliability on every job. From large-scale framing projects to detailed finishing touches, we’re the partner you can trust to bring your plans to life.'],
    images: [
      img('3049d904-4e79-4c10-aecf-cdaa7575fdd4/IMG_9210.jpg', 'Scenic view of mountains with snow, dense forest, and blue sky, with a construction site in the foreground showing unfinished wooden structures and building materials.'),
      img('389515f1-5a04-42b9-94d5-1d7bf96ef992/IMG_3171+%281%29.jpg', 'A modern black wooden tiny house with large glass windows, set outdoors on a grassy area with trees in the background, under a clear blue sky.'),
      img('19b28bff-e6ec-4282-b798-0409735525e1/IMG_5662.jpg', 'A house with blue siding, white trim, and a grey shingled roof. There is a wooden deck under construction attached to the back of the house, supported by vertical and horizontal beams, with stairs leading down to the ground. A small grill and a black metal gate are visible near the back of the house. The sky is blue with some clouds.'),
      img('980cda03-807f-487d-9ae3-1108df2cf3ff/IMG_0320.jpg', 'Wooden framing for a building under construction against a mountain and blue sky'),
      img('4edf8b4d-7b16-47ea-8e4f-550438c22dd5/IMG_3052.jpg', 'A staircase made of wooden planks rising between two wooden fences, with greenery and bushes in the background.'),
    ],
    sections: [
      {
        h2: 'A Wood Frame Contractor you can rely on', img: 3,
        p: [
          'Framing is the backbone of any build. Get it wrong, and everything else suffers. That’s why builders and GCs across Calgary turn to us as their go-to wood frame contractor in Calgary. Our crew is experienced in handling all types of projects, from multi-unit residential builds to custom commercial structures. We combine technical know-how with a strong work ethic, ensuring every wall, roof, and joist is set with accuracy.',
          'Builders know time is money. We bring over 20 years of on-field experience. We prioritize efficient scheduling, clear communication, and consistent quality so you can keep your projects moving without delays. Whether you’re developing new housing or managing a commercial build, our framing solutions give you peace of mind.',
        ],
      },
      {
        h2: 'Complete Carpentry Services in Calgary.', img: 1,
        p: [
          'Our expertise doesn’t stop at wood framing. We provide comprehensive carpentry services in Calgary to support every stage of your project. Developers often rely on us for multi-phase projects because we can adapt to different scopes and requirements.',
          'From installing doors and trim to tackling custom woodwork, our team ensures that every element not only fits but functions seamlessly. When you partner with Wild Projects, you get a crew that can flex with your needs while delivering consistent craftsmanship.',
        ],
      },
      {
        h2: 'Decks and pergolas for Calgary Homes.', img: 2,
        p: ['While our primary focus is wood framing, we also understand the needs of homeowners. For those in Calgary looking to add outdoor living spaces, we act as trusted deck builders in Calgary. Our team designs and builds durable decks and pergolas that withstand Alberta’s climate while enhancing curb appeal. Homeowners can expect the same level of professional service we bring to large projects—precise builds, sturdy structures, and clean finishes. Whether it’s a backyard retreat or a pergola to complement your outdoor space, we build features that add both beauty and long-term value to your home.'],
      },
      {
        h2: 'Why Calgary builders choose Wild Projects.', img: 4, layout: 'split-list',
        p: ['In a city with constant development, you need a team that can keep up. Calgary’s construction pace demands carpentry partners who are dependable, adaptable, and skilled. That’s exactly what we bring to the table.'],
        list: [
          'Consistent quality across residential and commercial projects.',
          'Efficient project management that respects your timelines.',
          'Flexible services for both large-scale builds and smaller additions.',
          'Hands-on experience with the region’s building codes and conditions.',
        ],
        after: ['Our reputation has been built on trust. Developers and contractors return to us because they know the work will be done right the first time. Contact us to discuss your upcoming project.'],
      },
      {
        h2: 'Building Calgary Together', layout: 'band',
        p: ['At Wild Projects, we see ourselves as partners in growth. Calgary’s skyline, communities, and neighbourhoods are expanding, and we’re proud to play a role in that transformation. From apartment complexes to single-family homes, from retail spaces to custom decks, our work is woven into the city’s fabric. If you’re a builder, developer, or GC in Calgary looking for reliable carpentry services, or a homeowner searching for skilled deck builders in Calgary, Wild Projects is ready to take on your next project.'],
      },
      {
        h2: 'Let’s Get Started', layout: 'cta',
        p: ['Your project deserves a team that treats every build with care, precision, and dedication. That’s exactly what you get with Wild Projects. Contact us today to discuss your upcoming project in Calgary. Let’s build something lasting togethers.'],
      },
    ],
  },
  {
    slug: 'cochrane', type: 'location', eyebrow: 'Locations · Cochrane, AB',
    title: 'Cochrane Deck Builders & Framing Contractors — WILD PROJECTS',
    desc: 'Wild Projects provides deck building, wood framing, and carpentry services in Cochrane. Get quality craftsmanship and durable construction for your project.',
    h1: 'Cochrane framing services – Building for a growing community.',
    lead: [
      'Cochrane continues to expand, and with that growth comes the need for skilled trades that can keep pace. Developers and general contractors need crews who understand deadlines, respect budgets, and know how to integrate seamlessly into complex projects. That’s where Wild Projects offers the support our project managers need.',
      'With over 20 years of carpentry experience in the Bow Valley and surrounding regions, we’ve built our reputation on reliable wood framing, steady communication, and craftsmanship that stands the test of time. In Cochrane, our focus is to support builders, developers, and GCs with framing services that keep projects moving without unnecessary setbacks.',
    ],
    images: [
      img('b051ddb8-3e81-48f0-9155-a543faef2566/IMG_9070.jpg', 'Construction site with a wooden roof and tools, with snow-capped mountains and a clear blue sky in the background.'),
      img('1ed9236c-223a-438f-908e-1647de3fae49/IMG_0020.jpg', 'Construction site showing the wooden framework of a building under construction, with a crane lifting a large wooden section to the upper floor, and cloudy sky in the background.'),
      img('923e28ee-06ec-4c70-a365-fbe2179f3a07/IMG_3285.JPG', 'Newly built wooden privacy fence with horizontal slats, partially shaded by tree leaves, with a blue sky in the background and some landscaping with rocks and plants.'),
      img('1940f93b-8243-4313-830c-28162d93bbe7/IMG_3056.jpg', 'A wooden balcony with a view of green trees and snow-capped mountains under a clear blue sky.'),
    ],
    sections: [
      {
        h2: 'Framing that works with you.', img: 1, layout: 'split-list',
        p: ['Every build is different, but the expectations are always the same. You need clean work, accurate execution, and trades that don’t hold up progress. Our framing services in Cochrane cover:'],
        list: [
          'Multi-unit residential projects that demand precision and consistency.',
          'Custom homes with layouts that require experience and adaptability.',
          'Commercial builds where structural framing ties into larger design plans.',
          'Renovations and additions that need careful integration with existing structures.',
        ],
        after: ['We are partners in the construction process, making sure our role supports yours.'],
      },
      {
        h2: 'Our standards on site.', layout: 'cards',
        p: ['In construction, reputation travels fast. Wild Projects has earned trust in Cochrane and beyond by staying serious about the details:'],
        list: [
          'Crews that arrive ready and equipped.',
          'Sites that stay safe, organized, and professional.',
          'Communication that keeps you in the loop.',
          'Work that matches the drawings the first time around.',
        ],
        after: ['As your framing partner, we don’t cut corners, and we don’t leave problems for the next trade to solve.'],
      },
      {
        h2: 'Decks & Pergolas for Cochrane Homeowners', img: 2,
        p: [
          'While our core business is framing for builders and developers, homeowners in Cochrane also turn to us when they want outdoor living spaces that last. As trusted Cochrane deck builders, we design and construct decks and pergolas that balance form and function.',
          'These are built with the same standard of craftsmanship we bring to framing. You get structures that hold up to Cochrane’s seasons and create practical, enjoyable extensions of the home.',
        ],
      },
      {
        h2: 'Why Cochrane builders work with Wild Projects.', img: 3, layout: 'split-list',
        p: ['When a project gets underway, the last thing anyone wants is delays caused by unreliable trades. Builders in Cochrane know they can count on Wild Projects because:'],
        list: [
          'We bring 20+ years of experience to every job.',
          'Our framing crews are dedicated and experienced professionals.',
          'We respect timelines, knowing every delay affects the whole build.',
          'Our communication is direct and consistent, so there are no surprises.',
        ],
        after: ['This reliability is why we continue to be the framing choice for developers and general contractors across the Bow Valley, Calgary, and Cochrane.'],
      },
      {
        h2: 'A partner you can count on.', layout: 'cta',
        p: [
          'At Wild Projects, we see ourselves as part of the larger construction team. Our job is to get the framing right, keep the site running smoothly, and provide peace of mind to the people managing the bigger picture.',
          'For developers and GCs in Cochrane, that means a wood framing contractor who is professional, efficient, and accountable. For homeowners, it means deck builders in Cochrane who can create outdoor spaces with the same dedication to detail.',
          'Looking for framing crews or deck builders in Cochrane? Connect with Wild Projects today. Let’s talk about how we can support your next project.',
        ],
      },
    ],
  },
  {
    slug: 'banff', type: 'location', eyebrow: 'Locations · Banff, AB',
    title: 'Wood Frame & Deck Contractors Banff — WILD PROJECTS',
    desc: 'Wild Projects are trusted wood frame and deck contractors in Banff. We deliver expert craftsmanship, durable structures, and modern outdoor living solutions.',
    h1: 'Wood Frame Contractor Banff – Wild Projects.',
    lead: [
      'Wild Projects brings over 20 years of carpentry and framing experience to every build in Banff and across the Bow Valley. Our reputation as a trusted wood frame contractor in Banff comes from doing the fundamentals right. We show up prepared, keep a clean site, and stay focused on quality. We know the demands of the jobsite and the importance of timelines, and we make it our priority to keep things moving smoothly for builders, developers, and general contractors.',
      'From large-scale multi-unit builds to custom homes and major renovations, our crew delivers reliable framing craftsmanship that stands the test of time. Contact us to learn more or discuss your project.',
    ],
    images: [
      img('3049d904-4e79-4c10-aecf-cdaa7575fdd4/IMG_9210.jpg', 'A mountain landscape with snow-capped peaks, a clear blue sky, and some clouds. In the foreground, there are rooftops and construction materials, indicating ongoing construction or renovation.'),
      img('ac96c136-1136-4bcf-8196-6e4463a17176/IMG_0588.jpg', 'Interior view of a building under construction with exposed walls and ceiling framing made of wooden studs, two windows, and an unfinished floor.'),
      img('a89bcb4e-b6eb-4719-b4ce-d84404038413/IMG_3039.jpg', 'Wooden staircase and porch railing on a house with plants and trees surrounding it.'),
      img('71152c94-6a59-405a-b5ca-ad2851d725b1/IMG_0121.jpg', 'Construction site of a house with wooden framework and plywood sheathing, ladders leaning against it, under a clear blue sky.'),
    ],
    sections: [
      {
        h2: 'Framing services built for builders and developers.', img: 1, layout: 'split-list',
        p: [
          'When you work with Wild Projects, you get a crew who understands what’s at stake. We approach every project with precision and efficiency, whether it’s a townhouse complex, a residential infill, or a luxury custom home in the Banff area.',
          'Our framing services include:',
        ],
        list: [
          'Full structural wood framing for new builds.',
          'Renovation and addition framing to integrate seamlessly with existing structures.',
          'Multi-unit project framing, with the manpower and organization to handle large timelines.',
          'Custom residential framing, executed with attention to detail for high-end builds.',
        ],
        after: ['We know that details matter. We are serious about our craft, and our workflow is designed to minimize delays, maintain site safety, and deliver exactly what your project requires.'],
      },
      {
        h2: 'Why builders and GCs choose Wild Projects.', layout: 'cards',
        p: ['Working with Wild Projects means fewer headaches on site. Here’s why we’ve become the framing partner of choice in Banff:'],
        list: [
          'Professionalism – We communicate clearly and consistently with project managers and site leads.',
          'Reliability – Our team shows up ready and works efficiently to meet your schedule.',
          'Craftsmanship – Every cut and connection is made with accuracy, ensuring structural integrity and long-term performance.',
          'Experience – With decades in the field, we’ve handled everything from complex architectural designs to tight deadlines.',
        ],
        after: ['We’re proud to be a framing crew that other trades want to work alongside because we respect the flow of the jobsite. Contact us to discuss.'],
      },
      {
        h2: 'Decks and pergolas for Banff Homeowners.', img: 2,
        p: [
          'We also take on select residential projects. For homeowners looking for deck contractors in Banff, we deliver quality outdoor builds that match the surrounding landscape.',
          'Whether it’s a simple cedar deck, a custom-designed pergola, or an extension that blends seamlessly with your home, we bring the same level of professionalism and detail that we do to large framing projects. Our goal is to give homeowners a sturdy, attractive space they can enjoy year after year.',
          'If you’re a Banff resident looking to enhance your property, we are here to help you create a space that feels both functional and timeless. Contact us to get a personalized quote.',
        ],
      },
      {
        h2: 'Serving Banff and beyond.', img: 3,
        p: ['Wild Projects is proud to serve Banff and the wider Bow Valley. We also provide framing services in nearby communities like Canmore, Cochrane, and Calgary. Our crews know the unique challenges of building in mountain environments and adapt our approach to meet those demands while maintaining efficiency and quality.'],
      },
      {
        h2: 'Let’s Build Together', layout: 'cta',
        p: ['Whether you’re managing a multi-unit build, overseeing a custom home, or a homeowner planning a new deck or pergola, Wild Projects has the experience and dedication to bring your plans to life. We are the wood frame contractor in Banff that keeps projects on track and delivers framing craftsmanship that lasts. Contact us today to discuss your upcoming project.'],
      },
    ],
  },

  // ---------------------------------------------------------------- ABOUT
  {
    slug: 'about', type: 'about', eyebrow: 'About',
    title: 'About Us — WILD PROJECTS',
    desc: 'Learn about Wild Projects, a trusted construction company delivering expert residential wood framing, decking, and custom building projects across Canada.',
    h1: 'About Wild Projects',
    images: [
      img('3049d904-4e79-4c10-aecf-cdaa7575fdd4/IMG_9210.jpg', 'Mountain landscape with snow-capped peaks and a blue sky above a wood framing construction site in the Bow Valley.'),
      img('6a09497f-bf8a-44a9-b012-bbe48728f6cf/IMG_0013.jpg', 'Wooden framework being lifted by crane against snow-capped mountainous landscape with dense forest.'),
    ],
    sections: [
      {
        h2: 'Who we are', img: 1,
        p: [
          'Wild Projects is a Bow Valley–based framing company with over 20 years of experience in carpentry construction. We are a team of highly dedicated, professional and skilled carpenters who always strive to deliver efficient, safe and exceptional framing craftsmanship.',
          'We’re known for being reliable, easy to work with, and serious about the details. We keep a clean site, communicate well, and show up ready. We understand what’s at stake on a build site, and we do our part to keep things running smoothly.',
          'Whether you\'re a builder, developer, or GC, we make your job easier by doing ours properly.',
          'We provide our framing services throughout the Bow Valley including Banff, Canmore and also Calgary. From multi unit builds and custom homes to renovations, and everything in between, we do it all.',
        ],
      },
    ],
  },

  // ---------------------------------------------------------------- PROJECTS
  {
    slug: 'projects', type: 'projects', eyebrow: 'Portfolio',
    title: 'Our Projects — WILD PROJECTS',
    desc: 'Explore Wild Projects’ portfolio of construction excellence — from wood framing and decking to custom builds. See why clients trust us for quality project.',
    h1: 'Our Projects',
    images: [
      img('1fe848ce-a441-48c8-9e9f-7a4479a3c764/IMG_7513.jpg', 'A completed wood framed multi unit project in Canmore'),
      img('c1e90606-aeae-4518-ab83-5e0e0babcbd8/IMG_3039.jpg', 'Wooden staircase with railing leading up to a house porch, surrounded by plants and trees.'),
      img('6344ad5a-7dab-4790-a649-01ed43aa7f5a/IMG_0588.jpg', 'Wood framed interior of multi unit project in Canmore'),
      img('2083a8dd-c81d-4b27-8ae2-3f76cfd23806/IMG_9032.jpg', 'Partially completed wood frame project in Stewart Creek Canmore'),
      img('63353653-9ccb-423a-aa4d-47eb677a3954/IMG_3033.jpg', 'Wooden staircase outdoors with a mountain and blue sky in the background.'),
      img('385321c0-8449-40c5-8a07-39d872faff0d/IMG_3171.jpg', 'Modern black rectangular tiny house with large front window on a grassy field, leafless trees in the background, and a clear blue sky.'),
      img('69492f6b-d3f7-4d34-93c0-e32ea478eb02/IMG_3305+%281%29.jpg', 'A wood framed deck completed in Calgary'),
      img('14a67640-b21f-49aa-82b6-8c1c95c67b1c/IMG_8878+%281%29.jpg', 'Residential construction site with partially built wooden framing structure, surrounded by mountains and a partly cloudy sky during sunset.'),
      img('00b45a46-366b-4c84-8338-94d663b76e41/IMG_0342.jpg', 'Roof sheeting on a wood framed multi unit project in Canmore, Alberta'),
      img('640f8375-0c25-4ee3-8d17-757e506c85eb/IMG_0013.jpg', 'Wooden framework under construction with snow-capped mountains in the background.'),
      img('e6f5bcc4-6c81-4b93-a394-7d7ce3e7d96d/IMG_2974.jpg', 'Backyard with a wooden deck, surrounded by trees and fencing, with some fallen leaves on the deck.'),
      img('3878f63d-7ac1-47b1-b838-155513bd97b4/IMG_3052.jpg', 'Wooden stairs leading up to a raised platform, with a wooden railing on one side and a wall of bushes in the background. The stairs are made of different shades of wood, with some darker and some lighter.'),
      img('56124fe4-1213-499b-9dcd-66c5aa876a74/IMG_0148.jpg', 'Construction site with a house in progress, wooden framing, and a sign for Wild Projects Carpenter & Specialists in the foreground.'),
      img('3049d904-4e79-4c10-aecf-cdaa7575fdd4/IMG_9210.jpg', 'View of a mountainous landscape under a blue sky with some clouds. In the foreground, there are unfinished wooden structures, likely part of a construction site, and some buildings on the right side.'),
      img('f84a39b8-4a33-4774-b54d-d737738fe20b/IMG_9781+%281%29.jpg', 'Construction site of a modern wooden building with several windows, surrounded by snow, fencing, and construction equipment, under a clear blue sky with mountains in the background.'),
      img('29b501e4-f4c5-4ed8-baae-9d6aa0c18957/IMG_3073.jpg', 'Wooden stairs with horizontal slats on both sides, open at the top with a tree and blue sky visible beyond.'),
      img('c51dae04-31d8-42e3-8bba-80aad3fa0b0a/IMG_2380+%281%29.jpg', 'Backyard deck with beige wooden planks, a black pergola, a hot tub with a cover, two beige upholstered chairs, a wooden fence on the left, and parts of a house with beige siding and black window frames.'),
      img('fef6475c-cbdd-481f-99f5-df139acfe88d/IMG_5662.jpg', 'Two-story house with blue siding and white trim, under construction with a wooden deck framework extending from the back, in a sunny backyard with a wooden fence and neighboring houses visible.'),
      img('1749942770861-QY2YH4UF6OW5S2HIFK5M/IMG_0321.jpg', 'Construction site of multi-story buildings with exposed framed walls and windows, under a clear blue sky with the sun shining brightly.'),
      img('6bc8a75d-5ed2-4037-a7c8-18b560411f2e/IMG_9070.jpg', 'Under-construction building roof with tools on wooden panels, mountain range in the background, snow-capped peaks, and a clear blue sky.'),
      img('10968535-fca3-4578-9d5c-71bdd2b55cea/IMG_3054+%281%29.jpg', 'Wooden porch or balcony with railings, connected to a house, overlooking a neighborhood with houses and trees, mountains in the background, and a clear blue sky with the sun shining brightly.'),
      img('8d5a999b-ca77-4522-a45e-c3db76c2b724/IMG_3168.jpg', 'A rooftop under construction with wooden rafters being installed, set against a backdrop of mountains, a clear blue sky, and a residential neighborhood below.'),
      img('97aec861-d66f-430b-8f15-7f8a118c5984/IMG_3040.jpg', 'Wooden balcony railing and staircase under a blue sky, with shadows of leaves cast on the wood, and a ground covered in gravel and small stones.'),
    ],
    sections: [],
  },

  // ---------------------------------------------------------------- CONTACT
  {
    slug: 'contact', type: 'contact', eyebrow: 'Contact',
    title: 'Contact Us — WILD PROJECTS',
    desc: 'Get in touch with Wild Projects for expert construction, wood framing, and decking services. Contact our team today for quotes, consultations, or project details....',
    h1: 'Contact us',
    lead: ['If you have any questions or comments, please contact us via email or phone, or send us a message using the contact form.'],
    images: [img('35541725-31d7-444d-8590-bfd1e35ae7f8/IMG_9070.jpg', 'Construction site on a roof with a mountainous landscape in the background, snow-covered peaks and a blue sky.')],
    sections: [],
  },
];

module.exports = { SITE, SERVICES, LOCATIONS, PAGES };
