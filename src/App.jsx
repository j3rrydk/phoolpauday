import { useMemo, useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'

const categories = [
  { icon: '🪴', title: 'Indoor Plants', subtitle: 'Air-purifying greenery for homes & offices' },
  { icon: '🌿', title: 'Herbs', subtitle: 'Fresh kitchen picks with everyday use' },
  { icon: '🌼', title: 'Flowering', subtitle: 'Colourful blooms for patios and balconies' },
  { icon: '🌵', title: 'Succulents', subtitle: 'Low-maintenance favourites for modern spaces' },
  { icon: '🌳', title: 'Trees', subtitle: 'Large statement plants built to grow' },
  { icon: '🌾', title: 'Outdoor', subtitle: 'Sun-loving plants for Lahore gardens' },
]

const featuredPlants = [
  {
    name: 'Monstera Deliciosa',
    tag: 'Best Seller',
    price: 'Rs. 1,850',
    nursery: 'GreenNest Lahore',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Peace Lily',
    tag: 'Air Purifier',
    price: 'Rs. 1,200',
    nursery: 'Leaf & Bloom',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Bougainvillea',
    tag: 'Sunny Patio',
    price: 'Rs. 2,400',
    nursery: 'Lahore Garden Co.',
    image:
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Basil Basket',
    tag: 'Fresh Harvest',
    price: 'Rs. 950',
    nursery: 'HerbHub City',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
  },
]

const steps = [
  {
    title: 'Search & compare',
    description: 'Browse verified local nurseries and compare plant care, price, and delivery speed.',
  },
  {
    title: 'Order with confidence',
    description: 'Pay with COD, JazzCash, or EasyPaisa and enjoy transparent nursery pricing.',
  },
  {
    title: 'Watch it grow',
    description: 'Track your order, get care tips, and connect with plant experts whenever needed.',
  },
]

const sellerSteps = [
  {
    title: 'Register your nursery',
    description: 'List your plants, location, and delivery coverage in under 10 minutes.',
  },
  {
    title: 'Receive verified leads',
    description: 'Get matched with customers in Lahore who are actively buying nearby.',
  },
  {
    title: 'Grow your income',
    description: 'Track orders, payouts, and reorders with our simple dashboard and analytics.',
  },
]

const highlights = [
  { title: 'Verified Nurseries', text: 'Every listing is checked for location, quality, and service reliability.' },
  { title: 'Fresh Guarantee', text: 'Live plant quality checks and careful packaging before every delivery.' },
  { title: 'COD Available', text: 'Built for trust in Pakistan with cash-on-delivery and digital alternatives.' },
  { title: 'Plant Doctor', text: 'Get care advice for watering, sunlight, and repotting from local experts.' },
]

const reviews = [
  {
    name: 'Ayesha K.',
    text: 'The plant quality was fantastic and delivery was quicker than expected. The care tips were very helpful.',
    city: 'Gulberg',
  },
  {
    name: 'Hassan M.',
    text: 'I found a trusted nursery for my balcony garden in just one evening. The ordering flow was super easy.',
    city: 'Johar Town',
  },
  {
    name: 'Sana R.',
    text: 'PhoolPauday feels made for Lahore. It understands local gardening needs and pricing.',
    city: 'Model Town',
  },
]

const services = [
  { name: 'Plant Consultation', price: 'From Rs. 500', note: 'Home or video call support' },
  { name: 'Maintenance Plan', price: 'Rs. 1,500/mo', note: 'Regular watering and plant health checks' },
  { name: 'Garden Setup', price: 'Custom quote', note: 'Balcony, terrace, and indoor styling' },
]

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#fafaf5] text-[#212121] antialiased">
      <header className="sticky top-0 z-50 border-b border-[#e8e0d8] bg-[#fafaf5]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2E7D32] to-[#4CAF50] text-lg font-black text-white shadow-lg shadow-green-200">
              P
            </div>
            <div>
              <div className="text-lg font-extrabold tracking-tight">PhoolPauday</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-[#6a6a6a]">Flowers & Plants</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#3f3f3f] md:flex">
            <a href="#shop" className="transition hover:text-[#2E7D32]">Shop</a>
            <a href="#how-it-works" className="transition hover:text-[#2E7D32]">How it works</a>
            <a href="#gardeners" className="transition hover:text-[#2E7D32]">For gardeners</a>
            <a href="#services" className="transition hover:text-[#2E7D32]">Services</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-[#d9d2cb] bg-white px-3 py-2 text-xs font-semibold text-[#2f2f2f] shadow-sm sm:inline-flex">
              EN / <span className="text-[#6a6a6a]">UR</span>
            </button>
            <Link to="/auth" className="rounded-full border border-[#d9d2cb] bg-white px-4 py-2.5 text-sm font-semibold text-[#1d1d1d] shadow-sm transition hover:-translate-y-0.5">
              Login
            </Link>
            <Link to="/auth" className="rounded-full bg-[#FFC107] px-4 py-2.5 text-sm font-bold text-[#1d1d1d] shadow-lg shadow-yellow-200 transition hover:-translate-y-0.5">
              Sell with us
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(76,175,80,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,193,7,0.14),_transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-20 lg:pt-20">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dfe9dc] bg-[#f2f9f0] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#2E7D32]">
                <span>🌱</span> Lahore’s fresh plant marketplace
              </div>

              <h1 className="max-w-xl text-4xl font-black tracking-[-0.06em] text-[#171717] sm:text-5xl lg:text-7xl">
                Lahore’s freshest plants, delivered with care.
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-8 text-[#5d5d5d]">
                Discover healthy indoor plants, flowering favourites, herbs, and outdoor greenery from trusted local nurseries across Lahore.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <div className="flex w-full max-w-xl items-center gap-2 rounded-2xl border border-[#e3ddd5] bg-white p-2 shadow-lg shadow-[#e5ddd4]">
                  <input
                    aria-label="Search plants"
                    placeholder="Search plants, herbs, or flowers"
                    className="w-full border-0 bg-transparent px-3 py-2 text-sm text-[#212121] placeholder:text-[#7d7d7d] focus:outline-none"
                  />
                  <button className="rounded-xl bg-[#2E7D32] px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-green-200 transition hover:bg-[#256b2a]">
                    Search
                  </button>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-medium text-[#555]">
                <span className="rounded-full bg-[#fff7d9] px-2.5 py-1 text-[#8a6d00]">COD Available</span>
                <span className="rounded-full bg-[#edf7ee] px-2.5 py-1 text-[#2d6d33]">Fresh Guarantee</span>
                <span className="rounded-full bg-[#f1eee9] px-2.5 py-1 text-[#6d5247]">Same-day Lahore delivery</span>
              </div>

              <div className="mt-10 flex flex-wrap gap-10 text-left">
                <div>
                  <div className="text-3xl font-black tracking-[-0.05em] text-[#1f1f1f]">12k+</div>
                  <div className="text-sm text-[#666]">happy plant parents</div>
                </div>
                <div>
                  <div className="text-3xl font-black tracking-[-0.05em] text-[#1f1f1f]">80+</div>
                  <div className="text-sm text-[#666]">verified local sellers</div>
                </div>
                <div>
                  <div className="text-3xl font-black tracking-[-0.05em] text-[#1f1f1f]">4.9/5</div>
                  <div className="text-sm text-[#666]">community rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[32px] border border-[#e9e1d8] bg-white/80 p-3 shadow-[0_30px_80px_rgba(67,98,66,0.12)] backdrop-blur-sm">
                <div className="overflow-hidden rounded-[26px] bg-[#edf6ee]">
                  <img
                    src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80"
                    alt="Indoor plant collection"
                    className="h-[550px] w-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute -left-2 top-8 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-xl shadow-[#d7d7d7] backdrop-blur-lg sm:-left-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2E7D32]">This week</div>
                <div className="mt-2 text-xl font-black text-[#1d1d1d]">Monstera Bundle</div>
                <div className="text-sm text-[#5b5b5b]">From Rs. 2,400</div>
              </div>

              <div className="absolute -bottom-6 right-4 rounded-2xl border border-[#fff1b8] bg-[#fff7d6] p-4 shadow-xl shadow-[#f6e7ab] sm:right-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E7D32] text-lg text-white">✓</div>
                  <div>
                    <div className="text-sm font-bold text-[#1d1d1d]">Freshly packed</div>
                    <div className="text-xs text-[#676767]">Verified local nursery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">Browse categories</div>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-[#171717] sm:text-4xl">Find your perfect plant match.</h2>
            </div>
            <button className="hidden rounded-full border border-[#dfd8d2] bg-white px-4 py-2 text-sm font-semibold text-[#2d2d2d] sm:inline-flex">View all plants</button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {categories.map((category) => (
              <article key={category.title} className="rounded-[24px] border border-[#ece4dd] bg-white p-5 shadow-[0_18px_30px_rgba(39,33,28,0.04)] transition hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(39,33,28,0.08)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf7ee] text-2xl">{category.icon}</div>
                <h3 className="mt-5 text-lg font-bold text-[#1e1e1e]">{category.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#656565]">{category.subtitle}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="shop" className="bg-[#f4efe9] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">Featured plants</div>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-[#171717] sm:text-4xl">Fresh picks from Lahore nurseries.</h2>
              </div>
              <button className="rounded-full bg-[#2E7D32] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-green-200 transition hover:bg-[#256b2a]">Shop all</button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {featuredPlants.map((plant) => (
                <article key={plant.name} className="overflow-hidden rounded-[26px] border border-[#ece3dc] bg-white shadow-[0_18px_35px_rgba(39,33,28,0.05)]">
                  <div className="relative overflow-hidden">
                    <img src={plant.image} alt={plant.name} className="h-72 w-full object-cover transition duration-500 hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#2E7D32]">
                      {plant.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-xl font-bold text-[#1b1b1b]">{plant.name}</h3>
                      <span className="text-base font-black text-[#2E7D32]">{plant.price}</span>
                    </div>
                    <p className="mt-2 text-sm text-[#666]">{plant.nursery}</p>
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <button className="rounded-full border border-[#d9d1ca] bg-[#f7f5f3] px-3.5 py-2 text-sm font-semibold text-[#2d2d2d]">Quick view</button>
                      <button className="rounded-full bg-[#FFC107] px-4 py-2.5 text-sm font-bold text-[#1a1a1a] shadow-md shadow-yellow-200 transition hover:-translate-y-0.5">Add to cart</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">How it works</div>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-[#171717] sm:text-4xl">Built for shoppers and sellers alike.</h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[30px] border border-[#ebdfd5] bg-white p-6 shadow-[0_20px_45px_rgba(77,57,49,0.04)] sm:p-8">
              <div className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#9a6b4c]">For customers</div>
              <div className="space-y-5">
                {steps.map((step, index) => (
                  <div key={step.title} className="flex gap-4 rounded-2xl bg-[#f9f4f1] p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2E7D32] text-sm font-black text-white">0{index + 1}</div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1e1e1e]">{step.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#5d5d5d]">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="gardeners" className="rounded-[30px] border border-[#ebdfd5] bg-[#f7f0e9] p-6 shadow-[0_20px_45px_rgba(77,57,49,0.04)] sm:p-8">
              <div className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#9a6b4c]">For gardeners</div>
              <div className="space-y-5">
                {sellerSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-4 rounded-2xl bg-white/80 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFC107] text-sm font-black text-[#1d1d1d]">0{index + 1}</div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1e1e1e]">{step.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#5d5d5d]">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fcfaf7] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">Why families choose us</div>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-[#171717] sm:text-4xl">Plant buying made simple, trustworthy, and local.</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-[24px] border border-[#ece3db] bg-white p-6 shadow-[0_18px_30px_rgba(39,33,28,0.04)]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf9ee] text-xl">✓</div>
                  <h3 className="text-xl font-bold text-[#1e1e1e]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5d5d5d]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">Premium services</div>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-[#171717] sm:text-4xl">Support that keeps your garden thriving.</h2>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="rounded-[28px] border border-[#ece3dc] bg-[#fffefb] p-6 shadow-[0_18px_35px_rgba(39,33,28,0.04)]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff3bf] text-2xl">✦</div>
                <h3 className="text-xl font-bold text-[#1d1d1d]">{service.name}</h3>
                <div className="mt-3 text-2xl font-black tracking-[-0.05em] text-[#2E7D32]">{service.price}</div>
                <p className="mt-3 text-sm leading-6 text-[#666]">{service.note}</p>
                <button className="mt-6 rounded-full bg-[#2E7D32] px-4 py-2.5 text-sm font-bold text-white">Book now</button>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#f2f7f1] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">Customer love</div>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-[#171717] sm:text-4xl">Plant parents across Lahore recommend us.</h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {reviews.map((review) => (
                <article key={review.name} className="rounded-[28px] border border-[#e7e0d6] bg-white p-6 shadow-[0_18px_35px_rgba(39,33,28,0.04)]">
                  <div className="mb-5 flex items-center gap-1 text-[#FFC107]">★★★★★</div>
                  <p className="text-base leading-7 text-[#4d4d4d]">“{review.text}”</p>
                  <div className="mt-6 border-t border-[#f0e6df] pt-4">
                    <div className="font-bold text-[#1d1d1d]">{review.name}</div>
                    <div className="text-sm text-[#6a6a6a]">{review.city}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[32px] bg-[#1b2d1a] px-6 py-10 text-white shadow-[0_28px_65px_rgba(13,28,10,0.22)] sm:px-8 lg:px-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#cfe9d2]">Ready to grow?</div>
                <h2 className="mt-3 max-w-xl text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">Join the next wave of greener homes in Lahore.</h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/auth" className="rounded-full bg-[#FFC107] px-5 py-3 text-sm font-bold text-[#1d1d1d] shadow-lg shadow-yellow-500/20">
                  Browse plants
                </Link>
                <Link to="/auth" className="rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-bold text-white">
                  Register as gardener
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e8e0d8] bg-[#fffefb]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-sm text-[#5c5c5c] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2E7D32] text-sm font-black text-white">P</div>
            <span className="font-semibold text-[#1f1f1f]">PhoolPauday</span>
          </div>
          <div className="flex flex-wrap gap-5">
            <a href="#shop" className="transition hover:text-[#2E7D32]">Shop</a>
            <a href="#how-it-works" className="transition hover:text-[#2E7D32]">How it works</a>
            <a href="#services" className="transition hover:text-[#2E7D32]">Services</a>
            <a href="#" className="transition hover:text-[#2E7D32]">Contact</a>
          </div>
          <div>© 2026 PhoolPauday • Made for Lahore</div>
        </div>
      </footer>
    </div>
  )
}

function AuthPage() {
  const navigate = useNavigate()
  const [mode, setMode] = useState('login')
  const [role, setRole] = useState('customer')

  const formTitle = useMemo(
    () => (mode === 'login' ? 'Welcome back' : role === 'customer' ? 'Create your customer account' : 'Register your nursery'),
    [mode, role],
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-[#fafaf5] text-[#212121]">
      <header className="border-b border-[#ebdfd5] bg-[#fafaf5]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2E7D32] to-[#4CAF50] text-lg font-black text-white shadow-lg shadow-green-200">
              P
            </div>
            <div>
              <div className="text-lg font-extrabold tracking-tight">PhoolPauday</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-[#6a6a6a]">Flowers & Plants</div>
            </div>
          </Link>

          <Link to="/" className="rounded-full border border-[#d9d2cb] bg-white px-4 py-2 text-sm font-semibold text-[#1d1d1d] shadow-sm">
            Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <aside className="rounded-[30px] bg-[#1f3522] p-7 text-white shadow-[0_28px_60px_rgba(29,53,32,0.2)] sm:p-8">
          <div className="mb-6 inline-flex rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#d7f6db]">
            Lahore marketplace
          </div>

          <h1 className="text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
            Grow your green corner with confidence.
          </h1>

          <p className="mt-4 max-w-md text-base leading-7 text-[#d5e7d8]">
            Connect with verified local nurseries, track plant delivery in Lahore, and build a healthier home with fresh greenery.
          </p>

          <div className="mt-8 space-y-4">
            {[
              'Verified sellers across Lahore',
              'COD, JazzCash, and EasyPaisa support',
              'Plant care guidance for beginners',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFC107] text-sm font-black text-[#1a1a1a]">
                  ✓
                </div>
                <span className="text-sm text-[#ebf8ec]">{item}</span>
              </div>
            ))}
          </div>
        </aside>

        <section className="rounded-[32px] border border-[#ebdfd5] bg-white p-6 shadow-[0_22px_45px_rgba(43,38,33,0.06)] sm:p-8">
          <div className="mb-6 flex rounded-full bg-[#f3efe9] p-1.5">
            <button
              type="button"
              onClick={() => setMode('login')}
              className={`flex-1 rounded-full px-4 py-2.5 text-sm font-bold transition ${
                mode === 'login' ? 'bg-[#2E7D32] text-white shadow-md' : 'text-[#4a4a4a]'
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setMode('signup')}
              className={`flex-1 rounded-full px-4 py-2.5 text-sm font-bold transition ${
                mode === 'signup' ? 'bg-[#2E7D32] text-white shadow-md' : 'text-[#4a4a4a]'
              }`}
            >
              Sign up
            </button>
          </div>

          <div className="mb-6 flex gap-2 rounded-2xl border border-[#e9e1d8] bg-[#faf7f4] p-1.5">
            <button
              type="button"
              onClick={() => setRole('customer')}
              className={`flex-1 rounded-xl px-3 py-2 text-sm font-bold transition ${
                role === 'customer' ? 'bg-white text-[#1d1d1d] shadow-sm' : 'text-[#5c5c5c]'
              }`}
            >
              Customer
            </button>
            <button
              type="button"
              onClick={() => setRole('gardener')}
              className={`flex-1 rounded-xl px-3 py-2 text-sm font-bold transition ${
                role === 'gardener' ? 'bg-white text-[#1d1d1d] shadow-sm' : 'text-[#5c5c5c]'
              }`}
            >
              Gardener
            </button>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-black tracking-[-0.04em] text-[#171717]">{formTitle}</h2>
            <p className="mt-2 text-sm text-[#666]">
              {mode === 'login'
                ? 'Access your saved plants, orders, and nursery dashboard.'
                : 'Join Lahore’s plant community and start selling or shopping in minutes.'}
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {mode === 'signup' && (
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-[#3d3d3d]">
                  Full name
                  <input
                    required
                    defaultValue={role === 'gardener' ? 'Ali Hassan' : 'Ayesha Khan'}
                    className="mt-1 w-full rounded-2xl border border-[#e5dcd6] bg-[#fbfaf9] px-3 py-2.5 outline-none transition focus:border-[#2E7D32]"
                    placeholder="Enter your name"
                  />
                </label>

                <label className="block text-sm font-medium text-[#3d3d3d]">
                  {role === 'gardener' ? 'Business name' : 'City'}
                  <input
                    required
                    defaultValue={role === 'gardener' ? 'GreenNest Nursery' : 'Lahore'}
                    className="mt-1 w-full rounded-2xl border border-[#e5dcd6] bg-[#fbfaf9] px-3 py-2.5 outline-none transition focus:border-[#2E7D32]"
                    placeholder={role === 'gardener' ? 'Business name' : 'Your city'}
                  />
                </label>
              </div>
            )}

            <label className="block text-sm font-medium text-[#3d3d3d]">
              Email address
              <input
                required
                type="email"
                defaultValue={role === 'gardener' ? 'nursery@greenhouse.pk' : 'hello@example.com'}
                className="mt-1 w-full rounded-2xl border border-[#e5dcd6] bg-[#fbfaf9] px-3 py-2.5 outline-none transition focus:border-[#2E7D32]"
                placeholder="you@example.com"
              />
            </label>

            <label className="block text-sm font-medium text-[#3d3d3d]">
              Password
              <input
                required
                type="password"
                defaultValue="password123"
                className="mt-1 w-full rounded-2xl border border-[#e5dcd6] bg-[#fbfaf9] px-3 py-2.5 outline-none transition focus:border-[#2E7D32]"
                placeholder="••••••••"
              />
            </label>

            {mode === 'signup' && role === 'gardener' && (
              <label className="block text-sm font-medium text-[#3d3d3d]">
                Nursery or area coverage
                <input
                  defaultValue="Gulberg, DHA, Johar Town"
                  className="mt-1 w-full rounded-2xl border border-[#e5dcd6] bg-[#fbfaf9] px-3 py-2.5 outline-none transition focus:border-[#2E7D32]"
                  placeholder="Areas you serve"
                />
              </label>
            )}

            <div className="flex items-center justify-between gap-2 text-sm text-[#5d5d5d]">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 accent-[#2E7D32]" defaultChecked />
                <span>Remember me</span>
              </label>
              <button type="button" className="font-semibold text-[#2E7D32]">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-[#2E7D32] px-4 py-3 text-base font-bold text-white shadow-lg shadow-green-200 transition hover:bg-[#256b2a]"
            >
              {mode === 'login' ? 'Login to dashboard' : 'Create account'}
            </button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#e7ddd4]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#7a7a7a]">or continue with</span>
            <div className="h-px flex-1 bg-[#e7ddd4]" />
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {['Google', 'Facebook', 'WhatsApp'].map((provider) => (
              <button
                key={provider}
                type="button"
                className="rounded-2xl border border-[#e5dcd6] bg-[#fbfaf9] px-3 py-2.5 text-sm font-semibold text-[#272727]"
              >
                {provider}
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

function DashboardPage() {
  const stats = [
    { label: 'Active orders', value: '24', note: '+5 this week' },
    { label: 'Earnings', value: 'Rs. 48,650', note: 'This month' },
    { label: 'Conversion', value: '12.8%', note: 'Across Lahore' },
    { label: 'Stock health', value: '92%', note: 'Good condition' },
  ]

  const recentOrders = [
    { id: '#PP-4051', item: 'Monstera Deliciosa', status: 'Confirmed', amount: 'Rs. 1,850' },
    { id: '#PP-4056', item: 'Basil Basket', status: 'Packed', amount: 'Rs. 950' },
    { id: '#PP-4060', item: 'Bougainvillea', status: 'Out for delivery', amount: 'Rs. 2,400' },
  ]

  return (
    <div className="min-h-screen bg-[#fafaf5] text-[#212121]">
      <header className="border-b border-[#ebdfd5] bg-[#fffefb]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2E7D32] to-[#4CAF50] text-base font-black text-white">
              P
            </div>
            <div>
              <div className="text-base font-extrabold">PhoolPauday</div>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden rounded-full bg-[#edf7ee] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#2E7D32] sm:inline-flex">
              Seller dashboard
            </span>
            <Link to="/" className="rounded-full border border-[#d9d2cb] bg-white px-4 py-2 text-sm font-semibold text-[#1d1d1d]">
              Sign out
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#2E7D32]">Dashboard</div>
            <h1 className="mt-2 text-3xl font-black tracking-[-0.05em] text-[#171717]">Welcome back, GreenNest Nursery</h1>
          </div>
          <button className="rounded-full bg-[#FFC107] px-5 py-3 text-sm font-bold text-[#1d1d1d] shadow-lg shadow-yellow-200">
            + Add new plant
          </button>
        </div>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[26px] border border-[#e8dfd7] bg-white p-5 shadow-[0_18px_35px_rgba(39,33,28,0.04)]">
              <div className="text-sm text-[#666]">{stat.label}</div>
              <div className="mt-2 text-3xl font-black tracking-[-0.05em] text-[#1d1d1d]">{stat.value}</div>
              <div className="mt-2 text-xs font-semibold text-[#2E7D32]">{stat.note}</div>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[30px] border border-[#e8dfd7] bg-white p-6 shadow-[0_18px_35px_rgba(39,33,28,0.04)]">
            <div className="mb-5 flex items-center justify-between gap-3">
              <h2 className="text-xl font-black tracking-[-0.04em] text-[#171717]">Recent orders</h2>
              <button className="text-sm font-semibold text-[#2E7D32]">View all</button>
            </div>

            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between gap-3 rounded-2xl bg-[#f7f4f1] p-4">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.12em] text-[#666]">{order.id}</div>
                    <div className="mt-1 font-bold text-[#1d1d1d]">{order.item}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-[#2E7D32]">{order.amount}</div>
                    <div className="mt-1 text-xs font-semibold text-[#6a6a6a]">{order.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-[#e8dfd7] bg-[#f7f0e9] p-6 shadow-[0_18px_35px_rgba(39,33,28,0.04)]">
            <h2 className="text-xl font-black tracking-[-0.04em] text-[#171717]">Payout summary</h2>
            <div className="mt-6 rounded-[24px] bg-white p-5">
              <div className="text-sm text-[#666]">Pending payout</div>
              <div className="mt-2 text-3xl font-black tracking-[-0.05em] text-[#1d1d1d]">Rs. 12,350</div>
              <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-[#eff0ee]">
                <div className="h-full w-[72%] rounded-full bg-[#2E7D32]" />
              </div>
              <div className="mt-4 text-xs font-semibold text-[#5a5a5a]">72% of monthly target reached</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

const catalog = [
  {
    id: 'monstera-deliciosa',
    name: 'Monstera Deliciosa',
    price: 1850,
    oldPrice: 2200,
    nursery: 'GreenNest Lahore',
    location: 'Gulberg',
    rating: 4.9,
    category: 'Indoor Plants',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80',
    ],
    description:
      'Large split-leaf foliage for bright indoor spaces, perfect for living rooms and offices.',
    care: {
      sunlight: 'Bright indirect light',
      water: 'Every 5-7 days',
      soil: 'Well-draining potting mix',
      difficulty: 'Easy',
    },
    badge: 'Best Seller',
  },
  {
    id: 'peace-lily',
    name: 'Peace Lily',
    price: 1200,
    oldPrice: 1500,
    nursery: 'Leaf & Bloom',
    location: 'Johar Town',
    rating: 4.8,
    category: 'Indoor Plants',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80',
    ],
    description: 'Elegant foliage and white blooms that bring calm energy to bedrooms and workspaces.',
    care: {
      sunlight: 'Medium indirect light',
      water: 'Every 4-6 days',
      soil: 'Rich moisture-retaining mix',
      difficulty: 'Easy',
    },
    badge: 'Air Purifier',
  },
  {
    id: 'bougainvillea',
    name: 'Bougainvillea',
    price: 2400,
    oldPrice: 2800,
    nursery: 'Lahore Garden Co.',
    location: 'DHA',
    rating: 4.9,
    category: 'Outdoor',
    image:
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
    ],
    description: 'A vibrant climber bursting with colour, ideal for balconies, boundary walls, and patios.',
    care: {
      sunlight: 'Full sun',
      water: 'Twice a week',
      soil: 'Loamy soil with drainage',
      difficulty: 'Moderate',
    },
    badge: 'Sunny Patio',
  },
  {
    id: 'basil-basket',
    name: 'Basil Basket',
    price: 950,
    oldPrice: 1200,
    nursery: 'HerbHub City',
    location: 'Model Town',
    rating: 4.7,
    category: 'Herbs',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
    ],
    description: 'Fresh aromatic basil for kitchens, rooftops, and home herb collections.',
    care: {
      sunlight: 'Partial to full sun',
      water: 'Every 2-3 days',
      soil: 'Nutrient-rich potting soil',
      difficulty: 'Easy',
    },
    badge: 'Fresh Harvest',
  },
  {
    id: 'snake-plant',
    name: 'Snake Plant',
    price: 1100,
    oldPrice: 1400,
    nursery: 'Urban Greens',
    location: 'Allama Iqbal Town',
    rating: 4.8,
    category: 'Indoor Plants',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
    ],
    description: 'Hardy, sculptural foliage for beginners who want low-maintenance greenery.',
    care: {
      sunlight: 'Low to bright indirect light',
      water: 'Every 10-14 days',
      soil: 'Fast-draining mix',
      difficulty: 'Very Easy',
    },
    badge: 'Low Maintenance',
  },
  {
    id: 'rose-bush',
    name: 'Rose Bush',
    price: 1650,
    oldPrice: 2000,
    nursery: 'Bloom & Root',
    location: 'Wapda Town',
    rating: 4.9,
    category: 'Flowering',
    image:
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80',
    ],
    description: 'Fragrant flowering plant perfect for terraces and garden corners in Lahore.',
    care: {
      sunlight: 'Full sun',
      water: 'Every 3-4 days',
      soil: 'Organic-rich soil',
      difficulty: 'Moderate',
    },
    badge: 'Fragrant',
  },
]

function ShopPage() {
  const [category, setCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')

  const categories = ['All', ...new Set(catalog.map((plant) => plant.category))]

  const visiblePlants = [...catalog]
    .filter((plant) => category === 'All' || plant.category === category)
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return b.rating - a.rating
    })

  return (
    <div className="min-h-screen bg-[#fafaf5] text-[#212121]">
      <header className="border-b border-[#e9dfd7] bg-[#fffefb]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2E7D32] to-[#4CAF50] text-base font-black text-white">
              P
            </div>
            <div>
              <div className="text-base font-extrabold">PhoolPauday</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-[#4d4d4d] md:flex">
            <Link to="/shop">Shop</Link>
            <Link to="/auth">Login</Link>
            <Link to="/dashboard">Dashboard</Link>
          </nav>

          <Link to="/checkout" className="rounded-full bg-[#FFC107] px-4 py-2 text-sm font-bold text-[#1d1d1d] shadow-lg shadow-yellow-200">
            Cart (2)
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 rounded-[28px] border border-[#e8dfd7] bg-white p-5 shadow-[0_18px_35px_rgba(39,33,28,0.04)] lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">Plant marketplace</div>
            <h1 className="mt-2 text-3xl font-black tracking-[-0.05em] text-[#171717]">Fresh finds for Lahore homes</h1>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="rounded-full border border-[#e8dfd7] bg-[#faf7f4] px-3 py-2 text-sm text-[#565656]">
              24 products available
            </div>
            <div className="rounded-full border border-[#e8dfd7] bg-[#faf7f4] px-3 py-2 text-sm text-[#565656]">
              Lahore delivery • 6 areas
            </div>
          </div>
        </div>

        <div className="mb-8 grid gap-4 lg:grid-cols-[220px_1fr]">
          <aside className="rounded-[28px] border border-[#e9e0d7] bg-white p-5 shadow-[0_18px_35px_rgba(39,33,28,0.04)]">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#2E7D32]">Filters</div>
            <div className="space-y-3">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`w-full rounded-2xl border px-3 py-2.5 text-left text-sm font-semibold transition ${
                    category === item
                      ? 'border-[#2E7D32] bg-[#edf7ee] text-[#1d1d1d]'
                      : 'border-[#ece3dc] bg-[#faf7f4] text-[#5c5c5c]'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </aside>

          <section>
            <div className="mb-5 flex flex-col justify-between gap-3 rounded-[26px] border border-[#e9e0d7] bg-white p-4 shadow-[0_18px_35px_rgba(39,33,28,0.04)] sm:flex-row sm:items-center">
              <div className="text-sm text-[#5a5a5a]">Showing {visiblePlants.length} plants</div>
              <label className="flex items-center gap-3 text-sm text-[#4c4c4c]">
                Sort by
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="rounded-full border border-[#e5dcd6] bg-[#faf7f4] px-3 py-2 outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {visiblePlants.map((plant) => (
                <article key={plant.id} className="overflow-hidden rounded-[28px] border border-[#ece3dc] bg-white shadow-[0_18px_35px_rgba(39,33,28,0.04)]">
                  <div className="relative overflow-hidden">
                    <img src={plant.image} alt={plant.name} className="h-72 w-full object-cover transition duration-500 hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#2E7D32]">
                      {plant.badge}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-xl font-bold text-[#1d1d1d]">{plant.name}</h3>
                      <span className="text-lg font-black text-[#2E7D32]">Rs. {plant.price}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-sm text-[#666]">
                      <span>⭐ {plant.rating}</span>
                      <span>•</span>
                      <span>{plant.location}</span>
                    </div>
                    <p className="mt-2 text-sm text-[#5c5c5c]">{plant.nursery}</p>
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <Link to={`/product/${plant.id}`} className="rounded-full border border-[#d9d1ca] bg-[#f7f5f3] px-3.5 py-2 text-sm font-semibold text-[#2d2d2d]">
                        Quick view
                      </Link>
                      <Link to="/checkout" className="rounded-full bg-[#FFC107] px-4 py-2.5 text-sm font-bold text-[#1a1a1a] shadow-md shadow-yellow-200">
                        Add to cart
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

function ProductDetailPage() {
  const { id } = useParams()
  const product = catalog.find((item) => item.id === id)

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fafaf5] text-[#212121]">
        <div className="rounded-[28px] border border-[#e8dfd7] bg-white p-8 text-center shadow-[0_18px_35px_rgba(39,33,28,0.04)]">
          <h1 className="text-2xl font-black">Plant not found</h1>
          <Link to="/shop" className="mt-4 inline-block rounded-full bg-[#2E7D32] px-5 py-2.5 text-sm font-bold text-white">
            Back to shop
          </Link>
        </div>
      </div>
    )
  }

  const similar = catalog.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-[#fafaf5] text-[#212121]">
      <header className="border-b border-[#e9dfd7] bg-[#fffefb]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2E7D32] to-[#4CAF50] text-base font-black text-white">
              P
            </div>
            <div>
              <div className="text-base font-extrabold">PhoolPauday</div>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link to="/shop" className="rounded-full border border-[#d9d2cb] bg-white px-4 py-2 text-sm font-semibold text-[#1d1d1d]">
              Back to shop
            </Link>
            <Link to="/checkout" className="rounded-full bg-[#FFC107] px-4 py-2 text-sm font-bold text-[#1d1d1d] shadow-md shadow-yellow-200">
              Cart (2)
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-[28px] border border-[#e8dfd7] bg-white p-3 shadow-[0_18px_35px_rgba(39,33,28,0.04)]">
              <img src={product.gallery[0]} alt={product.name} className="h-[440px] w-full rounded-[22px] object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {product.gallery.map((image, index) => (
                <div key={image} className="overflow-hidden rounded-[20px] border border-[#ece3dc] bg-white p-2">
                  <img src={image} alt={`${product.name} view ${index + 1}`} className="h-28 w-full rounded-[14px] object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-[#e8dfd7] bg-white p-6 shadow-[0_18px_35px_rgba(39,33,28,0.04)] sm:p-8">
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="rounded-full bg-[#edf7ee] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2E7D32]">
                {product.badge}
              </span>
              <span className="text-sm font-semibold text-[#5c5c5c]">⭐ {product.rating} rating</span>
            </div>

            <h1 className="text-4xl font-black tracking-[-0.05em] text-[#171717]">{product.name}</h1>
            <p className="mt-2 text-sm text-[#666]">{product.nursery} • {product.location}</p>

            <div className="mt-5 flex items-end gap-3">
              <span className="text-3xl font-black text-[#2E7D32]">Rs. {product.price}</span>
              <span className="text-lg text-[#8b8b8b] line-through">Rs. {product.oldPrice}</span>
            </div>

            <p className="mt-5 text-base leading-7 text-[#545454]">{product.description}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Link to="/checkout" className="rounded-full bg-[#2E7D32] px-5 py-3 text-center text-sm font-bold text-white shadow-lg shadow-green-200">
                Add to cart
              </Link>
              <Link to="/checkout" className="rounded-full bg-[#FFC107] px-5 py-3 text-center text-sm font-bold text-[#1d1d1d] shadow-lg shadow-yellow-200">
                Buy now
              </Link>
            </div>

            <div className="mt-6 rounded-[24px] bg-[#f9f4f1] p-4">
              <div className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#6d5247]">Care guide</div>
              <div className="grid gap-3 sm:grid-cols-2">
                {Object.entries(product.care).map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-white p-3">
                    <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6a6a6a]">{label}</div>
                    <div className="mt-1 text-sm font-semibold text-[#1f1f1f]">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="mt-12">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h2 className="text-2xl font-black tracking-[-0.04em] text-[#171717]">Similar plants</h2>
            <Link to="/shop" className="text-sm font-semibold text-[#2E7D32]">See all</Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {similar.map((plant) => (
              <article key={plant.id} className="overflow-hidden rounded-[28px] border border-[#e8dfd7] bg-white shadow-[0_18px_35px_rgba(39,33,28,0.04)]">
                <img src={plant.image} alt={plant.name} className="h-56 w-full object-cover" />
                <div className="p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-bold text-[#1f1f1f]">{plant.name}</h3>
                    <span className="text-sm font-black text-[#2E7D32]">Rs. {plant.price}</span>
                  </div>
                  <div className="mt-2 text-sm text-[#666]">{plant.nursery}</div>
                  <Link to={`/product/${plant.id}`} className="mt-4 inline-block rounded-full bg-[#2E7D32] px-4 py-2 text-sm font-bold text-white">
                    View plant
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#fafaf5] text-[#212121]">
      <header className="border-b border-[#e9dfd7] bg-[#fffefb]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/shop" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2E7D32] to-[#4CAF50] text-base font-black text-white">
              P
            </div>
            <div>
              <div className="text-base font-extrabold">PhoolPauday</div>
            </div>
          </Link>
          <Link to="/" className="rounded-full border border-[#d9d2cb] bg-white px-4 py-2 text-sm font-semibold text-[#1d1d1d]">
            Continue shopping
          </Link>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <section className="rounded-[30px] border border-[#e8dfd7] bg-white p-6 shadow-[0_18px_35px_rgba(39,33,28,0.04)] sm:p-8">
          <div className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#2E7D32]">Checkout</div>
          <h1 className="text-3xl font-black tracking-[-0.05em] text-[#171717]">Delivery details</h1>

          <div className="mt-6 space-y-5">
            <label className="block text-sm font-medium text-[#3d3d3d]">
              Full name
              <input defaultValue="Ayesha Khan" className="mt-1 w-full rounded-2xl border border-[#e5dcd6] bg-[#fbfaf9] px-3 py-2.5 outline-none" />
            </label>

            <label className="block text-sm font-medium text-[#3d3d3d]">
              Mobile number
              <input defaultValue="0300-1234567" className="mt-1 w-full rounded-2xl border border-[#e5dcd6] bg-[#fbfaf9] px-3 py-2.5 outline-none" />
            </label>

            <label className="block text-sm font-medium text-[#3d3d3d]">
              Lahore area
              <select defaultValue="Gulberg" className="mt-1 w-full rounded-2xl border border-[#e5dcd6] bg-[#fbfaf9] px-3 py-2.5 outline-none">
                <option>Gulberg</option>
                <option>Johar Town</option>
                <option>DHA</option>
                <option>Model Town</option>
                <option>Allama Iqbal Town</option>
              </select>
            </label>

            <label className="block text-sm font-medium text-[#3d3d3d]">
              Delivery address
              <textarea defaultValue="House 24, Gulberg III, Lahore" rows="4" className="mt-1 w-full rounded-2xl border border-[#e5dcd6] bg-[#fbfaf9] px-3 py-2.5 outline-none" />
            </label>

            <div className="grid gap-3 sm:grid-cols-2">
              <label className="block text-sm font-medium text-[#3d3d3d]">
                Delivery slot
                <select defaultValue="Morning" className="mt-1 w-full rounded-2xl border border-[#e5dcd6] bg-[#fbfaf9] px-3 py-2.5 outline-none">
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </label>

              <label className="block text-sm font-medium text-[#3d3d3d]">
                Payment method
                <select defaultValue="Cash on Delivery" className="mt-1 w-full rounded-2xl border border-[#e5dcd6] bg-[#fbfaf9] px-3 py-2.5 outline-none">
                  <option>Cash on Delivery</option>
                  <option>JazzCash</option>
                  <option>EasyPaisa</option>
                </select>
              </label>
            </div>
          </div>
        </section>

        <aside className="rounded-[30px] border border-[#e8dfd7] bg-[#f7f0e9] p-6 shadow-[0_18px_35px_rgba(39,33,28,0.04)] sm:p-8">
          <h2 className="text-xl font-black tracking-[-0.04em] text-[#171717]">Order summary</h2>

          <div className="mt-6 space-y-4">
            {[
              { name: 'Monstera Deliciosa', price: 'Rs. 1,850' },
              { name: 'Peace Lily', price: 'Rs. 1,200' },
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between gap-4 rounded-2xl bg-white p-3">
                <div className="font-semibold text-[#1d1d1d]">{item.name}</div>
                <div className="text-sm font-bold text-[#2E7D32]">{item.price}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3 text-sm text-[#555]">
            <div className="flex items-center justify-between"><span>Subtotal</span><span>Rs. 3,050</span></div>
            <div className="flex items-center justify-between"><span>Delivery</span><span>Rs. 150</span></div>
            <div className="flex items-center justify-between"><span>Platform fee</span><span>Rs. 330</span></div>
            <div className="flex items-center justify-between border-t border-[#e8dfd7] pt-3 text-base font-black text-[#1d1d1d]"><span>Total</span><span>Rs. 3,530</span></div>
          </div>

          <Link to="/dashboard" className="mt-6 block rounded-full bg-[#2E7D32] px-5 py-3 text-center text-sm font-bold text-white shadow-lg shadow-green-200">
            Place order
          </Link>
        </aside>
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
