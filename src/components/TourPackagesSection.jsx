import Link from 'next/link';
import { 
  FiClock, 
  FiMapPin, 
  FiStar, 
  FiSearch, 
  FiChevronLeft, 
  FiChevronRight, 
  FiX, 
  FiPhone, 
  FiMail, 
  FiEye 
} from 'react-icons/fi';
import styles from './TourPackagesSection.module.css';
import EnquiryTriggerBtn from './EnquiryTriggerBtn';
import AnimatedButton from './AnimatedButton';

const packagesData = [
  {
    id: 1,
    title: 'Puri Gangasagar Tour Packages',
    description: 'Planning a trip to Jagannath Puri and Gangasagar Kolkata the most important religious tourist destinations with luxury accommodation. Book Puri Gangasagar tour with temple visits and holy dip.',
    duration: '05 Nights 06 Days',
    location: 'Kolkata',
    reviewsCount: 150,
    price: '₹ 14,500',
    rating: '4.8',
    category: 'Devotional',
    image: 'https://picsum.photos/600/400?random=101',
    tags: ['Puri Jagannath Tour', 'Gangasagar Holy Dip'],
    slug: 'puri-gangasagar-tour-packages'
  },
  {
    id: 2,
    title: 'Golden Triangle Tour of Odisha',
    description: 'Explore the three most picturesque and celebrated cities of Odisha: Bhubaneswar, Puri, and Konark. Witness historical temples, pristine beaches, and architectural wonders.',
    duration: '02 Nights 03 Days',
    location: 'Puri - Konark - Bhubaneswar',
    reviewsCount: 120,
    price: '₹ 4,999',
    rating: '4.8',
    category: 'Heritage',
    image: 'https://picsum.photos/600/400?random=102',
    tags: ['Golden Triangle', 'Jagannath Temple', 'Sun Temple'],
    slug: 'golden-triangle-tour-of-odisha'
  },
  {
    id: 3,
    title: 'Odisha Adventure Tour Packages',
    description: 'An ultimate thriller package through wildlife sanctuaries, waterfalls, and scenic gorges of Similipal and Satkosia. Perfect for adventure and nature lovers.',
    duration: '08 Nights 10 Days',
    location: 'Similipal - Satkosia',
    reviewsCount: 95,
    price: '₹ 14,499',
    rating: '4.9',
    category: 'Adventure',
    image: 'https://picsum.photos/600/400?random=103',
    tags: ['Wildlife Safari', 'Jungle Camping', 'Trekking'],
    slug: 'odisha-adventure-tour-packages'
  },
  {
    id: 4,
    title: 'Authentic Tribal Tour Packages',
    description: 'A unique opportunity to connect with local tribal communities and experience their heritage, weekly markets, and traditional art forms in Koraput & Rayagada.',
    duration: '05 Nights 06 Days',
    location: 'Koraput & Rayagada',
    reviewsCount: 80,
    price: '₹ 7,999',
    rating: '4.8',
    category: 'Cultural',
    image: 'https://picsum.photos/600/400?random=104',
    tags: ['Tribal Villages', 'Weekly Haat', 'Heritage Tour'],
    slug: 'authentic-tribal-tour-packages'
  },
  {
    id: 5,
    title: 'Romantic Odisha Honeymoon Tour',
    description: 'Celebrate love along the pristine beaches of Gopalpur and scenic valleys of Daringbadi, often called the Kashmir of Odisha. Enjoy cozy luxury cottages and romantic candle-light dinners.',
    duration: '04 Nights 05 Days',
    location: 'Gopalpur - Daringbadi',
    reviewsCount: 110,
    price: '₹ 9,999',
    rating: '5.0',
    category: 'Honeymoon',
    image: 'https://picsum.photos/600/400?random=105',
    tags: ['Beach Sunset', 'Hill Station', 'Luxury Stay'],
    slug: 'romantic-odisha-honeymoon-tour'
  },
  {
    id: 6,
    title: 'Chilika Lake & Island Exploration',
    description: 'Experience Asia\'s largest brackish water lagoon, spot Irrawaddy dolphins, and view thousands of migratory birds at Mangalajodi bird sanctuary.',
    duration: '02 Nights 03 Days',
    location: 'Chilika - Mangalajodi',
    reviewsCount: 75,
    price: '₹ 5,499',
    rating: '4.8',
    category: 'Nature',
    image: 'https://picsum.photos/600/400?random=106',
    tags: ['Dolphin Spotting', 'Bird Watching', 'Boating'],
    slug: 'chilika-lake-island-exploration'
  },
  {
    id: 7,
    title: 'Heritage & Crafts Tour of Raghurajpur',
    description: 'Discover traditional Patachitra painters, wood crafts, and Gotipua/Odissi dance recitals at the Raghurajpur heritage crafts village near Puri.',
    duration: '01 Night 02 Days',
    location: 'Raghurajpur Heritage Village',
    reviewsCount: 60,
    price: '₹ 3,999',
    rating: '4.9',
    category: 'Cultural',
    image: 'https://picsum.photos/600/400?random=107',
    tags: ['Heritage Art', 'Dance Workshop', 'Craft Shopping'],
    slug: 'heritage-crafts-tour-raghurajpur'
  },
  {
    id: 8,
    title: 'Satkosia Gorge Eco-Camping Tour',
    description: 'Camp in luxury tents next to the Mahanadi river gorge, enjoy eco-tours, boat cruises, and campfire nights in Satkosia Tiger Reserve.',
    duration: '03 Nights 04 Days',
    location: 'Satkosia Gorge Reserve',
    reviewsCount: 45,
    price: '₹ 12,999',
    rating: '4.9',
    category: 'Adventure',
    image: 'https://picsum.photos/600/400?random=108',
    tags: ['River Cruise', 'Eco Tents', 'Wildlife Reserve'],
    slug: 'satkosia-gorge-eco-camping-tour'
  },
  {
    id: 9,
    title: 'Puri Lord Jagannath Darshan Special',
    description: 'A special devotional tour designed for seniors and families seeking divine blessings, with VIP darshan arrangements, mahaprasad seba, and pandas guidance.',
    duration: '03 Nights 04 Days',
    location: 'Puri Jagannath Temple',
    reviewsCount: 210,
    price: '₹ 6,999',
    rating: '4.7',
    category: 'Devotional',
    image: 'https://picsum.photos/600/400?random=109',
    tags: ['VIP Darshan', 'Mahaprasad Seba', 'Temple Tour'],
    slug: 'puri-lord-jagannath-darshan-special'
  },
  {
    id: 10,
    title: 'Daringbadi Eco Retreat Packages',
    description: 'Escape the heat and retreat to Daringbadi\'s coffee gardens, pine forests, and silent valleys. Experience unique tribal lifestyle and rich scenic beauty.',
    duration: '03 Nights 04 Days',
    location: 'Daringbadi Hill Station',
    reviewsCount: 85,
    price: '₹ 8,499',
    rating: '4.7',
    category: 'Nature',
    image: 'https://picsum.photos/600/400?random=110',
    tags: ['Coffee Gardens', 'Pine Forests', 'Waterfalls'],
    slug: 'daringbadi-eco-retreat-packages'
  }
];

const categories = ['All', 'Devotional', 'Adventure', 'Cultural', 'Honeymoon', 'Nature', 'Heritage'];
const destinations = ['All', 'Puri', 'Kolkata', 'Bhubaneswar', 'Satkosia', 'Daringbadi', 'Chilika'];

export default async function TourPackagesSection({ 
  searchParams, 
  routeParams,
  pageType = 'packages', // 'packages' | 'destination' | 'category'
  basePath = '/packages',
  limit = null,
  showSidebar = true,
  showPagination = true,
  itemsPerPage = null,
  layout = 'list' // 'list' | 'grid'
}) {
  // Resolve search and route parameters
  const resolvedParams = searchParams && typeof searchParams.then === 'function' 
    ? await searchParams 
    : (searchParams || {});

  const resolvedRouteParams = routeParams && typeof routeParams.then === 'function' 
    ? await routeParams 
    : (routeParams || {});

  const currentSlug = resolvedRouteParams.slug || '';

  // Determine active category and location filters depending on pageType
  let activeCategory = '';
  let activeLocation = '';

  if (pageType === 'category') {
    activeCategory = currentSlug;
    activeLocation = resolvedParams.location || '';
  } else if (pageType === 'destination') {
    activeLocation = currentSlug;
    activeCategory = resolvedParams.category || resolvedParams.filter || '';
  } else {
    activeCategory = resolvedParams.category || resolvedParams.filter || '';
    activeLocation = resolvedParams.location || '';
  }

  const searchQuery = resolvedParams.query || resolvedParams.search || '';

  // Calculate Dynamic Counts
  const getCategoryCount = (cat) => {
    if (cat === 'All' || !cat) return packagesData.length;
    return packagesData.filter(pkg => pkg.category.toLowerCase() === cat.toLowerCase()).length;
  };

  const getDestinationCount = (loc) => {
    if (loc === 'All' || !loc) return packagesData.length;
    return packagesData.filter(pkg => pkg.location.toLowerCase().includes(loc.toLowerCase())).length;
  };

  // Perform Server-Side Filtering
  let filteredPackages = [...packagesData];

  if (activeCategory && activeCategory.toLowerCase() !== 'all') {
    filteredPackages = filteredPackages.filter(
      pkg => pkg.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }

  if (activeLocation && activeLocation.toLowerCase() !== 'all') {
    filteredPackages = filteredPackages.filter(
      pkg => pkg.location.toLowerCase().includes(activeLocation.toLowerCase())
    );
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filteredPackages = filteredPackages.filter(
      pkg => pkg.title.toLowerCase().includes(q) || 
             pkg.description.toLowerCase().includes(q) ||
             pkg.location.toLowerCase().includes(q)
    );
  }

  // Perform Server-Side Pagination
  const defaultItemsPerPage = layout === 'grid' ? 8 : 5;
  const actualItemsPerPage = limit 
    ? Number(limit) 
    : (itemsPerPage ? Number(itemsPerPage) : defaultItemsPerPage);
  const totalPages = Math.ceil(filteredPackages.length / actualItemsPerPage);
  const currentPage = Math.min(Math.max(Number(resolvedParams.page || 1), 1), totalPages || 1);
  const startIndex = (currentPage - 1) * actualItemsPerPage;
  const paginatedPackages = limit 
    ? filteredPackages.slice(0, actualItemsPerPage)
    : filteredPackages.slice(startIndex, startIndex + actualItemsPerPage);

  // Check if any query parameter filter is applied
  let hasActiveFilters = false;
  if (pageType === 'category') {
    hasActiveFilters = !!(resolvedParams.location || resolvedParams.query || resolvedParams.search);
  } else if (pageType === 'destination') {
    hasActiveFilters = !!(resolvedParams.category || resolvedParams.filter || resolvedParams.query || resolvedParams.search);
  } else {
    hasActiveFilters = !!(resolvedParams.category || resolvedParams.filter || resolvedParams.location || resolvedParams.query || resolvedParams.search);
  }

  // Search form submit action url
  const searchActionUrl = pageType === 'destination' 
    ? `/destination/${currentSlug}` 
    : (pageType === 'category' ? `/cayegory/${currentSlug}` : '/packages');

  // Sidebar link URL builders
  const getCategoryFilterUrl = (cat) => {
    if (pageType === 'category') {
      // Clicking category in category page navigates to new category route
      const targetPath = cat === 'All' ? '/packages' : `/cayegory/${cat.toLowerCase()}`;
      const current = new URLSearchParams();
      if (activeLocation) current.set('location', activeLocation);
      if (searchQuery) current.set('query', searchQuery);
      const qs = current.toString();
      return `${targetPath}${qs ? '?' + qs : ''}`;
    } else if (pageType === 'destination') {
      // Clicking category in destination page filters via query parameter
      const current = new URLSearchParams();
      if (cat !== 'All') current.set('category', cat);
      if (searchQuery) current.set('query', searchQuery);
      const qs = current.toString();
      return `/destination/${currentSlug}${qs ? '?' + qs : ''}`;
    } else {
      // Standard packages page
      const current = new URLSearchParams();
      if (cat !== 'All') current.set('category', cat);
      if (activeLocation) current.set('location', activeLocation);
      if (searchQuery) current.set('query', searchQuery);
      const qs = current.toString();
      return `/packages${qs ? '?' + qs : ''}`;
    }
  };

  const getDestinationFilterUrl = (dest) => {
    if (pageType === 'destination') {
      // Clicking destination in destination page navigates to new destination route
      const targetPath = dest === 'All' ? '/packages' : `/destination/${dest.toLowerCase()}`;
      const current = new URLSearchParams();
      if (activeCategory) current.set('category', activeCategory);
      if (searchQuery) current.set('query', searchQuery);
      const qs = current.toString();
      return `${targetPath}${qs ? '?' + qs : ''}`;
    } else if (pageType === 'category') {
      // Clicking destination in category page filters via query parameter
      const current = new URLSearchParams();
      if (dest !== 'All') current.set('location', dest);
      if (searchQuery) current.set('query', searchQuery);
      const qs = current.toString();
      return `/cayegory/${currentSlug}${qs ? '?' + qs : ''}`;
    } else {
      // Standard packages page
      const current = new URLSearchParams();
      if (activeCategory) current.set('category', activeCategory);
      if (dest !== 'All') current.set('location', dest);
      if (searchQuery) current.set('query', searchQuery);
      const qs = current.toString();
      return `/packages${qs ? '?' + qs : ''}`;
    }
  };

  // URL builder for removing individual active filter tags
  const getRemoveFilterUrl = (typeToRemove) => {
    if (typeToRemove === 'category') {
      if (pageType === 'category') {
        const current = new URLSearchParams();
        if (activeLocation) current.set('location', activeLocation);
        if (searchQuery) current.set('query', searchQuery);
        const qs = current.toString();
        return `/packages${qs ? '?' + qs : ''}`;
      } else {
        const basePathUrl = pageType === 'destination' ? `/destination/${currentSlug}` : '/packages';
        const current = new URLSearchParams();
        if (pageType !== 'destination' && activeLocation) current.set('location', activeLocation);
        if (searchQuery) current.set('query', searchQuery);
        const qs = current.toString();
        return `${basePathUrl}${qs ? '?' + qs : ''}`;
      }
    }
    
    if (typeToRemove === 'location') {
      if (pageType === 'destination') {
        const current = new URLSearchParams();
        if (activeCategory) current.set('category', activeCategory);
        if (searchQuery) current.set('query', searchQuery);
        const qs = current.toString();
        return `/packages${qs ? '?' + qs : ''}`;
      } else {
        const basePathUrl = pageType === 'category' ? `/cayegory/${currentSlug}` : '/packages';
        const current = new URLSearchParams();
        if (pageType !== 'category' && activeCategory) current.set('category', activeCategory);
        if (searchQuery) current.set('query', searchQuery);
        const qs = current.toString();
        return `${basePathUrl}${qs ? '?' + qs : ''}`;
      }
    }

    if (typeToRemove === 'query') {
      const basePathUrl = pageType === 'destination' 
        ? `/destination/${currentSlug}` 
        : (pageType === 'category' ? `/cayegory/${currentSlug}` : '/packages');
      const current = new URLSearchParams();
      if (pageType === 'category') {
        if (activeLocation) current.set('location', activeLocation);
      } else if (pageType === 'destination') {
        if (activeCategory) current.set('category', activeCategory);
      } else {
        if (activeCategory) current.set('category', activeCategory);
        if (activeLocation) current.set('location', activeLocation);
      }
      const qs = current.toString();
      return `${basePathUrl}${qs ? '?' + qs : ''}`;
    }
    
    return basePath;
  };

  const getClearAllFiltersUrl = () => {
    if (pageType === 'destination') return `/destination/${currentSlug}`;
    if (pageType === 'category') return `/cayegory/${currentSlug}`;
    return '/packages';
  };

  // URL builder for bottom pagination
  const getPaginationUrl = (pageNum) => {
    const targetPath = pageType === 'destination' 
      ? `/destination/${currentSlug}` 
      : (pageType === 'category' ? `/cayegory/${currentSlug}` : '/packages');
    
    const current = new URLSearchParams();
    if (pageType === 'category') {
      if (activeLocation) current.set('location', activeLocation);
    } else if (pageType === 'destination') {
      if (activeCategory) current.set('category', activeCategory);
    } else {
      if (activeCategory) current.set('category', activeCategory);
      if (activeLocation) current.set('location', activeLocation);
    }
    if (searchQuery) current.set('query', searchQuery);
    current.set('page', pageNum.toString());
    
    const qs = current.toString();
    return `${targetPath}${qs ? '?' + qs : ''}`;
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layoutGrid} style={{ gridTemplateColumns: showSidebar ? '8fr 3.5fr' : '1fr' }}>
          
          {/* Left Column: Packages Stack */}
          <div className={styles.packagesCol}>
            {hasActiveFilters && (
              <div className={styles.activeFiltersRow}>
                <span className={styles.activeFiltersLabel}>Active Filters:</span>
                <div className={styles.activeFilterTags}>
                  {pageType !== 'category' && activeCategory && activeCategory.toLowerCase() !== 'all' && (
                    <Link href={getRemoveFilterUrl('category')} className={styles.activeFilterTag} title="Click to remove category filter">
                      <span>Category: {activeCategory}</span>
                      <FiX className={styles.removeTagIcon} />
                    </Link>
                  )}
                  {pageType !== 'destination' && activeLocation && activeLocation.toLowerCase() !== 'all' && (
                    <Link href={getRemoveFilterUrl('location')} className={styles.activeFilterTag} title="Click to remove location filter">
                      <span>Location: {activeLocation}</span>
                      <FiX className={styles.removeTagIcon} />
                    </Link>
                  )}
                  {searchQuery && (
                    <Link href={getRemoveFilterUrl('query')} className={styles.activeFilterTag} title="Click to remove search term">
                      <span>Search: &quot;{searchQuery}&quot;</span>
                      <FiX className={styles.removeTagIcon} />
                    </Link>
                  )}
                </div>
                <Link href={getClearAllFiltersUrl()} className={styles.clearBtn}>
                  <FiX /> Clear All
                </Link>
              </div>
            )}

            {paginatedPackages.length > 0 ? (
              <div className={layout === 'grid' ? styles.gridLayout : styles.listLayout}>
                {paginatedPackages.map((pkg) => (
                  layout === 'grid' ? (
                    <div key={pkg.id} className={styles.verticalCard}>
                      <div className={`${styles.verticalImageArea} shineEffect`}>
                        <img src={pkg.image} alt={pkg.title} className={styles.cardImage} />
                        <div className={styles.durationBadge}>
                          {pkg.duration}
                        </div>
                      </div>
                      <div className={styles.verticalContentArea}>
                        <div>
                          <h3 className={styles.verticalTitle}>
                            <Link href={`/package/${pkg.slug}`} className={styles.titleLink}>
                              {pkg.title}
                            </Link>
                          </h3>
                          <div className={styles.metaRow} style={{ gap: '10px', marginBottom: '8px' }}>
                            <div className={styles.metaItem}>
                              <FiMapPin className={styles.metaIcon} />
                              <span style={{ fontSize: '12px' }}>{pkg.location}</span>
                            </div>
                            <div className={styles.metaItem}>
                              <FiStar className={styles.metaIcon} />
                              <span style={{ fontSize: '12px' }}>{pkg.rating}</span>
                            </div>
                          </div>
                          <p className={styles.verticalDescription}>{pkg.description}</p>
                          <div className={styles.tagsRow} style={{ marginBottom: '8px' }}>
                            {pkg.tags.slice(0, 1).map((tag, idx) => (
                              <span key={idx} className={styles.tagPill}>{tag}</span>
                            ))}
                          </div>
                        </div>
                        <div className={styles.verticalActionRow}>
                          <Link href={`/package/${pkg.slug}`} style={{ textDecoration: 'none', flex: 1 }}>
                            <AnimatedButton className={styles.verticalViewDetailsBtn}>
                              Details
                            </AnimatedButton>
                          </Link>
                          <EnquiryTriggerBtn 
                            itemName={pkg.title} 
                            className={styles.verticalEnquiryBtn} 
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div key={pkg.id} className={styles.card}>
                      {/* Left Side: Image Area */}
                      <div className={styles.imageArea}>
                        <img src={pkg.image} alt={pkg.title} className={styles.cardImage} />
                        <div className={styles.durationBadge}>
                          {pkg.duration}
                        </div>
                      </div>

                      {/* Right Side: Content Area */}
                      <div className={styles.contentArea}>
                        <div className={styles.titleRow}>
                          <h3 className={styles.cardTitle}>
                            <Link href={`/package/${pkg.slug}`} className={styles.titleLink}>
                              {pkg.title}
                            </Link>
                          </h3>
                        </div>

                        <div className={styles.metaRow}>
                          <div className={styles.metaItem}>
                            <FiMapPin className={styles.metaIcon} />
                            <span>{pkg.location}</span>
                          </div>
                          <div className={styles.metaItem}>
                            <FiStar className={styles.metaIcon} />
                            <span>{pkg.rating} ({pkg.reviewsCount} reviews)</span>
                          </div>
                        </div>

                        <p className={styles.cardDescription}>{pkg.description}</p>

                        <div className={styles.tagsRow}>
                          {pkg.tags.map((tag, idx) => (
                            <span key={idx} className={styles.tagPill}>{tag}</span>
                          ))}
                        </div>

                        {/* Bottom Action Buttons */}
                        <div className={styles.actionRow}>
                          <Link href={`/package/${pkg.slug}`} style={{ textDecoration: 'none' }}>
                            <AnimatedButton className={styles.viewDetailsBtn}>
                              <FiEye className={styles.btnIcon} /> View Details
                            </AnimatedButton>
                          </Link>

                          <EnquiryTriggerBtn itemName={pkg.title} />
                        </div>
                      </div>
                    </div>
                  )
                ))}
              </div>
            ) : (
              <div className={styles.noPackages}>
                <h4 className={styles.noPackagesTitle}>No Packages Found</h4>
                <p>Try modifying your search or filter options to see more packages.</p>
              </div>
            )}

            {/* Bottom Pagination */}
            {showPagination && !limit && totalPages > 1 && (
              <div className={styles.pagination}>
                <Link 
                  href={getPaginationUrl(currentPage - 1)}
                  className={`${styles.pageLink} ${styles.navLink} ${currentPage === 1 ? styles.disabledLink : ''}`}
                >
                  <FiChevronLeft /> Prev
                </Link>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <Link 
                    key={pageNum}
                    href={getPaginationUrl(pageNum)}
                    className={`${styles.pageLink} ${currentPage === pageNum ? styles.pageLinkActive : ''}`}
                  >
                    {pageNum}
                  </Link>
                ))}

                <Link 
                  href={getPaginationUrl(currentPage + 1)}
                  className={`${styles.pageLink} ${styles.navLink} ${currentPage === totalPages ? styles.disabledLink : ''}`}
                >
                  Next <FiChevronRight />
                </Link>
              </div>
            )}
          </div>

          {/* Right Column: Sidebar */}
          {showSidebar && (
            <div className={styles.sidebarCol}>
              


              {/* Categories Filter Card */}
              <div className={styles.sidebarCard}>
                <h4 className={styles.sidebarTitle}>Tour Categories</h4>
                <ul className={styles.filterList}>
                  {categories.map((cat) => {
                    const isActive = (!activeCategory && cat === 'All') || (activeCategory.toLowerCase() === cat.toLowerCase());
                    return (
                      <li key={cat}>
                        <Link 
                          href={getCategoryFilterUrl(cat)}
                          className={`${styles.filterLink} ${isActive ? styles.filterLinkActive : ''}`}
                        >
                          <span>{cat}</span>
                          <span className={styles.countBadge}>{getCategoryCount(cat)}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Destination Filter Card */}
              <div className={styles.sidebarCard}>
                <h4 className={styles.sidebarTitle}>Destinations</h4>
                <ul className={styles.filterList}>
                  {destinations.map((dest) => {
                    const isActive = (!activeLocation && dest === 'All') || (activeLocation.toLowerCase() === dest.toLowerCase());
                    return (
                      <li key={dest}>
                        <Link 
                          href={getDestinationFilterUrl(dest)}
                          className={`${styles.filterLink} ${isActive ? styles.filterLinkActive : ''}`}
                        >
                          <span>{dest}</span>
                          <span className={styles.countBadge}>{getDestinationCount(dest)}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Need Help Promo Card */}
              <div className={`${styles.sidebarCard} ${styles.promoCard}`}>
                <h4 className={styles.promoTitle}>Need Expert Help?</h4>
                <p className={styles.promoText}>Talk to our travel experts to craft a fully customized vacation itinerary just for you.</p>
                <a href="tel:+919876543210" className={styles.promoPhone}>+91 98765 43210</a>
                <a href="mailto:info@jaganathholidays.com" className={styles.promoEmail}>info@jaganathholidays.com</a>
                <a 
                  href="https://wa.me/919876543210?text=I'm%20interested%20in%20customizing%20a%20tour%20package." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.whatsappBtn}
                >
                  Chat on WhatsApp
                </a>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}
