# Owls in Water - Official Website

A Next.js music band website with playlist player, photo gallery, and band information.

## 🎵 Features

- **Music Player**: Full playlist support with play/pause, skip, shuffle, repeat, volume control
- **Photo Gallery**: Masonry-style grid with lightbox viewer
- **About Page**: Band story, philosophy, and latest updates
- **Responsive Design**: Mobile-first, works on all devices
- **Dark Theme**: Moody, atmospheric design matching the band aesthetic

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with nav/footer
│   ├── page.tsx        # Home/landing page
│   ├── music/page.tsx  # Music player page
│   ├── photos/page.tsx # Photo gallery page
│   └── about/page.tsx  # Band bio & updates
├── components/
│   ├── Navigation.tsx  # Header navigation
│   └── Footer.tsx      # Site footer
└── data/
    ├── tracks.ts       # Music track data
    └── photos.ts       # Photo gallery data
```

## ☁️ AWS Deployment with Amplify Hosting

### Step 1: Create S3 Bucket for Media

```bash
# Create bucket
aws s3 mb s3://owlsinwater-media --region us-east-2

# Set CORS for audio playback
aws s3api put-bucket-cors --bucket owlsinwater-media --cors-configuration '{
  "CORSRules": [
    {
      "AllowedOrigins": ["https://owlsinwater.com", "http://localhost:3000"],
      "AllowedMethods": ["GET", "HEAD"],
      "AllowedHeaders": ["*"],
      "MaxAgeSeconds": 3600
    }
  ]
}'

# Upload media files
aws s3 sync ./media s3://owlsinwater-media/
```

### Step 2: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/owls-in-water-site.git
git push -u origin main
```

### Step 3: Connect to Amplify Hosting

1. Go to AWS Console → Amplify
2. Click "New app" → "Host web app"
3. Select GitHub and authorize
4. Choose your repository
5. Amplify auto-detects Next.js settings
6. Click "Save and deploy"

### Step 4: Add Custom Domain

1. In Amplify Console → Domain management
2. Add domain: `owlsinwater.com`
3. Update DNS in your domain registrar:
   - Add CNAME record pointing to Amplify URL
   - Or transfer nameservers to Route 53

### Step 5: Configure Route 53 (if using)

```bash
# Create hosted zone
aws route53 create-hosted-zone --name owlsinwater.com --caller-reference $(date +%s)

# Add A record (alias to Amplify)
# Use the Amplify CloudFront distribution
```

## 🎨 Customization

### Update Track List
Edit `src/data/tracks.ts` with your actual songs:

```typescript
export const tracks: Track[] = [
  {
    id: '1',
    title: 'Your Song Title',
    artist: 'Owls in Water',
    duration: '4:23',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/audio/your-song.mp3',
  },
  // ...
]
```

### Update Photos
Edit `src/data/photos.ts` with your actual images:

```typescript
export const photos: Photo[] = [
  {
    id: '1',
    title: 'Photo Title',
    caption: 'Optional caption',
    src: 'https://owlsinwater-media.s3.us-east-2.amazonaws.com/images/your-photo.jpg',
  },
  // ...
]
```

### Color Theme
Edit `tailwind.config.js` to adjust the color palette:

```javascript
colors: {
  owl: {
    dark: '#0a0a0f',     // Background
    midnight: '#12121a', // Secondary bg
    water: '#4a6fa5',    // Primary accent
    glow: '#7eb8da',     // Highlight
  }
}
```

## 🔐 Optional: Add Authentication

To add login/signup using your existing Cognito pool:

```bash
npm install aws-amplify @aws-amplify/ui-react
```

Then configure Amplify with your existing user pool credentials.

## 📝 Environment Variables

Create `.env.local` for local development:

```
NEXT_PUBLIC_S3_BUCKET=owlsinwater-media
NEXT_PUBLIC_AWS_REGION=us-east-2
```

For Amplify, add these in the Console under "Environment variables".

---

Built with Next.js 14, Tailwind CSS, and deployed on AWS Amplify.
