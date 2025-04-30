export default function Article({ params }) {
    const { slug } = params;
  
    const articlesData = {
      "when-is-the-best-time-of-year-to-visit-japan": {
        title: "When Is The Best Time of Year To Visit Japan?",
        date: "Travels • 8 minutes reading • 26.01.2021",
        content: `
          The good news for travelers is that there is no single best time of year to travel to Japan — yet this makes it difficult to decide when to visit, as each of Japan’s seasons has its own special highlights.
  
          Japan is truly a year-round destination, and travel is memorable in its profound appreciation of the changing of the seasons. As you’ll see when you visit, each season — and even sub-season — is celebrated with seasonal foods, and often matsuri (festivals). Because of this, we highly recommend taking advantage of any chance to visit Japan on the other hand, if you don’t feel free to travel worth thinking about times of year you might enjoy most. After all, some travelers hate the cold — or the heat and humidity of a Japanese summer — while others will do whatever it takes to avoid crowds (when planning a trip to Japan, ask yourself this question: would you rather have better weather, or fewer tourists around?).
  
          Because there is so much to consider, we’ve put together this comprehensive guide on the best time to travel to Japan, including information on the seasons, weather, national holidays to look out for, and more.
        `,
        sections: [
          {
            title: "Japanese Seasons 101: The Basics",
            content: `
              Looking for a summary before you dive into the details? The best time to visit Japan is generally considered to be between March and May, or October and November. However, it depends on your interests and what you’re planning to do during your visit — spring blossoms, and snowboarding.
  
              We’ll dive into much more detail, but to start here’s a brief introduction to Japan’s seasons.
  
              **Summary of Japan Seasons**
              - Spring in Japan is famous for the cherry blossom season, and it’s lovely — and often crowded — from late March to early April. The trees usually bloom in late March or early April, lasting about two weeks, and the weather is mild, with temperatures ranging from 50°F to 68°F (10°C to 20°C).
              - Summer in Japan can be hot and humid, especially in July and August, with temperatures often exceeding 86°F (30°C). It’s a great time for festivals and beach trips.
              - Fall in Japan brings beautiful autumn foliage, typically from mid-September to late November, with pleasant temperatures ranging from 50°F to 68°F (10°C to 20°C).
              - Winter in Japan lasts from December to mid-March, depending on the location. Winters are cold, with temperatures ranging from 32°F to 50°F (0°C to 10°C), and it’s a fantastic time for skiing and snowboarding, especially in the mountains.
            `
          },
          {
            title: "Spring in Japan",
            content: `
              Spring in Japan lasts from mid-March to May, depending on the location. The weather is notoriously fickle, with temperatures ranging from approximately 50°F to 68°F (10°C to 20°C). On some days you may still want a winter coat, while on other days, cherry blossoms might not even need a sweater.
  
              Spring in Japan is most famous season, and is symbolized by the iconic cherry (sakura) blossom. The best time to visit Japan to see cherry blossoms is generally late March or early April, and the trees are in full bloom and the flowers are at their peak for about two weeks. Because of this, we highly recommend taking advantage of any chance to visit Japan while the beauty of the cherry blossoms is in bloom — understandably, whether or not fewer tourists.
            `
          },
          {
            title: "Fall in Japan",
            content: `
              Autumn in Japan lasts from about mid-September to early December, depending on the location. Fall is widely considered to be the most pleasant time of year to visit Japan, with temperatures ranging from approximately 50°F to 68°F (10°C to 20°C).
  
              While autumn technically begins in late September, it’s usually quite warm sometimes even hot this time of year, but with the arrival of October the fall foliage gets underway with beautiful autumn leaves, making October a very popular travel season in Japan. By November, autumn is in full swing, and through to early December when you begin to feel the chill.
            `
          },
          {
            title: "Winter in Japan",
            content: `
              Winter in Japan lasts from December to mid-March, depending on the location. Winters are cold, with temperatures ranging from 32°F to 50°F (0°C to 10°C).
  
              Yes, it can be cold if you go north in the basic time — especially if you plan to experience Japan with fewer tourists around. In the mountains of Japan, snowfall is excellent for planning a trip to Japan — especially if you have been planning a skiing or snowboarding vacation. One of the best parts of visiting Japan in winter is the chance to see the snow monkeys soaking in hot springs.
            `
          }
        ],
        related: [
          { title: "Coventry City Guide Including Coventry Hotels", category: "Guides" },
          { title: "Planning a Trip to Japan in the Time of Covid", category: "Guides" },
          { title: "How to Choose an African Safari (That’s Right for You)", category: "Guides" }
        ]
      },
      "inspiring-moms": {
        title: "Inspiring Moms",
        date: "Stories • 10 minutes reading • 30.04.2025",
        content: `
          Stories of mothers who changed the world.
        `,
        sections: [
          {
            title: "Mother Teresa: A Beacon of Compassion",
            content: `
              Mother Teresa dedicated her life to helping the poor and sick, raising awareness about the plight of the underserved while nurturing a global community of care. Born in 1910 in Skopje, she founded the Missionaries of Charity in Kolkata, India, providing shelter and love to thousands, all while inspiring her followers with her selfless acts. Her legacy as a mother figure to the needy earned her the Nobel Peace Prize in 1979.
            `
          },
          {
            title: "Ann Dunwoody: Breaking Military Barriers",
            content: `
              Ann Dunwoody became the first female four-star general in the U.S. Army, raising a family while shattering glass ceilings in a male-dominated field. Her 37-year career included leading major commands, all while balancing motherhood with a commitment to service and discipline. Her story motivates mothers to pursue ambitious goals with resilience.
            `
          },
          {
            title: "Jane Goodall: A Mother to Primates",
            content: `
              Jane Goodall revolutionized primatology with her chimpanzee research, raising awareness about conservation while nurturing a legacy of environmental care. Starting her work in Tanzania in 1960, she balanced motherhood with fieldwork, inspiring global efforts to protect wildlife. Her dedication continues to influence mothers and conservationists alike.
            `
          },
          {
            title: "Serena Williams: A Champion Mother",
            content: `
              Serena Williams excelled in tennis while raising her daughter, proving that motherhood and athletic greatness can coexist. With 23 Grand Slam titles, she returned to the court after childbirth, inspiring mothers to pursue their passions with determination. Her journey showcases the strength of maternal ambition.
            `
          },
          {
            title: "Michelle Obama: A Voice for Families",
            content: `
              Michelle Obama empowered communities as First Lady, raising her daughters while advocating for health and education. Through initiatives like Let’s Move!, she promoted active lifestyles, balancing motherhood with public service. Her influence continues to uplift mothers globally.
            `
          }
        ],
        related: [
          { title: "A Mother’s Love", category: "Stories" },
          { title: "Healthy Habits for Moms", category: "Health" },
          { title: "A Solo Trek Through the Himalayas", category: "Stories" }
        ]
      }
      // Add more articles as needed
    };
  
    const article = articlesData[slug];
  
    if (!article) return <div>404 - Article not found</div>;
  
    return (
      <div style={{ minHeight: '100vh', background: '#fff', fontFamily: 'Arial, sans-serif' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', textAlign: 'left' }}>
          {/* Header */}
          <div style={{ position: 'relative', height: '300px', background: '#e5e7eb', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="100" height="100" viewBox="0 0 24 24" fill="#9ca3af" stroke="#9ca3af" strokeWidth="1">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
          </div>
  
          {/* Article Title and Meta */}
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#000', marginBottom: '10px' }}>{article.title}</h1>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>{article.date}</p>
          <div style={{ fontSize: '16px', color: '#666', marginBottom: '20px' }}>{article.content}</div>
  
          {/* Sections */}
          {article.sections.map((section, index) => (
            <div key={index} style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#000', marginBottom: '10px' }}>{section.title}</h2>
              <div style={{ fontSize: '16px', color: '#666', marginBottom: '20px' }}>{section.content}</div>
              <div style={{ height: '200px', background: '#e5e7eb', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="100" height="100" viewBox="0 0 24 24" fill="#9ca3af" stroke="#9ca3af" strokeWidth="1">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </div>
            </div>
          ))}
  
          {/* Related Articles */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#000', marginBottom: '20px' }}>Interesting Articles to Read</h2>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              {article.related.map((related, index) => (
                <div key={index} style={{ width: '250px', background: '#fff', border: '1px solid #e5e7eb', padding: '20px' }}>
                  <div style={{ height: '150px', background: '#e5e7eb', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="#9ca3af" stroke="#9ca3af" strokeWidth="1">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#000', marginBottom: '10px' }}>{related.title}</h3>
                  <p style={{ fontSize: '14px', color: '#666' }}>#{related.category}</p>
                  <a href="#" style={{ display: 'inline-block', padding: '8px 16px', background: '#000', color: '#fff', textDecoration: 'none', fontSize: '14px', borderRadius: '4px', marginTop: '10px' }}>Read more</a>
                </div>
              ))}
            </div>
          </div>
  
          {/* Footer */}
          <div style={{ textAlign: 'center', paddingTop: '40px', borderTop: '1px solid #ccc', color: '#999', marginTop: '40px' }}>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ width: '80px', height: '80px', background: '#4b5563', margin: '0 auto 16px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#fff" stroke="#fff" strokeWidth="2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </div>
              <p style={{ fontSize: '14px' }}>Follow me on Instagram</p>
              <a href="#" style={{ color: '#3b82f6', textDecoration: 'none' }}>@personaltravel</a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '20px' }}>
              {Array(5).fill().map((_, index) => (
                <div key={index} style={{ width: '120px', height: '120px', background: '#e5e7eb', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="#9ca3af" stroke="#9ca3af" strokeWidth="2">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '14px', marginBottom: '10px' }}>Personal Travel</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Home</a>
              <a href="#" style={{ color: '#999', textDecoration: 'none' }}>About</a>
              <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Categories</a>
              <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Contact</a>
            </div>
          </div>
        </div>
      </div>
    );
  }