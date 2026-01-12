
import { Scenario, ScenarioType, MarketingVideo, Branch, ComparisonLink } from './types';

export const FURNISHING_COST_PER_UNIT = 50250;
export const MABAAT_SHARE_PERCENTAGE = 0.25;
export const COMP_SET_SHEET_URL = "https://docs.google.com/spreadsheets/d/1qpz5XSqgJpHx7WrRuPAgqmRgnkwdKS0vh1nVJXlv1dA/edit?usp=sharing";

export const SCENARIOS: Scenario[] = [
  {
    id: 'coliving_strategy',
    type: ScenarioType.LONG_TERM,
    name: 'Al Nada Coliving Strategy',
    color: '#2A5B64', // Teal
    description: 'Conversion of 28 apartments into a high-yield Coliving Community. Mix includes 24x 1BRs converted to dual-master units, 3x 2BRs converted to mixed suites, and 1x dedicated female unit.',
    
    financials: {
        worst: {
            // (24 * 2 * 3700) + (1 * 6200) + (3 * (3700 + 2900 + 2900))
            // 177,600 + 6,200 + 28,500 = 212,300 * 12
            revenue: 2547600, 
            mabaatShare: 0, // Calculated dynamically in App
            netIncome: 0,   // Calculated dynamically in App
            roi: 0
        },
        base: {
             // (24 * 2 * 4000) + (1 * 6500) + (3 * (4000 + 3000 + 3000))
             // 192,000 + 6,500 + 30,000 = 228,500 * 12
            revenue: 2742000, 
            mabaatShare: 0, 
            netIncome: 0, 
            roi: 0
        },
        best: {
             // (24 * 2 * 4200) + (1 * 6800) + (3 * (4200 + 3250 + 3250))
             // 201,600 + 6,800 + 32,100 = 240,500 * 12
            revenue: 2886000, 
            mabaatShare: 0, 
            netIncome: 0, 
            roi: 0
        }
    },

    propertyValue: 0, 
    
    unitCount: 28, // 25 1BR + 3 2BR
    unitLabel: 'Units',
    occupancyDurationLabel: 'Flexible Contracts',
    
    unitMix: [
        { 
            name: 'Converted 1BR (2 Masters)', 
            count: 24, 
            avgPrice: 8000, // 4000 * 2
            priceRange: { 
                min: 7400, // 3700 * 2
                avg: 8000, 
                max: 8400  // 4200 * 2
            }, 
        },
        { 
            name: 'Converted 2BR (1 Master + 2 Singles)', 
            count: 3, 
            avgPrice: 10000, // 4000 + (3000 * 2)
            priceRange: { 
                min: 9500, // 3700 + (2900 * 2)
                avg: 10000, 
                max: 10700  // 4200 + (3250 * 2)
            }, 
        },
        { 
            name: 'Female 1BR (Private)', 
            count: 1, 
            avgPrice: 6500, 
            priceRange: { 
                min: 6200, 
                avg: 6500, 
                max: 6800 
            }, 
        }
    ],
  }
];

export const MARKETING_VIDEOS: MarketingVideo[] = [
    {
        id: 'v1',
        title: 'Community Overview',
        thumbnailUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
        videoUrl: 'https://drive.google.com/file/d/1u6i_7MN74iogQP0qwdS9o2GYOHtWTZA4/view?usp=sharing',
    },
    {
        id: 'v2',
        title: 'Interior Walkthrough',
        thumbnailUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
        videoUrl: 'https://drive.google.com/file/d/1dO3W-8IX8JultVN768H1hyxVVmxC4F2I/view?usp=sharing',
    }
];

export const COMPARISON_LINKS: Record<string, ComparisonLink[]> = {
  coliving_strategy: [
    {
        title: "Room in Shared Apartment - Al Nada",
        platform: "Bayut",
        url: "#",
        location: "Al Nada",
        type: "Room",
        price: 3500,
        period: "/mo"
    },
    {
        title: "Studio for Rent - Al Nada",
        platform: "Aqar",
        url: "#",
        location: "Al Nada",
        type: "Studio",
        price: 4500,
        period: "/mo"
    }
  ]
};

export const BRANCHES: Branch[] = [];
