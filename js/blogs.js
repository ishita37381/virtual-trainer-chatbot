
  // blogs.js

// Array of articles with title, description, and link
// const articles = [
//     {
//       title: "The Benefits of Regular Exercise",
//       description: "Learn how regular exercise can improve your physical and mental health.",
//       link: "https://www.healthsite.com/benefits-of-regular-exercise"
//     },
//     {
//       title: "Healthy Eating: Tips and Tricks",
//       description: "Find out how to maintain a balanced diet for a healthy lifestyle.",
//       link: "https://www.nutrition.org/healthy-eating-tips"
//     },
//     {
//       title: "Stress Management Techniques",
//       description: "Discover effective techniques to manage stress and improve well-being.",
//       link: "https://www.mindfulnesscenter.org/stress-management"
//     },
//     {
//       title: "Understanding Mental Health",
//       description: "An introduction to mental health, common issues, and ways to seek help.",
//       link: "https://www.mentalhealthfoundation.org/understanding-mental-health"
//     },
//     {
//       title: "Building Healthy Sleep Habits",
//       description: "Explore tips on how to get quality sleep and its impact on health.",
//       link: "https://www.sleepfoundation.org/healthy-sleep-habits"
//     }
//   ];
  
//   // Function to populate articles on the page
//   function displayArticles() {
//     const container = document.getElementById("blogs-container");
//     articles.forEach((article) => {
//       // Create article card
//       const card = document.createElement("div");
//       card.classList.add("blog-card");
  
//       // Article title
//       const title = document.createElement("h3");
//       title.textContent = article.title;
  
//       // Article description
//       const description = document.createElement("p");
//       description.textContent = article.description;
  
//       // Article link
//       const link = document.createElement("a");
//       link.href = article.link;
//       link.target = "_blank";
//       link.textContent = "Read more";
  
//       // Append elements to card
//       card.appendChild(title);
//       card.appendChild(description);
//       card.appendChild(link);
  
//       // Append card to container
//       container.appendChild(card);
//     });
//   }
  
//   // Call function to display articles on page load
//   window.onload = displayArticles;
  

// blogs.js

const articles = [
    {
      title: "The Benefits of Regular Exercise",
      description: "Learn how regular exercise can improve your physical and mental health.",
      link: "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20048389"
    },
    {
      title: "Healthy Eating: Tips and Tricks",
      description: "Find out how to maintain a balanced diet for a healthy lifestyle.",
      link: "https://www.cdc.gov/nccdphp/dnpao/features/healthy-eating-tips/index.html"
    },
    {
      title: "Stress Management Techniques",
      description: "Discover effective techniques to manage stress and improve well-being.",
      link: "https://www.webmd.com/balance/stress-management/stress-management"
    },
    {
      title: "Understanding Mental Health",
      description: "An introduction to mental health, common issues, and ways to seek help.",
      link: "https://www.un.org/en/healthy-workforce/files/Understanding%20Mental%20Health.pdf"
    },
    {
      title: "Building Healthy Sleep Habits",
      description: "Explore tips on how to get quality sleep and its impact on health.",
      link: "https://www.poweroverpd.org/sleephygiene?gad_source=1&gclid=Cj0KCQiA88a5BhDPARIsAFj595h4TkkaSdGjloTnqxYX-JpcLaRbw8Z5CGH4Lyyod-z-jTsByRztWDUaAlH4EALw_wcB"
    }
  ];
  
  function displayArticles() {
    const container = document.getElementById("blogs-container");
    articles.forEach((article) => {
      const card = document.createElement("div");
      card.classList.add("blog-card");
  
      const title = document.createElement("h3");
      title.textContent = article.title;
  
      const description = document.createElement("p");
      description.textContent = article.description;
  
      const link = document.createElement("a");
      link.href = article.link;
      link.target = "_blank"; // Opens link in a new tab
      link.rel = "noopener noreferrer"; // Adds security for external links
      link.textContent = "Read more";
  
      card.appendChild(title);
      card.appendChild(description);
      card.appendChild(link);
  
      container.appendChild(card);
    });
  }
  
  window.onload = displayArticles;
  