const fs = require('fs');
const path = require('path');

console.log('Optimizing video preloading for production...');

// Path to the build directory
const buildDir = path.join(__dirname, 'build');

// Find all HTML files
const findHtmlFiles = (dir, fileList = []) => {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (path.extname(file) === '.html') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
};

// Process HTML files to add preload hints for videos
const processHtmlFiles = (htmlFiles) => {
  htmlFiles.forEach(filePath => {
    let html = fs.readFileSync(filePath, 'utf8');
    
    // Find all video sources
    const videoSources = html.match(/<source\s+src="([^"]+)"\s+type="video\/[^"]+"/g) || [];
    const videoUrls = videoSources.map(source => {
      const match = source.match(/src="([^"]+)"/);
      return match ? match[1] : null;
    }).filter(Boolean);
    
    // Add preload links in the head
    if (videoUrls.length > 0) {
      const preloadLinks = videoUrls.map(url => 
        `<link rel="preload" href="${url}" as="video" type="${url.endsWith('.mp4') ? 'video/mp4' : 'video/webm'}" media="(prefers-reduced-motion: no-preference)">`
      ).join('\n');
      
      // Insert preload links before </head>
      html = html.replace('</head>', `${preloadLinks}\n</head>`);
      
      // Write the modified HTML back
      fs.writeFileSync(filePath, html);
      console.log(`Added preload hints for videos in ${path.basename(filePath)}`);
    }
  });
};

// Execute the optimization
try {
  const htmlFiles = findHtmlFiles(buildDir);
  processHtmlFiles(htmlFiles);
  console.log('Video preloading optimization complete!');
} catch (error) {
  console.error('Error optimizing videos:', error);
  process.exit(1);
} 