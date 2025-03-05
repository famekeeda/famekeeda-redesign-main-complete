// Function to fetch data from Payload CMS
async function fetchSectionContent() {
  try {
    // Fetch data from Payload CMS API
    const response = await fetch(
      "https://cms.famekeeda.com/api/pages?title=Home"
    );
    const data = await response.json();

    if (data.docs.length > 0) {
      const pageContent = data.docs[0]; // Get the Home page content

      // Find the section we need
      const sectionData = pageContent.layout.find(
        (block) =>
          block.blockName ===
          "Explore India's Top Influencer Marketing Agency - Section"
      );

      if (sectionData) {
        updateSectionContent(sectionData);
      }
    }
  } catch (error) {
    console.error("Error fetching content:", error);
  }
}

// Section to Update First Section - Explor Indias Top Influencers
function updateSectionContent(sectionData) {
  // Select the elements in your HTML where you want to insert content
  const titleElement = document.getElementById("explore");
  const subtitleElement = document.getElementById("explore-gradient-text"); 
  const paragraphElement = document.getElementById("agency-para");

  // Extract the rich text content from the API response
  const richText = sectionData.columns[0].richText.root.children;

  // Find all paragraphs
  const paragraphs = richText.filter((item) => item.type === "paragraph");

  if (paragraphs.length >= 2) {
    // ✅ Update only the text before <span>, keeping the structure intact
    if (titleElement && paragraphs[0].children.length > 0) {
      titleElement.firstChild.textContent =
        paragraphs[0].children[0].text; // Preserve space
    }

    // ✅ Second paragraph -> "Aakash Rathod" (Now updating class "slider-subtitle")
    if (subtitleElement && paragraphs[1].children.length > 0) {
      subtitleElement.textContent = paragraphs[1].children[0].text;
    }
  } else {
    console.warn("Not enough paragraphs found in API response.");
  }

  // ✅ Third paragraph (Main content)
  if (paragraphs.length >= 3 && paragraphElement) {
    paragraphElement.textContent = paragraphs[2].children[0].text;
    console.log(
      "Updated .influencer-agency-paragraph:",
      paragraphs[2].children[0].text
    );
  }
}

// Run the function when the page loads
document.addEventListener("DOMContentLoaded", fetchSectionContent);
