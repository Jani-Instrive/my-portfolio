# Dashboard Application

## Overview
This is a pixel-perfect, responsive dashboard application built with React, Material-UI, and TypeScript based on the Minimals dashboard design.

## Features

### 🔑 Authentication
- Login page with dummy credentials
- Protected routes with proper authentication flow
- Credentials: `admin@example.com` / `password`

### 🎨 Layout & Design
- **Responsive sidebar** with expandable/collapsed states
- **Clean header** with search, notifications, and profile menu
- **Profile drawer** that slides from the right
- **Beautiful login page** with modern glass morphism design

### 📱 Responsive Design
- Fully responsive across mobile, tablet, and desktop
- Mobile-first approach with proper breakpoints
- Adaptive sidebar behavior (persistent on desktop, temporary on mobile)

### 🗂️ Navigation Structure
```
OVERVIEW
├── App (Dashboard)
├── Ecommerce
├── Analytics
├── Banking
├── Booking
├── File
└── Course

MANAGEMENT
├── User
│   ├── Profile
│   ├── Cards
│   ├── List
│   ├── Create
│   ├── Edit
│   └── Account
├── Product
├── Order
├── Invoice
├── Blog
└── Job

MISC
├── Calendar
├── Kanban
└── Permission
```

### 🛠️ Technical Implementation

#### Folder Structure
```
src/
├── layout/                 # Layout components
│   ├── DashboardHeader.tsx  # Top header with search & profile
│   ├── DashboardLayout.tsx  # Main layout wrapper
│   ├── ProfileDrawer.tsx    # Right side profile panel
│   └── Sidebar.tsx          # Left navigation sidebar
├── content/                 # Dashboard pages
│   ├── Dashboard.tsx        # Main dashboard page
│   ├── Profile.tsx          # User profile page
│   ├── Permission.tsx       # Permission management
│   └── [Other pages...]
├── router/                  # Routing logic
│   ├── AdminRoutes.tsx      # Protected dashboard routes
│   ├── PublicRoutes.tsx     # Login route
│   └── DashboardRouter.tsx  # Main router component
├── context/                 # Authentication context
│   ├── DashboardAuthContext.tsx
│   └── useDashboardAuth.ts
└── pages/
    └── DashboardLoginPage.tsx
```

#### Key Components

**Sidebar Features:**
- Hierarchical menu with proper nesting and connection lines
- Active route highlighting
- Smooth expand/collapse animations
- Visual hierarchy with section headers

**Header Features:**
- Global search functionality
- Notification badges
- Language switcher
- Settings access
- Profile avatar with dropdown

**Profile Drawer:**
- User information display
- Avatar selection
- Quick navigation menu
- Logout functionality

## 🚀 Getting Started

### Access the Dashboard
1. **From Portfolio**: Click the "Dashboard" button in the main portfolio header
2. **Direct Access**: Navigate to `/dashboard/login`

### Login Credentials
```
Email: admin@example.com
Password: password
```

### Navigation
- Click on any sidebar item to navigate
- Use the profile avatar to access the profile drawer
- Mobile users can use the hamburger menu

## 🎯 Design Highlights

### Visual Hierarchy
- Clear section groupings with CAPS headers
- Consistent spacing and typography
- Proper visual feedback for interactions

### User Experience
- Smooth animations and transitions
- Intuitive navigation patterns
- Responsive design that works on all devices

### Modern UI Elements
- Glass morphism effects on login page
- Subtle shadows and borders
- Professional color scheme
- Material Design principles

## 📊 Dashboard Content

The main dashboard includes:
- **Hero cards** with congratulations message and featured content
- **Statistics cards** showing key metrics with trend indicators
- **Chart placeholders** for sales data and analytics
- **Responsive grid layout** that adapts to screen size

All pages are fully functional with proper routing and can be extended with actual business logic and data integration.

## 🔧 Technology Stack
- React 18 with TypeScript
- Material-UI (MUI) for components
- React Router for navigation
- Context API for state management
- Responsive design with CSS-in-JS
