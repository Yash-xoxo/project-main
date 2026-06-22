# Adding Project Images & Demo Links

## Overview

Your portfolio website now includes:
- **Image Carousel**: Beautiful sliding photo gallery for each project (positioned between Key Metrics and Technology Stack)
- **Deploy/Demo Button**: Golden button on each project card that links to live demos
- **Landing Page Cards**: Each project card has a golden demo button on the right side

## Adding Images to Projects

### Step 1: Create Your Image Folder

Organize your project screenshots in folders inside `public/projects/`:

```
public/projects/
├── proxmox-infrastructure/
│   ├── 1.png
│   ├── 2.png
│   └── 3.png
├── n8n-workflow-engine/
│   ├── 1.png
│   ├── 2.png
│   └── 3.png
├── containerized-travel-platform/
│   ├── 1.png
│   └── 2.png
├── kubernetes-cluster/
│   ├── 1.png
│   ├── 2.png
│   └── 3.png
├── cicd-pipeline/
│   ├── 1.png
│   └── 2.png
└── offline-ai-ecosystem/
    ├── 1.png
    └── 2.png
```

### Step 2: Update `lib/projects.ts`

For each project, add the `images` array with paths to your screenshots:

```typescript
{
  id: "1",
  slug: "proxmox-infrastructure",
  title: "Proxmox Virtualization Infrastructure",
  // ... other existing fields ...
  
  // ADD THESE LINES:
  images: [
    "/projects/proxmox-infrastructure/1.png",
    "/projects/proxmox-infrastructure/2.png",
    "/projects/proxmox-infrastructure/3.png",
  ],
  demoUrl: "https://your-demo-link.com", // or your GitHub repo URL
}
```

### Step 3: Update All 6 Projects

Find each project in `lib/projects.ts` and add the `images` array and `demoUrl`:

**Project 1**: Proxmox Virtualization Infrastructure (`proxmox-infrastructure`)
**Project 2**: n8n-Driven AI Workflow Engine (`n8n-workflow-engine`)
**Project 3**: Containerized Full-Stack Travel Platform (`containerized-travel-platform`)
**Project 4**: Kubernetes Auto-Scaling Web Cluster (`kubernetes-cluster`)
**Project 5**: CI/CD Pipeline for Python Microservices (`cicd-pipeline`)
**Project 6**: Offline AI Model Ecosystem (`offline-ai-ecosystem`)

## Image Guidelines

### Recommended Specifications
- **Format**: PNG, JPG, or WebP
- **Aspect Ratio**: 16:9 (1920x1080, 1600x900, etc.) for best appearance
- **File Size**: 100-300KB per image (optimize for web)
- **Minimum Images**: 1 per project
- **Recommended**: 2-4 screenshots per project

### Naming Convention
Use simple numbers: `1.png`, `2.png`, `3.png`, etc.

## Demo Button Configuration

### On Landing Page
Each project card shows a golden **demo button** on the right side. It points to the `demoUrl` specified in the project data.

### On Project Detail Page
The demo button appears between Key Metrics and the carousel gallery.

### Setting the URL

```typescript
// Option 1: Link to live demo
demoUrl: "https://your-live-demo.com"

// Option 2: Link to GitHub repository
demoUrl: "https://github.com/your-username/repo-name"

// Option 3: Link to Google (default if not specified)
demoUrl: "#"  // Will link to www.google.com
```

## How the Carousel Works

Once you add images to the `images` array:
1. Images appear in a beautiful sliding carousel
2. User can navigate with **Previous/Next buttons**
3. Click on **thumbnail dots** for quick navigation
4. **Image counter** shows current position (e.g., "1 / 3")
5. **Smooth animations** on all transitions
6. **Responsive** - works on mobile, tablet, and desktop

## Troubleshooting

### Images Not Showing?
1. Check file paths are correct in `images` array
2. Verify image files exist in `public/projects/[project-folder]/`
3. Restart the dev server: `pnpm dev`
4. Clear browser cache

### Demo Button Not Working?
1. Verify `demoUrl` is set correctly
2. Check the URL is valid (should start with `https://`)
3. If using `#`, it will default to www.google.com

### Carousel Not Appearing?
1. Make sure `images` array is not empty
2. Verify image paths are correct
3. Check browser console for errors

## File Structure Example

After adding all your project images, your structure should look like:

```
public/
├── projects/
│   ├── proxmox-infrastructure/
│   │   ├── 1.png
│   │   ├── 2.png
│   │   └── 3.png
│   ├── n8n-workflow-engine/
│   │   ├── 1.png
│   │   ├── 2.png
│   │   └── 3.png
│   └── ... (other projects)
```

Once files are in place, update `lib/projects.ts` with the paths and your carousel will be live!
